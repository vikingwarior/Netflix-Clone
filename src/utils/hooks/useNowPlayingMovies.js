import { useDispatch } from "react-redux";
import useTmdbResponse from "./useTmdbResponse";

import { updateMoviesData } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const resultData = useTmdbResponse(
    "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc"
  );

  dispatch(updateMoviesData(resultData));
};

export default useNowPlayingMovies;
