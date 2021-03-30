export function getForecast(e, unit, uriEncodedCity, setResponseObj) {
  //e.preventDefault();

  fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1a38598756msh9039c05e4c8f4e1p174d0ejsnf71f00a301bc",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      setResponseObj(response);
    });
}
