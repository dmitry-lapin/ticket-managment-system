import type { TicketStatus } from "../types/ticket";

export type UpdateTicketDto = {
    title?: string,
    description?: string,
    priority?: number,
    status?: TicketStatus;
}