import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../context/AuthContext";
import Header from "../components/Client/Header";
import Footer from "../components/Client/Footer";
import Acceuil from "../components/Client/Acceuil";
import CreateTicket from "../components/Communs/CreateTicket";
import CreateTicketModal from "../components/Communs/CreateTicketModal";
import ListTicket from "../components/Communs/ListTicket";
import Faqs from "../components/Client/Faqs";
import Chats from "../components/Client/Chats";
import TicketDetail from "../components/Communs/TicketDetail";

export default function ClientLayout({ tickets, setTickets }) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };

  return (
    <>
      <Header />

      <div className="p-2 bg-gray-200 flex justify-between">
        <span>Client : {user?.name}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Déconnexion
        </button>
      </div>

      {isModalOpen && (
        <CreateTicketModal
          tickets={tickets}
          setTickets={setTickets}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      <Routes>
        {/* page par défaut = /client */}
        <Route path="/" element={<Acceuil tickets={tickets} />} />

        {/* routes RELATIVES */}
        <Route
          path="CreateTicket"
          element={<CreateTicket tickets={tickets} setTickets={setTickets} />}
        />

        <Route path="ListTicket" element={<ListTicket tickets={tickets} />} />

        <Route path="Faqs" element={<Faqs />} />
        <Route path="Chats" element={<Chats />} />

        <Route
          path="TicketDetail/:id"
          element={<TicketDetail tickets={tickets} setTickets={setTickets} />}
        />
      </Routes>

      <Footer />
    </>
  );
}
