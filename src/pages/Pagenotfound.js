import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../components/Layout/Layout/Layout'
import './Pagenotfound.css'
const Pagenotfound = () => {
  return (
    <Layout title={'Go back! page not found'}>
      <div className="pnf_container">
        <div className="pnf">
      <p className='pnf_statuscode'  >404</p>
      <p  className='pnf_statuscodeholder' >Opps ! Page Not Found</p>
      <button className=' btn go_back_botton' > 
      <NavLink to='/' className='go_back_link'>GoBack</NavLink>
      </button>
      </div>
      </div>
      </Layout>
  )
}

export default Pagenotfound