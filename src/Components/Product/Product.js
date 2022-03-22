import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, price, ratings, seller, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <p className="name">{name}</p>
      <div className="product-info">
        <p>Price: ${price}</p>
        <p>Seller: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button onClick={() => props.buttonHandler(props.product)}>
        Add to Cart &nbsp; &nbsp;
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
