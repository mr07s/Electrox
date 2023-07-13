import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout/Layout'
import MuiCard from '../components/Layout/MeterialUiComponents/Card';

const CategoryProduct = () => {
const [products,setProducts] =useState([]);
const [category,setCategory] =useState([]);


const params =useParams();

const getProductByCat = async()=>{

try {
    const {data} =await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-category/${params.slug}`)

    setCategory(data?.category)
   setProducts(data?.products)


} 


catch (error) {
    console.log(error);
}


}
useEffect(()=>{
if(params?.slug)
    getProductByCat();

},[params?.slug])

  return (
    <Layout>
<div className="CategoryProduct_container">
{/* <h1>{JSON.stringify(products,null,4)}</h1> */}

<div className="card_container">
   <p>All products</p>
    {
      products?.map((p)=>(
        <Link to={`/dashboard/admin/product/${p.slug}`} key={p._id} style={{textDecoration:'none'}}>
        <MuiCard product_name={p.name}   products_description={p.description}  product_price={p.price} product_id={p._id}/>
        </Link>
      ))
    }
   
    </div>
      
{/* <h1>{products.length}</h1> */}

</div>


    </Layout>
  )
}

export default CategoryProduct