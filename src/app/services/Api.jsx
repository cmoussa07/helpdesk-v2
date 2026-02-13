const API_URL = "http://localhost:5000/api";

export const getTickets = async () => {
  const res = await fetch(`${API_URL}/tickets`);
  return res.json();
};

export const createTicket = async (ticket) => {
  const res = await fetch(`${API_URL}/tickets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket),
  });
  return res.json();
};
