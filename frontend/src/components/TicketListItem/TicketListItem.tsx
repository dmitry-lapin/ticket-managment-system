import type { Ticket } from "../../types/ticket";

type Props = {
    ticket: Ticket;
    onUse: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
};

export const TicketListItem: React.FC<Props> = ({
    ticket,
    onUse,
    onEdit,
    onDelete
}) => {
    return(
        <li className="flex items-center justify-between border p-3 rounded">
            <div>
                <div className="font-semibold">
                    #{ticket.id} — {ticket.title}
                </div>
                <div className="text-sm text-gray-500">
                    Status: {ticket.status} | Priority: {ticket.priority}
                </div>
            </div>

            <div className="flex gap-2">
                <button onClick={() => onUse(ticket.id)}>
                    Use
                </button>

                <button onClick={() => onEdit(ticket.id)}>
                    Edit
                </button>

                <button onClick={() => onDelete(ticket.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
};