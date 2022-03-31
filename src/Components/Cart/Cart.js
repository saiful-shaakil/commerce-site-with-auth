import { prettyDOM } from "@testing-library/react";
import React from "react";

const Cart = ({ cart, children }) => {
  let total = 0;
  let shippingCharge = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shippingCharge = (shippingCharge + product.shipping) * product.quantity;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal =
    parseFloat(total) + parseFloat(shippingCharge) + parseFloat(tax);
  return (
    <div>
      <p>Order summary</p>
      <p>Total Product: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shippingCharge}</p>
      <p>Tax: ${tax}</p>
      <p>Grand Total: ${grandTotal}</p>
      <p>{children}</p>
    </div>
  );
};

export default Cart;
