import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [WeatherDetail, setWeatherDetail] = useState({ ready: false });
  let [city, setCity] = useState("london");

  function setCityName(event) {
    setCity(event.target.value);
  }
  function getCityInfo(event) {
    event.preventDefault();
    const apiId = "d61e33eb8b7d77b8e9f463b4ce970f4d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=metric`;
    axios(apiUrl).then(getWeatherInfo);
  }
  function getWeatherInfo(response) {
    setWeatherDetail({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }
  return (
    <form className="search-form" onClick={getCityInfo}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="search a city ..."
            className="search-city"
          ></input>
        </div>
        <div className="col-3">
          <input
            onChange={setCityName}
            type="submit"
            value="Search"
            className="btn btn-branding"
          ></input>
        </div>
      </div>
    </form>
  );
}
