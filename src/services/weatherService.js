const OPEN_WEATHER_API_KEY = "ab1204e0958cc66b2fea74fa220d4b5c";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: OPEN_WEATHER_API_KEY,
  });
  console.log(url);
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res);
};

export { getWeatherData };
