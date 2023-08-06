import { useState } from 'react';
import Cart from './Cart';
import classes from './Header.module.css'

const Heading = () => {

    const [showCart, setShowCart] = useState(false)

    const onCartClickHander = () => {

        setShowCart(true)
    }

    const onXClickHandler = () => {

        setShowCart(false)
    }
    return <>
    <ul className={classes.menu}>
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
    </ul>
   
    <button onClick={onCartClickHander}>Cart</button>
    <sup>0</sup>
    {showCart && <Cart onXClick={onXClickHandler}/>}
    <h1 className={classes.heading}>The Generics</h1></>
}

export default Heading;