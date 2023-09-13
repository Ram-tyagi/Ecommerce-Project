import React,{useState} from 'react'
import { Button,Nav,Navbar} from 'react-bootstrap'
import Cart from './Cart'


const Header = (props) => {
   
      const [showCart, setShowCart] = useState(false)

      const onCartClickHander = () => {
  
          setShowCart(true)
      }
  
      const onXClickHandler = () => {
  
          setShowCart(false)
      }
     
  return (
    <div> 
    
    <Navbar bg="dark" expand="sm" variant="dark">
    
           <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="jds.com">
              Store
            </Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
      
      <Button class="btn btn-outline-success my-2 my-sm-0  "  onClick={onCartClickHander}>Cart {3}</Button>
       
    {showCart && <Cart onXClick={onXClickHandler}/>}
    
    </Navbar>


    
    
    <h1 style={{background:"lightblue", textAlign:"center", fontFamily:"sans-serif"}} >The Generics</h1>
    </div>

  )
}

export default Header