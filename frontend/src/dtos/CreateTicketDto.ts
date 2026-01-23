import type { TicketStatus } from "../types/ticket";

export type CreateTicketDto = {
    title: string,
    description?: string,
    priority: number,
};