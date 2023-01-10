import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

/**
 *
 * @param {img, conditions, time} param
 * @returns
 */

const WeatherIcons = ({ children }) => {
  return <div className="weather">{children}</div>;
};
// const WeatherIcons = (props) => {
//   const { img, conditions, time } = props;
//   return (
//     <div className="weather">
//       <WeatherIcon src={img} />
//       <WeatherData conditions={conditions} time={time} />
//     </div>
//   );
// };

export default WeatherIcons;
