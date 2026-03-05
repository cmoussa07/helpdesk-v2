// import { useNavigate } from "react-router-dom";
// import { Plus } from "lucide-react";
// import ListTicket from "../Communs/ListTicket";

// export default function MesTickets({ tickets, setTickets, setIsModalOpen }) {
//   //   const navigate = useNavigate();
//   return (
//     <div className="p-4">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl font-bold px-6 mb-4">Gestion des tickets</h2>
//           <p className="text-gray-600 mb-6 px-6">
//             {tickets.length} ticket(s) trouvé(s)
//           </p>
//         </div>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
//            text-white px-6 py-3 mr-6 mb-8 rounded-lg flex items-center gap-2"
//         >
//           <Plus className="h-5 w-5" />
//           Nouveau ticket
//         </button>
//       </div>

//       {/* Liste des tickets */}
//       <ListTicket tickets={tickets} setTickets={setTickets} />
//     </div>
//   );
// }

import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import ListTicket from "../Communs/ListTicket";

const FILTRES = [
  { value: "tous", label: "Tous" },
  { value: "Ouvert", label: "Ouverts" },
  { value: "En cours", label: "En cours" },
  { value: "Resolu", label: "Résolus" },
  { value: "Ferme", label: "Fermés" },
];

export default function MesTickets({ tickets, setTickets, setIsModalOpen }) {
  const [searchParams] = useSearchParams();
  const statutActif = searchParams.get("statut") || "tous";

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between mb-6"
      >
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">Tickets</h2>
          <p className="text-slate-500 text-sm mt-0.5">
            Filtrez par statut ci-dessous ou dans la barre de recherche
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 
          bg-blue-600 text-white 
          rounded-lg shadow-sm 
          hover:bg-blue-700 
          active:scale-95 
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1
          transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          Nouveau ticket
        </button>
      </motion.div>

      {/* Filtres rapides (liens URL) */}
      <div className="flex flex-wrap gap-1 mb-4">
        {FILTRES.map(({ value, label }) => {
          const isActive = statutActif === value;
          return (
            <Link
              key={value}
              to={
                value === "tous"
                  ? "/Agent/MesTickets"
                  : `/Agent/MesTickets?statut=${encodeURIComponent(value)}`
              }
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-slate-200 text-slate-800"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* Liste */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white border border-slate-200 rounded-xl shadow-sm p-4"
      >
        <ListTicket tickets={tickets} setTickets={setTickets} />
      </motion.div>
    </div>
  );
}
