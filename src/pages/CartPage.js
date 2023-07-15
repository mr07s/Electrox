import React from 'react'
import Layout from '../components/Layout/Layout/Layout'
import { useCart } from '../context/cart'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {

const [cart,setCart] =useCart();
const [auth,setAuth] =useAuth();
const navigate =useNavigate();



const removeCartItem =async(pid)=>{

try
{
    let myCart =[...cart]
    let index =
     myCart.findIndex(item => item.product_id===pid);
    myCart.splice(index,1)
setCart(myCart)
localStorage.setItem('cart',JSON.stringify(myCart))

}
catch (error) {
    console.log(error);
}


}




const totalPrice =()=>{
try {
    let total =0;
    cart?.map((item)=>{
        total=total+item.product_price
})
return total.toLocaleString("en-us",{
    style:"currency",
    currency:"USD"
})
} catch (error) {
    console.log(error)
}






}








    return (
    <Layout>
        <div className="containers">
        
        <div className="heading">
            <h1>
      {
        `Hello ${auth?.token &&auth?.user?.name}`
      }
            </h1>
<h4>
    {
    cart?.length >=1 ? `You have${cart.length} items in your cart ${auth?.token ? "":"Please Login to check out"}` :"Your Cart Is Empty"  
    }
</h4>

        </div>
        <div className="cart_tem">

{
    cart?.map(p=>(
        <div className="items">
<div className="image">
    <img src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${p.product_id}`} alt="" 
    
    style={{height:'200px'}}
    />

</div>
<div className="product">
<h4>{p.product_name}</h4>
<p>{p.product_description}</p>
<p>{p.product_price}</p>
<button className="btn btn_remove"  onClick={()=>removeCartItem(p.product_id)} >Remove
</button>
</div>

        </div>
    ))
}

        </div>
        <div className="check_out">

<h4>Cart Summary</h4>
<p>Total checkout payment</p>
<hr />
<h3>Total:{totalPrice()}</h3>
        </div>
        </div>
        </Layout>
  )
}

export default CartPage