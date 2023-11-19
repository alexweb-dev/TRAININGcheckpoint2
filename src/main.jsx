import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Heroes from "./pages/Heroes.jsx";
import HeroesDetail from "./pages/HeroesDetail.jsx";


// Step 0 : create browser router here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Heroes />,
    loader: async () => {
      return fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then((response) => response.json())
        .then((data) => data);
    },
    children: [
      {
        path: "heroes/:id",
        element: <HeroesDetail />,
      },
    ],
  },
]);

// Step 5 : update your router here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
