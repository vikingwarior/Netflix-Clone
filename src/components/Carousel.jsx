import CarouselItem from "./CarouselItem";
import { useSelector } from "react-redux";

const Carousel = ({ categoryId, categoryName }) => {
  let categoryItemIndex = 0;

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies);
  if (!movies) return;

  const categoryItems = movies.filter(({ genre_ids }) =>
    genre_ids.includes(categoryId)
  );

  return (
    <div id={categoryName + "-carousel"}>
      <h1>{categoryName}</h1>
      <div className="flex">
        {categoryItems.map(
          ({ id, backdrop_path, original_title, popularity }) =>
            categoryItemIndex++ < 5 && (
              <CarouselItem
                entryId={id}
                entryBanner={backdrop_path}
                entryTitle={original_title}
                entityRating={popularity}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Carousel;
