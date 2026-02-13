import React from 'react';

const DashboardAgent = () => {
  const tickets = [
    {
      id: 1,
      title: "Impossible de se connecter à mon compte",
      priority: "Haute",
      status: "Ouvert",
      message: "Bonjour, je n'arrive plus à me connecter à mon compte depuis ce matin. J'ai essayé de réinitialiser mon mot de passe mais je ne reçois pas l'email de réinitialisation.",
      user: "Marie Dubois",
      date: "21 déc. 2024, 09:30",
      category: "Technique",
    },
    {
      id: 2,
      title: "Question sur ma dernière facture",
      priority: "Moyenne",
      status: "En cours",
      message: "Je ne comprends pas certains frais sur ma dernière facture. Pouvez-vous m'expliquer les détails ?",
      user: "Pierre Martin",
      date: "20 déc. 2024, 14:15",
      category: "Facturation",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Tableau de Bord Agent</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total des tickets", value: 4 },
          { label: "Tickets ouverts", value: 1 },
          { label: "En cours", value: 2 },
          { label: "Résolus", value: 1 },
        ].map((stat, index) => (
          <div key={index} className="bg-white shadow rounded p-4 text-center">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-xl font-semibold text-blue-600">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Rechercher par titre, description, client ou ID..."
          className="w-full md:w-1/2 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-2">
          <select className="px-3 py-2 border rounded shadow-sm">
            <option>Tous les statuts</option>
            <option>Ouvert</option>
            <option>En cours</option>
            <option>Résolu</option>
          </select>
          <select className="px-3 py-2 border rounded shadow-sm">
            <option>Toutes priorités</option>
            <option>Haute</option>
            <option>Moyenne</option>
            <option>Basse</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Nouveau ticket
        </button>
      </div>

      {/* Ticket List */}
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="bg-white shadow rounded p-4 border-l-4 border-blue-500">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">{ticket.title}</h2>
              <span className={`px-2 py-1 text-xs rounded ${
                ticket.priority === "Haute" ? "bg-red-100 text-red-600" :
                ticket.priority === "Moyenne" ? "bg-yellow-100 text-yellow-600" :
                "bg-green-100 text-green-600"
              }`}>
                Priorité: {ticket.priority}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-2">{ticket.message}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Client: {ticket.user}</span>
              <span>{ticket.date}</span>
              <span>Catégorie: {ticket.category}</span>
              <span className={`font-medium ${
                ticket.status === "Ouvert" ? "text-green-600" :
                ticket.status === "En cours" ? "text-yellow-600" :
                "text-gray-600"
              }`}>
                Statut: {ticket.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardAgent;
