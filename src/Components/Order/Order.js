import React from "react";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "../Shop/Shop.css";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div className="shop-container-fullBox">
      <div className="shop-container">
        <div className="">
          {cart.map((product) => (
            <ReviewItem key={product.id} product={product}></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
