import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home";
import Complete from "../pages/complete";
import ExtractToken from "../pages/extract/token";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "extract",
    children: [
      {
        path: "token",
        element: <ExtractToken />,
      },
      {
        path: "icon",
        element: <p>extract icon</p>,
      },
    ],
  },
  {
    path: "complete",
    element: <Complete />,
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
