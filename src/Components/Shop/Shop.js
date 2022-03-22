import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container-fullBox">
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              buttonHandler={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <p>Order summary</p>
          <p>Total Product: {cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
