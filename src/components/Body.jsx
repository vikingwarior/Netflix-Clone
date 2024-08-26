import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Login from "./Login";
import Browse from "./Browse";
import Wrapper from "./Wrapper";
import RecommendationContainer from "./RecommendationContainer";
import Shimmer from "./Shimmer";

const Body = () => {
  const FeaturedEntry = lazy(() => import("./FeaturedEntry"));
  const BrowseCarouselHolder = lazy(() => import("./BrowseCarouselHolder"));

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
                <Suspense fallback={<Shimmer/>}>
                  <FeaturedEntry />
                  <BrowseCarouselHolder />
                </Suspense>
              ),
            },
            {
              path: "/browse/suggest",
              element: <RecommendationContainer />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
