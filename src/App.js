

import CartProvider from './Store/CartProvider';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Products from './Components/Product';


function App() {
  return (
    <CartProvider>
      
      <Header />
      <Products />
      <Footer />
    </CartProvider>
  );
}

export default App;
