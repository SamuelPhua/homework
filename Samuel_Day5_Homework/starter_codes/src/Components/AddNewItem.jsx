import React, { useState, useRef } from "react";

const AddNewItem = (props) => {
  const [addNewItem, setAddNewItem] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [ifValid, setIfValid] = useState(true);
  const [addError, setAddError] = useState(null);

  const nameRef = useRef();
  const priceRef = useRef();
  const desRef = useRef();

  const setInputFocus = () => {
    if (nameRef.current.value.length == 0) {
      nameRef.current.focus();
    } else if (priceRef.current.value.length == 0) {
      priceRef.current.focus();
    } else if (desRef.current.value.length == 0) {
      desRef.current.focus();
    }
  };

  const handleChange = (event) => {
    setAddNewItem((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputFocus();

    if (addNewItem.name == "") {
      setIfValid(false);
      setAddError("Please key in the product name");
      return;
    } else if (isNaN(addNewItem.price)) {
      setIfValid(false);
      setAddError("Price must be a number");
      return;
    } else if (addNewItem.description == "") {
      setIfValid(false);
      setAddError("Please add in your product description");
      return;
    }

    props.handleSubmit(addNewItem);
    setAddNewItem({ name: "", price: "", description: "" });
    setIfValid(true);
    setAddError(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={addNewItem.name}
          type="text"
          onChange={handleChange}
          placeholder="product name"
          ref={nameRef}
          name="name"
        />
        <input
          value={addNewItem.price}
          type="text"
          onChange={handleChange}
          placeholder="price"
          ref={priceRef}
          name="price"
        />
        <input
          value={addNewItem.description}
          type="text"
          onChange={handleChange}
          placeholder="description"
          ref={desRef}
          name="description"
        />
        <button type="submit">Submit</button>
        {!ifValid && <h4>{addError}</h4>}
      </form>
    </>
  );
};

export default AddNewItem;
