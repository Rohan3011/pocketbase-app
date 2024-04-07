import React from "react";
import { Button } from "@/components/ui/button";
import { logout } from "@/services/auth-service";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div>
      DashboardPage
      <Button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default DashboardPage;
