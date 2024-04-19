import React from "react";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const CabinForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

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

  const onSubmit = (cabinData) => {
    // Check if the image input is blank and set its value to null
    if (cabinData.image === "") {
      cabinData.image = null;
    }

    cabinData.maxCapacity = parseInt(cabinData.maxCapacity);
    cabinData.discount = parseInt(cabinData.discount);
    cabinData.regularPrice = parseInt(cabinData.regularPrice);

    mutate(cabinData);
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Cabin name"
        type="text"
        name="cabinName"
        id="cabinName"
        error={errors.cabinName?.message}
        {...register("name", { required: "Cabin name is required" })}
      />
      <Input
        label="Maximum capacity"
        type="number"
        name="maxCapacity"
        id="maxCapacity"
        error={errors.maxCapacity?.message}
        {...register("maxCapacity", {
          required: "Maximum capacity is required",
          min: 1,
          max: 7,
        })}
      />
      <Input
        label="Regular price"
        type="number"
        name="regularPrice"
        id="regularPrice"
        error={errors.price?.message}
        {...register("regularPrice", {
          required: "Regular price is required",
          min: 0,
        })}
      />
      <Input
        label="Discount"
        type="number"
        name="discount"
        id="discount"
        error={errors.discount?.message}
        {...register("discount", { value: 0 })}
      />
      <Input
        label="Description"
        type="text"
        name="description"
        id="description"
        error={errors.description?.message}
        {...register("description")}
      />
      <Input
        label="Cabin Image"
        type="url"
        name="image"
        id="image"
        error={errors.image?.message}
        {...register("image")}
      />

      <div className="flex items-center justify-center gap-8">
        <Button type="reset">Cancel</Button>
        <Button disabled={isPending}>Submit</Button>
      </div>
    </form>
  );
};

export default CabinForm;
