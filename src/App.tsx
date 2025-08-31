import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Page1 from "./pages/page-transistions/Page1";
import Page2 from "./pages/page-transistions/Page-2";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page-1",
    element: <Page1 />,
  },
  {
    path: "/page-2",
    element: <Page2 />,
  }
])