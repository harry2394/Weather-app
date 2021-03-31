import React from "react";

const conditions = (props) => {
  if (props.responseObj.cod === 200) {
    var urls =
      "http://openweathermap.org/img/wn/" +
      props.responseObj.weather[0].icon +
      "@2x.png";

    var sunsetTime = new Date(0);
    sunsetTime.setUTCSeconds(Math.round(props.responseObj.sys.sunset));
    var SHours = sunsetTime.getHours();
    var SMinutes = sunsetTime.getMinutes();

    var formattedTimeSet = SHours + " : " + SMinutes;

    var sunRiseTime = new Date(0);
    sunRiseTime.setUTCSeconds(Math.round(props.responseObj.sys.sunrise));
    var RHours = sunRiseTime.getHours();
    var RMinutes = sunRiseTime.getMinutes();

    var formattedTimeRise = RHours + " : " + RMinutes;

    var hours = new Date().getHours();
    var mins = new Date().getMinutes();

    var Box = ({ body, title }) => {
      return (
        <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
            {title}
          </dt>
          <dd className="order-1 text-5xl font-extrabold text-indigo-600">
            {body}
          </dd>
        </div>
      );
    };
    console.log(Box);
  }
  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div className="bg-gray-50 pt-12 sm:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <img className="mx-auto object-center" src={urls} alt="icon" />
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {props.responseObj.name}
              </h2>
              <h3 className="text-3xl font-extrabold text-gray-600 sm:text-2xl">
                {hours + " : " + mins}
              </h3>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                It is currently {Math.round(props.responseObj.main.temp)}{" "}
                degrees feels like{" "}
                {Math.round(props.responseObj.main.feels_like)}, with{" "}
                {props.responseObj.weather[0].description}.
              </p>
            </div>
          </div>
          <div className="mt-10 pb-12 bg-white sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <Box
                      title="Temperature"
                      body={Math.round(props.responseObj.main.temp) + "°"}
                    />
                    <Box
                      title="Real Feel"
                      body={Math.round(props.responseObj.main.feels_like) + "°"}
                    />
                    <Box title="sky" body={props.responseObj.weather[0].main} />
                    <Box
                      title="Wind Speed"
                      body={Math.round(props.responseObj.wind.speed)}
                    />
                    <Box title="Sunset" body={formattedTimeSet} />
                    <Box title="Sunrise" body={formattedTimeRise} />
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {props.responseObj.cod !== 200 && (
        <p>Oop! Looks like you havent entered a correct City.</p>
      )}
    </div>
  );
};

export default conditions;
