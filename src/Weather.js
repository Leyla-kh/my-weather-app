import React, { useState } from "react";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";
import "./Weather.css";

export default function Weather() {
  let [weatherDetail, setWeatherDetail] = useState({ ready: false });
  let [city, setCity] = useState("london");

  function getWeatherInfo(response) {
    setWeatherDetail({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }
  function setCityName(event) {
    setCity(event.target.value);
  }
  function getCityInfo(event) {
    event.preventDefault();
    search(city);
  }
  function search() {
    const apiId = "d61e33eb8b7d77b8e9f463b4ce970f4d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=metric`;
    axios(apiUrl).then(getWeatherInfo);
  }
  if (weatherDetail.ready) {
    return (
      <div className="Weather">
        <form className="search-form" onSubmit={getCityInfo}>
          <div className="row">
            <div className="col-9">
              <input
                onChange={setCityName}
                type="search"
                placeholder="search a city ..."
                className="search-city"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-branding"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInformation data={weatherDetail} />
      </div>
    );
  } else {
    search(city);
    return "loading...";
  }
}
