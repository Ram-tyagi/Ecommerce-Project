import React,{useContext} from 'react'
import { Button,Nav,Navbar} from 'react-bootstrap'
import CartContext from '../Store/cart-context'
import { Link } from "react-router-dom";


const Header = (props) => {
      const cartCtx=useContext(CartContext)
      
      let cartCount = 0

      cartCtx.items.forEach(element => {
          cartCount += Number(element.quantity);
      })
      
    
      const cartClickHandler = (event) => {
        event.preventDefault();
        props.onClickCart();
      };
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
          </Nav>
      
      <Button class="btn btn-outline-success my-2 my-sm-0  " onClick={cartClickHandler} >Cart {cartCount}</Button>
       
    
    
    </Navbar>


    
    
    </div>

  )
}

export default Header