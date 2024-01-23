import React from 'react'
import { Products } from '../interface'
import { Link } from "react-router-dom"


const ProductItem: React.FC<Products> = (props) => {
    const {_id, title, price, description} = props;
  return (
    <div>
        <p>{_id}</p>
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
        <Link to={`/product/${_id}`}>chi tiết sq</Link>
    </div>
  )
}

export default ProductItem