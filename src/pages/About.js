import React from 'react'
import Layout from '../components/Layout/Layout/Layout'
import './About.css'

import fourthwatch from '../images/fourthwatchImage'

const About = () => {
  return (
    <Layout title={"About us -Ecommerce app"}>

      <div className="about_container">
<header className='upper_container'>
      <img src={fourthwatch} alt=""className='background_img'/>
    
      <h1 className="title">
        Learn About us
      </h1>
      </header>
{/* <div className="lowercontainer"> */}

<section className='lower_container'>
  <div className="card_container">
<div className="first_card_container card">
<h3>Founder</h3>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores culpa nihil non, neque, molestiae nobis at eum amet eius quos sequi corporis quaerat. Ratione sequi itaque sunt voluptatum repellendus atque.30

</div>
<div className="second_card_container card">
<h3>Quality</h3>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt voluptatum, aliquam odio molestias iste exercitationem eveniet accusantium placeat tempore nihil ex, corrupti ipsum harum mollitia quos error ducimus sit?
</div>
<div className="third_card_container card">
<h3>
  Customers
</h3>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptates ab expedita ipsum omnis iure quaerat quos repudiandae, itaque voluptatibus. Earum nisi dolorem voluptas ab minus magnam voluptate laudantium sapiente?
</div>


<div className="fourth_card_container card">

<h3>
  Ratings
</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut esse facere debitis suscipit nostrum deserunt doloribus? Ea mollitia perspiciatis assumenda consectetur eligendi ratione tempore eius. Nesciunt, debitis sed! Assumenda, aperiam.</p>
</div>
</div>

{/* <div className="customercare_details">

<h3>customercare details</h3>
<div className="mail_details">
  <p>soumyadeepghosh126@gmail.com</p>
</div>
<div className="phonenumber">
  <p>7044337668</p>
</div>
<div className="facebook">
  <p>facebook</p>
</div>
<div className="twiter">
  <p>twiter</p>
</div>
</div> */}

</section>



{/* </div> */}


      </div>
{/* <Footer/> */}
    </Layout>
  )
}
Layout.defaultProps ={
title:'Ecommerce app -shop now',
description:'mern stack project',
keywords:'mern -react ,node,mongodb',
author:'Soumya'



}





export default About