import { TMDB_IMAGE_API } from "../utils/constants";

import { useState } from "react";

const CarouselItem = ({
  entryId,
  entryTitle,
  entityRating,
  entryBanner,
  entryTrailer,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-80 mr-3 hover:scale-125 transition-transform duration-300 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={TMDB_IMAGE_API + entryBanner}
        alt={entryTitle}
        className="w-full h-auto"
      />
      {isHovered && (
        <div className="absolute top-0 left-0 z-20 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center text-white p-4">
          <div className="w-full h-32 bg-gray-800 flex justify-center items-center overflow-hidden">
            <video
              src={entryTrailer}
              controls
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute top-44 w-full bg-black">
            <h3 className="text-lg font-bold mb-2">{entryTitle}</h3>
            <p className="text-sm mb-2">Rating: {entityRating}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselItem;
