import React, { useState } from "react";

const Card = (props) => {
  const [backgroundImage, setcardImage] = useState(props.backgroundImage);

  const handleClick = () => {
    setcardImage(props.cardImage);
  };

  return (
    <div className="board">
      <img src={props.backgroundImage} onClick={handleClick}></img>
    </div>
  );
};

export default Card;
