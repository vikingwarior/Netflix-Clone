import FeaturedEntryAttributes from "./FeaturedEntryAttributes";
import FeaturedEntryTrailer from "./FeaturedEntryTrailer";

import { useSelector } from "react-redux";

const FeaturedEntry = () => {
  // Select a random movie from fetched movies
  const randomMovieIndex = Math.floor(Math.random() * 20);
  const selectedEntry = useSelector((store) => {
    return store.movies.nowPlayingMovies && store.movies.nowPlayingMovies;
  })[randomMovieIndex];

  // const selectedEntry = {
  //   adult: false,
  //   backdrop_path: "/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
  //   genre_ids: [28, 12, 878],
  //   id: 786892,
  //   original_language: "en",
  //   original_title: "Furiosa: A Mad Max Saga",
  //   overview:
  //     "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
  //   popularity: 899.449,
  //   poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
  //   release_date: "2024-05-22",
  //   title: "Furiosa: A Mad Max Saga",
  //   video: false,
  //   vote_average: 7.7,
  //   vote_count: 2424,
  // };

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
