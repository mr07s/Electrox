import React, { useState } from 'react'
import ListItems from '../MeterialUiComponents/ListItems'
import './AdminMenu.css'
import CloseIcon from '@mui/icons-material/Close';

const AdminMenu = () => {
  const [admin,setAdmin] =useState(0);
  return (
    <>
    { admin===0?( <div className="admin_btn_container">
    <button onClick={()=>setAdmin(1)}>Admin</button>
    </div>):(<div className="admin_btn_close_container">
    <button onClick={()=>setAdmin(0)}><CloseIcon/></button>
    </div>)
  }
  
{
  admin?(
    <div className='adminMenu_container'>
        <ListItems
        name1={"CreateCategory"}
        Link1={"/dashboard/admin/create-category"}
        name2={"CreateProduct"}
        Link2={"/dashboard/admin/create-product"}
        name3={"Users"}
        Link3={"/dashboard/admin/users"}
        name4={"Products"}
        Link4={"/dashboard/admin/products"}
        name5={"Orders"}
        Link5={"/dashboard/admin/orders"}
        />
  </div>
  ):(<></>)
}

  </>
  )
}

export default AdminMenu