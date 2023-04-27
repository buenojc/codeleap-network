import React from "react";
import ReactDOM from "react-dom/client";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
