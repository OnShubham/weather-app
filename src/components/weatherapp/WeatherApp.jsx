import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../assets/search.png";
import cloud_icon from "../assets/cloud.png";
import clear_icon from "../assets/clear.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const WeatherApp = () => {

let api_key = "f8055877d55538a3abc3a65d57ed864b";

const [wicon,setwicon] = useState(cloud_icon);


const Search = async () => {
  const element = document.getElementsByClassName("Cityinput")
  if (element[0].value===""){
    return 0;
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
  let response = await fetch (url);
  let data = await response.json();
  const humidity = document.getElementsByClassName("humidity-precent");
  const wind = document.getElementsByClassName("wind-rate");
  const temprature = document.getElementsByClassName("weather-temp");
  const location = document.getElementsByClassName("weather-location");
  

  humidity[0].innerHTML = data.main.humidity+ "%";
  wind[0].innerHTML = Math.floor(data.wind.speed)+ "km/h";
  temprature[0].innerHTML = Math.floor(data.main.temp)+ "°c";
  location[0].innerHTML = data.name;


  if(data.weather[0].icon==="01d"  || data.weather[0].icon==="01n"){
    setwicon(clear_icon);
  }
  else if (data.weather[0].icon==="02d"  || data.weather[0].icon==="02n"){
    setwicon(cloud_icon);
  }
  else if (data.weather[0].icon==="03d"  || data.weather[0].icon==="03n"){
    setwicon(drizzle_icon);
  }
  else if (data.weather[0].icon==="04d"  || data.weather[0].icon==="04n"){
    setwicon(drizzle_icon);
  }
  else if (data.weather[0].icon==="10d"  || data.weather[0].icon==="10n"){
    setwicon(rain_icon);
  }
  else if (data.weather[0].icon==="09d"  || data.weather[0].icon==="09n"){
    setwicon(rain_icon);
  }
  else if (data.weather[0].icon==="13d"  || data.weather[0].icon==="13n"){
    setwicon(snow_icon);
  }
  else {
    setwicon(clear_icon);
  }

}

  return (
    <div className="container">
      {/* search bar  start */}
      <div className="top-bar">
        <input type="text" className="Cityinput" placeholder="Search" />
        <div className="search-icon" onClick={()=>{Search()}}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      {/* search bar end */}

      <div className="weather-img">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp"> 24°C </div>
      <div className="weather-location"> India </div>
      <div className="data-container">

      <div className="elements">
        <img src={humidity_icon} alt="" className="icon" />
        <div className="data">
          <div className="humidity-precent">64%</div>
          <div className="text">Humidity</div>
        </div>
        </div>

        <div className="elements">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
          </div>
          <div className="text">Wind Speed</div>
        </div>
        </div>
    </div>
  );
};

export default WeatherApp;
