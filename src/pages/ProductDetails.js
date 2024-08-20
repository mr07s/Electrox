import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout/Layout";
import { Link, useParams } from "react-router-dom";
import MuiCard from "../components/Layout/MeterialUiComponents/Card";
import { Button } from "@mui/material";
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
      getSimilarProducts(
        data?.singleProduct._id,
        data?.singleProduct.category._id
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/related-product/${pid}/${cid}`
      );
      console.log({ data });
      setRelatedproduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // initial p details
  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
    // eslint-disable-next-line
  }, [params?.slug]);

  return (
    <Layout>
      <div style={{ paddingTop: ".7rem" }}>
        <h1>Product Detail</h1>
      </div>

      <div
        className="product_details"
        style={{
          // paddingTop: "2rem",
          // border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          minHeight: "25rem",
          padding: "2rem",
          flexWrap: "wrap",
          // background: "green",
        }}
      >
        <div
          className="image_container"
          style={{
            height: "20rem",
            margin: "2rem",
            minWidth: "40%",
            display: "flex",
            // background: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${product?._id}`}
            alt={`${product.name}`}
            style={{ height: "100%", width: "100%", borderRadius: "12px" }}
          />
        </div>
        <div
          className="details_container"
          style={{
            minHeight: "20rem",
            // background: "#e3e5e8",
            borderRadius: "7px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            minWidth: "30%",
          }}
        >
          <h1
            style={{
              marginBottom: "1.2rem",
              fontWeight: "semi-bold",
              fontSize: "1.5rem",
              marginLeft: "2rem",
            }}
          >
            Product Details
          </h1>
          <h3 style={{ marginBottom: "1.2rem" }}>{product?.name}</h3>
          <h3 style={{ marginBottom: "1.2rem" }}>{product?.description}</h3>
          <h3 style={{ marginBottom: "1.2rem" }}>{`$${product?.price}`}</h3>
          <h3 style={{ marginBottom: "1.2rem" }}> {product?.category?.name}</h3>
          <Button
            className="btn btn_addtocart"
            style={{ marginBottom: "1.2rem", color: "black" }}
          >
            Add to cart
          </Button>
        </div>
      </div>
      <h1>Similar Products</h1>
      <div
        className="similar_products"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          flexWrap: "wrap",
        }}
      >
        {relatedproduct.length < 1 && <p>No similar Product Found</p>}
        {relatedproduct?.map((p) => (
          <MuiCard
            product_name={p.name}
            key={p._id}
            products_description={p.description}
            product_price={p.price}
            product_id={p._id}
            product_slug={p.slug}
          />
        ))}
      </div>
    </Layout>
  );
};

export default ProductDetails;
