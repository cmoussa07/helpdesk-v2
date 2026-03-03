// import { Clock, Filter, Search, AlertCircle, ArrowLeft } from "lucide-react";
// import { Card, CardContent } from "../ui/card";
// import { Input } from "../ui/input";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState, useMemo } from "react";

// import { ticketConfig } from "../utils/ticketConfig";
// import { formatDate } from "../utils/formatDate";
// import { TicketsFiltresComplet } from "../utils/FonctionFiltre";

// export default function ListTicket({ tickets }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // =========================
//   // STATES
//   // =========================
//   const [recherche, setRecherche] = useState("");
//   const [statutFiltre, setStatutFiltre] = useState("tous");
//   const [prioriteFiltre, setPrioriteFiltre] = useState("tous");

//   const estSurLaPageAgentExacte = location.pathname === "/Agent";

//   // FILTRAGE OPTIMISÉ (useMemo)
//   const TicketsFiltres = useMemo(
//     () =>
//       TicketsFiltresComplet(tickets, recherche, statutFiltre, prioriteFiltre),
//     [tickets, recherche, statutFiltre, prioriteFiltre],
//   );
//   // =========================
//   // RENDU DES TICKETS
//   // =========================
//   const renduTicket =
//     TicketsFiltres.length === 0 ? (
//       <Card>
//         <CardContent className="flex flex-col items-center justify-center py-12">
//           <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
//           <p className="text-red-500">Aucun ticket trouvé</p>
//           <p className="text-gray-500 mt-2">
//             Créez votre premier ticket pour obtenir de l'aide
//           </p>
//         </CardContent>
//       </Card>
//     ) : (
//       TicketsFiltres.map((ticket) => (
//         <Card
//           key={ticket.numTic}
//           className="cursor-pointer hover:shadow-lg transition-all border-2 border-gray-100 hover:border-blue-200 mb-4"
//           onClick={() => navigate(`/Communs/TicketDetail/${ticket.numTic}`)}
//         >
//           <CardContent className="p-5">
//             <div className="flex items-start justify-between gap-4">
//               <div className="flex-1 min-w-0">
//                 {/* En-tête */}
//                 <div className="flex flex-wrap items-center gap-2 mb-2">
//                   <span className="text-gray-500">#TKT-0{ticket.numTic}</span>

//                   <span
//                     className={`px-2 py-0.5 rounded-full ${
//                       ticketConfig.status[ticket.statutId]?.bgColor ||
//                       "bg-gray-100"
//                     }`}
//                   >
//                     {ticket.statutLibelle}
//                   </span>

//                   <span
//                     className={`px-2 py-0.5 rounded-full ${
//                       ticketConfig.priorite[ticket.prioriteId]?.bgColor ||
//                       "text-gray-600"
//                     }`}
//                   >
//                     {ticket.prioriteLibelle}
//                   </span>
//                 </div>

//                 {/* Titre */}
//                 <h3 className="mb-2 font-medium">{ticket.titreTic}</h3>

//                 {/* Description */}
//                 <p className="text-gray-600 line-clamp-2 mb-3">
//                   {ticket.descTic}
//                 </p>

//                 {/* Métadonnées */}
//                 <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
//                   <div className="flex items-center gap-1">
//                     <Clock className="h-4 w-4" />
//                     <span>{formatDate(ticket.dateCreTic)}</span>
//                   </div>

//                   <span className="text-gray-300">•</span>

//                   <span>{ticket.categorieLibelle}</span>
//                 </div>
//               </div>

//               {/* Indicateur */}
//               <div className="flex-shrink-0">
//                 <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       ))
//     );

//   // =========================
//   // JSX
//   // =========================
//   return (
//     <div className="space-y-4 max-w-7xl mx-auto px-6 pb-4">
//       {/* Barre recherche + filtre */}
//       {!estSurLaPageAgentExacte && (
//         <Card className="border-2 border-gray-200">
//           <CardContent className="p-4">
//             <div className="flex flex-col md:flex-row gap-3">
//               <div className="flex-1 relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

//                 <Input
//                   type="text"
//                   placeholder="Rechercher..."
//                   value={recherche}
//                   onChange={(e) => setRecherche(e.target.value)}
//                   className="pl-10 border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors"
//                 />
//               </div>

//               <select
//                 value={statutFiltre}
//                 onChange={(e) => setStatutFiltre(e.target.value)}
//                 className="border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 transition-colors"
//               >
//                 <option value="tous">Tous les statuts</option>
//                 <option value="Ouvert">Ouvert</option>
//                 <option value="En cours">En cours</option>
//                 <option value="Resolu">Résolu</option>
//                 <option value="Ferme">Fermé</option>
//               </select>

//               <select
//                 value={prioriteFiltre}
//                 onChange={(e) => setPrioriteFiltre(e.target.value)}
//                 className="border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 transition-colors"
//               >
//                 <option value="tous">Toutes les priorités</option>
//                 <option value="Basse">Basse</option>
//                 <option value="Moyenne">Moyenne</option>
//                 <option value="Haute">Haute</option>
//                 <option value="Urgente">Urgente</option>
//               </select>
//             </div>

//             {(recherche ||
//               statutFiltre !== "tous" ||
//               prioriteFiltre !== "tous") && (
//               <div className="mt-3 flex items-center gap-2 text-gray-600">
//                 <Filter className="h-4 w-4" />
//                 <span>
//                   <strong>{TicketsFiltres.length}</strong> ticket(s) trouvé(s)
//                 </span>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       )}

//       <div className="space-y-4">{renduTicket}</div>
//     </div>
//   );
// }

import { Clock, Search, AlertCircle, Filter } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { ticketConfig } from "../utils/ticketConfig";
import { formatDate } from "../utils/formatDate";
import { TicketsFiltresComplet } from "../utils/FonctionFiltre";

const STATUT_OPTIONS = [
  { value: "tous", label: "Tous" },
  { value: "Ouvert", label: "Ouvert" },
  { value: "En cours", label: "En cours" },
  { value: "Resolu", label: "Résolu" },
  { value: "Ferme", label: "Fermé" },
];

export default function ListTicket({ tickets }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const statutFromUrl = searchParams.get("statut");
  const initialStatut =
    statutFromUrl && STATUT_OPTIONS.some((o) => o.value === statutFromUrl)
      ? statutFromUrl
      : location.state?.statut || "tous";

  const [recherche, setRecherche] = useState("");
  const [prioriteFiltre, setPrioriteFiltre] = useState("tous");
  const [statutFiltre, setStatutFiltre] = useState(initialStatut);

  useEffect(() => {
    setStatutFiltre(initialStatut);
  }, [initialStatut]);

  const estSurLaPageAgentExacte = location.pathname === "/Agent";

  const handleStatutChange = (value) => {
    setStatutFiltre(value);
    if (value === "tous") {
      searchParams.delete("statut");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams(
        { ...Object.fromEntries(searchParams), statut: value },
        { replace: true }
      );
    }
  };

  const TicketsFiltres = useMemo(
    () =>
      TicketsFiltresComplet(tickets, recherche, statutFiltre, prioriteFiltre),
    [tickets, recherche, statutFiltre, prioriteFiltre],
  );

  const renduTicket =
    TicketsFiltres.length === 0 ? (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
          <p className="text-red-500">Aucun ticket trouvé</p>
          <p className="text-gray-500 mt-2">
            Créez votre premier ticket pour obtenir de l'aide
          </p>
        </CardContent>
      </Card>
    ) : (
      TicketsFiltres.map((ticket) => (
        <Card
          key={ticket.numTic}
          className="cursor-pointer hover:shadow-lg transition-all border-2 border-gray-200 hover:border-blue-200 mb-4"
          onClick={() => navigate(`/Communs/TicketDetail/${ticket.numTic}`)}
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-gray-500">#TKT-0{ticket.numTic}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full ${ticketConfig.status[ticket.statutId]?.bgColor || "bg-gray-100"}`}
                  >
                    {ticket.statutLibelle}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full ${ticketConfig.priorite[ticket.prioriteId]?.bgColor || "text-gray-600"}`}
                  >
                    {ticket.prioriteLibelle}
                  </span>
                </div>

                {/* Titre */}
                <h3 className="mb-2 font-medium">{ticket.titreTic}</h3>

                {/* Description */}
                <p className="text-gray-600 line-clamp-2 mb-3">
                  {ticket.descTic}
                </p>

                {/* Métadonnées */}
                <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{formatDate(ticket.dateCreTic)}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span>{ticket.categorieLibelle}</span>
                </div>
              </div>

              {/* Indicateur */}
              <div className="flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))
    );

  return (
    <div className="space-y-4 max-w-7xl mx-auto px-6 pb-4">
      {/* Barre recherche + filtre */}
      {!estSurLaPageAgentExacte && (
        <Card className="border-2 border-gray-200">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

                <Input
                  type="text"
                  placeholder="Rechercher..."
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                  className="pl-10 border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors"
                />
              </div>

              <select
                value={statutFiltre}
                onChange={(e) => handleStatutChange(e.target.value)}
                className="border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 transition-colors"
              >
                {STATUT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <select
                value={prioriteFiltre}
                onChange={(e) => setPrioriteFiltre(e.target.value)}
                className="border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 transition-colors"
              >
                <option value="tous">Toutes les priorités</option>
                <option value="Basse">Basse</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Haute">Haute</option>
                <option value="Urgente">Urgente</option>
              </select>
            </div>

            {(recherche ||
              statutFiltre !== "tous" ||
              prioriteFiltre !== "tous") && (
              <div className="mt-3 flex items-center gap-2 text-gray-600">
                <Filter className="h-4 w-4" />
                <span>
                  <strong>{TicketsFiltres.length}</strong> ticket(s) trouvé(s)
                </span>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">{renduTicket}</div>
    </div>
  );
}
