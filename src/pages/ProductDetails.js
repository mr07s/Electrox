import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout/Layout'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
const params =useParams();
// getProduct
const [product,setProduct] = useState({})
console.log(product?._id)
// initial p details
useEffect(()=>{
    if(params?.slug){
        getProduct()
    }
},[params?.slug])


const getProduct =async()=>{

try {
    const {data}=await axios.get( `${process.env.REACT_APP_API}/api/v1/products/get-product/${params.slug}`)
    setProduct(data?.singleProduct)

} catch (error) {
    console.log(error);
}

}


  return (
    <Layout><h1>
       Product Detail 
        </h1>
<div className="image"></div>
       <div className="details">

        <img src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${product?._id}`} alt={`${product.name}`} />
     


       </div>
       <div className="similar_products"></div>
        </Layout>
  )
}

export default ProductDetails