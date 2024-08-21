import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout/Layout";
import MuiCard from "../components/Layout/MeterialUiComponents/Card";
import { useAuth } from "../context/auth";
import "./cssFile/categoryproduct.css";
const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const auth = useAuth();
  //console.log(auth[0].user?.role);
  const params = useParams();

  const getProductByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/product-category/${params.slug}`
      );

      setCategory(data?.category);
      setProducts(data?.products);
    } catch (error) {
      //console.log(error);
    }
  };
  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);

  return (
    <Layout>
      <div
        className="CategoryProduct_container"
        style={{ hieght: "100vh", paddingTop: "4rem" }}
      >
        {/* <h1>{JSON.stringify(products,null,4)}</h1> */}
        <h1 style={{ fontSize: "1.2rem" }}>All products</h1>

        <div
          className="card_container"
          style={{ height: "100%", display: "flex", flexDirection: "row" }}
        >
          {products?.map((p) => (
            <div key={p._id}>
              <MuiCard
                product_name={p.name}
                products_description={p.description}
                product_price={p.price}
                product_id={p._id}
                product_slug={p.slug}
              />
              <Link
                to={`/dashboard/admin/product/${p.slug}`}
                key={p._id}
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    // background: "green",
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: ".9rem",
                  }}
                >
                  {auth[0]?.user?.role ? "Update Product" : ""}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* <h1>{products.length}</h1> */}
      </div>
    </Layout>
  );
};

export default CategoryProduct;
