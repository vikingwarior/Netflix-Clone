import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
import Wrapper from "./Wrapper";
import FeaturedEntry from "./FeaturedEntry";
import CarouselHolder from "./CarouselHolder";
import RecommendationContainer from "./RecommendationContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
        children: [
          {
            path: "/browse",
            element: (
              <>
                <FeaturedEntry />
                <CarouselHolder />
                <RecommendationContainer/>
              </>
            ),
          },
        ],
      },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
