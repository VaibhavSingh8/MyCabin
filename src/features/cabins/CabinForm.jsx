import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { uploadImage } from "../../services/apiCabins";
import useCreateCabin from "./useCreateCabin";
import Form from "../../components/Form";

const CabinForm = ({ onModalClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const [fileId, setFileId] = useState(null);
  const [isImageUploading, setIsImageUploading] = useState(false);

  const { createCabin, isCreating } = useCreateCabin();

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
    if (cabinData.image === "") {
      cabinData.image = null;
    }

    if (fileId) {
      cabinData.image = fileId;
    }

    cabinData.maxCapacity = parseInt(cabinData.maxCapacity);
    cabinData.discount = parseInt(cabinData.discount);
    cabinData.regularPrice = parseInt(cabinData.regularPrice);

    createCabin(cabinData, {
      onSuccess: (data) => {
        reset();
        onModalClose?.();
      },
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onModalClose ? "modal" : "regular"}
    >
      <Input
        label="Cabin name"
        type="text"
        name="cabinName"
        id="cabinName"
        disabled={isCreating}
        error={errors?.name?.message}
        {...register("name", { required: "Cabin name is required" })}
      />
      <Input
        label="Maximum capacity"
        type="number"
        name="maxCapacity"
        id="maxCapacity"
        disabled={isCreating}
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
        disabled={isCreating}
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
        disabled={isCreating}
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
        disabled={isCreating}
        error={errors?.description?.message}
        {...register("description", { required: "Description is required" })}
      />
      <Input
        label="Cabin Image"
        type="file"
        name="image"
        accept="image/*"
        id="image"
        className="border-none"
        disabled={isCreating}
        error={errors.image?.message}
        {...register("image", { required: "Image is required" })}
      />

      <div className="flex items-center justify-center gap-8">
        <Button
          type="button"
          onClick={handleUpload}
          disabled={isImageUploading || isCreating}
        >
          {isImageUploading ? "Uploading..." : "Upload Image"}
        </Button>
        <Button type="reset" onClick={() => onModalClose?.()}>
          Cancel
        </Button>
        <Button disabled={isImageUploading || isCreating}>Submit</Button>
      </div>
    </Form>
  );
};

export default CabinForm;
