import React from "react";
import { useTickets } from "../hooks/useTickets";

const TicketsPage: React.FC = () => {
    const {
        tickets,
        isLoading,
        error,
        reload
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
        <p>No tickets found</p>
      ) : (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id}>
              #{ticket.id} — {ticket.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TicketsPage;