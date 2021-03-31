import React, { useEffect, useState } from "react";
import Conditions from "../Conditions/conditions";
import "../../App.css";
import { getForecast } from "../Forcast/GetForcast";

const Forecast = () => {
  let [city, setCity] = useState();
  let [unit, setUnit] = useState("imperial");
  let [responseObj, setResponseObj] = useState({});

  const uriEncodedCity = encodeURIComponent(city);
  useEffect(() => {
    //to avoid multiple calls, I ask this only to do this if undefined (which it will be on render)
    //else it will just ignore this
    if (city === undefined) {
      const defaultCity = encodeURIComponent("london");
      getForecast("imperial", defaultCity, setResponseObj);
    }
  }, [city]);
  //create an onSubmit function that is solely for the form
  //this has the event prevent default and also calls the function to
  //get the forecast and set it
  const onSubmit = (e) => {
    e.preventDefault();
    getForecast(unit, uriEncodedCity, setResponseObj);
  };
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form
        //onSubmit={(e) => getForecast(e, unit, uriEncodedCity, setResponseObj)}
        onSubmit={onSubmit}
      >
        <div class="flex items-center justify-center">
          <label htmlFor="Enter_City" class="sr-only">
            Enter City
          </label>
          <input
            type="text"
            name="Enter_City"
            id="Enter_City"
            autocomplete="name"
            class="block w-half text-center shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div class="flex items-center justify-center">
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
          />
          <label htmlFor="budget_under_25k" class="m-3">
            <span class="block text-sm text-gray-700">Fahrenheit</span>
          </label>
        </div>

        <div class="flex items-center justify-center">
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
          />
          <label htmlFor="budget_under_25k" class="m-3">
            <span class="block text-sm text-gray-700">Celcius</span>
          </label>
        </div>

        <button
          class="w-half inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        >
          Get Forecast
        </button>
      </form>
      <Conditions responseObj={responseObj} />
    </div>
  );
};

export default Forecast;
