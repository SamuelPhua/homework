import React, { useContext } from "react";
import SomeContext from "../SomeContext";

const Counter = () => {
  const stc = useContext(SomeContext);

  /*
   ** Creating a counter to handle the number of clicks and the reset button function
   */
  const handleResetButton = () => {
    stc.setCount(0);
    stc.setColor(stc.lightData[0].color);
  };
  return (
    <div>
      <h1>Number Of Clicks: {stc.count} </h1>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
};

export default Counter;
