import React, { useState } from 'react'
import ListItems from '../MeterialUiComponents/ListItems'
import CloseIcon from '@mui/icons-material/Close';
import './UserMenu.css'
const UserMenu = () => {
  const [user,setUser] =useState(0);

  return (
    <>
        { user===0?( <div className="user_btn_container">
    <button onClick={()=>setUser(1)}>User</button>
    </div>):(<div className="user_btn_close_container">
    <button onClick={()=>setUser(0)}><CloseIcon/></button>
    </div>)
  }
  { user ?(
     <div className='userMenu_container'>
        <ListItems
        name1={"Profile"}
        Link1={"/dashboard/user/profile"}
        name2={"Orders"}
        Link2={"/dashboard/user/oders"}
        />
        </div>
  ):(<></>)
  }

    </>
  )
}

export default UserMenu