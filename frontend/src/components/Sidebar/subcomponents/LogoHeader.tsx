import React from "react";
import { Ticket, SunMoon } from "lucide-react";

const LogoHeader: React.FC = () => {
    return(
        <section className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-1">
                <span className="-rotate-45"><Ticket size={28} strokeWidth={2}/></span>
                <span className="inter-logo font-semibold text-lg">TicketMS</span>
            </div>
            <button className="">
                <SunMoon size={24} strokeWidth={1.5} />
            </button>
        </section>
    );
};

export default LogoHeader;

