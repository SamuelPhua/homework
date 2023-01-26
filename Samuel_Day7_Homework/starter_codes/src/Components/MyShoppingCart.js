import React, { useContext } from "react";
import SomeContext from "../context/some-context";

function MyShoppingCart() {
  //console.log("this is props  from MyShoppingCart", props)
  const {card, removeFromCart} = useContext(SomeContext)

  let things = cart.map((d, i) => {
    return (
      <li key={i} onClick={() => removeFromCart(i)}>
        {d.name} - ${d.price}
        <br></br>
        {d.description}
      </li>
    );
  });
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {things}
    </div>
  );
}

export default MyShoppingCart;
