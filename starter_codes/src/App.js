import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherIcons from "./components/WeatherIcons";
import WeatherIcon from "./components/WeatherIcon";
import WeatherData from "./components/WeatherData";

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {weatherData.map((value, index) => (
          <WeatherIcons key={index}>
            <WeatherIcon thePropName={value.image} />
            <WeatherData conditions={value.conditions} time={value.time} />
          </WeatherIcons>
        ))}
        {/* {weatherData.map((value, index) => (
          <WeatherIcons
            img={value.img}
            conditions={value.conditions}
            time={value.time}
            key={index}
          />
        ))} */}
      </section>
    </div>
  );
}
