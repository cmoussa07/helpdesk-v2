import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import Sidebar from "../components/Agent/Sidebar";
import Header from "../components/Agent/Header";
import DashboardAgent from "../components/Agent/dashboard";
import MesTickets from "../components/Agent/MesTickets";
import ListTicket from "../components/Communs/ListTicket";
import TicketDetail from "../components/Communs/TicketDetail";
import CreateTicket from "../components/Communs/CreateTicket";
import CreateTicketModal from "../components/Communs/CreateTicketModal";
import AttribuerTicket from "../components/Agent/AttribuerTicket";
import Messagerie from "../components/Agent/Messagerie";

export default function AdminLayout({ tickets, setTickets }) {
  const { logout, user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header tickets={tickets} setIsModalOpen={setIsModalOpen} />

        {/* <div className="px-4 py-2 bg-white border-b flex justify-end flex-shrink-0">
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Déconnexion ({user?.name})
          </button>
        </div> */}

        {isModalOpen && (
          <CreateTicketModal
            tickets={tickets}
            setTickets={setTickets}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}

        <main className="flex-1 bg-slate-50 overflow-auto">
          <div className="p-4">
            <Routes>
              <Route path="/" element={<DashboardAgent tickets={tickets} />} />
              <Route
                path="MesTickets"
                element={
                  <MesTickets
                    tickets={tickets}
                    setTickets={setTickets}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                  />
                }
              />
              <Route
                path="CreateTicket"
                element={
                  <CreateTicket tickets={tickets} setTickets={setTickets} />
                }
              />
              <Route
                path="AttribuerTicket"
                element={
                  <AttribuerTicket tickets={tickets} setTickets={setTickets} />
                }
              />
              <Route path="Messagerie" element={<Messagerie tickets={tickets} />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}
