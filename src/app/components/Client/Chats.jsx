import { ArrowLeft, User, Paperclip, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

//     const navigate = useNavigate();

//     return(
//         <div className="px-6 py-8">
//             {/* Header */}
//             <div>
//                 <div className="max-w-7xl mx-auto px-6 py-4">
//                     <button
//                         onClick={()=>navigate("/")}
//                         className="flex items-center gap-2 text-blue-600 hover:text-blue-700 ml-12 mb-6"
//                         >
//                         <ArrowLeft className="w-5 h-5" />
//                         <span>Retour au tableau de bord</span>
//                     </button>
//                 </div>
//             </div>

//             <div className="max-w-4xl mx-auto px-6 py-6 space-y-6 ">
//                 {/* 1 - Bloc problème + message */}
//                 <div className="bg-white rounded-t-xl shadow-sm">
//                     <div className="p-6 border-b border-gray-300">
//                         <div className="flex items-start gap-4">
//                             <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
//                                 <User className="w-5 h-5" />
//                             </div>
//                             <div className="flex-1">
//                                 <div className="flex items-center gap-2 mb-2">
//                                 <span className="text-gray-700">Vous</span>
//                                 <span className="text-sm text-gray-400">•</span>
//                                 <span className="text-sm text-gray-400">14/01/2026</span>
//                                 </div>
//                                 <p className="text-gray-600">Le paiement échoue avec la carte VISA.</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="p-6 space-y-6 max-h-[300px] overflow-y-auto">
//                         <div className="text-center py-8 text-gray-400">
//                            <p>Aucune réponse pour le moment</p>
//                         </div>
//                     </div>

//                     <div className="p-6 border border-gray-200 bg-gray-50">
//                         <form>
//                             <div className="flex gap-3">
//                                 <textarea
//                                 placeholder="Écrire un message..."
//                                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//                                 rows={10}
//                                 />
//                             </div>
//                             <div className="flex justify-between items-center mt-3">
//                                 <button type="button" className="text-gray-400 hover:text-gray-600 p-2">
//                                 <Paperclip className="w-5 h-5" />
//                                 </button>
//                                 <button
//                                 type="submit"
//                                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
//                                 >
//                                 <span>Envoyer</span>
//                                 <Send className="w-4 h-4" />
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//                 <div className="bg-white rounded-xl p-6 shadow-sm">
//                     {/* 3 - Bloc progression */}
//                     <div className="bg-white rounded-xl p-6 shadow-sm">
//                         <h3 className="text-gray-700 mb-4">Progression</h3>
//                         <div className="space-y-3">
//                             <WorkflowStep num={1} label="Nouveau" active />
//                             <WorkflowStep num={2} label="En cours" />
//                             {/* <WorkflowStep num={2} label="En attente d'affectation" current /> */}
//                             {/* <WorkflowStep num={5} label="En attente de réponse client" /> */}
//                             <WorkflowStep num={3} label="Résolu" />
//                             <WorkflowStep num={4} label="Fermé" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// // Composant utilitaire pour le workflow
// function WorkflowStep({ num, label, active, current }) {
//   return (
//     <div className="flex items-center gap-3">
//       <div
//         className={`w-8 h-8 rounded-full flex items-center justify-center ${
//           current
//             ? 'bg-blue-600 text-white'
//             : active
//             ? 'bg-green-500 text-white'
//             : 'bg-gray-200 text-gray-400'
//         }`}
//       >
//         {num}
//       </div>
//       <span
//         className={`text-sm ${
//           current ? 'text-blue-600' : active ? 'text-gray-700' : 'text-gray-400'
//         }`}
//       >
//         {label}
//       </span>
//     </div>
//   );

// app/components/Agent/AgentLayout.jsx

import Sidebar from "../Agent/Sidebar";
import { Link, Outlet } from "react-router-dom";
import {
  Home,
  Ticket,
  Users,
  BarChart3,
  Settings,
  Bell,
  MessageSquare,
  LogOut,
} from "lucide-react";

export default function Chats() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar fixe */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1">
        {/* Contenu spécifique à la page Chats */}
        <div className="p-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-5 sm:mb-6">
            Chats
          </h1>
          {/* Ajoutez ici le contenu de votre page Chats */}
        </div>
      </main>
    </div>
  );
}
