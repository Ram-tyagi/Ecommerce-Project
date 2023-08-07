import "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../Store/Cart-Context";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <section>
      <button onClick={props.onXClick}>x</button>
      <div>Cart</div>
      <div>
        <span>Item</span>
        <span>Price</span>
        <span>Quantity</span>
      </div>
      <div>
        {cartCtx.items.map((item) => {
          return (
            <div>
              <span>{item.title}</span>
              <span>{item.price}</span>
              <span>{item.quantity}</span>
              <button>Remove</button>
            </div>
          );
        })}
      </div>
      <div>Total</div>
      <button>Purchase</button>
    </section>
  );
};

export default Cart;