import React, { useContext } from "react";
import SomeContext from "../SomeContext";

function Controls() {
  const stc = useContext(SomeContext);

  /*
  ** Create a function to handle all sort of color changes on button click
  ** Additionally the count will be incremental on every click
  */
  const handleClick = (button) => {
    if (button == "off") {
      stc.setColor(stc.lightData[0].color);
    } else if (button == "low") {
      stc.setColor(stc.lightData[1].color);
    } else if (button == "medium") {
      stc.setColor(stc.lightData[2].color);
    } else if (button == "high") {
      stc.setColor(stc.lightData[3].color);
    } else if (button == "reset") {
      stc.setColor(stc.lightData[0].color)
    }
    stc.setCount(stc.count + 1);
  };

  const lightButtons = stc.controls.map((d, i) => {
    return (
      <button key={i} onClick={() => handleClick(d)}>
        {d}
      </button>
    );
  });

  return (
    <>
      <div className="controls">{lightButtons}</div>
    </>
  );
}

export default Controls;
