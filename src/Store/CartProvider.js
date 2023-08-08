import { useState } from "react";
import CartContext from "./Cart-Context"

const CartProvider = (props) => {

    const [cartElements, setCartElement] = useState([]);

    const addToCartElement = (props) => {
      if (cartElements.length === 0) {
        setCartElement([...cartElements, { ...props, quantity: 1 }]);
      } else {
        cartElements.map((item) => {
          if (item.title === props.title) {
            return setCartElement([
              ...cartElements,
              { ...props, quantity: props.quantity + 1 },
            ]);
            return setCartElement([...cartElements, { ...props, quantity: 1 }]);
        }
      });
    }
  };
    const cartCtx = {
        items: cartElements,
        addElement: addToCartElement
    }

    return <CartContext.Provider value={cartCtx}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;