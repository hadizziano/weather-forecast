import React from "react";

const Weather = ({ weather }) => {
  return (
    <div className="weather-container">
      <img width="100px" src="weather.png" alt="weather" />
      Weather
      <div className="information">
        <p>
          Temperature:<infotext>{weather.temperature}</infotext>
        </p>
        <p>
          Humidity: <infotext>{weather.humidity}</infotext>
        </p>
        <p>
          Wind:<infotext> {weather.wind}</infotext>
        </p>
        <p>
          Precipitation: <infotext>{weather.precipitation}</infotext>
        </p>
        <p>
          Conditions: <infotext>{weather.conditions}</infotext>
        </p>
      </div>
    </div>
  );
};

export default Weather;
