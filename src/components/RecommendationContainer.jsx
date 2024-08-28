import GeminiUtils from "../utils/GeminiUtils";

import Carousel from "./Carousel";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrUpdateRecommendations } from "../utils/redux/recommendationsSlice";

import { GEMINI_KEY, TMDB_API_OPTIONS } from "../utils/constants";

const RecommendationContainer = () => {
  const geminiObject = new GeminiUtils(GEMINI_KEY);

  const dispatch = useDispatch();
  const searchQuery = useRef(null);

  const displayItemsArray = useSelector(
    (store) => store.recommendations.movieRecommendations
  );

  const showSuggestions = async () => {
    // const suggestions = await getSuggestionsArray();
    const suggestions = ["Hera Pheri", "Golmaal", "Welcome", "Housefull"];

    const searchResponsesArray = await Promise.all(
      suggestions.map(
        async (movieName) => await getMovieSearchResults(movieName)
      )
    );

    console.log(searchResponsesArray);
  };

  const getSuggestionsArray = async () => {
    const finalPrompt = `Suggest names of movies that match the query: ${searchQuery.current.value}. Return Strings as comma seperated values, where each entry is a movie name. Example: "Movie1Name, Movie2Name, Movie3Name,Movie4Name, Movie5Name". Only send the response and nothing else.`;

    const geminiResponse = await geminiObject.getGeminiResponse(finalPrompt);

    return geminiResponse?.split(",", 5);
  };

  const getMovieSearchResults = async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=true&language=en-US&page=1`,
      TMDB_API_OPTIONS
    );
    const json = await response?.json();
    return json.results;
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full h-screen bg-black/30 backdrop-blur-lg pt-36 text-white">
      <form
        className="text-center "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="w-1/2 mr-2 p-3 rounded-md bg-gray-900"
          placeholder="What's Your Mood Today?"
          ref={searchQuery}
        />
        <button
          className="py-2 px-4 rounded-md bg-red-700"
          onClick={showSuggestions}
        >
          Search
        </button>
      </form>
      <div id="recommendation-result-carousels" className="px-8">
        {/* {displayItemsArray.length > 0 &&
          displayItemsArray.map((displayItemsArrayElem) => (
            <Carousel
              carouselTitle="test"
              displayItems={displayItemsArrayElem}
              showNavigationBtns={false}
            />
          ))} */}
      </div>
    </div>
  );
};

export default RecommendationContainer;
