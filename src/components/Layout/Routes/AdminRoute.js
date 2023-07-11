import { useAuth } from "../../../context/auth";
import React from "react";
import {useState,useEffect} from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import CircularProgressAnimation from "../MeterialUiComponents/CircularProgress";
// import SkeletonAnimation from "../ProgressAnimation/SkeletonProgresstionAnimation";

export default   function AdminRoute (){

const [ok,setOk]  =useState(false);
const [auth,setAuth] =useAuth();
useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/admin-auth`);
    //   console.log(res)
      if (res?.data?.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);


return ok ? <Outlet /> :<CircularProgressAnimation/>
}


