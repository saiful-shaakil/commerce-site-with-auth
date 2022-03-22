import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, rating, seller, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <p className="name">{name}</p>
    </div>
  );
};

export default Product;
