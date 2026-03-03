import { useState, useRef, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Search,
  Send,
  MessageSquare,
  User,
  Headphones,
  Ticket,
  Clock,
} from "lucide-react";
import { ticketConfig } from "../utils/ticketConfig";
import { formatDate } from "../utils/formatDate";

/** Génère un id unique pour un message */
const nextId = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

/** Format court pour la liste */
function formatTime(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const isToday = d.toDateString() === now.toDateString();
  if (isToday) return d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

export default function Messagerie({ tickets = [] }) {
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [search, setSearch] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messagesByTicket, setMessagesByTicket] = useState({});
  const messagesEndRef = useRef(null);

  const selectedTicket = tickets.find((t) => t.numTic === selectedTicketId);
  const messages = selectedTicketId ? messagesByTicket[selectedTicketId] ?? [] : [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const ticketsFiltered = tickets.filter(
    (t) =>
      !search.trim() ||
      String(t.numTic).includes(search) ||
      (t.titreTic || "").toLowerCase().includes(search.toLowerCase()) ||
      (t.categorieLibelle || "").toLowerCase().includes(search.toLowerCase())
  );

  const getLastMessage = (numTic) => {
    const list = messagesByTicket[numTic] ?? [];
    return list[list.length - 1];
  };

  const handleSend = () => {
    if (!messageInput.trim() || !selectedTicketId) return;
    const newMsg = {
      id: nextId(),
      author: "agent",
      authorLabel: "Support",
      content: messageInput.trim(),
      date: new Date().toISOString(),
    };
    setMessagesByTicket((prev) => ({
      ...prev,
      [selectedTicketId]: [...(prev[selectedTicketId] ?? []), newMsg],
    }));
    setMessageInput("");
  };

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-slate-600" />
          <h2 className="text-lg font-semibold text-slate-800">Messagerie</h2>
        </div>
        <p className="text-sm text-slate-500">
          Discutez avec les clients à propos d&apos;un ticket
        </p>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Liste des tickets */}
        <aside className="w-80 border-r border-slate-200 bg-white flex flex-col overflow-hidden">
          <div className="p-2 border-b border-slate-100">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Rechercher un ticket..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 h-9 text-sm border-slate-200 bg-slate-50"
              />
            </div>
          </div>
          <ul className="flex-1 overflow-y-auto">
            {ticketsFiltered.length === 0 ? (
              <li className="p-4 text-center text-slate-500 text-sm">
                Aucun ticket trouvé
              </li>
            ) : (
              ticketsFiltered.map((t) => {
                const last = getLastMessage(t.numTic);
                const isSelected = selectedTicketId === t.numTic;
                return (
                  <li
                    key={t.numTic}
                    onClick={() => setSelectedTicketId(t.numTic)}
                    className={`flex flex-col gap-0.5 px-3 py-2.5 border-b border-slate-50 cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-slate-100 border-l-2 border-l-slate-600"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-slate-500 font-mono text-xs">
                        #{String(t.numTic).padStart(4, "0")}
                      </span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                          ticketConfig.status[t.statutId]?.bgColor ?? "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {t.statutLibelle}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 truncate">
                      {t.titreTic || "Sans titre"}
                    </p>
                    {last && (
                      <p className="text-xs text-slate-500 truncate flex items-center gap-1">
                        <span>{last.author === "agent" ? "Vous" : "Client"}:</span>
                        {last.content}
                      </p>
                    )}
                    {last && (
                      <span className="text-xs text-slate-400 flex items-center gap-0.5">
                        <Clock className="h-3 w-3" />
                        {formatTime(last.date)}
                      </span>
                    )}
                  </li>
                );
              })
            )}
          </ul>
        </aside>

        {/* Zone conversation */}
        <section className="flex-1 flex flex-col bg-slate-50 min-w-0">
          {!selectedTicket ? (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-500 p-8">
              <div className="rounded-full bg-slate-200 p-4 mb-4">
                <Ticket className="h-10 w-10 text-slate-500" />
              </div>
              <p className="font-medium text-slate-600">Sélectionnez un ticket</p>
              <p className="text-sm mt-1 text-center max-w-xs">
                Choisissez une conversation dans la liste pour échanger avec le client.
              </p>
            </div>
          ) : (
            <>
              {/* En-tête du ticket */}
              <div className="px-4 py-3 bg-white border-b border-slate-200 flex flex-wrap items-center gap-3">
                <span className="font-mono text-slate-500 text-sm">
                  #{String(selectedTicket.numTic).padStart(4, "0")}
                </span>
                <h3 className="font-semibold text-slate-800 truncate flex-1 min-w-0">
                  {selectedTicket.titreTic}
                </h3>
                <span
                  className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                    ticketConfig.status[selectedTicket.statutId]?.bgColor ?? "bg-slate-100"
                  }`}
                >
                  {selectedTicket.statutLibelle}
                </span>
                {selectedTicket.categorieLibelle && (
                  <span className="text-xs text-slate-500">
                    {selectedTicket.categorieLibelle}
                  </span>
                )}
              </div>

              {/* Fil des messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.length === 0 && (
                  <p className="text-center text-slate-500 text-sm py-8">
                    Aucun message. Envoyez le premier message au client.
                  </p>
                )}
                {messages.map((msg) => {
                  const isAgent = msg.author === "agent";
                  return (
                    <div
                      key={msg.id}
                      className={`flex gap-2 ${isAgent ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                          isAgent ? "bg-slate-600 text-white" : "bg-slate-300 text-slate-700"
                        }`}
                      >
                        {isAgent ? (
                          <Headphones className="h-4 w-4" />
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`max-w-[75%] flex flex-col ${isAgent ? "items-end" : "items-start"}`}
                      >
                        <span className="text-xs text-slate-500 mb-0.5">
                          {msg.authorLabel} · {formatDate(msg.date)}
                        </span>
                        <div
                          className={`rounded-2xl px-3 py-2 text-sm ${
                            isAgent
                              ? "bg-slate-700 text-white rounded-br-md"
                              : "bg-white border border-slate-200 text-slate-800 rounded-bl-md"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Saisie du message */}
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex gap-2">
                  <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Écrire un message au client..."
                    className="flex-1 rounded-xl border-slate-200 bg-slate-50 focus:bg-white"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!messageInput.trim()}
                    className="rounded-xl bg-slate-700 hover:bg-slate-800"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
