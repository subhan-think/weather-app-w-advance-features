import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails({ data }) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{data.details}</p>
      </div>
      <div className="flex items-center justify-center py-2 text-xl text-white">
        <p className="text-5xl">{data.temp}°C</p>
      </div>

      <div className="flex flex-row justify-between items-center   text-white py-3">
        <div className="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/2048px-Red_Circle%28small%29.svg.png"
            className="w-8"
            alt="circle"
          />
        </div>
        <div className="flex flex-col gap-y-4   ">
          <div className="flex flex-row font-light text-sm justify-start items-center gap-x-3 w-1/1">
            <UilTemperature size={18} className="mr-1" />
            <span>Feels Like: </span>

            <span className="font-medium">{data.feels_like}°C</span>
          </div>
          <div className="flex flex-row font-light text-sm justify-start items-center gap-x-3 w-1/1">
            <UilTear size={18} className="mr-1" />
            <span>Humidity: </span>

            <span className="font-medium">{data.humidity}%</span>
          </div>

          <div className="flex flex-row font-light text-sm justify-start items-center gap-x-3 w-1/1">
            <UilWind size={18} className="mr-1" />
            <span>Wind: </span>

            <span className="font-medium">{data.speed} km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">6:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">7:00 PM</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">21°</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">17°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
