import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = props => {



    const [itemsArr, updateItemsArr] =useState([]);

    const addCartItemHandler = (item) => {
        updateItemsArr([...itemsArr, item]);
    };

    const removeCartItemHandler = (index) => {
        const copyArr = [...itemsArr];
        copyArr.splice(index, 1);
        updateItemsArr(copyArr);
    };

    const quantityChangeHandler = (eleId) => {
        const copyArr = [...itemsArr];
        const index = copyArr.findIndex(obj => obj.id === eleId);
        if(index !== -1){
            copyArr[index].quantity += 1;

        }
        updateItemsArr(copyArr);
    }

    const cartContext = {
        items: itemsArr,
        addCartItem: addCartItemHandler,
        removeCartItem: removeCartItemHandler,
        quantityChange: quantityChangeHandler
    };


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;