import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import ErrorPage from "./Pages/ErrorPage";
import DashboardLayout from "./Pages/Main";
import { Tenor } from "./Pages/Main/Other";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/*",
    element: <DashboardLayout />,
    children: [
      {
        path: "tenor",
        element: <Tenor />,
      },
    ],
  },
]);

export default router;
