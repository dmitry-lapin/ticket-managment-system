import React from "react";
import TopicHeader from "../../ReusableComponents/TopicHeader";
import { TicketListItem } from "../TicketListItem/TicketListItem";
import { TextAlignStart, SlidersHorizontal } from "lucide-react";
import EmptyState from "./subcomponents/EmptyState";
import { useTicketsContext } from "../../../context/TicketsContext";

const TicketListComponent: React.FC = () => {
  const { tickets, selectTicket, deleteTicket } = useTicketsContext();

  if (!Array.isArray(tickets) || tickets.length === 0) {
    return <EmptyState />;
  }

  console.log(tickets.map(t => ({ id: t.id, title: t.title })));

  return (
    <section id="TicketListComponent">
      <TopicHeader>
        <div className="flex items-center gap-2">
          <TextAlignStart />
          <p>My Tickets</p>
        </div>
        <SlidersHorizontal />
      </TopicHeader>

      <section id="ticketsList">
          <ul>
            {tickets.map(ticket => (
              <TicketListItem
                key={ticket.id}
                ticket={ticket}
                onSelect={() => selectTicket(ticket)}
                onDelete={() => deleteTicket(ticket.id)}
              />
            ))}
          </ul>
      </section>
    </section>
  );
};

export default TicketListComponent;
