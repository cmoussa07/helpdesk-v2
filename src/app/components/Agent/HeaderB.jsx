import { HelpCircle, Plus, User, Bell, Settings, Power, DoorOpen, ArrowRightFromLine, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import { LayoutDashboard, Ticket, Users } from 'lucide-react';



export default function Header() {
  
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-blue-600">Système d'Assistance</h1>
            
            <div className="flex gap-1">
              <button
                // onClick={() => onViewChange('dashboard')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                "
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Tableau de bord</span>
              </button>
              
              <button
                onClick={() => navigate("../Communs/ListTicket")}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                "
              >
                <Ticket className="w-5 h-5" />
                <span>Tickets</span>
              </button>
              
              <button
                // onClick={() => navigate('clients')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  // activeView === 'clients'
                  //   ? 'bg-blue-50 text-blue-600'
                  //   : 'text-gray-600 hover:bg-gray-50'
                "
              >
                <Users className="w-5 h-5" />
                <span>Clients</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                AD
              </div>
              <div>
                <p className="text-sm">Agent Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}



{/* <header className="bg-white border-b border-gray-200 px-6 py-8 shadow-sm">
        <//div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
        <span>Mode: Client - IBRAHIM</span>
        <Button
       
          className="text-white hover:bg-blue-700"
        >
          Déconnexion
        </Button>
      </>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
                <HelpCircle className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">
                  Centre d'Assistance
                </h1>
                <p className="text-gray-600">
                  Bienvenue, IBRAHIM
                </p>
              </div>
            </div>
            <Button
              onClick={() => navigate("CreateTicket")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Plus className="h-5 w-5" />
              Nouveau ticket
            </Button>
          </div>
      </div>
    </header> */}