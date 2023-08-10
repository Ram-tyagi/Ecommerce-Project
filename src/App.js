
import { Route, Routes } from 'react-router-dom';
import CartProvider from './Store/CartProvider';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Products from './Components/Product';
import About from './Components/Pages/About';
import Store from './Components/Store';
import Home from './Components/Pages/Home';
import React from 'react';
import ContactUs from './Components/Pages/ContectUs';

function App() {
  return (
   
    <React.Fragment>
      <CartProvider>
       <Header />
        <Routes>
        <Route path="/" element={<Home/>} />
    
       
        <Route path="/store" element={<Store />}/>
    
          
        <Route path="/about"  element={ <About />}/>
         
         <Route path="/contactUs" element={<ContactUs />}/>
        </Routes>
    
      <Products />
      <Footer />
      </ CartProvider>
     </React.Fragment>
  );
}

export default App;
