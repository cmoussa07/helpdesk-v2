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

import {
  Clock,
  Search,
  AlertCircle,
  Filter,
  ChevronRight,
  FolderOpen,
  User,
} from "lucide-react";
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
        { replace: true },
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
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center py-16 px-4">
        <div className="rounded-full bg-slate-100 p-4 mb-4">
          <AlertCircle className="h-10 w-10 text-slate-400" />
        </div>
        <p className="text-slate-700 font-medium">Aucun ticket trouvé</p>
        <p className="text-slate-500 text-sm mt-1 text-center max-w-sm">
          Ajustez les filtres ou créez un nouveau ticket pour commencer.
        </p>
      </div>
    ) : (
      <ul className="space-y-3">
        {TicketsFiltres.map((ticket) => {
          const statusBg =
            ticketConfig.status[ticket.statutId]?.bgColor ||
            "bg-slate-100 text-slate-700";
          const prioriteBg =
            ticketConfig.priorite[ticket.prioriteId]?.bgColor ||
            "bg-slate-100 text-slate-600";
          return (
            <li
              key={ticket.numTic}
              onClick={() => navigate(`/Agent/TicketDetail/${ticket.numTic}`)}
              className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all cursor-pointer"
            >
              {/* Barre latérale colorée par statut */}
              <div
                className={`w-1 rounded-full self-stretch flex-shrink-0 ${
                  ticket.statutId === 1
                    ? "bg-blue-500"
                    : ticket.statutId === 2
                      ? "bg-amber-500"
                      : ticket.statutId === 3
                        ? "bg-green-500"
                        : "bg-slate-300"
                }`}
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-slate-400 text-sm font-mono">
                    #{String(ticket.numTic).padStart(4, "0")}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-md text-xs font-medium ${statusBg}`}
                  >
                    {ticket.statutLibelle}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-md text-xs font-medium ${prioriteBg}`}
                  >
                    {ticket.prioriteLibelle}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-800 group-hover:text-slate-900 truncate">
                  {ticket.titreTic}
                </h3>
                {ticket.descTic && (
                  <p className="text-slate-500 text-sm line-clamp-2 mt-0.5">
                    {ticket.descTic}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-3 mt-2 text-slate-400 text-xs">
                  {/* Client */}
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {ticket.clientNom} {ticket.clientPrenom}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {formatDate(ticket.dateCreTic)}
                  </span>

                  {/* Catégorie */}
                  {ticket.categorieLibelle && (
                    <span className="flex items-center gap-1">
                      <span className="text-slate-200">·</span>
                      <FolderOpen className="h-3.5 w-3.5" />
                      {ticket.categorieLibelle}
                    </span>
                  )}
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-slate-500 flex-shrink-0 transition-colors" />
            </li>
          );
        })}
      </ul>
    );

  return (
    <div className="space-y-4 max-w-4xl mx-auto pb-4">
      {/* Barre recherche + filtre */}
      {!estSurLaPageAgentExacte && (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Rechercher par titre, description ou numéro..."
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                className="pl-9 h-9 border-slate-200 rounded-lg bg-slate-50 focus:bg-white text-sm placeholder:text-slate-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={statutFiltre}
                onChange={(e) => handleStatutChange(e.target.value)}
                className="h-9 px-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
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
                className="h-9 px-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
              >
                <option value="tous">Toutes priorités</option>
                <option value="Basse">Basse</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Haute">Haute</option>
                <option value="Urgente">Urgente</option>
              </select>
            </div>
          </div>
          {(recherche ||
            statutFiltre !== "tous" ||
            prioriteFiltre !== "tous") && (
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-slate-500 text-sm">
              <Filter className="h-4 w-4" />
              <span>
                <strong className="text-slate-700">
                  {TicketsFiltres.length}
                </strong>{" "}
                ticket{TicketsFiltres.length > 1 ? "s" : ""} trouvé
                {TicketsFiltres.length > 1 ? "s" : ""}
              </span>
            </div>
          )}
        </div>
      )}

      <div>{renduTicket}</div>
    </div>
  );
}
