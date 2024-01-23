import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate} from "react-router-dom"; // có thể thay đổi hàm useNavigate là history
import { getProById, editPro } from "../../services/product";
import { Products } from "../../interfaces";

const Update: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm<Products>();
  const { productId } = useParams<{ productId: string }>();
  // console.log('productId:', productId);
//navigate dẫn đường còn history thì nó điều hướng
  const navigate = useNavigate();
  // const history = useHistory();
  const [product, setProduct] = useState<Products | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch product data based on productId
        const productData = await getProById(productId);
        setProduct(productData);

        // Populate form fields with existing data
        setValue("name", productData.name);
        setValue("price", productData.price);
        setValue("quantity", productData.quantity);
        setValue("description", productData.description);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId, setValue]);

  const onSubmit = async (data: Products) => {
    try {
      // Call the editPro function to update the product
      await editPro(productId, data);
      console.log("Product updated successfully");
      // Redirect or handle the updated product state as needed
      navigate("/products"); // Redirect to the products page, for example
      // history.push("/products"); //có thể dùng
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>; // You might want to show a loading indicator
  }

  return (
    <div>
      <h2>Edit Product</h2>
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
          <label htmlFor="price">Price:</label>
          <br />
          <input
            type="number"
            placeholder="number..."
            {...register("price", { required: true })}
            className="tw-border-solid tw-border-2 tw-border-blue-800 tw-my-2"
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <br />
          <input
            type="number"
            placeholder="quantity..."
            {...register("quantity", { required: true })}
            className="tw-border-solid tw-border-2 tw-border-blue-800 tw-my-2"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <br />
          <input
            type="text"
            placeholder="description..."
            {...register("description", { required: true })}
            className="tw-border-solid tw-border-2 tw-border-blue-800 tw-my-2"
          />
        </div>
        <div>
          <button
            type="submit"
            className="tw-border-solid tw-border-2 tw-border-blue-800 tw-bg-blue-800 tw-text-white tw-p-2"
          >
            UPDATE PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
