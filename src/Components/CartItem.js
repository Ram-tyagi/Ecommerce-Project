import React,{useContext} from "react";
import CartContext from "./Store/cart-context";
import classes from "./CartItem.module.css";

const CartItems = (props) => {
    const cartCtx = useContext(CartContext);
  
  
    let total = 0;
    cartCtx.items.forEach((element) => {
      total += Number(element.price) * Number(element.quantity);
    });
  
    const deleteHandler = (event) => {
      event.preventDefault();
      const eleIdx = event.target.id;
      cartCtx.removeCartItem(eleIdx);
  
    };
  
    const changeQuantityhandler = (event) => {
        console.log(event.target.id);
    }
  
    return (
        <ul className={classes.cartItem}>
        <h3>Cart Items</h3>
          <div className={classes.heading}>
            <span>ITEM</span>
            <span>Price</span>
            <span>Quantity</span>
          </div>
          {cartCtx.items.map((ele,idx) => (
        <li className={classes.list} key={idx}>
          <div>
          <img src={ele.imageUrl} alt=" "/>
            <span>{ele.title}</span>
          </div>
          <span>{ele.price}</span>
          <input type="number" step="1" value={ele.quantity} onChange={changeQuantityhandler} />
          <button id={idx} onClick={deleteHandler}>
          Remove</button>

        </li>
      ))}
       <div className={classes.footer}>
        <h5>Total</h5>
        <span>${total}</span>
      </div>
    </ul>
  );
};
export default CartItems;