import Products from "./Products";
import { useContext, useState } from "react";
import CartButton from "./CartButton";
import Cart from "./Cart";
import CartContext from "./cart-context";

const Store = () => {
  const cartCtx = useContext(CartContext);

  const [showCart, setShowCart] = useState(false);

  const onCartClickHander = () => {
    setShowCart(true);
  };

  const onXClickHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <CartButton onClick={onCartClickHander}></CartButton>
      <sup>{cartCtx.items.length}</sup>
      {showCart && <Cart onXClick={onXClickHandler} />}
      <Products />
    </>
  );
};

export default Store;