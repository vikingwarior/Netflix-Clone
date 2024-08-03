import { Outlet } from "react-router-dom";
import Header from "./Header";

import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Browse;
