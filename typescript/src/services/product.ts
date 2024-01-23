import { fetchData, postData, deleteData, putData } from "./api";

export const getPro = async () => {
  return fetchData("/product");
};

export const getProById = async (productId: string) => {
  return fetchData(`/product/${productId}`);
};

export const createPro = async (product: {
  name: string;
  price: number;
  quantity: number;
  description: string;
}) => {
  return postData("/product", product);
};

export const deletePro = async (productId: string) => {
  return deleteData(`/product/${productId}`);
};

export const editPro = async (
  productId: string,
  updatedProduct: {
    name: string;
    price: number;
    quantity: number;
    description: string;
  }
) => {
  return putData(`/product/${productId}`, updatedProduct);
};
