import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./app/components/Client/Header";
import Footer from "./app/components/Client/Footer";
import Acceuil from "./app/components/Client/Acceuil";
import CreateTicket from './app/components/Client/CreateTicket'; 
import CreateTicketModal from './app/components/Client/CreateTicketModal';
import ListTicket from './app/components/Client/ListTicket';
import  Faqs  from './app/components/Client/Faqs';
import  Chats  from './app/components/Client/Chats';
import TicketDetail from './app/components/Client/TicketDetail';



function App() {

const [tickets, setTickets] = useState([]); 
const [isModalOpen, setIsModalOpen] = useState(false);

// Charger les tickets depuis l’API 
useEffect(() => { 
  fetch("https://localhost:7274/api/Tickets") 
  .then((reponse) => reponse.json()) 
  .then((data) => setTickets(data)) 
  .catch((err) => console.error("Erreur API:", err)); 
}, []);  // le tableau vide est le tableau de dependence qui s'execute seulement 
         // au montage du compoasnt à cause de []

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* En-tete */}
        <Header />

        {/* Modal de création de ticket (rendu conditionnellement) */}
        {isModalOpen && (
          <CreateTicketModal 
            tickets={tickets} 
            setTickets={setTickets}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}

        <Routes>
          {/* Contenu principal */}
          <Route path="/" element={<Acceuil tickets={tickets} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}> </Route>

          {/* {Autres pages} */}
          
          <Route path="/CreateTicket" element={<CreateTicket tickets={tickets} setTickets={setTickets} />}> </Route>
         
          <Route path="/ListTicket" element={<ListTicket tickets={tickets} />}> </Route>
          <Route path="/Faqs" element={<Faqs />}> </Route>
          <Route path="/Chats" element={<Chats />}> </Route>
          <Route path="/TicketDetail/:id" element={<TicketDetail />}> </Route>

        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App