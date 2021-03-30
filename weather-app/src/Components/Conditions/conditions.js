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
  }
  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div class="bg-gray-50 pt-12 sm:pt-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
              <img class="mx-auto object-center" src={urls} alt="icon" />
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {props.responseObj.name}
              </h2>
              <p class="mt-3 text-xl text-gray-500 sm:mt-4">
                It is currently {Math.round(props.responseObj.main.temp)}{" "}
                degrees feels like{" "}
                {Math.round(props.responseObj.main.feels_like)}, with{" "}
                {props.responseObj.weather[0].description}.
              </p>
            </div>
          </div>
          <div class="mt-10 pb-12 bg-white sm:pb-16">
            <div class="relative">
              <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
              <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto">
                  <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Temperature
                      </dt>
                      <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                        {Math.round(props.responseObj.main.temp)}°
                      </dd>
                    </div>
                    <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Real Feel
                      </dt>
                      <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                        {Math.round(props.responseObj.main.feels_like)}°
                      </dd>
                    </div>
                    <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                      <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Sky
                      </dt>
                      <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                        {props.responseObj.weather[0].main}
                      </dd>
                    </div>
                    <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Wind speed
                      </dt>
                      <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                        {Math.round(props.responseObj.wind.speed)}
                      </dd>
                    </div>
                    <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Sunset
                      </dt>
                      <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                        {formattedTimeSet}
                      </dd>
                    </div>
                    <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Sunrise
                      </dt>
                      <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                        {formattedTimeRise}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default conditions;
