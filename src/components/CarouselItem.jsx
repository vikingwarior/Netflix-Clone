import { TMDB_IMAGE_API } from "../utils/constants";


const CarouselItem = ({entryId, entryTitle, entityRating, entryBanner}) => {

  return <div><img src={TMDB_IMAGE_API + entryBanner} alt="" /></div>;
};

export default CarouselItem;
