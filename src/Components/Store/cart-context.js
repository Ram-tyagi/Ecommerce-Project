import React from "react";

const CartContext = React.createContext({
    items: [],
    addCartItem: (item)=>{},
    removeCartItem: (item)=>{},
    quantityChange: ()=> {}
})

export default CartContext;