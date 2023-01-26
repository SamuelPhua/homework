import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

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
        <Input
          type="text"
          value={item}
          placeholder="item"
          save={(e) => setItem(e)}
        />
        <br></br>
        <Input
          type="text"
          value={price}
          placeholder="price"
          save={(e) => setPrice(e)}
        />
        <br></br>
        <input className="list2" type="text" value={date} />
        {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
        <Button save={handleSubmit} />
      </h1>
    </>
  );
};

export default Top;
