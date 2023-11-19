import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Heroes from "./pages/Heroes.jsx";
import HeroesDetail from "./pages/HeroesDetail.jsx";
import { HeroesLoader } from "./pages/Heroes";
import { HeroesDetailLoader } from "./pages/HeroesDetail";

// Step 0 : create browser router here
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Heroes />,
        loader: HeroesLoader
      },
      {
        path: "heroes/:id",
        element: <HeroesDetail />,
        loader: HeroesDetailLoader
      },
    ],
  },
]);

// Step 5 : update your router here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
