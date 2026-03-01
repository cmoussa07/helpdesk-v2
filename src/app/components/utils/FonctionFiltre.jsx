// utils/filterTickets.js

// Filtrage pour attribution (pas de priorité)
export function TicketsFiltresStatut(tickets, recherche, statutFiltre) {
  const text = recherche.toLowerCase();
  const filtres = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.titreTic?.toLowerCase().includes(text) ||
      ticket.descTic?.toLowerCase().includes(text) ||
      ticket.numTic?.toString().includes(text);
    const matchesStatus =
      statutFiltre === "statuts" || ticket.statutLibelle === statutFiltre;

    return matchesSearch && matchesStatus;
  });

  // TRI DÉCROISSANT (plus récent → ancien)
  return filtres.sort(
    (a, b) => new Date(b.dateCreTic) - new Date(a.dateCreTic),
  );
}

// Filtrage complet (avec priorité)
export function TicketsFiltresComplet(
  tickets,
  recherche,
  statutFiltre,
  prioriteFiltre,
) {
  const text = recherche.toLowerCase();
  const filtres = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.titreTic?.toLowerCase().includes(text) ||
      ticket.descTic?.toLowerCase().includes(text) ||
      ticket.numTic?.toString().includes(text);
    const matchesStatus =
      statutFiltre === "tous" || ticket.statutLibelle === statutFiltre;
    const matchesPriorite =
      prioriteFiltre === "tous" || ticket.prioriteLibelle === prioriteFiltre;

    return matchesSearch && matchesStatus && matchesPriorite;
  });

  // TRI DÉCROISSANT (plus récent → ancien)
  return filtres.sort(
    (a, b) => new Date(b.dateCreTic) - new Date(a.dateCreTic),
  );
}
