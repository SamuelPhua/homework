// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  // imageArr[0] = First item in array
  // First item in array is an { img, city }
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  // const [cityName, setCityName] = useState(imagesArr[0].city)
  // bigImage = "www.url.com", bigImage = { A: 1, B: 2 }

  // useState - When I want to crate new State

  // const handleClick2 = (event) => {
  //   setSecondState((prevState) => {
  //     return [3, 4]; // [3, 4]
  //   });
  //   // setSecondState((prevState) => {
  //   //   return [...prevState, 3, 4] // [0, 1, 2, 3, 4]
  //   // })
  //   // Note: spread operator only works for objects and array
  // };

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const handleClick = (img) => {
    setBigImage(img);
    // setCityName(event)
  };

  /**
   * handleClick function
   *
   * props = "a"
   * setBigImage(props) // not correct
   *
   */

  /**
   * imageArray = [ { img: a, city: a },  { img: b, city: b } ]
   * <Components src={imageArray[0].city} alt="else" />
   * props.src
   * props.alt
   *
   * .map
   * 1st loop - value = { img: a, city: a }, key = 0
   * src => a (value.img)
   * alt => a (value.city)
   * handleClick(a) (value.img)
   *
   * 2nd loop - value = { img: b, city: b }, key = 1
   * src => b (value.img)
   * alt => b (value.city)
   * handleClick({ img: b, city: b }) (value)
   *
   */

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  const images = imagesArr.map((value, index) => {
    // const value = {city, img}
    return (
      <img
        src={value.img}
        alt={value.city}
        className="thumb"
        key={index}
        onClick={() => handleClick(value.img)}
      />
    );
  });
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images}
          {/* RENDER THE IMAGES ARRAY  */}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}

{/* <img src={bigImage} id="bigimage" alt="bigImage" />; */}

// const App = () => {
//   const [bigImage, setBigImage] = useState('bigImage')
//   const handleClick = (img) => {
//     setBigImage(img)
//   }
//   // zero knowledge of small image
//   return <>
//   <ImageData handleClick={handleClick} />
//   <img src={bigImage} id="bigimage" alt="bigImage" />
//   </>
// }

// const ImageData = (props) => {
//   const [smallImage, setSmallImage] = useState('smallImage');
//   return data.map((value, key) => {
//     // small img data
//     return <Image onClick={() => props.handleClick(value.img)} />
//   })
// }

// const Parent = () => {
//   const [bigImage, setBigImage] = useState;
//   const [parentState, setParentState] = useState("parent");
//   const [childState, setChildState] = useState("child");

//   return (
//     <>
//       <Child parentState={parentState} onParentStateChange={setParentState} />
//       <img src={bigImage} id="bigimage" alt="bigImage" />
//     </>
//   );
// };

// // Import Data []

// const Child = (props) => {
//   const { parentState, onParentStateChange } = props;

//   // do whatever i want with parentProp
//   const updateParent = () => {
//     onParentStateChange("parent changes");
//   };

//   return data.map(() => {
//     return <GrandChild parentState={props.parentState}></GrandChild>
//   });
// };

// const GrandChild = (props) => {
//   const { parentState } = props;
//   // props drilling - drilling props from parent to grandchild
//   return;
// };

