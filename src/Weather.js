import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <li className="city-name">Paris</li>
            <li>Friday 11:38 </li>
            <li>broken clouds</li>
          </ul>
        </div>
        <div className="col-6 ">
          <div className="row">
            <div className="col-6 ps-3">
              <span className="temperatue"> 17 </span>
              <span className="temp-uint">°C</span>
              <ul>
                <li>Humidity: 75%</li>
                <li>Wind: 5.14km/h</li>
              </ul>
            </div>
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
