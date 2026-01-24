import React from "react";
import { useTickets } from "../hooks/useTickets";
import { TicketListItem } from "../components/TicketListItem/TicketListItem";
import { CreateTicketForm } from "../components/CreateTicketForm/CreateTicketForm";

const TicketsPage: React.FC = () => {
    const {
        tickets,
        isLoading,
        error,
        reload,
        useTicket,
        deleteTicket,
        createTicket
    } = useTickets();

    if(isLoading) {
        return <div>Loading Tickets...</div>;
    } else if (error) {
      return(
            <div>
                <p>Something went wrong...</p>
                <button onClick={reload}>Reload</button>
            </div>
        );
    } else {
      return (
      <section id="TicketsPageWrapper">
        <section id="TicketsList">
          <ul>
            {tickets.map(ticket => (
              <TicketListItem
              key={ticket.id}
              ticket={ticket}
              onUse={(id) => useTicket(id, { status: "Done" })}
              onEdit={(id) => console.log("edit", id)}
              onDelete={deleteTicket}
          />
            ))}
          </ul>
        </section>
        <section id="TicketsEditor">
          <CreateTicketForm onCreate={createTicket} />
        </section>
        <section id="TicketSettings">

        </section>
      </section>
    );
  }
};

export default TicketsPage;