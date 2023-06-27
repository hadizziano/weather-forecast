import React, { useState } from "react";
import Weather from "./components/weather-forecast/weather";
import weatherData from "./weatherData.json";
import "./App.css";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(
    weatherData.locations[0]
  );
  const [selectedCity, setSelectedCity] = useState(selectedCountry.cities[0]);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    const country = weatherData.locations.find(
      (location) => location.country === selectedCountry
    );
    setSelectedCountry(country);
    setSelectedCity(country.cities[0]);
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    const city = selectedCountry.cities.find(
      (city) => city.name === selectedCity
    );
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <h1 className="app-title">Weather Forecast</h1>
      <div className="select-container">
        <label className="select-label">Select Country: </label>
        <select className="select-box" onChange={handleCountryChange}>
          {weatherData.locations.map((location, index) => (
            <option key={index} value={location.country}>
              {location.country}
            </option>
          ))}
        </select>
      </div>
      <div className="select-container">
        <label className="select-label">Select City: </label>
        <select className="select-box" onChange={handleCityChange}>
          {selectedCountry.cities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCity && <Weather city={selectedCity} />}
    </div>
  );
};

export default App;
