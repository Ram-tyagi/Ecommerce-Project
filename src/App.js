
import {CreateBrowserRouter,RouterProvider} from 'react-router-dom';
import CartProvider from './Store/CartProvider';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Products from './Components/Product';
import About from './Components/About';

const router=CreateBrowserRouter([
  {path: '/', Element: <About/>},
])
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}/>
      <Header />
      <Products />
      <Footer />
    </CartProvider>
  );
}

export default App;
