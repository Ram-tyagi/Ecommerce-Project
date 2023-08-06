import classes from './Header.module.css'

const Heading = () => {

    return <>
    <ul className={classes.menu}>
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
    </ul>
    <button>Cart</button>
    <sup>0</sup>
    <h1 className={classes.heading}>The Generics</h1></>
}

export default Heading;