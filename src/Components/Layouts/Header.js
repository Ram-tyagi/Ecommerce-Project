import React,{useContext} from 'react'
import { Button,Nav,Navbar} from 'react-bootstrap'
import CartContext from '../Store/cart-context'
import { Link,useLocation } from "react-router-dom";
import AuthContext from '../Authentication/auth-context';


const Header = (props) => {
      const cartCtx=useContext(CartContext)
      const authCtx = useContext(AuthContext);
      let location=useLocation();
      
      let cartCount = 0

      cartCtx.items.forEach(element => {
          cartCount += Number(element.quantity);
      })
      
    
      const cartClickHandler = (event) => {
        event.preventDefault();
        props.onClickCart();
      };
      
      const logoutClickHandler = () => {
        authCtx.logout();
      }
      const isStoreVisible = location.pathname === "/store";


  return (
    <div> 
    
    <Navbar bg="dark" expand="sm" variant="dark">
    <Navbar.Brand href="/" >
            The Genrics
          </Navbar.Brand>
           <Nav className="me-auto">
           <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/store">Store</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contactus">Contact us</Nav.Link>
          <Nav.Link as={Link} to="/Login">Login</Nav.Link>
          </Nav>
      
          {isStoreVisible && (<Button variant="outline-warning" onClick={cartClickHandler} >Cart {cartCount}</Button>)}
         {authCtx.isLoggedIn && <Button variant="danger" onClick={logoutClickHandler}>Logout</Button>}
       
    
    
    </Navbar>


    
    
    </div>

  )
}

export default Header