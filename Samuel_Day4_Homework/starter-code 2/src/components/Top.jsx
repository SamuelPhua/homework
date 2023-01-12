import React, { useState } from "react";

const Top = (props) => {
  const currDate = new Date().toISOString().split("T")[0];
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(currDate);

  const handleItem = (event) => {
    setItem(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleDate = (date) => {
    setDate(date);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newInputs = {
      item,
      price,
      date,
    };
    props.save(newInputs);
  };

  return (
    <>
      <h1 className="top">
        <input
          value={item}
          type="text"
          onChange={handleItem}
          placeholder="name of item"
        />
        <input
          value={price}
          type="text"
          onChange={handlePrice}
          placeholder="how much"
        />
        <input
          value={date}
          type="text"
          onChange={handleDate}
          placeholder="today's date"
        />
        {/* <button onClick={handleSubmit} type="submit">
          Submit
        </button> */}
      </h1>
    </>
  );
};

export default Top;
