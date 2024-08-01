import Header from "./Header";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { TMDB_API_OPTIONS } from "../utils/constants";
import { updateMoviesData } from "../utils/redux/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const getMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(updateMoviesData(json.results));
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
