import React from "react";
import LogoHeader from "./subcomponents/LogoHeader";
import Navigation from "./subcomponents/Navbar/Navigation";
import Profile from "./subcomponents/Profile";

const Sidebar: React.FC = () => {

    return(
        <section className="flex flex-col h-full p-6 bg-sky-300 space-y-7">
            <LogoHeader/>
            <Navigation/>
            <Profile />
        </section>
    );
};

export default Sidebar;