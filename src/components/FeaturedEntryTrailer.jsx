import { useSelector } from "react-redux";
import useMovieClip from "../utils/hooks/useMovieClip";

const FeaturedEntryTrailer = ({ entry_id, banner_path }) => {
    useMovieClip(entry_id);
    let randomMovieClip = useSelector((store) => {
      const movieClipsObject = store.movies.moviePromoClips;

      return movieClipsObject[0];
    });

  // const randomMovieClip = {
  //   iso_639_1: "en",
  //   iso_3166_1: "US",
  //   name: "Official Trailer #2",
  //   key: "FVswuip0-co",
  //   site: "YouTube",
  //   size: 2160,
  //   type: "Trailer",
  //   official: true,
  //   published_at: "2024-03-19T16:00:19.000Z",
  //   id: "65f9c571bd990c018622a002",
  // };

  if (randomMovieClip === null || randomMovieClip === undefined) {
    randomMovieClip = {id: "GV3HUDMQ-F8"};
  }

  return (
    <div id="trailer-frame">
      <iframe
        title="movie-trailer"
        src={"https://www.youtube.com/embed/"+ randomMovieClip?.key +"?disablekb=1&cc_load_policy=0&autoplay=1&mute=1"}
        className="aspect-video w-full pointer-events-none overflow-x-hidden"
      />
    </div>
  );
};

export default FeaturedEntryTrailer;
