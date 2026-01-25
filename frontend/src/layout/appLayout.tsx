import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";
import { UserRoundPen, MessageCircleMore, Phone, Bell } from 'lucide-react';

export const AppLayout = () => {
  return (
    <main>
      <Sidebar />
      <section id="main-content-wrapper">
        <header>
          <div>
            <p>Tickets</p>
          </div>
          <div id="header-user-data">
            <span><MessageCircleMore/></span>
            <span><Phone/></span>
            <span><Bell/></span>
            <span><UserRoundPen/></span>
          </div>
        </header>
        <Outlet />
      </section>
    </main>
  );
};
