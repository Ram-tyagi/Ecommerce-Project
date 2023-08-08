import { useState,useContext } from 'react';
import { NavLink} from 'react-router-dom';
import Cart from './Cart';
import classes from './Header.module.css'
import CartContext from '../Store/Cart-Context';
import classes from "./Headers.module.css";
const Heading = () => {
    const cartCtx = useContext(CartContext)

    const [showCart, setShowCart] = useState(false)

    const onCartClickHander = () => {

        setShowCart(true)
    }

    const onXClickHandler = () => {

        setShowCart(false)
    }
    return <>
    <ul className={classes.menu}>
    <li>
            <NavLink to='/home'>Home</NavLink></li>
        <li> <NavLink to="/store">Store</NavLink></li>
        <li>
            <NavLink to='/about'>About</NavLink></li>
    </ul>
   
    <button onClick={onCartClickHander}>Cart</button>
    
    <sup>{cartCtx.items.length}</sup>
    {showCart && <Cart onXClick={onXClickHandler}/>}
    <h1 className={classes.heading}>The Generics</h1></>
}

export default Heading;