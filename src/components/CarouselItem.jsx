import { TMDB_IMAGE_API } from "../utils/constants";

const CarouselItem = ({
  entryId,
  entryTitle,
  entityRating,
  entryBanner,
  entryTrailer,
}) => {
  return (
    <div
      className="relative w-80 mr-3 hover:scale-125 transition-transform duration-300 hover:z-10"
    >
      <img
        src={TMDB_IMAGE_API + entryBanner}
        alt={entryTitle}
        className="w-full h-auto"
      />
    </div>
  );
};

export default CarouselItem;
