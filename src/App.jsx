import SignupPage from "./pages/SignupPage";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import FeedPage from "./pages/FeedPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoutes from "./utils/PrivateRoutes";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<SignupPage />} path="/" exact />
          <Route element={<PrivateRoutes />}>
            <Route element={<FeedPage />} path="/feed" />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
