import FeaturedEntryAttributes from "./FeaturedEntryAttributes";
import FeaturedEntryTrailer from "./FeaturedEntryTrailer";

import { useSelector } from "react-redux";

const FeaturedEntry = () => {
  // Select a random movie from fetched movies
  const randomMovieIndex = Math.floor(Math.random() * 20);
  const selectedEntry = useSelector((store) => {
    return store.movies.nowPlayingMovies && store.movies.nowPlayingMovies;
  })[2];

  if (selectedEntry === null || selectedEntry === undefined) {
    return;
  }

  const { id, overview, original_title, backdrop_path } = selectedEntry;

  return (
    <div className="relative">
      <FeaturedEntryAttributes title={original_title} summary={overview} />
      <FeaturedEntryTrailer entry_id={id} banner_path={backdrop_path} />
    </div>
  );
};

export default FeaturedEntry;
