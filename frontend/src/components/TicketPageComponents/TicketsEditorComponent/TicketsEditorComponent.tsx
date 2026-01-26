import React, { useEffect, useState } from "react";
import TopicHeader from "../../ReusableComponents/TopicHeader";
import type { Ticket } from "../../../types/ticket";

interface TicketsEditorProps {
  ticket: Ticket | null;
  onCreate: (data: Omit<Ticket, "id">) => void;
  onUpdate: (ticket: Ticket) => void;
  onFinish: () => void;
}

const TicketsEditorComponent: React.FC<TicketsEditorProps> = ({
  ticket,
  onFinish,
  onCreate,
  onUpdate,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (ticket) {
      setTitle(ticket.title);
      setDescription(ticket.description ?? "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [ticket]);

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (ticket) {
      onUpdate({
        ...ticket,
        title,
        description,
      });
    } else {
      onCreate({
        title,
        description,
        priority: 1,
        status: "Open",
      });
    }

    onFinish();
  };

  return (
    <section id="TicketEditorComponent">
      <TopicHeader>
        {ticket ? "Edit ticket:" : "Create a ticket:"}
      </TopicHeader>

      <section id="ticketsEditor" className="flex flex-col gap-2">
        <input
          className="border p-2"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 self-start"
          onClick={handleSubmit}
        >
          {ticket ? "Save changes" : "Create ticket"}
        </button>
      </section>
    </section>
  );
};

export default TicketsEditorComponent;
