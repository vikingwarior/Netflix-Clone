import { useDispatch } from "react-redux";

import { updatePromoClips } from "../redux/moviesSlice";

import { TMBD_VIDEO_API } from "../constants";
import useTmdbResponse from "./useTmdbResponse";

const useMovieClip = (entry_id) => {
  const dispatch = useDispatch();
  const responseData = useTmdbResponse(
    TMBD_VIDEO_API.idPrefix + entry_id + TMBD_VIDEO_API.idSuffix
  );

  const videoClips = responseData.filter((clip) => clip.type === "Trailer");

  dispatch(updatePromoClips(videoClips));
};

export default useMovieClip;
