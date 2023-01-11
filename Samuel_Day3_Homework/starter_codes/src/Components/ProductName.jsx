import React, { useState } from "react";

const ProductName = (props) => {
  const [name, setName] = useState("");

  const changeName = name;

  const handleChange = (event) => {
    setName(event.target.value);
    props.onSave(changeName);
  };

  return (
    <div>
      <input
        className="AllTheThings"
        type="text"
        name={name}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default ProductName;
