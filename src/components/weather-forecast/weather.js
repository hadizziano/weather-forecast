import React from "react";

const Weather = ({ city }) => {
  return (
    <div className="weather-container">
      <h3>{city.name}</h3>
      {city.forecast.map((day, index) => (
        <div className="forecast-card" key={index}>
          <h4>{day.day}</h4>
          <p>{day.temperature}</p>
          <p>{day.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Weather;
