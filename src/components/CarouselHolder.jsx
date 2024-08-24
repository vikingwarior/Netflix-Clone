import Carousel from "./Carousel";

import { useSelector } from "react-redux";

import { GENRE_IDs } from "../utils/constants";

const CarouselHolder = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  return (
    <div id="bottom-container" className="relative z-10 -mt-80 px-8">
      {GENRE_IDs.map(({ id, name }) => {
        const moviesToDisplay = movies.filter(({ genre_ids }) =>
          genre_ids.includes(id)
        );

        return <Carousel carouselTitle={name} displayItems={moviesToDisplay} />
      })}
    </div>
  );
};

export default CarouselHolder;
