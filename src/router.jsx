import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPgae from "./components/landingPgae/LandingPgae";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/landingPage",
    element: (
      <PrivateRoute>
        <LandingPgae />
      </PrivateRoute>
    ),
  },
]);
