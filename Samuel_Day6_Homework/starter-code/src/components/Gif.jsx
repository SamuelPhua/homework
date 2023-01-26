import React from "react";

const Gif = (props) => {
  return (
    <div>
      <img src={props.gifSource.image_url} alt="" />
    </div>
  );
};

export default Gif;
