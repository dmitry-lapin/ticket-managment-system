import { useEffect, useState } from "react";
import TopicHeader from "../../ReusableComponents/TopicHeader";

import { useTicketsContext } from "../../../context/TicketsContext";

const TicketsEditorComponent: React.FC = () => {
  const {
    selectedTicket,
    createTicket,
    updateTicket,
    selectTicket,
  } = useTicketsContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedTicket) {
      setTitle(selectedTicket.title);
      setDescription(selectedTicket.description ?? "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [selectedTicket]);

  const handleSubmit = async () => {
    if (!title.trim()) return;

    if (selectedTicket) {
      await updateTicket({
        ...selectedTicket,
        title,
        description,
      });
    } else {
      await createTicket({
        title,
        description,
        priority: 1,
        status: "Open",
      });
    }

    selectTicket(null);
  };

  return (
    <section id="TicketEditorComponent">
      <TopicHeader>
        {selectedTicket ? "Edit ticket:" : "Create a ticket:"}
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
          {selectedTicket ? "Save changes" : "Create ticket"}
        </button>
      </section>
    </section>
  );
};

export default TicketsEditorComponent;