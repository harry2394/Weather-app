import React from "react";

const conditions = (props) => {
  let urls = 1;
  // "http://openweathermap.org/img/wn/" +
  // props.responseObj.weather[0].icon +
  // "@2x.png";
  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>

          <p>
            It is currently {Math.round(props.responseObj.main.temp)} degrees
            feels like {Math.round(props.responseObj.main.feels_like)}, with{" "}
            {props.responseObj.weather[0].description} .
          </p>
          <img src={urls} alt="icon" />
        </div>
      ) : null}
    </div>
  );
};

export default conditions;
