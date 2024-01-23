import React from 'react'
import { Products } from '../interface'
import ProductItem from './ProductItem'


interface Props {
    dataPro: Products[];
}

const ProductList:React.FC<Props>= (props) => {
    const {dataPro} = props;
  return (
    <div>
        {dataPro.map((data) => {
            return(
                <ProductItem key={data._id}
                _id = {data._id}
                title={data.title}
                price={data.price}
                description={data.description}
                />
            )
        })}
    </div>
  )
}

export default ProductList