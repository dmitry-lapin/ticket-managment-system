import { useState, useEffect, useCallback } from "react";
import type{ Ticket } from "../types/ticket";
import { getTickets } from "../api/ticketsApi";
import type { CreateTicketDto } from "../dtos/CreateTicketDto";
import type { UpdateTicketDto } from "../dtos/UpdateTicketDto";
import type { UseTicketDto } from "../dtos/UseTicketDto";
import * as ticketsApi from "../api/ticketsApi";

export function useTickets() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const reload = useCallback(async() => {
    setIsLoading(true);
    try {
            const data = await getTickets();
            setTickets(data);
            setError(null);
        } catch(exeption) {
            setError("Failed to load tickets.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    const createTicket = useCallback(async (dto: CreateTicketDto) => {
        try {
            const newTicket = await ticketsApi.createTicket(dto);
            setTickets(prev => [...prev, newTicket]);
        } catch {
            setError("Failed to create ticket.");
        }
    }, []);


    const updateTicket = useCallback(async(id: number, dto: UpdateTicketDto) => {
        try {
            const updatedTicket = await ticketsApi.updateTicket(id, dto);
            setTickets((prev) => prev.map((ticket) => (ticket.id === id ? updatedTicket : ticket)));
        } catch(exception) {
            setError("Failed to update ticket");
        }
    },[]);

    const useTicket = useCallback(async(id: number, dto: UseTicketDto) => {
        try {
            const usedTicket = await ticketsApi.useTicket(id, dto);
            setTickets((prev) => prev.map((ticket) => (ticket.id === id ? usedTicket : ticket)));
        } catch(exception) {
            setError("Failed to use ticket.");
        }
    },[]);

    const deleteTicket = useCallback(async(id: number) => {
        try {
            await ticketsApi.deleteTicket(id);
            setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
        } catch(exception) {
            setError("Failed to delete ticket.");
        }
    }, []);

    useEffect(() => {
        reload();
    }, [reload]);

    return {
        tickets,
        isLoading,
        error,
        reload,
        createTicket,
        updateTicket,
        useTicket,
        deleteTicket
    }
}