import React from "react";
import { Ticket, SunMoon } from "lucide-react";

const LogoHeader: React.FC = () => {
    return(
        <section className="logo-wrapper">
            <div>
                <span id="logo-svg"><Ticket size={30} strokeWidth={1.8}/></span>
                <span id="logo-text">TMS</span>
            </div>
            <button id="theme-switch">
                <SunMoon size={30} strokeWidth={1.2}/>
            </button>
        </section>
    );
};

export default LogoHeader;

