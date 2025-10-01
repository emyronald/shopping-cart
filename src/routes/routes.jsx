import App from "../App";
import Shop from "../Shop";
import ErrorPage from "../ErrorPage";
import ProductDetail from "../ProductDetails";
import Cart from "../Cart";
import { Children } from "react";
import Home from "../Home";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
    ],
  },
];
export default routes;
