import TicketListComponent from "../components/TicketPageComponents/TicketList/TicketList";
import TicketsEditorComponent from "../components/TicketPageComponents/TicketsEditorComponent/TicketsEditorComponent";
import { TicketsProvider } from "../context/TicketsContext";

const TicketsPage: React.FC = () => {
  return (
    <TicketsProvider>
      <section id="TicketsPageWrapper">
        <section id="TicketsListWrapper">
          <TicketListComponent />
        </section>

        <section id="TicketsEditorWrapper">
          <TicketsEditorComponent />
        </section>

        <section id="TicketSettingsWrapper" />
      </section>
    </TicketsProvider>
  );
};

export default TicketsPage;
