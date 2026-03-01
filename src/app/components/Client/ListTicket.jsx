import ListTicket from "../Communs/ListTicket";

export default function ListTicketClient({ tickets, setTickets }) {
  return (
    <div className="space-y-4 max-w-7xl mx-auto px-6 pb-4">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Retour au tableau de bord</span>
      </button>

      <h1 className="text-center text-3xl">
        Mes tickets ({afficheTicketreverse.length})
      </h1>
      <ListTicket tickets={tickets} setTickets={setTickets} />
    </div>
  );
}
