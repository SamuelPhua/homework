import React from "react";

const Bottom = (props) => {
  return (
    <h2>
        <span className="title">
            Your list
        </span>
      <br></br>
      <div>
        {props.items.map((item, index) => (
          <div key={index}>
            <p>
              <span className="updatelist">
                [item: {item.item}] [price:$ {item.price}] [date: {item.date}]{" "}
              </span>
              <button onClick={() => props.remove(index)}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    </h2>
  );
};

export default Bottom;
