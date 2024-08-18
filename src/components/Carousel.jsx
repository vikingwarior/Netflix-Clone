import CarouselItem from "./CarouselItem";

import { useState } from "react";
import { useSelector } from "react-redux";

const Carousel = ({ categoryId, categoryName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? categoryItems.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === categoryItems.length - 1 ? 0 : prevIndex + 1));
  };

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const categoryItems = movies.filter(({ genre_ids }) =>
    genre_ids.includes(categoryId)
  );

  return (
    <div id={`${categoryName}-carousel`} className="carousel-container">
      <div className="flex items-center justify-between">
        <h1 className="mr-4 py-4 text-3xl font-bold">{categoryName}</h1>
        <div>
          <button className="mx-2" onClick={prev}>
            Left
          </button>
          <button className="mx-2" onClick={next}>
            Right
          </button>
        </div>
      </div>
      <div
        className="flex overflow-hidden transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {categoryItems
          .slice(0, 5)
          .map(({ id, backdrop_path, original_title, popularity }) => (
            <CarouselItem
              key={id}
              entryId={id}
              entryBanner={backdrop_path}
              entryTitle={original_title}
              entityRating={popularity}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
