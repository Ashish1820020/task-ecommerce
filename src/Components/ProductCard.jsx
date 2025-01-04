import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({product}) => {
  return (
    <div className='row'>
      <Link to={`/products/product/${product?._id}`}>
      <div className="single-product-item" style={{height: "400px", width: "350px"}}>
        <div className="product-image">
            <img src={product?.images?.[0]} alt="" style={{maxHeight: "250px", objectFit: "contain"}}/>
        </div>
        <h3>{product.name}</h3>
        <p className="product-price"><span>{product?.price}</span> </p>
		</div>
          </Link>
    </div>
  )
}

export default ProductCard