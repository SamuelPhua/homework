import React, { useState } from "react";

const Top = (props) => {
  const currDate = new Date().toISOString().split("T")[0];
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(currDate);

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
      <h1>
        <div className="title">Update your list</div>
        <br></br>
        <input className="list1"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="item"
        />
        <br></br>
        <input className="list2"
          label="Price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
        <br></br>
        <input className="list3"
          label="Price"
          type="text"
          value={date}
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </h1>
    </>
  );
};

export default Top;
