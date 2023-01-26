import React, { useContext } from "react";
import SomeContext from "../SomeContext";

function Lights() {
  const stc = useContext(SomeContext);

  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid",
    background: stc.color,
  };

  return <div style={styles}></div>;
}

export default Lights;
