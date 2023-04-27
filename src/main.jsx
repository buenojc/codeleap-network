import React from "react";
import ReactDOM from "react-dom/client";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/global.css'
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/",
    element: <HomePage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
