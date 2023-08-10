import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
const Heading = () => {

    return (
      <>
        <ul className={classes.menu}>
            <li>
        <NavLink to="/home">Home</NavLink>
        </li>
        <li>
        <NavLink to="/store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contactUs">Contact US</NavLink>
        </li>
      </ul>
      <h1 className={classes.heading}>The Generics</h1>
    </>
  );
};

export default Heading;