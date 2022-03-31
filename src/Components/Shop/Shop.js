import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { addToDb, getStoredProducts } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts([]);
  const [cart, setCart] = useState([]);

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
  useEffect(() => {
    let storedCart = getStoredProducts();
    let savedCart = [];
    for (const id in storedCart) {
      let addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        let quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
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
          <Cart cart={cart}>
            <button>
              <Link to="/order">Review Products</Link>
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
