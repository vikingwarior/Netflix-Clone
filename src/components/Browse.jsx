import { Outlet } from "react-router-dom";
import Header from "./Header";

import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";

const Browse = () => {
  // useNowPlayingMovies();
  return (
    <div className="bg-neutral-900 text-white">
      <Header />
      <div className="px-10 pb-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Browse;
