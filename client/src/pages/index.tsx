import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./login";
import DashboardPage from "./dashboard";
import { ProtectedRoute } from "@/components/protected-route";
// import { checkHealth } from "@/api/home";

const pages = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
]);

export default pages;
