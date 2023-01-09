import React, { useState } from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherIcons from "./components/WeatherIcons";
import WeatherIcon from "./components/WeatherIcon";
import WeatherData from "./components/WeatherData";

export default function App() {
  const [name, setName] = useState("Eugene");
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1>{name} WeatherIcons App</h1>
      <section>
        {show ? (
          weatherData.map((value, index) => (
            <WeatherIcons key={index}>
              <WeatherIcon thePropName={value.image} />
              <WeatherData conditions={value.conditions} time={value.time} />
            </WeatherIcons>
          ))
        ) : (
          <p>no icon</p>
        )}
        {/* {weatherData.map((value, index) => (
          <WeatherIcons
            img={value.img}
            conditions={value.conditions}
            time={value.time}
            key={index}
          />
        ))} */}
      </section>
      <button onClick={() => setShow((prevState) => !prevState)}>
        Change Show
      </button>
    </div>
  );
}
