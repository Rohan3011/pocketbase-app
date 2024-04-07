import React from "react";
import { Button } from "@/components/ui/button";
import { logout } from "@/services/auth-service";
import { useNavigate } from "react-router-dom";
import TodoList from "@/components/todo-list";
import TodoForm from "@/components/TodoForm";

function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen max-w-7xl mx-auto py-8 bg-white px-4 ">
      <nav className="h-10 flex justify-between items-center">
        <span className="text-2xl font-semibold">My Todos</span>
        <Button
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </Button>
      </nav>
      <main className="pt-10 flex gap-4">
        <TodoList />
        <TodoForm />
      </main>
    </div>
  );
}

export default DashboardPage;
