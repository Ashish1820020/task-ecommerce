import React from 'react'
import ProductCard from './ProductCard'

const ProductsContainer = ({products}) => {
  
  return (
    <div className='container'>
        
        {
            products?.map((product, index) => {
                return <ProductCard product={product}/>
            })
        }
    </div>
  )
}

export default ProductsContainer