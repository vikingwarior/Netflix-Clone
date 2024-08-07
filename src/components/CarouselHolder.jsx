import React from "react";

/**
    genre:

    35 : "Comedy",
    16 : "Animation",
    10749 : "Romance",
    10751 : "Family"
    28 : "Action",
    18 : "Drama"
 */
const CarouselHolder = () => {
  const genreId = [
    { key: 35, value: "Comedy" },
    { key: 16, value: "Animation" },
    { key: 10749, value: "Romance" },
    { key: 10751, value: "Family" },
    { key: 28, value: "Action" },
    { key: 18, value: "Drama" },
  ];

  return <div id="bottom-container">{genreId.map()}</div>;
};

export default CarouselHolder;
