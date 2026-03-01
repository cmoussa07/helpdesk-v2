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
import ListTicket from "../Communs/ListTicket";

export default function MesTickets({ tickets, setTickets, setIsModalOpen }) {
  return (
    <div
      className="
      min-h-screen p-6
      bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50
    "
    >
      {/* Header animé */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between mb-8"
      >
        {/* Titre */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Gestion des tickets
          </h2>

          <p className="text-slate-500 mt-1">
            {tickets.length} ticket(s) trouvé(s)
          </p>
        </div>

        {/* Bouton premium */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="
            flex items-center gap-2
            bg-gradient-to-r from-blue-600 to-violet-600
            hover:from-blue-700 hover:to-violet-700
            text-white
            px-6 py-3
            rounded-xl
            shadow-md
            hover:shadow-xl
            hover:-translate-y-1
            active:scale-95
            transition-all duration-300
          "
        >
          <Plus className="h-5 w-5" />
          Nouveau ticket
        </button>
      </motion.div>

      {/* Liste avec carte flottante */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
          bg-white/95
          backdrop-blur-md
          rounded-2xl
          shadow-md
          hover:shadow-xl
          transition-all duration-300
          p-4
        "
      >
        <ListTicket tickets={tickets} setTickets={setTickets} />
      </motion.div>
    </div>
  );
}
