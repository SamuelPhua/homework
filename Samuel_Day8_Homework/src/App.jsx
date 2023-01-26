import React, { useState } from "react";
import Controls from "./components/Controls";
import Light from "./components/Light";
import lightData from "./lightData";
import SomeContext from "./SomeContext";
import Counter from "./components/Counter";

function App() {
  const controls = ["off", "low", "medium", "high"];

  // Setting initialState of color to be color: "rgba(0,0,0,1)
  const [color, setColor] = useState(lightData[0].color);

  // Setting initialState of count to be 0
  const [count, setCount] = useState(0);

  return (
    /*
     ** lightData, controls (from the map function under lightButtons), color, setColor, count, setCount
     ** involved in the component Controls
     */
    <SomeContext.Provider
      value={{ lightData, controls, color, setColor, count, setCount }}
    >
      <div className="App">
        <Controls controls={controls} />
        <Light />
        <Counter />
      </div>
    </SomeContext.Provider>
  );
}

export default App;
