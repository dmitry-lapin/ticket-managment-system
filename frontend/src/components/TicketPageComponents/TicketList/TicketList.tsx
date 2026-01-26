import React from "react";
import TopicHeader from "../../ReusableComponents/TopicHeader";
import { TicketListItem } from "../TicketListItem/TicketListItem";

import { TextAlignStart, SlidersHorizontal } from 'lucide-react';

import type { Ticket } from "../../../types/ticket";
import EmptyState from "./subcomponents/EmptyState";

type Props = {
  tickets: Ticket[];

  onSelect: (ticket: Ticket) => void;
  onDelete: (id: number) => void;
};

const TicketListComponent: React.FC<Props> = ({
    tickets,
    onSelect,
    onDelete
    }) => {
        const hasTickets = tickets.length > 0;
    
            return(
                <section id="TicketListComponent">
                    <TopicHeader>
                        <div>
                            <TextAlignStart/>
                            <p>My Tickets</p>
                        </div>
                            <SlidersHorizontal/>
                    </TopicHeader>
                    <section id="ticketsList">
                        { hasTickets? (
                            <ul className="">
                            {tickets.map(ticket => (
                                <TicketListItem
                                    key={ticket.id}
                                    ticket={ticket}
                                    onSelect={() => onSelect(ticket)}
                                    onDelete={() => onDelete(ticket.id)}
                                />
                            ))}
                        </ul>
                        ) : (
                            <EmptyState />
                        )}
                    </section>
                </section>
            );
    }

export default TicketListComponent;