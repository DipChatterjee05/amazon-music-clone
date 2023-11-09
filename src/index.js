import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Social from "./pages/Social";
import Library from "./pages/Library";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>This Is Home</h1>,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "social",
        element: <Social />,
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "signin",
        element: <SignIn/>,
      },
      {
        path: "signup",
        element: <SignUp/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
