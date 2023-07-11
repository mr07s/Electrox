import React from 'react'
import AdminMenu from '../../components/Layout/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout/Layout'

const Users = () => {
  return (
    <Layout title={"Dashboard -All users"}>
    <div className="full_container">
    
 <div className="left_sidebarContainer">
    <AdminMenu/>
 </div>
 <div className="right_sidebarContainer">
 <div className="card_container">
<p>Users</p>
 
 </div>
   
 </div>
 
    </div>
         </Layout>
  )
}

export default Users