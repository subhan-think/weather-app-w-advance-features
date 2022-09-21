// import { DateTime } from "luxon";
// const OPEN_WEATHER_API_KEY = "7f0bf644bb04a7323a4535732644ade6";

// const BASE_URL = "https://api.openweathermap.org/data/2.5";

// // for Api url auto customization
// const getWeatherData = (infoType, searchParams) => {
//   const url = new URL(BASE_URL + "/" + infoType);
//   url.search = new URLSearchParams({
//     ...searchParams,
//     appid: OPEN_WEATHER_API_KEY,
//   });
//   console.log(url);
//   return fetch(url)
//     .then((res) => res.json())
//     .then((res) => res);
// };

// const destructureCurrentWeatherData = (weather_data_to_destructure) => {
//   console.log(weather_data_to_destructure);
//   const {
//     coord: { lat, lon },
//     main: { temp, feels_like, temp_min, temp_max, humidity },
//     name,
//     dt,
//     sys: { country, sunrise, sunset },
//     weather,
//     wind: { speed },
//     timezone,
//   } = weather_data_to_destructure;

//   const { main: details, icon } = weather[0];

//   return {
//     lat,
//     lon,
//     temp,
//     feels_like,
//     temp_min,
//     temp_max,
//     humidity,
//     name,
//     dt,
//     country,
//     sunrise,
//     sunset,
//     speed,
//     details,
//     icon,
//     timezone,
//     title: formatToLocalTime(dt, timezone),
//   };
// };

// const destructureForecastWeatherData = (
//   forecast_data_to_destructure,
//   timezone
// ) => {
//   console.log(forecast_data_to_destructure);
//   const { list } = forecast_data_to_destructure;

//   const modifiedArray = list.slice(6);
//   const arrayToReturn = list.slice(4, 5);
//   let number = 0;
//   for (let i = 1; i <= 4; i++) {
//     let sevenSix = 6 * i;
//     sevenSix += number;
//     number = number + 2;

//     let eight = sevenSix + 1;
//     let arrayToAppend = [];

//     arrayToAppend = modifiedArray.slice(sevenSix, eight);
//     arrayToReturn[i] = arrayToAppend[0];
//   }
//   console.log(modifiedArray, arrayToReturn);

//   let destructuringAndOrganizingArray = arrayToReturn.map((item, index) => {
//     let {
//       dt,
//       dt_txt,
//       main: { temp },
//       weather,
//     } = item;
//     const { main: details, icon } = weather[0];
//     return {
//       dt,
//       dt_txt,
//       temp,
//       details,
//       icon,
//       title: formatToLocalTime(dt, timezone, "hh:mm a"),
//       day: formatToLocalTime(dt, timezone, "cccc"),
//       dehli: formatToLocalTime(1663778223, 18000),
//     };
//   });

//   return destructuringAndOrganizingArray;
// };

// const getFormattedWeatherData = async (searchParams) => {
//   const formattedWeatherCurrentData = await getWeatherData(
//     "weather",
//     searchParams
//   ).then((res) => destructureCurrentWeatherData(res));

//   const { lat, lon, timezone } = formattedWeatherCurrentData;

//   const formattedForecastData = await getWeatherData("forecast", {
//     lat,
//     lon,
//     units: searchParams.units,
//   }).then((res) => destructureForecastWeatherData(res, timezone));

//   console.log(formattedForecastData);

//   return {
//     daily: formattedWeatherCurrentData,
//     forecast: formattedForecastData,
//   };
// };

// const formatToLocalTime = (
//   secs,
//   zone,
//   format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// const iconUrlFromCode = (code) =>
//   `http://openweathermap.org/img/wn/${code}@2x.png`;

// export { getFormattedWeatherData, iconUrlFromCode, formatToLocalTime };

import { DateTime } from "luxon";

const API_KEY = "7f0bf644bb04a7323a4535732644ade6";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  // let { timezone, daily, hourly } = data;
  // daily = daily.slice(1, 6).map((d) => {
  //   return {
  //     title: formatToLocalTime(d.dt, timezone, "ccc"),
  //     temp: d.temp.day,
  //     icon: d.weather[0].icon,
  //   };
  // });

  // hourly = hourly.slice(1, 6).map((d) => {
  //   return {
  //     title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
  //     temp: d.temp,
  //     icon: d.weather[0].icon,
  //   };
  // });

  return {};
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
