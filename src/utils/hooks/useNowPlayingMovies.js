
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { updateMoviesData } from "../redux/moviesSlice";

import { TMDB_API_OPTIONS } from "../constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(updateMoviesData(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
