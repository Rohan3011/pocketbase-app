import { pb } from "@/lib/pocketbase";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!pb.authStore.isValid) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
