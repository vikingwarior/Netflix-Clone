import { useRef } from "react";

const RecommendationContainer = () => {
  const searchQuery = useRef(null);
  
  
  return (
    <div className="w-1/2 h-1/2 absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md rounded-2xl text-white">
      <form
        className="text-center my-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" className="w-1/2 mr-2 p-3 rounded-md bg-gray-900" placeholder="What's Your Mood Today?" ref={searchQuery}/>
        <button className="py-2 px-4 rounded-md bg-red-700">Search</button>
      </form>
    </div>
  );
};

export default RecommendationContainer;