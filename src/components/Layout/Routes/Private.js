import { useAuth } from "../../../context/auth";
import React from "react";
import {useState,useEffect} from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import CircularProgressAnimation from "../MeterialUiComponents/CircularProgress";
// import SkeletonAnimation from "../ProgressAnimation/SkeletonProgresstionAnimation";

export default   function PrivateRoute (){

const [ok,setOk]  =useState(false);
const [auth,stAuth] =useAuth();
useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`,{
headers:{
    "Authorization":auth?.token
}

      });
      console.log(res)
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


