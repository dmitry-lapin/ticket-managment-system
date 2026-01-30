import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Ticket } from "../types/ticket";
import { useTickets } from "../hooks/useTickets";

interface TicketsContextValue {
  tickets: Ticket[];
  selectedTicket: Ticket | null;
  selectTicket: (ticket: Ticket | null) => void;
  createTicket: (data: Omit<Ticket, "id">) => Promise<void>;
  updateTicket: (ticket: Ticket) => Promise<void>;
  deleteTicket: (id: number) => Promise<void>;
}

const TicketsContext = createContext<TicketsContextValue | null>(null);

export const TicketsProvider = ({ children }: { children: ReactNode }) => {
  const {
    tickets,
    createTicket,
    updateTicket: updateTicketApi,
    deleteTicket,
  } = useTickets();

  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const updateTicket = async (ticket: Ticket) => {
    await updateTicketApi(ticket.id, {
      title: ticket.title,
      description: ticket.description,
      priority: ticket.priority,
      status: ticket.status,
    });
  };

  return (
    <TicketsContext.Provider
      value={{
        tickets,
        selectedTicket,
        selectTicket: setSelectedTicket,
        createTicket,
        updateTicket,
        deleteTicket,
      }}
    >
      {children}
    </TicketsContext.Provider>
  );
};

export const useTicketsContext = () => {
  const ctx = useContext(TicketsContext);
  if (!ctx) {
    throw new Error("useTicketsContext must be used within TicketsProvider");
  }
  return ctx;
};
