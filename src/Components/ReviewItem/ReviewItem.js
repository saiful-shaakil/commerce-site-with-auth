import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { img, name, price, shipping } = props.product;
  return (
    <div className="each-product">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Shipping Charge: ${shipping}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
