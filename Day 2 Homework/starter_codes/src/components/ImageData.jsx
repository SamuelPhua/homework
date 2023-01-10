import React, { useState } from "react";
import imagesArr from "../imageData";

const ImageData = (props) => {
  const [images, setImages] = useState({
    img: "",
    city: "",
  });

  const changeImages = (event) => {
    setImages((prevState) => {
      return { ...prevState, img: event.target.value };
    });
  };

  return (
    <div className="thumb">
      <img src={props.img} onClick={changeImages}>
        {imagesArr.map((value, index) => (
          <ImageData img={value.img} city={value.city} key={index} />
        ))}
      </img>
    </div>
  );
};

export default ImageData;
