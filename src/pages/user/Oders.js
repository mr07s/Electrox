import React from 'react'
import Layout from '../../components/Layout/Layout/Layout'
import UserMenu from '../../components/Layout/Layout/UserMenu'

const Oders = () => {
  return (
    <Layout title={"All Oders"}>
    <div className="full_container">
    
 <div className="left_sidebarContainer">
    <UserMenu/>
 </div>
 <div className="right_sidebarContainer">
 <div className="card_container">
<p>Oders</p>
 
 </div>
   
 </div>
 
    </div>
         </Layout>
  )
}

export default Oders