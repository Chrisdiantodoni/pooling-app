import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import ErrorPage from "./Pages/ErrorPage";
import DashboardLayout from "./Pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home/*",
    element: <DashboardLayout />,
  },
]);

export default router;
