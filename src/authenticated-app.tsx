import React from "react";
import { ProjectListPage } from "./Pages/project-list";
import { useAuth } from "./context/auth-context";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>Log Out</button>
      <ProjectListPage />
    </div>
  );
};