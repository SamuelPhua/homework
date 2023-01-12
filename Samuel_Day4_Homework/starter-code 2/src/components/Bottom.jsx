import React from "react";

const Bottom = (props) => {
  let inputs = props.input.map((i, j) => {

    const handleDelete = (event) => {
        
    }
    return (
      <li key={j} onClick={() => props.handleClick(j)}>
        {i.item} {i.price} {i.date}
      </li>
    );
  });

  return (
  <div>
    <h2 className="bottom">
        {inputs}
    </h2>
  </div>
  )
};

export default Bottom;
