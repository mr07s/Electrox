import React from 'react'
import Layout from '../../components/Layout/Layout/Layout'
import UserMenu from '../../components/Layout/Layout/UserMenu'
import { useAuth } from '../../context/auth'
import "./userdashboard.css"
const Dasboard = () => {
  const [auth] =useAuth();
  return (
    <Layout title={"Dashboard -All Oders"}>
    <div className="full_container">
    
 <div className="left_sidebarContainer">
    <UserMenu/>
 </div>
 <div className="right_sidebarContainer">
 <div className="card_container">
<p>{auth?.user?.name}</p>
<p>{auth?.user?.email}</p>
<p>{auth?.user?.address}</p>
 
 </div>
   
 </div>
 
    </div>
         </Layout>
  )
}

export default Dasboard