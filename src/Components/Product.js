import React from "react";
import { useParams } from "react-router-dom";
import classes from "./Product.module.css";

const Product = (props) => {
  const param = useParams();
  const proTitle = param.productId;

  const prod = props.productsArr.find((element) => element.title === proTitle);
  console.log(prod);

  return (
    <div className={classes.sec}>
      <h1>Product details</h1>
      <section>
        <h3>{param.productId}</h3>
        <div className={classes.image}>
          {prod.imageUrl.map((i) => (
            <li>
              <img src={i} alt="" />
            </li>
          ))}
        </div>
        <div className={classes.lowersec}>
          <div className={classes.details}>
            <span>Price ${prod.price}</span>
            <span>Details: {prod.des}</span>
          </div>
          <div className={classes.review}>
            <span>Reviews:</span>
            <li>Review 1</li>
            <li>Review 2</li>
            <li>Review 3</li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;