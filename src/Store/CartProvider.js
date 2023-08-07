import { useState } from "react";
import CartContext from "./Cart-Context"

const CartProvider = (props) => {

    const [cartElements, setCartElement] = useState([])

    const addToCartElement = (props) => {

        if(cartElements.length === 0) {

            setCartElement([...cartElements, {...props, quantity: 1}])
        } else {
            cartElements.map((item) => {

                
                
                if(item.title === props.title) {
                    setCartElement([...cartElements, { ...props, quantity: props.quantity+1 }])
                } else {
                    setCartElement([...cartElements, { ...props, quantity: 1 }])
                }
            })
        }
    }

    console.log(cartElements)

    const cartCtx = {
        items: cartElements,
        addElement: addToCartElement
    }

    return <CartContext.Provider value={cartCtx}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;