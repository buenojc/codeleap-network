import React from "react";
import ReactDOM from "react-dom/client";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/global.css'
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./redux/store";

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
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} /> 
    </Provider>
  // </React.StrictMode>
);
