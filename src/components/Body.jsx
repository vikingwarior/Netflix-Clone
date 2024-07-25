import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
import Wrapper from "./Wrapper";

import { useDispatch } from "react-redux";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    Children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

const Body = () => {

  return <RouterProvider router={appRouter} />;
};

export default Body;
