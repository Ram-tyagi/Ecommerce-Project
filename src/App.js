
import { Route } from 'react-router-dom';
import CartProvider from './Store/CartProvider';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Products from './Components/Product';
import About from './Components/About';
import Store from './Store';
import Home from './Home';

function App() {
  return (
    <>
    
      <CartProvider>
      <Route path="/home"><Home /></Route>
        <Route path="/store"><Store /></Route>
        <Route path="/about"><About /></Route>
      <Header />
      <Products />
      <Footer />
      </ CartProvider>
     
    </>
  );
}

export default App;
