import React from "react";

function TimeAndLocation({ data }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{data.title}</p>
      </div>

      <div className="flex justify-center items-center my-3">
        <p className="text-white text-3xl font-medium">
          {data.name} , {data.country}{" "}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
