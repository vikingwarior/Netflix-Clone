import { Outlet } from "react-router-dom";
import Header from "./Header";

import { useEffect } from "react";

import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import { clearSlice } from "../utils/redux/moviesSlice";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="bg-neutral-900 text-white">
      <Header />
      <div className="pb-4 px-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Browse;
