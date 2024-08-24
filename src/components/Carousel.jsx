import CarouselItem from "./CarouselItem";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useState } from "react";

const Carousel = ({ carouselTitle, displayItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (displayItems.length / 4) - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === (displayItems.length / 4) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id={`${carouselTitle}-carousel`}
      className="carousel-container relative"
    >
      <div className="flex items-center justify-between">
        <h1 className="mr-4 py-4 text-3xl font-bold">{carouselTitle}</h1>
        <div>
          <button className="mx-2" onClick={handlePrevClick}>
            <FaArrowLeft />
          </button>
          <button className="mx-2" onClick={handleNextClick}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{
            transform: `translateX(-${
              currentIndex * (1000 / displayItems.length)
            }%)`,
          }}
        >
          {displayItems.map(
            ({ id, backdrop_path, original_title, popularity }, index) => (
              <div key={index} className="carousel-entry flex-shrink-0 w-1/5">
                <CarouselItem
                  key={id}
                  entryId={id}
                  entryBanner={backdrop_path}
                  entryTitle={original_title}
                  entityRating={popularity}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
