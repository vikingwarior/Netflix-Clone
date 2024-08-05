import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { updatePromoClips } from "../redux/moviesSlice";

import { TMBD_VIDEO_API, TMDB_API_OPTIONS } from "../constants";


const useMovieClip = (entry_id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getEntryClips();
  }, []);

  const getEntryClips = async () => {
    const result = await fetch(
      TMBD_VIDEO_API.idPrefix + entry_id + TMBD_VIDEO_API.idSuffix,
      TMDB_API_OPTIONS
    );
    const json = await result.json();
    const videoData = json.results;

    const videoClips = videoData.filter((clip) => clip.type === "Trailer"); 

    dispatch(updatePromoClips(videoClips));
  };
};

export default useMovieClip;
