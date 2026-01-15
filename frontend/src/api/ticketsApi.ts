import { api } from "./axios";
import type { Ticket } from "../types/ticket";
import type { CreateTicketDto } from "../dtos/CreateTicketDto";
import type { UpdateTicketDto } from "../dtos/UpdateTicketDto";
import type { UseTicketDto } from "../dtos/UseTicketDto";

export const getTickets = async(): Promise<Ticket[]> => {
    const response  = await api.get<Ticket[]>("./tickets");
    return response.data;
};

export const getTicketById = async (
    id: number
    ): Promise<Ticket> => {
        const response = await api.get<Ticket>(`/tickets/${id}`);
        return response.data;
};

export const createTicket = async(
    dto: CreateTicketDto
    ): Promise<Ticket> => {
        const response = await api.post<Ticket>(".tickets", dto);
        return response.data;
};

export const updateTicket = async(
    id: number,
    dto: UpdateTicketDto
    ): Promise<Ticket> => {
        const response = await api.patch<Ticket>(`/tickets/${id}`, dto);
        return response.data;
};

export const useTicket = async(
    id: number,
    dto: UseTicketDto
    ): Promise<Ticket> => {
        const response = await api.post<Ticket>(`/tickets/${id}/use`,dto);
        return response.data;
};

export const deleteTicket = async(
    id: number
    ): Promise<void> => {
        await api.delete(`/tickets/${id}`);
};