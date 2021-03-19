import React, { useState } from "react";
import Conditions from "../Conditions/conditions";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});

  function getForecast() {
    // weather data fetch function will go here
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?q=London",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "1a38598756msh9039c05e4c8f4e1p174d0ejsnf71f00a301bc",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      });
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <button onClick={getForecast}>Get Forecast</button>
      <Conditions responseObj={responseObj} />
    </div>
  );
};

export default Forecast;
