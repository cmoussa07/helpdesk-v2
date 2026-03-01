// import StatsSection from "../Communs/StatsSection";
// import ListTicket from "../Communs/ListTicket";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// export default function DashboardAgent({ tickets, setTickets }) {
//   // 5 derniers tickets créés (du plus récent au moins récent)
//   const derniersTickets = [...tickets]
//     .sort((a, b) => new Date(b.dateCreTic) - new Date(a.dateCreTic))
//     .slice(0, 5);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold px-6 mb-4">Tableau de bord</h2>
//       <p className="text-gray-600 mb-6 px-6">
//         Bienvenue sur votre tableau de bord. Ici, vous avez une vue d'ensemble
//         de votre système d'assistance.
//       </p>

//       <StatsSection tickets={tickets} />

//       <Card className="mx-6">
//         <CardHeader className="pb-7">
//           <CardTitle className="text-xl">Tickets récents</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <ListTicket tickets={derniersTickets} />
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import StatsSection from "../Communs/StatsSection";
import ListTicket from "../Communs/ListTicket";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { LayoutDashboard } from "lucide-react";

export default function DashboardAgent({ tickets, setTickets }) {
  const derniersTickets = [...tickets]
    .sort((a, b) => new Date(b.dateCreTic) - new Date(a.dateCreTic))
    .slice(0, 5);

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
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3">
          <div
            className="
            p-3 rounded-2xl
            bg-gradient-to-r from-blue-600 to-violet-600
            text-white shadow-lg
          "
          >
            <LayoutDashboard size={22} />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Tableau de bord
            </h2>

            <p className="text-slate-500 mt-1">
              Vue d'ensemble de votre système d'assistance
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats section avec animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <StatsSection tickets={tickets} />
      </motion.div>

      {/* Carte tickets récents */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <Card
          className="
            mx-1
            rounded-2xl
            shadow-md
            border-0
            bg-white/95
            backdrop-blur-md
            hover:shadow-xl
            transition-all duration-300
          "
        >
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="text-lg font-semibold text-slate-700">
              🎫 Tickets récents
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-4">
            <ListTicket tickets={derniersTickets} />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
