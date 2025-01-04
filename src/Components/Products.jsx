import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { CircularProgress } from '@mui/material'
import axios from 'axios'
import ProductsContainer from './ProductsContainer'
import Footer from './Footer'

const Products = () => {
    const [loading, setLoading] = useState(false)
    const [productList, setProductList] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            axios.get("http://localhost:5000/products/list")
            .then((response) => {
                setProductList(response.data.data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
        }
        fetchProducts()
    }, [])
    
  return (
    <div>
        <Navbar />
        {
            loading?
            <div style={{height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <CircularProgress style={{}}/>
            </div>
            :
            <ProductsContainer products={productList} />
        }
        <Footer />
    </div>
  )
}

export default Products