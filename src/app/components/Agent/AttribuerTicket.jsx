// import { useState, useMemo } from "react";
// import { Search, AlertCircle, Clock } from "lucide-react";
// import { Card, CardContent } from "../ui/card";
// import { Input } from "../ui/input";
// import { formatDate } from "../utils/formatDate";
// import { ticketConfig } from "../utils/ticketConfig";
// import { TicketsFiltresStatut } from "../utils/FonctionFiltre";

// export default function AttribuerTicket({ tickets, setTickets }) {
//   const [recherche, setRecherche] = useState("");
//   const [statutFiltre, setStatutFiltre] = useState("statuts");

//   // Mock membres équipe (à remplacer par ton API)
//   const membresEquipe = [
//     { id: 1, nom: "Paul Dupont" },
//     { id: 2, nom: "Marie Leroy" },
//     { id: 3, nom: "Ali Koné" },
//   ];

//   // Stocke la sélection de membre pour chaque ticket
//   const [selection, setSelection] = useState({});

//   // Attribuer le ticket
//   const handleAttribuer = (ticketNum) => {
//     const membreId = selection[ticketNum];
//     if (!membreId) {
//       alert("Veuillez sélectionner un membre avant d'attribuer !");
//       return;
//     }

//     setTickets((prev) =>
//       prev.map((t) =>
//         t.numTic === ticketNum
//           ? { ...t, assigne: membresEquipe.find((m) => m.id === membreId).nom }
//           : t,
//       ),
//     );

//     alert(
//       `Ticket #${ticketNum} attribué à ${membresEquipe.find((m) => m.id === membreId).nom}`,
//     );
//   };

//   const TicketsFiltres = useMemo(
//     () => TicketsFiltresStatut(tickets, recherche, statutFiltre),
//     [tickets, recherche, statutFiltre],
//   );

//   return (
//     <div className="h-full overflow-auto">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
//         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">
//           Attribuer des tickets
//         </h1>

//         {/* Filtres */}
//         <Card className="border-2 border-gray-200 mb-4">
//           <CardContent className="p-3 sm:p-4">
//             <div className="flex flex-col sm:flex-row gap-3">
//               <div className="flex-1 relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-gray-400" />
//                 <Input
//                   type="text"
//                   placeholder="Rechercher par titre ou numéro..."
//                   value={recherche}
//                   onChange={(e) => setRecherche(e.target.value)}
//                   className="pl-9 sm:pl-10 border border-gray-300 w-full text-sm sm:text-base"
//                 />
//               </div>

//               <select
//                 value={statutFiltre}
//                 onChange={(e) => setStatutFiltre(e.target.value)}
//                 className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 w-full sm:w-auto text-sm sm:text-base bg-white"
//               >
//                 <option value="statuts">Tous les statuts</option>
//                 <option value="Ouvert">Ouverts</option>
//                 <option value="En_cours">En cours</option>
//                 <option value="Resolu">Résolus</option>
//                 <option value="Ferme">Fermés</option>
//               </select>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Liste des tickets */}
//         <div className="space-y-3 sm:space-y-4">
//           {TicketsFiltres.length === 0 ? (
//             <Card>
//               <CardContent className="flex flex-col items-center justify-center py-8 sm:py-12">
//                 <AlertCircle className="h-10 sm:h-12 w-10 sm:w-12 text-red-400 mb-3 sm:mb-4" />
//                 <p className="text-red-500 text-sm sm:text-base">
//                   Aucun ticket trouvé
//                 </p>
//               </CardContent>
//             </Card>
//           ) : (
//             TicketsFiltres.map((ticket) => (
//               <Card
//                 key={ticket.numTic}
//                 className="border-2 border-transparent hover:border-blue-200"
//               >
//                 <CardContent className="p-3 sm:p-4 md:p-5">
//                   <div className="flex flex-col lg:flex-row justify-between gap-3 sm:gap-4">
//                     {/* Partie gauche - Infos ticket */}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
//                         <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
//                           #TKT-0{ticket.numTic}
//                         </span>
//                         <span
//                           className={`px-2 py-0.5 rounded-full text-xs font-medium ${
//                             ticketConfig.status[ticket.statutId]?.bgColor ||
//                             "bg-gray-100"
//                           }`}
//                         >
//                           {ticket.statutLibelle}
//                         </span>
//                         <span
//                           className={`px-2 py-0.5 rounded-full text-xs font-medium ${
//                             ticketConfig.priorite[ticket.prioriteId]?.bgColor ||
//                             "bg-gray-100"
//                           }`}
//                         >
//                           {ticket.prioriteLibelle}
//                         </span>
//                       </div>

//                       <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2 break-words">
//                         {ticket.titreTic}
//                       </h3>

//                       <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-2 sm:mb-3 break-words">
//                         {ticket.descTic}
//                       </p>

//                       <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500 text-xs sm:text-sm">
//                         <div className="flex items-center gap-1">
//                           <Clock className="h-3 sm:h-4 w-3 sm:w-4" />
//                           <span>{formatDate(ticket.dateCreTic)}</span>
//                         </div>
//                         <span className="text-gray-300 hidden sm:inline">
//                           •
//                         </span>
//                         <span className="break-words">
//                           {ticket.categorieLibelle}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Partie droite - Attribution */}
//                     <div className="flex flex-row lg:flex-col items-center lg:items-stretch gap-2 mt-2 lg:mt-0 lg:min-w-[200px]">
//                       <select
//                         value={selection[ticket.numTic] || ""}
//                         onChange={(e) =>
//                           setSelection((prev) => ({
//                             ...prev,
//                             [ticket.numTic]: parseInt(e.target.value),
//                           }))
//                         }
//                         className="flex-1 lg:flex-none border border-gray-300 rounded-md px-2 py-1.5 sm:px-3 sm:py-2 text-sm bg-white"
//                       >
//                         <option value="">Sélectionner</option>
//                         {membresEquipe.map((m) => (
//                           <option key={m.id} value={m.id}>
//                             {m.nom}
//                           </option>
//                         ))}
//                       </select>

//                       <button
//                         className="bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-blue-600 text-sm whitespace-nowrap"
//                         onClick={() => handleAttribuer(ticket.numTic)}
//                       >
//                         Attribuer
//                       </button>

//                       {ticket.assigne && (
//                         <span className="text-green-600 text-xs sm:text-sm text-center lg:text-left mt-1 lg:mt-2">
//                           Assigné à {ticket.assigne}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useMemo } from "react";
import { Search, AlertCircle, Clock, Plus } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { motion } from "framer-motion";
import { formatDate } from "../utils/formatDate";
import { ticketConfig } from "../utils/ticketConfig";
import { TicketsFiltresStatut } from "../utils/FonctionFiltre";

export default function AttribuerTicket({ tickets, setTickets }) {
  const [recherche, setRecherche] = useState("");
  const [statutFiltre, setStatutFiltre] = useState("statuts");

  const membresEquipe = [
    { id: 1, nom: "Paul Dupont" },
    { id: 2, nom: "Marie Leroy" },
    { id: 3, nom: "Ali Koné" },
  ];

  const [selection, setSelection] = useState({});

  const handleAttribuer = (ticketNum) => {
    const membreId = selection[ticketNum];
    if (!membreId) {
      alert("Veuillez sélectionner un membre avant d'attribuer !");
      return;
    }
    const membreNom = membresEquipe.find((m) => m.id === membreId).nom;
    setTickets((prev) =>
      prev.map((t) =>
        t.numTic === ticketNum ? { ...t, assigne: membreNom } : t,
      ),
    );
    alert(`Ticket #${ticketNum} attribué à ${membreNom}`);
  };

  const TicketsFiltres = useMemo(
    () => TicketsFiltresStatut(tickets, recherche, statutFiltre),
    [tickets, recherche, statutFiltre],
  );

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50">
      {/* Header animé */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4"
      >
        <div className="text-center sm:text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">
            Attribuer des tickets
          </h1>
        </div>
      </motion.div>

      {/* Filtres */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-2 border-gray-200 mb-4">
          <CardContent className="p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Rechercher par titre ou numéro..."
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                  className="pl-9 sm:pl-10 border border-gray-300 w-full text-sm sm:text-base"
                />
              </div>

              <select
                value={statutFiltre}
                onChange={(e) => setStatutFiltre(e.target.value)}
                className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 w-full sm:w-auto text-sm sm:text-base bg-white"
              >
                <option value="statuts">Tous les statuts</option>
                <option value="Ouvert">Ouverts</option>
                <option value="En_cours">En cours</option>
                <option value="Resolu">Résolus</option>
                <option value="Ferme">Fermés</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Liste des tickets */}
      <div className="space-y-3 sm:space-y-4">
        {TicketsFiltres.length === 0 ? (
          <Card className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <AlertCircle className="h-10 sm:h-12 w-10 sm:w-12 text-red-400 mb-3 sm:mb-4" />
            <p className="text-red-500 text-sm sm:text-base">
              Aucun ticket trouvé
            </p>
          </Card>
        ) : (
          TicketsFiltres.map((ticket) => (
            <motion.div
              key={ticket.numTic}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: ticket.numTic * 0.05 }}
            >
              <Card className="border-2 border-transparent hover:border-blue-200 bg-white/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-3 sm:p-4 md:p-5">
                  <div className="flex flex-col lg:flex-row justify-between gap-3 sm:gap-4">
                    {/* Infos ticket */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                        <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                          #TKT-0{ticket.numTic}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            ticketConfig.status[ticket.statutId]?.bgColor ||
                            "bg-gray-100"
                          }`}
                        >
                          {ticket.statutLibelle}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            ticketConfig.priorite[ticket.prioriteId]?.bgColor ||
                            "bg-gray-100"
                          }`}
                        >
                          {ticket.prioriteLibelle}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2 break-words">
                        {ticket.titreTic}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-2 sm:mb-3 break-words">
                        {ticket.descTic}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500 text-xs sm:text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 sm:h-4 w-3 sm:w-4" />
                          <span>{formatDate(ticket.dateCreTic)}</span>
                        </div>
                        <span className="text-gray-300 hidden sm:inline">
                          •
                        </span>
                        <span className="break-words">
                          {ticket.categorieLibelle}
                        </span>
                      </div>
                    </div>

                    {/* Attribution */}
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch gap-2 mt-2 lg:mt-0 lg:min-w-[200px]">
                      <select
                        value={selection[ticket.numTic] || ""}
                        onChange={(e) =>
                          setSelection((prev) => ({
                            ...prev,
                            [ticket.numTic]: parseInt(e.target.value),
                          }))
                        }
                        className="flex-1 lg:flex-none border border-gray-300 rounded-md px-2 py-1.5 sm:px-3 sm:py-2 text-sm bg-white"
                      >
                        <option value="">Sélectionner</option>
                        {membresEquipe.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.nom}
                          </option>
                        ))}
                      </select>

                      <button
                        className="bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-blue-600 text-sm whitespace-nowrap transition-all duration-300"
                        onClick={() => handleAttribuer(ticket.numTic)}
                      >
                        Attribuer
                      </button>

                      {ticket.assigne && (
                        <span className="text-green-600 text-xs sm:text-sm text-center lg:text-left mt-1 lg:mt-2">
                          Assigné à {ticket.assigne}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
