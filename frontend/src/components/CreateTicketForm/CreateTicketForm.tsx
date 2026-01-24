import React, { useState } from "react";

import type { CreateTicketDto } from "../../dtos/CreateTicketDto";

type Props = {
    onCreate: (dto: CreateTicketDto) => Promise<void>;
};

export const CreateTicketForm: React.FC<Props> = ({ onCreate }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState(5);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();

        await onCreate({
            title,
            description: description || undefined,
            priority
        });

        setTitle("");
        setDescription("");
        setPriority(5);
    }
    
    return(
        <form onSubmit={submit} className="space-y-2 border p-4 rounded">
            <h2 className="font-semibold">Create Ticket</h2>

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="title"
                required
            />

            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description"
            />

            <input
                type="number"
                min={1}
                max={5}
                value={priority}
                onChange={e => setPriority(Number(e.target.value))}
            />

            <button type="submit">
                Create
            </button>
        </form>
    );
};