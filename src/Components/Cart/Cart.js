import React,{useContext,useState,useEffect} from 'react'
import CartItems from './CartItem'
import classes from './Cart.module.css'
import CartContext from '../Store/cart-context'
import Modal from "./Modal"

  
  
const Cart = (props) => { 
  const cartCtx=useContext(CartContext)  
  
  const [showCartItem, setShowCartItem] = useState(false);
 

    useEffect(()=>{
        if(cartCtx.items.length>0){
            setShowCartItem(true);
        } else {
            setShowCartItem(false);
        }
    }, [cartCtx.items.length])  
   
   
  return (
    <Modal onClose={props.onClose}>
    <button  onClick={props.onClose}>X</button>
    <div className={classes.header}>

     {!showCartItem && <h6>Your Cart is Empty!</h6>}
      {showCartItem && <CartItems />}
   </div>
</Modal>
    

)}

export default Cart;