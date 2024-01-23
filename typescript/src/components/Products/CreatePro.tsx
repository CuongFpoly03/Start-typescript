/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createPro } from '../../services/product';

const CreatePro: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    // Example of using setValue to pre-fill the "name" field with a default value
    setValue("name", "Default Product Name");
  }, [setValue]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      await createPro(data);
      console.log("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label> <br />
          <input
            type="text"
            placeholder="name..."
            {...register("name", { required: true })}
            className="tw-border-solid tw-border-2 tw-border-blue-800 tw-my-2"
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label><br />
          <input
            type="number"
            placeholder="number..."
            {...register("price", { required: true })}
            className="tw-border-solid tw-border-2 tw-border-blue-800 tw-my-2"
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label><br />
          <input
            type="number"
            placeholder="quantity..."
            {...register("quantity", { required: true })}
            className="tw-border-solid tw-border-2 tw-border-blue-800 tw-my-2"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label><br />
          <input
            type="text"
            placeholder="description..."
            {...register("description", { required: true })}
            className="tw-border-solid tw-border-2 tw-border-blue-800 tw-my-2"
          />
        </div>
        <div>
          <button type="submit" className="tw-border-solid tw-border-2 tw-border-blue-800 tw-bg-blue-800 tw-text-white tw-p-2">ADD PRODUCT</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePro;
