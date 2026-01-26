import React, { useState } from "react";
import { useTickets } from "../hooks/useTickets";
import TicketListComponent from "../components/TicketPageComponents/TicketList/TicketList";
import type { Ticket } from "../types/ticket";
import TicketsEditorComponent from "../components/TicketPageComponents/TicketsEditorComponent/TicketsEditorComponent";


const TicketsPage: React.FC = () => {
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

    const {
        tickets,
        isLoading,
        error,
        reload,
        deleteTicket,
        createTicket,
        updateTicket
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
        <section id="TicketsListWrapper">
          <TicketListComponent tickets={tickets} onDelete={deleteTicket} onSelect={setSelectedTicket} />
        </section>
        <section id="TicketsEditorWrapper">
          <TicketsEditorComponent
            ticket={selectedTicket}
            onCreate={createTicket}
            onUpdate={(ticket) =>
              updateTicket(ticket.id, {
                title: ticket.title,
                description: ticket.description,
                priority: ticket.priority,
                status: ticket.status,
              })
            }
            onFinish={() => setSelectedTicket(null)}
          />
        </section>
        <section id="TicketSettingsWrapper">

        </section>
      </section>
    );
  }
};

export default TicketsPage;