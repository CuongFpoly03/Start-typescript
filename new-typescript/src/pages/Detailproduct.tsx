import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../interface";
import Navbar from "../components/Navbar";
import axios from "axios";
const Detailproduct: React.FC = () => {
  // lấy id
  const { productID } = useParams();
  console.log(productID);

  const [productdetail, setProductdetail] = useState<Products>(Object);
  useEffect(() => {
    try {
      const kqdetail = async () => {
        const API: string = `https://dummyjson.com/products/${productID}`;
        const res = await axios.get(API);
        console.log(res.data);
        setProductdetail(res.data.datas);
      };
      kqdetail();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <Navbar />
      <h1>{productID}</h1>
      <div>
        <h1>{productdetail._id}</h1>
        <h1>{productdetail.title}</h1>
        <h1>{productdetail.price}</h1>
        <h1>{productdetail.description}</h1>
      </div>
    </div>
  );
};

export default Detailproduct;
