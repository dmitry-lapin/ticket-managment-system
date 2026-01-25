import type { Ticket } from "../../../types/ticket";

type Props = {
    ticket: Ticket;
    onSelect: () => void;
    onUse: () => void;
    onDelete: () => void;
};

export const TicketListItem: React.FC<Props> = ({
    ticket,
    onSelect,
    onUse,
    onDelete
}) => {
    return(
        <li className="flex items-center justify-between border p-3 rounded" onClick={onSelect}>
            <div>
                <div className="font-semibold">
                    #{ticket.id} — {ticket.title}
                </div>
                <div className="text-sm text-gray-500">
                    Status: {ticket.status} | Priority: {ticket.priority}
                </div>
            </div>

            <div className="flex gap-2">
                <button onClick={(e) => { e.stopPropagation(); onUse(); }}>
                    Use
                </button>

                <button onClick={(e) => { e.stopPropagation(); onDelete(); }}>
                    Delete
                </button>
            </div>
        </li>
    );
};