
import {useState,useContext,createContext, useEffect} from 'react'

const CartContex =createContext();

const CartProvider =({children})=>{
    const [cart,setCart] =useState([]);
      //default axios
useEffect(()=>{

let existingCartItems = localStorage.getItem('cart');
if(existingCartItems)
{
    setCart(JSON.parse(existingCartItems))
}


},[])



     // eslint-disable-next-line
        return (
            <CartContex.Provider value={[cart,setCart]}>
             {children}
            </CartContex.Provider>
        )

}

const useCart =()=>useContext(CartContex)

export {useCart,CartProvider}