import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { img, name, price, shipping } = props.product;
  return (
    <div className="each-product">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="review-details">
        <div className="details" title={name}>
          <h3>{name.length > 20 ? name.slice(0, 20) + "..." : name}</h3>
          <p>Price: ${price}</p>
          <p>Shipping Charge: ${shipping}</p>
        </div>
        <div className="delete">
          <button onClick={() => props.removeHandler(props.product)}>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
