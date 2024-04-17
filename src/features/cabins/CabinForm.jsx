import React, { useState } from "react";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

const CabinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [cabinName, setCabinName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1000);
  const [discount, setDiscount] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(0);
  const [image, setImage] = useState(undefined);

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Cabin name"
        type="text"
        name="cabinName"
        value={cabinName}
        onChange={(value) => setCabinName(value)}
        error={errors.cabinName?.message}
        register={register("cabinName", { required: "Cabin name is required" })}
      />

      <Input
        label="Maximum capacity"
        type="number"
        name="maxCapacity"
        value={maxCapacity}
        onChange={(value) => setMaxCapacity(value)}
        error={errors.maxCapacity?.message}
        register={register("maxCapacity", {
          required: "Maximum Capacity is required",
        })}
      />

      <Input
        label="Regular price"
        type="number"
        name="price"
        value={price}
        onChange={(value) => setPrice(value)}
        error={errors.price?.message}
        register={register("price", { required: "Price is required" })}
      />

      <Input
        label="Discount"
        type="number"
        name="discount"
        value={discount}
        onChange={(value) => setDiscount(value)}
        error={errors.discount?.message}
        register={register("discount")}
      />

      <Input
        label="Description"
        type="text"
        name="description"
        value={description}
        onChange={(value) => setDescription(value)}
        error={errors.description?.message}
        register={register("description")}
      />

      <Input
        label="Cabin Image"
        type="file"
        name="image"
        value={image}
        onChange={(file) => setImage(file)}
        error={errors.image?.message}
        register={register("image")}
      />
      <div className="flex items-center justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CabinForm;
