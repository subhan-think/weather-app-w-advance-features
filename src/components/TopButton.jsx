import React from "react";

function TopButton() {
  const cities = [
    { id: 1, title: "Paris" },
    { id: 2, title: "London" },
    { id: 3, title: "Banglore" },
    { id: 4, title: "Karachi" },
    { id: 5, title: "Berlin" },
  ];

  return (
    <div className="flex align-middle justify-around my-6">
      {cities.map((city) => {
        return (
          <button
            key={city.id}
            className="text-white text-lg font-medium capitalize"
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButton;
