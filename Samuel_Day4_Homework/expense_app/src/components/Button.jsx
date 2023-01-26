import React from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={(e) => props.save(e.target.value)} />
    </>
  );
};

export default Button;
