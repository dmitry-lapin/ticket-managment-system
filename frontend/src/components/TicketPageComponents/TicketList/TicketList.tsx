import React from "react";
import TopicHeader from "../../ReusableComponents/TopicHeader";
import { TicketListItem } from "../TicketListItem/TicketListItem";

import type { Ticket } from "../../../types/ticket";

type Props = {
  tickets: Ticket[];

  onSelect: (ticket: Ticket) => void;
  onUse: (id: number) => void;
  onDelete: (id: number) => void;
};

const TicketListComponent: React.FC<Props> = ({
    tickets,
    onSelect,
    onUse,
    onDelete
    }) => {
    
        if(tickets.length === 0) {
            return <p>No tickets found!</p>
        } else {
            return(
                <section id="TicketListComponent">
                    <TopicHeader>
                        <div>
                            <p>My Tickets</p>
                        </div>
                    </TopicHeader>
                    <section id="ticketsList">
                        <ul className="space-y-2">
                            {tickets.map(ticket => (
                                <TicketListItem
                                    key={ticket.id}
                                    ticket={ticket}
                                    onSelect={() => onSelect(ticket)}
                                    onUse={() => onUse(ticket.id)}
                                    onDelete={() => onDelete(ticket.id)}
                                />
                            ))}
                        </ul>
                    </section>
                </section>
            );
        }
    }

export default TicketListComponent;