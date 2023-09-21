import React,{useState} from "react";
import Store from "./Components/Store";
import Header from "./Components/Layouts/Header";
import  Footer  from "./Components/Layouts/Footer";
import CartProvider from "./Components/Store/cartProvider";
import Cart from "./Components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Routes/Home";
import About from "./Components/Routes/About";
import Product from "./Components/Product";
import ContactUs from "./Components/Routes/ContactUs";

const productsArrs = [
  {
    title: "Colors",
    price: 100,
    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: ["https://prasadyash2411.github.io/ecom-website/img/Album%202.png"],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: ["https://prasadyash2411.github.io/ecom-website/img/Album%203.png"],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: ["https://prasadyash2411.github.io/ecom-website/img/Album%204.png"],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },
];

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
    <Routes>
    <Route path="/"  element={ <Home />}/>
  <Route path="/about"  element={ <About />}/>
  
  <Route path="/store"  element= {storeVisible && <Store  productsArr={productsArrs}/>}/>
  <Route path="/contactus"  element={ <ContactUs />}/>
  <Route path="/store/:productId"  element={<Product productsArr={productsArrs} />}/>
  </Routes>
        {cartVisible && <Cart onClose={hideCartHandler}  />}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;