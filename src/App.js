import "./App.css";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import { getWeatherData } from "./services/weatherService";
function App() {
  // LearningCode();

  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: "london" });
    console.log(data);
  };

  fetchWeather();
  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400`}
    >
      <TopButton />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title={"Hourly Forecast"} />
      <Forecast title={"Daily Forecast"} />
    </div>
  );
}

function LearningCode() {
  let url1 = new URL("https://javascript.info/profile/admin");
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
  const paramsObj = { foo: "bar", baz: "bar" };
  const searchParams = new URLSearchParams(paramsObj);
  // console.log(searchParams);
}

export default App;
