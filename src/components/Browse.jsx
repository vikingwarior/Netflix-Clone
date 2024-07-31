import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import Header from "./Header";

const getMovieData = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc",
    TMDB_API_OPTIONS
  );
  const json = await data.json();
  console.log(json);
};

const Browse = () => {
  useEffect(() => getMovieData, [])
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
