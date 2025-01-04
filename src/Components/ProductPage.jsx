import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

const ProductPage = () => {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null);
    const {id} = useParams()
    console.log(product);


    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            axios.get(`http://localhost:5000/products/list/${id}`)
            .then((response) => {
                setProduct(response.data.data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
        }
        fetchProducts()
    }, [id])
    
    
  return (
    <>
    <Navbar />
    <div class="single-product mt-150 mb-150">
		<div class="container">
			<div class="col-single">
				<div class="col-md-5">
					<div class="single-product-img">
						<img src={product?.images?.[0]} alt="" />
					</div>
				</div>
				<div class="col-md-7">
					<div class="single-product-content">
						<h3>{product?.name}</h3>
						<p class="single-product-pricing"><span>Price:</span>{product?.price}</p>
						<p>{product?.description}</p>
						<div class="single-product-form">
							<p><strong>Categories: </strong>{product?.category}</p>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
    <Footer />
    </>
  )
}

export default ProductPage