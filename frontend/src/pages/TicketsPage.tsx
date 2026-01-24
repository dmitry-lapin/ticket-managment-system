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
    }

    if(error) {
        return(
            <div>
                <p>Something went wrong...</p>
                <button onClick={reload}>Reload</button>
            </div>
        );
    }

    return (
    <div className="text-black">
      <h1>Tickets</h1>

      {tickets.length === 0 ? (
        <CreateTicketForm onCreate={createTicket} />
      ) : (
        
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
      )}
    </div>
  );
};

export default TicketsPage;