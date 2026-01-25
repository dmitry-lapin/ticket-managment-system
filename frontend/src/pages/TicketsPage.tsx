import React, { useState } from "react";
import { useTickets } from "../hooks/useTickets";
import { CreateTicketForm } from "../components/TicketPageComponents/CreateTicketForm/CreateTicketForm";
import TicketListComponent from "../components/TicketPageComponents/TicketList/TicketList";
import type { Ticket } from "../types/ticket";


const TicketsPage: React.FC = () => {
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

    const {
        tickets,
        isLoading,
        error,
        reload,
        createTicket,
        updateTicket,
        useTicket,
        deleteTicket

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
          <TicketListComponent tickets={tickets} onDelete={deleteTicket} onUse={(id) => useTicket(id, {status: "Done"})} onSelect={setSelectedTicket} />
        </section>
        <section id="TicketsEditorWrapper">
          <CreateTicketForm onCreate={createTicket} />
        </section>
        <section id="TicketSettingsWrapper">

        </section>
      </section>
    );
  }
};

export default TicketsPage;