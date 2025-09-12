import App from "../App";
import Shop from "../Shop";
import ErrorPage from "../ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: "shop", element: <Shop /> },
];

export default routes;
