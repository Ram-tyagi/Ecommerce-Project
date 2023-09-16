import React,{useContext} from 'react'
import { Button,Nav,Navbar} from 'react-bootstrap'
import CartContext from '../Store/cart-context'


const Header = (props) => {
      const cartCtx=useContext(CartContext)
      
      let cartCount = 0

      cartCtx.items.forEach(element => {
          cartCount += Number(element.quantity);
      })
      const clickStoreHandler = (event) => {
        event.preventDefault();
        props.onClickStore();
      };
    
      const cartClickHandler = (event) => {
        event.preventDefault();
        props.onClickCart();
      };
  return (
    <div> 
    
    <Navbar bg="dark" expand="sm" variant="dark">
    
           <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="jds.com" onClick={clickStoreHandler}>
              Store
            </Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
      
      <Button class="btn btn-outline-success my-2 my-sm-0  " onClick={cartClickHandler} >Cart {cartCount}</Button>
       
    
    
    </Navbar>


    
    
    <h1 style={{background:"lightblue", textAlign:"center", fontFamily:"sans-serif"}} >The Generics</h1>
    </div>

  )
}

export default Header