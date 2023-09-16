import React, { useContext } from 'react'
import classes from "./Store.module.css"
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import CartContext from './Store/cart-context'
import { Link } from 'react-router-dom';

const productsArr = [

    {
    

    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    

    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
  

    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

const Store = (props) => {
  const cartCtx=useContext(CartContext)
  
  const clickHandler = (event) => {
    event.preventDefault();
    const eleIdx = event.target.parentElement.parentElement.id;

    if (cartCtx.items.length > 0) {
      let copy = [...cartCtx.items];
      copy = copy.filter((element) => element.id === eleIdx);
      if (copy.length > 0) {
        cartCtx.quantityChange(copy[0].id);
      } else {
        const ele = { id: eleIdx, ...productsArr[eleIdx], quantity: 1 };
        cartCtx.addCartItem({ ...ele });
      }
    } else {
      const ele = { id: eleIdx, ...productsArr[eleIdx], quantity: 1 };
      cartCtx.addCartItem({ ...ele });
    }
  };
  const p="/store/";
  return (
    <Container className={classes.card}>
    <Row xs={1} md={2} className="g-8">
    {productsArr.map((item,idx) => (
     <Col key={idx}>
       <Card id={idx} style={{width: '20rem'}} className="mt-3">
       <Link to={p + item.title}>
       <Card.Title style={{ textAlign: "center", paddingTop: "0.5rem" }}>
       {item.title}
       </Card.Title>
       </Link>
         <Card.Img variant="top" src={item.imageUrl} className={classes.img}/>
         <Card.Body className={classes.body}>
           <Card.Text>${item.price}</Card.Text>
           <Button variant="info" onClick={clickHandler}>Add to cart</Button>{' '}
         </Card.Body>
       </Card>
     </Col>
   ))}
 </Row>
 </Container>

)}

export default Store