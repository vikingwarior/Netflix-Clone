import { GoogleGenerativeAI } from "@google/generative-ai";

import Carousel from "./Carousel";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrUpdateRecommendations } from "../utils/redux/recommendationsSlice";

import { GEMINI_KEY } from "../utils/constants";

const RecommendationContainer = () => {
  const genAI = new GoogleGenerativeAI(GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const dispatch = useDispatch();
  const searchQuery = useRef(null);
  // const [displayItemsArray, setDisplayItemsArray] = useState([]);
  const displayItemsArray = useSelector(store => store.recommendations.movieRecommendations);

  const showSuggestions = async () => {
    const finalPrompt = `Suggest names of movies that match the query: ${searchQuery.current.value}. Return Strings as comma seperated values, where each entry is a movie name. Example: "Movie1Name, Movie2Name, Movie3Name,Movie4Name, Movie5Name". Only send the response and nothing else.`;

    const result = await model.generateContent(finalPrompt);
    const response = result.response;
    const text = await response.text();

    const finalData = text.split(",", 5);
    console.log(finalData);

    dispatch(addOrUpdateRecommendations(finalData));
  };

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
        {displayItemsArray.length > 0 &&
          displayItemsArray.map((displayItemsArrayElem) => (
            <Carousel
              carouselTitle="test"
              displayItems={displayItemsArrayElem}
              showNavigationBtns={false}
            />
          ))}
      </div>
    </div>
  );
};

export default RecommendationContainer;
