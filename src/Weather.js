import React, { useState } from "react";
import axios from "axios";
import FormatedDate from "./FormatedDate.js";
import "./Weather.css";

export default function Weather() {
  let [WeatherDetail, setWeatherDetail] = useState({ ready: false });
  let city = "london";
  const apiId = "d61e33eb8b7d77b8e9f463b4ce970f4d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=metric`;
  axios(apiUrl).then(getWeatherInfo);
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
  if (WeatherDetail.ready) {
    return (
      <div className="Weather">
        <form className="search-form">
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
                type="submit"
                value="Search"
                className="btn btn-branding"
              ></input>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="city-name">{WeatherDetail.city}</li>
              <li>
                <FormatedDate date={WeatherDetail.date} />{" "}
              </li>
              <li className="text-capitalize">{WeatherDetail.description}</li>
            </ul>
          </div>
          <div className="col-6 ">
            <div className="row">
              <div className="col-6 ps-3">
                <span className="temperatue">
                  {Math.round(WeatherDetail.temperature)}
                </span>
                <span className="temp-uint">°C</span>
                <ul>
                  <li>Humidity: {WeatherDetail.humidity} %</li>
                  <li>Wind: {WeatherDetail.wind} km/h</li>
                </ul>
              </div>
              <div className="col-6">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt={WeatherDetail.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "loading...";
  }
}
