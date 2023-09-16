import React,{useState} from "react";
import Store from "./Components/Store";
import Header from "./Components/Layouts/Header";
import  Footer  from "./Components/Layouts/Footer";
import CartProvider from "./Components/Store/cartProvider";
import Cart from "./Components/Cart";
function App() {
  const [storeVisible, setStoreVisible] = useState(true);
  const [cartVisible, setCartVisible] = useState(false);

  const visibleStoreHandler = () => {
    setStoreVisible(true);
  };

  const visibleCartHandler = () => {
   
      setCartVisible(true);
}
const hideCartHandler=()=>{
  setCartVisible(false);
}

  
  return (
    <CartProvider>
      <div>
        <Header
          onClickStore={visibleStoreHandler}
          onClickCart={visibleCartHandler}
        />
        {storeVisible && <Store />}
        {cartVisible && <Cart onClose={hideCartHandler} />}
        <Footer />
      </div>
    </CartProvider>
  
  );
}

export default App;