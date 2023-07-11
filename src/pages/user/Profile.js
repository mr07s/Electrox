import React from 'react'
import Layout from '../../components/Layout/Layout/Layout'
import UserMenu from '../../components/Layout/Layout/UserMenu'

const Profile = () => {
  return (
    <Layout title={"Your Profile"}>
    <div className="full_container">
    
 <div className="left_sidebarContainer">
    <UserMenu/>
 </div>
 <div className="right_sidebarContainer">
 <div className="card_container">
<p>Profile</p>
 
 </div>
   
 </div>
 
    </div>
         </Layout>
  )
}

export default Profile