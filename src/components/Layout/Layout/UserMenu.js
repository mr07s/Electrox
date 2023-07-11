import React from 'react'
import ListItems from '../MeterialUiComponents/ListItems'

const UserMenu = () => {
  return (
    <>
        <ListItems
        name1={"Profile"}
        Link1={"/dashboard/user/profile"}
        name2={"Orders"}
        Link2={"/dashboard/user/oders"}
        />


    </>
  )
}

export default UserMenu