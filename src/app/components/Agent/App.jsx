import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './app/components/Agent/HeaderB';
import StatsSection from './app/components/Communs/StatsSection';
import Footer from './app/components/Communs/Footer';
import ListTicket from './app/components/Communs/ListTicket';
import StatsCard from './app/components/Agent/StatsCard';
import SearchBar from './app/components/Agent/SearchBar';
import TicketDetailList from './app/components/Agent/TicketDetailList';
import TicketList from './app/components/Agent/TicketList';
import ServiceFilter from './app/components/Agent/ServiceFilter';
import StatusFilter from './app/components/Agent/StatusFilter';
import DashboardAgent from './app/components/Agent/AdminDashboard';
function App() {

// Données fictives des tickets
  const  [tickets, setTickets] = useState([ 
    { num_Tic: 1, titre_Tic: "Problème de connexion", desc_Tic: "Impossible de se connecter au compte utilisateur.", category_Tic: "Authentification", datecre_Tic: "2026-01-05", datederaction_Tic: "2026-01-07", },
    { num_Tic: 2, titre_Tic: "Erreur de paiement", desc_Tic: "Le paiement échoue avec la carte VISA.", category_Tic: "Paiement", datecre_Tic: "2026-01-04", datederaction_Tic: "2026-01-06", }, 
    { num_Tic: 3, titre_Tic: "Bug d’affichage", desc_Tic: "La page d’accueil ne charge pas correctement sur mobile.", category_Tic: "Interface", datecre_Tic: "2026-01-03", datederaction_Tic: "2026-01-05", }, 
    { num_Tic: 4, titre_Tic: "Notification manquante", desc_Tic: "Aucune alerte reçue lors de la création d’un ticket.", category_Tic: "Notifications", datecre_Tic: "2026-01-02", datederaction_Tic: "2026-01-04", }, 
    { num_Tic: 5, titre_Tic: "Problème de téléchargement", desc_Tic: "Impossible de télécharger les pièces jointes.", category_Tic: "Fichiers", datecre_Tic: "2026-01-01", datederaction_Tic: "2026-01-03", }
 ]);



  return (
    <div className="min-h-screen bg-gray-50">
       <Router>
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Routes>
      {/* Page d'accueil */}
        <Route path="/" element={
          <>
            <Header />
            <main className="flex-grow">
              <StatsSection />
            </main>
          </>
        } />

        <Route path="/ListTicket" element={<ListTicket tickets={tickets} />}> </Route>
        {/* <Route path="/TicketDetail" element={<TicketDetail tickets={tickets} setTickets={setTickets} />}> </Route> */}

        {/* Ajoutez d'autres routes ici */}
      </Routes>
      
      {/* Footer présent sur toutes les pages */}
      <Footer />
    </div>
    </Router>
    </div>
  );
}

export default App;