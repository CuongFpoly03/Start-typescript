import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
// import ip1 from "../assets/images/ip1.jpg";
// import ip2 from "../assets/images/ip2.jpg";
// import ip3 from "../assets/images/ip3.jpg";
// import ip4 from "../assets/images/ip4.jpg";
// import ip5 from "../assets/images/ip5.jpg";
import { Products } from "../interface";
import ProductList from "../components/ProductList";

const Product: React.FC = () => {
  const [product, setProduct] = useState<Products[]>([]);

  // goisp

  useEffect(() => {
    const getProduct = async () => {
      try {
        const API: string = "https://dummyjson.com/products";
        const res = await fetch(API);
        if(res.ok) {
          throw new Error("lỗi");
        }
        const datas = await res.json();
        console.log("data",datas)
        setProduct(datas);
      } catch (error) {
        console.error("lỗi", error);
      }
    };
    getProduct();
  }, []);

  console.log(product);

  return (
    <div className="container">
      <Navbar />
      <h1 className="text-center text-xxl-end">Tất cả sản phẩm!</h1>
      <div className="container text-center">
        <div className="row row-cols-3">
          <div className="col">
            <ProductList dataPro={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
