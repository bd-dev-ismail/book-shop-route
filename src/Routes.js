import { createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Books from "./components/Books/Books";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/books",
        loader: async () => {
          return fetch(`https://api.itbook.store/1.0/new`);
        },
        element: <Books></Books>,
      },
      { path: "/price", element: <Pricing></Pricing> },
      { path: "/about", element: <About></About> },
    ],
  },
]);
export default router;