import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/auth";
import Layout from "../../components/Layout/Layout/Layout";
import UserMenu from "../../components/Layout/Layout/UserMenu";
import moment from "moment";
import "./userorder.css";

import OrderTable from "../../components/Layout/MeterialUiComponents/OrderTable";
const Oders = () => {
  const [orders, setOrders] = useState();
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/orders`
      );
      console.log({ data });
      setOrders(data);
      console.log("data");
      console.log({ orders });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  console.log(orders);
  console.log("orders");

  return (
    <Layout title={"All Oders"}>
      <div className="usermenu_container">
        <UserMenu />
      </div>

      <div className="allorders">
        <div className="order_table_container" style={{ width: "100vw" }}>
          <OrderTable order={orders} />
        </div>
      </div>
    </Layout>
  );
};

export default Oders;
