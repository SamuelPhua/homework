import React, { useState } from "react";

const Card = (props) => {
  const [backgroundImage, setcardImage] = useState(props.backgroundImage);

  const handleClick = () => {
    setcardImage(props.cardImage)
  }
  
  return 
  <div>
    <button onClick={handleClick}></button>
  </div>;
};

export default Card;
