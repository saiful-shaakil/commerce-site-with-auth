import React, { useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { addToDb, getStoredProducts } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts([]);
  const [cart, setCart] = useCart([]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(
      (findedProduct) => findedProduct.id === product.id
    );
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(
        (findedProduct) => findedProduct.id !== product.id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(product.id);
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
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
