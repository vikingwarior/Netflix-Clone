import { useDispatch, useSelector } from "react-redux";

import { updatePromoClips } from "../redux/moviesSlice";

import { TMBD_VIDEO_API, TMDB_API_OPTIONS } from "../constants";
import { useEffect } from "react";

const useMovieClip = (entry_id) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.moviePromoClips);

  const getMovieVideos = async () => {
    const data = await fetch(
      TMBD_VIDEO_API.idPrefix + entry_id + TMBD_VIDEO_API.idSuffix,
      TMDB_API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(updatePromoClips(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieClip;
