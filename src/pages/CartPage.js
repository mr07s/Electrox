import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import './cssFile/cart.css'
import { toast } from "react-hot-toast";
const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);


  console.log(cart)
  const removeCartItem = async (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item.product_id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //get payment getway token
  const gettoken = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/braintree/token`
      );
      console.log(data);
      setClientToken(data?.clientToken);
      console.log(clientToken);
    } catch (error) {}
  };

  useEffect(() => {
    gettoken();
  }, [auth?.token]);

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.product_price;
      });
      return total.toLocaleString("en-us", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // handle payment
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/products/braintree/payment`,
        {
          nonce,
          cart,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/oders");
      toast.success("Payment completed Succesfully");
    } catch (error) {
      setLoading(false);
      toast.success("Something went wrong");
    }
  };

  return (
    <Layout>

        <div className="cart_heading">
          <h1>{`Hello ${auth?.token && auth?.user?.name}`}</h1>
          <h4>
            {cart?.length >= 1
              ? `You have ${cart.length} items in your cart ${
                  auth?.token ? "" : "Please Login to check out"
                }`
              : "Your Cart Is Empty"}
          </h4>
        </div>
        <div className="containers">
        <div className="cart_item">
          {cart?.map((p) => (
            <div className="items">
              <div className="image">
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${p.product_id}`}
                  alt=""
                  style={{ height: "200px" }}
                />
              </div>
              <div className="product">
                <h4>{p.product_name}</h4>
                <p>{p.product_description}</p>
                <p>{p.product_price}</p>
                <button
                  className="btn btn_remove btn_cart"
                  onClick={() => removeCartItem(p.product_id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="check_out">
          <h4 className="cart_summary cart_text" >Cart Summary</h4>
          <p >Total checkout payment</p>
          <hr />
          <h3 className="cart_total cart_text">Total:{totalPrice()}</h3>
          {auth?.user?.address ? (
            <>
              <h4 className="cart_text cart_address">CurrentAdress:</h4>
              <h5 className="cart_text cart_addres_text">{auth?.user?.address}</h5>
              <button
                className="btn btn_updateadress btn_cart"
                onClick={() => navigate("/dashboard/user/profile")}
              >
                Update Adress
              </button>
            </>
          ) : (
            <div>
              {auth?.token ? (
                <button onClick={() => navigate("/dashboard/user/profile")}
                className="btn_cart"
                >
                  UpdateAddress
                </button>
              ) : (
                <button
                  onClick={() =>
                    navigate("/login", {
                      state: "/cart",
                    })
                  }
                className="btn_cart"

                >
                  Please login to checkout
                </button>
              )}
            </div>
          )}
          <div className="dropin_container">
            {!clientToken || !auth?.token || !cart?.length ? (
              ""
            ) : (
              <>
                <DropIn
                  options={{
                    authorization: clientToken,
                    paypal: {
                      flow: "vault",
                    },
                  }}
                  onInstance={(instance) => setInstance(instance)}
                />

                <button
                  className="btn btn_makePayment btn_cart"
                  onClick={handlePayment}
                  disabled={loading || !instance || !auth?.user?.address}
                >
                  {loading ? "Processing ...." : "Make Payment"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
