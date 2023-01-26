import React, { useRef } from "react";

const Form = (props) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    props.handleSubmit(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="type of giphy" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
