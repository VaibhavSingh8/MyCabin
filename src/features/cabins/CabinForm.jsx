import React, { useState } from "react";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin, uploadImage } from "../../services/apiCabins";
import toast from "react-hot-toast";

const CabinForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const queryClient = useQueryClient();

  const [fileId, setFileId] = useState(null); // State to store the uploaded file ID
  const [isImageUploading, setIsImageUploading] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      //invalidate the cache to refetch the data from the server
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const handleUpload = async () => {
    try {
      setIsImageUploading(true);
      const imageFile = document.getElementById("image").files[0];

      const uploadedFileId = await uploadImage(imageFile);

      setFileId(uploadedFileId);
      setIsImageUploading(false);
      toast.success("Image uploaded successfully");
    } catch (error) {
      setIsImageUploading(false);
      toast.error("Failed to upload image");
    }
  };

  const onSubmit = (cabinData) => {
    // Check if the image input is blank and set its value to null
    if (cabinData.image === "") {
      cabinData.image = null;
    }

    if (fileId) {
      cabinData.image = fileId;
    }

    cabinData.maxCapacity = parseInt(cabinData.maxCapacity);
    cabinData.discount = parseInt(cabinData.discount);
    cabinData.regularPrice = parseInt(cabinData.regularPrice);

    mutate(cabinData);
  };

  return (
    <>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Cabin name"
          type="text"
          name="cabinName"
          id="cabinName"
          disabled={isPending}
          error={errors?.name?.message}
          {...register("name", { required: "Cabin name is required" })}
        />
        <Input
          label="Maximum capacity"
          type="number"
          name="maxCapacity"
          id="maxCapacity"
          disabled={isPending}
          error={errors?.maxCapacity?.message}
          {...register("maxCapacity", {
            required: "Maximum capacity is required",
            min: 1,
            message: "Capacity must be greater than 0",
          })}
        />
        <Input
          label="Regular price"
          type="number"
          name="regularPrice"
          id="regularPrice"
          disabled={isPending}
          error={errors?.regularPrice?.message}
          {...register("regularPrice", {
            required: "Regular price is required",
            min: {
              value: 1,
              message: "Price must be greater than 0",
            },
          })}
        />
        <Input
          label="Discount"
          type="number"
          name="discount"
          id="discount"
          disabled={isPending}
          error={errors?.discount?.message}
          {...register("discount", {
            validate: (value) =>
              value <= getValues("regularPrice") ||
              "Discount must be less than or equal to regular price",
          })}
        />
        <Input
          label="Description"
          type="text"
          name="description"
          id="description"
          disabled={isPending}
          error={errors?.description?.message}
          {...register("description", { required: "Description is required" })}
        />
        <Input
          label="Cabin Image"
          type="file"
          name="image"
          accept="image/*"
          id="image"
          disabled={isPending}
          error={errors.image?.message}
          {...register("image")}
        />

        <div className="flex items-center justify-center gap-8">
          <Button
            type="button"
            onClick={handleUpload}
            disabled={isImageUploading || isPending}
          >
            {isImageUploading ? "Uploading..." : "Upload Image"}
          </Button>
          <Button type="reset">Cancel</Button>
          <Button disabled={isImageUploading || isPending}>Submit</Button>
        </div>
      </form>
    </>
  );
};

export default CabinForm;
