import React from "react";
import FormatedDate from "./FormatedDate";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherInformation.css";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInformation(props) {
  const iconCode = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <div className="row">
      <div className="col-6">
        <ul>
          <li className="city-name">{props.data.city}</li>
          <li>
            <FormatedDate unFormatDate={props.data.date} />{" "}
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="col-6 ">
        <div className="row">
          <div className="col-6 ps-3">
            <WeatherTemp tempC={props.data.temperature} />
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
          <div className="col-6">
            <ReactAnimatedWeather
              icon={iconCode[props.data.icon]}
              color={"gray"}
              size={100}
              animate={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
