import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";

export const AppLayout = () => {
  return (
    <main>
      <Sidebar />
      <Outlet />
    </main>
  );
};
