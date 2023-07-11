import React from 'react'
import AdminMenu from '../../components/Layout/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout/Layout'
import {useAuth} from '../../context/auth'

const AdminDashboard = () => {
  const [auth] =useAuth();
  return (
    <Layout>
   <div className="full_container">
   
<div className="left_sidebarContainer">
   <AdminMenu/>
</div>
<div className="right_sidebarContainer">
<div className="card_container">
<p>
 Admin name: {auth?.user?.name},
</p>
<p>
Admin Email: {auth?.user?.email}
</p>
  


</div>
  
</div>

   </div>
        </Layout>
  )
}

export default AdminDashboard