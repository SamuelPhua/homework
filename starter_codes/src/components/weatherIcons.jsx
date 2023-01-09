import React from "react";

const weatherIcons = (props) => {
  return (
    <div className="weather">
      <img src={props.img} alt="" />
      <p>
        <span>conditions:</span> {props.conditions}
      </p>
      <p>
        <span>time:</span> {props.time}
      </p>
    </div>
  );
};

export default weatherIcons;
