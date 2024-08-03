import FeaturedEntryAttributes from "./FeaturedEntryAttributes";
import FeaturedEntryTrailer from "./FeaturedEntryTrailer";

import { useSelector } from "react-redux";

const FeaturedEntry = () => {
  // Select a random movie from fetched movies
//   const selectedEntry = useSelector((store) => { return store.movies.nowPlayingMovies && store.movies.nowPlayingMovies[Math.floor(Math.random() * 20)]})
  const selectedEntry = useSelector((store) => { return store.movies.nowPlayingMovies && store.movies.nowPlayingMovies[0]})

  if (selectedEntry == null) {
    return;
  }
  
  const {id, overview, original_title, backdrop_path, vote_average} = selectedEntry;

  return (
    <div>
      <FeaturedEntryAttributes title={original_title} rating={vote_average} summary={overview}/>
      <FeaturedEntryTrailer entry_id={id} banner_path={backdrop_path} />
    </div>
  );
};

export default FeaturedEntry;
