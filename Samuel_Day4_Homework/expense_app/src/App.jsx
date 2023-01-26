import React, { useState } from "react";
import Top from "./components/Top";
import Bottom from "./components/Bottom";


export default function App() {
  const [listItems, setListItems] = useState([]);

  const handleList = (event) => {
    setListItems([event, ...listItems]);
  };

  const removeAddedItems = (index) => {
    const updatedItems = listItems.filter((item, i) => i !== index);
    setListItems(updatedItems);
  };

  return (
    <div>
      <Top save={handleList} />
      <Bottom items={listItems} remove={removeAddedItems} />
    </div>
  );
}
