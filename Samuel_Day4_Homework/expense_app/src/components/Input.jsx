import React from "react";

const Input = (props) => {
  return (
    <>
      <input className="list1" onChange={(e) => props.save(e.target.value)} />
    </>
  );
};

export default Input;
