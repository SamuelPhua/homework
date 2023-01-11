import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import productsArr from "./products";
import AddNewItem from "./Components/AddNewItem";

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0)

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalAmount(totalAmount + item.price)
  };

  const removeFromCart = (index) => {
    const cartArr = cart.filter((d, i) => i !== index);
    setCart(cartArr);
    setTotalAmount(totalAmount - cartArr[index].price)
  };

  const addProducts = (enteredData) => {
    setProducts([enteredData, ...products]);
  };

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <div className="AllTheThings">
        <AddNewItem save={addProducts} addToCart={addToCart} />
        <AllTheThings products={products} handleClick={addToCart} />
      </div>
      <MyShoppingCart cart={cart} handleClick={removeFromCart} totalAmount={totalAmount} />
    </div>
  );
}
