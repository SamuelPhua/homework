import React, { useContext } from "react";
import SomeContext from "../context/some-context";

function AllTheThings() {
  console.log("this is props  from ALlTheThings");

  const { products, addToCart } = useContext(SomeContext);
  let things = products.map((d, i) => {
    return (
      <li key={i} onClick={() => addToCart(d)}>
        {d.name} - ${d.price}
        <br></br>
        {d.description}
      </li>
    );
  });
  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      {things}
    </div>
  );
}

export default AllTheThings;
