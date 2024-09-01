import { TMDB_IMAGE_API } from "../utils/constants";

const CarouselItem = ({ entryId, entryTitle, entityRating, entryBanner }) => {
  return (
    <div className="w-80 mr-3">
      <img src={TMDB_IMAGE_API + entryBanner} alt="" />
    </div>
  );
};

export default CarouselItem;
