// src/components/UserList.tsx
import React, { useEffect, useState } from 'react';
import { getPro, deletePro } from '../../services/product';
import { Products } from '../../interfaces';

const ProductList: React.FC = () => {
  const [product, setProduct] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getPro();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  const handleDelete = async (productId: string) => {
    try {
      await deletePro(productId);
      // Update the product list after successful deletion
      const updatedProductList = product.filter((pro) => pro._id !== productId);
      setProduct(updatedProductList);
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {product.map((pro) => (
          <li key={pro._id}>
            {pro.name} - {pro.price} - {pro.quantity} - {pro.description}{' '}
            <button onClick={() => handleDelete(pro._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
