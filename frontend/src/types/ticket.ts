export type Ticket = {
    id: number,
    title: string,
    description?: string,
    priority: number,
    status: TicketStatus;
};

export type TicketStatus = "Open" | "InProgress" | "Done";