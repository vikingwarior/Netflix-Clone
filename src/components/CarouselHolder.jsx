import Carousel from "./Carousel";

/**
    genre:

    35 : "Comedy",
    16 : "Animation",
    10749 : "Romance",
    10751 : "Family"
    28 : "Action",
    18 : "Drama"
 */
const CarouselHolder = () => {
  const genreId = [
    { key: 35, value: "Comedy" },
    { key: 10751, value: "Family" },
    { key: 28, value: "Action" },
    { key: 18, value: "Drama" },
  ];

  return (
    <div id="bottom-container" className="relative z-10 -mt-80 px-8">
      {genreId.map(({ key, value }) => <Carousel categoryId={key} categoryName={value} />)}
    </div>
  );
};

export default CarouselHolder;
