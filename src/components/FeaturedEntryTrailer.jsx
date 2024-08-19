import { useSelector } from "react-redux";
import useMovieClip from "../utils/hooks/useMovieClip";

const FeaturedEntryTrailer = ({ entry_id, banner_path }) => {
  useMovieClip(entry_id);
  let randomMovieClip = useSelector((store) => store.movies.moviePromoClips);

  !randomMovieClip && (randomMovieClip = { id: "GV3HUDMQ-F8" });

  return (
    <div id="trailer-frame">
      <iframe
        title="movie-trailer"
        src={
          "https://www.youtube.com/embed/" +
          randomMovieClip?.key +
          "?disablekb=1&cc_load_policy=0&autoplay=1&mute=1&loop=1"
        }
        className="aspect-video w-full pointer-events-none overflow-x-hidden"
      />
    </div>
  );
};

export default FeaturedEntryTrailer;
