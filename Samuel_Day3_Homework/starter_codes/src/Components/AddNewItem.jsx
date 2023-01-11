import React, { useState } from "react";

const AddNewItem = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [describe, setDescribe] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescribeChange = (event) => {
    setDescribe(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newInputs = {
      name,
      price,
      describe,
    };
    props.save(newInputs);
    props.amount({name: name, price: parseFloat(price)})
  };

  return (
    <>
      <input
        value={name}
        type="text"
        onChange={handleNameChange}
        placeholder="product name"
      />
      <input
        value={price}
        type="text"
        onChange={handlePriceChange}
        placeholder="price"
      />
      <input
        value={describe}
        type="text"
        onChange={handleDescribeChange}
        placeholder="description"
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </>
  );
};

export default AddNewItem;
