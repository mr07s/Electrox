import React from 'react'
import ListItems from '../MeterialUiComponents/ListItems'

const AdminMenu = () => {
  return (
    <>
        <ListItems
        name1={"CreateCategory"}
        Link1={"/dashboard/admin/create-category"}
        name2={"CreateProduct"}
        Link2={"/dashboard/admin/create-product"}
        name3={"Users"}
        Link3={"/dashboard/admin/users"}
        name4={"Products"}
        Link4={"/dashboard/admin/products"}
        />


    </>
  )
}

export default AdminMenu