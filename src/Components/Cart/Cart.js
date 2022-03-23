import React from "react";

const Cart = ({ cart }) => {
  let total = 0;
  let shippingCharge = 0;
  for (const product of cart) {
    total = total + product.price;
    shippingCharge = shippingCharge + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal =
    parseFloat(total) + parseFloat(shippingCharge) + parseFloat(tax);
  return (
    <div>
      <p>Order summary</p>
      <p>Total Product: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shippingCharge}</p>
      <p>Tax: ${tax}</p>
      <p>Grand Total: ${grandTotal}</p>
    </div>
  );
};

export default Cart;
