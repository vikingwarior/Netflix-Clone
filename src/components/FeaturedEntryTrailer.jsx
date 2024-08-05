import { useSelector } from "react-redux";
import useMovieClip from "../utils/hooks/useMovieClip";

const FeaturedEntryTrailer = ({ entry_id, banner_path }) => {
  //   useMovieClip(entry_id);
  //   const randomMovieClip = useSelector((store) => {
  //     const movieClipsObject = store.movies.moviePromoClips;
  //     if (movieClipsObject === null) {
  //       return;
  //     }

  //     return movieClipsObject[
  //       Math.floor(Math.random() * movieClipsObject.length)
  //     ];
  //   });

  const randomMovieClip = {
    iso_639_1: "en",
    iso_3166_1: "US",
    name: "Official Trailer #2",
    key: "FVswuip0-co",
    site: "YouTube",
    size: 2160,
    type: "Trailer",
    official: true,
    published_at: "2024-03-19T16:00:19.000Z",
    id: "65f9c571bd990c018622a002",
  };

  return (
    <div id="trailer-frame">
      <iframe
        src={"https://www.youtube.com/embed/"+ randomMovieClip.key +"?modestbranding=1&rel=0&controls=0&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0&autoplay=1"}
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture;"
        className="aspect-video w-full pointer-events-none overflow-x-hidden"
      />
    </div>
  );
};

export default FeaturedEntryTrailer;
