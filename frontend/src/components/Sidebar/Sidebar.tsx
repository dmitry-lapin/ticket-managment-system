import React from "react";
import LogoHeader from "./subcomponents/LogoHeader";
import Navigation from "./subcomponents/Navbar/Navigation";
import Profile from "./subcomponents/Profile";

const Sidebar: React.FC = () => {

    return(
        <section className="sidebar-wrapper">
            <LogoHeader/>
            <Navigation/>
            <Profile />
        </section>
    );
};

export default Sidebar;