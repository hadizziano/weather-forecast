import React, { useState } from "react";
import cityData from "./cityData.json";
import Weather from "./components/Weather";
import Nature from "./components/Nature";
import Waters from "./components/Waters";
import "./App.css";
import Header from "./components/Header";
import ImageGallery from "./components/gallery";
function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cityInfo, setCityInfo] = useState(null);

  const handleCountryChange = (event) => {
    const countryName = event.target.value;
    setSelectedCountry(countryName);
    setSelectedCity("");
    setCityInfo(null);
  };

  const handleCityChange = (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);

    const country = cityData.countries.find(
      (country) => country.name === selectedCountry
    );
    const city = country.cities.find((city) => city.name === cityName);
    setCityInfo(city);
  };

  return (
    <div>
      <ImageGallery />
      <Header />
      <img className="logoimage" src="./logo.png" width="180px" alt="logo" />
      <div className="datamixer">
        <div className="searchbox">
          <h1>Weather && Nature </h1>
          <label>
            Select a country:
            <select
              className="inputSelectors"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">Select</option>
              {cityData.countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Select a city:
            <select
              className="inputSelectors"
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option value="">Select</option>
              {selectedCountry &&
                cityData.countries
                  .find((country) => country.name === selectedCountry)
                  .cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
            </select>
          </label>
          <br />
        </div>
        {cityInfo && (
          <div className="container">
            <Weather weather={cityInfo.weather} />
            <Nature nature={cityInfo.nature} />
            <Waters waters={cityInfo.waters} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
