import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout/Layout";
import { Link, useParams } from "react-router-dom";
import MuiCard from "../components/Layout/MeterialUiComponents/Card";
const ProductDetails = () => {
  const params = useParams();
  // getProduct
  const [product, setProduct] = useState({});
  const [relatedproduct, setRelatedproduct] = useState([]);
//   console.log(product);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/get-product/${params.slug}`
      );
      setProduct(data?.singleProduct);
    //   console.log(data?.singleProduct);
      getSimilarProducts(data?.singleProduct._id,data?.singleProduct.category._id);
    } catch (error) {
      console.log(error);
    }
  };


const getSimilarProducts =async(pid,cid)=>{

try{
const {data} =await axios.get(`${process.env.REACT_APP_API}/api/v1/products/related-product/${pid}/${cid}`);
console.log({data})
setRelatedproduct(data?.products);
}
catch(error){

console.log(error);




}




}



  // initial p details
  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
// eslint-disable-next-line
  }, [params?.slug]);

  return (
    <Layout>
      <h1>Product Detail</h1>

      <div className="product_details">
        <div className="image_container" style={{ height: "200px" }}>
          <img
            src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${product?._id}`}
            alt={`${product.name}`}
            style={{ height: "200px" }}
          />
        </div>
        <div className="details_container">
<h1>Product Details</h1>
<h3>{product?.name}</h3>
<h3>{product?.description}</h3>
<h3>{`$${product?.price}`}</h3>
<h3>{product?.category?.name}</h3>
<button className="btn btn_addtocart">Add to cart</button>

        </div>






      </div>
      <div className="similar_products">
        <h1>Similar Products</h1>
        {relatedproduct.length <1 && <p>No similar Product Found</p>}
      {
      relatedproduct?.map((p)=>(
       
        <MuiCard product_name={p.name} key={p._id}  products_description={p.description}  product_price={p.price} product_id={p._id} product_slug={p.slug}/>
        
      ))
    }

      </div>
    </Layout>
  );
};

export default ProductDetails;
