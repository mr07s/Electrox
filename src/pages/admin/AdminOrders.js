import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout/Layout";
import axios from "axios";
import OrderTable from "../../components/Layout/MeterialUiComponents/OrderTable";
import { useAuth } from "../../context/auth";
const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, setOrders] = useState();
  const [auth, setAuth] = useAuth();

  const getAllOrders = async () => {
    try 
    {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/all-orders`
      );
      setOrders(data);

    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getAllOrders();
  }, [auth?.token]);

// onchange={(value)=>handleChangeStatus(o._id,value)}

const handleChangeStatus = async(orderId,value)=>{

try {
    console.log(orderId)
    const {data} =await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/order-status/${orderId}`,{status:value})
getAllOrders();


} 
catch (error) {
    console.log(error)
}



}


  return (
    <Layout>
      <div className="adminmenu_container">
        <AdminMenu />
      </div>
      <div className="allorders">
        <h1>AllOrders</h1>
        <div
          className="order_table_container "
          style={{  width: "100vw" ,display:'flex',justifyContent:'center'}}
        >
          <OrderTable order={orders} status={status} changeStatus={changeStatus} setChangeStatus={setChangeStatus} handleChangeStatus={handleChangeStatus}/>
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;
