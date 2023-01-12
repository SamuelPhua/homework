import React, { useState } from "react";
import Top from "./components/Top";
// import Bottom from "./components/Bottom";

/*
** So I will have 3 total components
** My Top component have my inputs[item, price, data] and this component will handle them
** My Bottom component will display everything that my Top component has, which we will need to onSave and lift state
** My app will be handling the states when newItems are added
**
**
**
**
*/

export default function App() {
  const [listItems, setListItems] = useState([])
  const [addedItems, setAddedItems] = useState([]);

  const handleList = (event) => {
    setAddedItems([...addedItems, event]);
  };

  const addNewItem = (enteredData) => {
    setListItems([enteredData, ...listItems])
  }

  // const removeAddedItems = (index) => {
  //   const addedItemsArray = addedItems.filter((i, j) => j !== index);
  //   setAddedItems(addedItemsArray);
  // };

return (
  <div>
    <Top save={handleList}/>
    <Bottom />
  </div>
)
}