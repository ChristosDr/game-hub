import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailePage from "./pages/GameDetailePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "games/:id", element: <GameDetailePage></GameDetailePage> },
    ],
  },
]);

export default router;
