import Carousel from "./Carousel";

import { useSelector } from "react-redux";

import { GENRE_IDs } from "../utils/constants";

const BrowseCarouselHolder = () => {

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  return (
    <div id="bottom-container" className="relative z-10 -mt-80 px-8">
      {GENRE_IDs.map(({ id, name }) => {
        const moviesToDisplay = movies.filter(({ genre_ids }) =>
          genre_ids.includes(id)
        );

        // eslint-disable-next-line
        if (moviesToDisplay.length < 5) return;

        shuffleArray(moviesToDisplay);

        return <Carousel carouselTitle={name} displayItems={moviesToDisplay} />
      })}
    </div>
  );
};

export default BrowseCarouselHolder;
