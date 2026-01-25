import type { Ticket } from "../../../types/ticket";
import { Trash } from 'lucide-react';

type Props = {
    ticket: Ticket;
    onSelect: () => void;
    onDelete: () => void;
};

export const TicketListItem: React.FC<Props> = ({
    ticket,
    onSelect,
    onDelete
}) => {
    return(
        <li className="flex items-center justify-between p-3 hover:bg-gray-200" onClick={onSelect}>
            <div>
                <div className="font-semibold">
                    #{ticket.id} — {ticket.title}
                </div>
                <div className="text-sm text-gray-500">
                    Status: {ticket.status} | Priority: {ticket.priority}
                </div>
            </div>

            <div className="flex gap-2">
                <button onClick={(e) => { e.stopPropagation(); onDelete(); }}>
                    <Trash/>
                </button>
            </div>
        </li>
    );
};