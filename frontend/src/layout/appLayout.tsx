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
            <span><MessageCircleMore size={28} strokeWidth={1.8} /></span>
            <span><Phone size={28} strokeWidth={1.8} /></span>
            <span><Bell size={28} strokeWidth={1.8} /></span>
            <span><UserRoundPen size={28} strokeWidth={1.8} /></span>
          </div>
        </header>
        <Outlet />
      </section>
    </main>
  );
};
