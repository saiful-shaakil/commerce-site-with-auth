import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "../Shop/Shop.css";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const handlerRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container-fullBox">
      <div className="shop-container">
        <div className="">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              removeHandler={handlerRemoveProduct}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <button>
              <Link to="/inventory">Proceed to Checkout</Link>
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
