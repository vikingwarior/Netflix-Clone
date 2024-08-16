import { updateRandomMovieIndex } from "../utils/redux/moviesSlice";
import FeaturedEntryAttributes from "./FeaturedEntryAttributes";
import FeaturedEntryTrailer from "./FeaturedEntryTrailer";

import { useDispatch, useSelector } from "react-redux";

const FeaturedEntry = () => {
  const dispatch = useDispatch();

  // Select a random movie from fetched movies
  let [movies, randomMovieIndex] = useSelector((store) => [
    store.movies?.nowPlayingMovies,
    store.movies?.randomMovieIndex,
  ]);

  if (!movies) return;

  if (!randomMovieIndex){
    randomMovieIndex = dispatch(
      updateRandomMovieIndex(Math.floor(Math.random() * 20))
    );

    return;
  }
  const selectedEntry = movies[randomMovieIndex];

  const { id, overview, original_title, backdrop_path } = selectedEntry;

  return (
    <div className="relative">
      <FeaturedEntryAttributes title={original_title} summary={overview} />
      <FeaturedEntryTrailer entry_id={id} banner_path={backdrop_path} />
    </div>
  );
};

export default FeaturedEntry;
