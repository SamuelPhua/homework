import React, { useState } from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherIcons from "./components/WeatherIcons";
import WeatherIcon from "./components/WeatherIcon";
import WeatherData from "./components/WeatherData";

export default function App() {
  return (
    <div className="App">
      <h1>{name} WeatherIcons App</h1>
      <section>
        {weatherData.map((value, index) => (
          <WeatherIcons
            img={value.img}
            conditions={value.conditions}
            time={value.time}
            key={index}
          />
        ))}
      </section>
      <button onClick={() => setShow((prevState) => !prevState)}>
        Change Show
      </button>
    </div>
  );
}
