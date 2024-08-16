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
    let data = [];

    for (let pageNo = 1; pageNo <= 5; pageNo++) {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?page=" +
          pageNo +
          "&sort_by=popularity.desc",
        TMDB_API_OPTIONS
      );

      const json = await response.json();
      const results = json.results;

      data.push(...results);
    }
    data?.length !== 0 && dispatch(updateMoviesData(data));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
    // eslint-disable-next-line
  }, []);
};

export default useNowPlayingMovies;
