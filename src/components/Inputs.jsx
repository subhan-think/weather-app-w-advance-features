import React from "react";
import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center w-3/4 justify-center gap-x-4">
        <input
          type={"text"}
          placeholder="search for city..."
          className="text-lg font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />

        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-end  ">
        <button
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          name="metric"
        >
          °C
        </button>

        <p className="text-xl text-white mx-3">|</p>
        <button
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          name="imperial"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
