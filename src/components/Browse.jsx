import { Outlet } from "react-router-dom";
import Header from "./Header";

import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import { useEffect } from "react";

const Browse = () => {
  useNowPlayingMovies();

  useEffect(()=> {}, [])
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
