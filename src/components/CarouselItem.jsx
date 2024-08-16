import { TMDB_IMAGE_API } from "../utils/constants";

const CarouselItem = ({ entryId, entryTitle, entityRating, entryBanner }) => {
  return (
    <div className="w-96  mr-9 shrink-0">
      <img src={TMDB_IMAGE_API + entryBanner} alt="" />
    </div>
  );
};

export default CarouselItem;
