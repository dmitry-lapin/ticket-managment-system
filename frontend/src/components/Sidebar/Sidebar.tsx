import React from "react";
import LogoHeader from "./subcomponents/LogoHeader";
import Navigation from "./subcomponents/Navigation";
import Profile from "./subcomponents/Profile";

const Sidebar: React.FC = () => {

    return(
        <section className="flex flex-col h-full p-4 bg-sky-200">
            <LogoHeader/>
            <Navigation/>
            <Profile />
        </section>
    );
};

export default Sidebar;