import "./App.css";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import { getFormattedWeatherData } from "./services/weatherService";
import { useState, useEffect } from "react";
function App() {
  // LearningCode();

  const [query, setQuery] = useState({ q: "berlin" });
  // const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      let getDataWeather = await getFormattedWeatherData({
        ...query,
        units: "metric",
      });
      setWeather(getDataWeather);
      console.log(getDataWeather);
    };

    fetchWeather();
  }, [query]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = 20;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  console.log(weather);
  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButton />
      <Inputs changeInput={setQuery} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          {/* <Forecast title="hourly forecast" items={weather.hourly} /> */}
          {/* <Forecast title="daily forecast" items={weather.daily} /> */}
        </div>
      )}
    </div>
  );
}

// function LearningCode() {
//   let url1 = new URL("https://javascript.info/profile/admin");
// fetch(url1)
//   .then((data) => data.json)
//   .then((data) => console.log(data));
// console.log(url1);
// https://javascript.info/profile/admin
// let m = "https://developer.mozilla.org";
// let b = new URL(m);
// console.log(new URL({}));
// alert(b);

// const paramsString = "q=URLUtils.searchParams&topic=api";
// const searchParams = new URLSearchParams(paramsString);

// // Iterating the search parameters
// for (const p of searchParams) {
//   console.log(p);
// }

// console.log(searchParams.has("topic")); // true
// console.log(searchParams.get("topic")); // true
// Search parameters can also be an object
// const paramsObj = { foo: "bar", baz: "bar" };
// const searchParams = new URLSearchParams(paramsObj);
// console.log(searchParams);
// }

export default App;
