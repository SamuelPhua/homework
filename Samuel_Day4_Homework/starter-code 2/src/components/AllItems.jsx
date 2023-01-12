import React from "react";

const AllItems = (props) => {
  let allAddedItems = props.addedItems.map((i, j) => {
    return (
      <li key={j} onClick={() => props.handleClick(j)}>
        {i.item}
        <br></br>
        {i.price}
        <br></br>
        {i.price}
      </li>
    );
  });
  return (
  <>
  <h2>
    
  </h2>
  </>
  )
};

export default AllItems;
