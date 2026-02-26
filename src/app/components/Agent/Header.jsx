// // Composant Header (statique sauf profil)
// import { useState, useRef, useEffect } from "react";
// import { Search, LogOut, Settings, User, Ticket } from "lucide-react";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export default function Header({ tickets }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const [MotCle, setMotCle] = useState("");
//   const [TicketsFiltres, setTicketsFiltres] = useState(tickets);

//   const navigate = useNavigate();

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (MotCle.trim() !== "") {
//       // - Filtrer les tickets en fonction du mot-clé
//       const Filtrage = tickets.filter(
//         (ticket) =>
//           ticket.titreTic.toLowerCase().includes(MotCle.toLowerCase()) ||
//           ticket.descTic.toLowerCase().includes(MotCle.toLowerCase()) ||
//           ticket.numTic.toString().includes(MotCle),
//       );
//       setTicketsFiltres(Filtrage);
//     }
//   };

//   // Fermer le dropdown si clic en dehors
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-blue-500 shadow-sm border-b border-blue-500 relative">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Left Section (statique) */}
//           <div className="flex items-center gap-8">
//             <h1 className="text-white text-2xl font-bold pt-2">
//               Système d'Assistance
//             </h1>

//             {/* Search Bar statique */}
//             <div className="relative hidden md:block">
//               <form onSubmit={handleSearch}>
//                 <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Recherche rapide..."
//                   value={MotCle}
//                   onChange={(e) => setMotCle(e.target.value)}
//                   className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 hover:border-blue-400
//                   focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300
//                   transition-colors duration-200 rounded-lg text-sm w-96"
//                 />
//               </form>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-3">
//             {/* Notifications statiques */}
//             <button
//               onClick={() => navigate("/Agent/MesTickets")}
//               className="relative p-2 bg-white rounded-lg"
//             >
//               <Ticket className="w-5 h-5 text-gray-600" />
//               <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {tickets.length}
//               </span>
//             </button>
//             {/* Tickets statiques */}
//             <button className="relative p-2 bg-white rounded-lg">
//               <IoMdNotificationsOutline className="w-5 h-5 text-gray-600" />
//               <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 3
//               </span>
//             </button>

//             {/* Profil interactif */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="flex items-center gap-2 px-3 py-2"
//               >
//                 <span className="absolute -inset-1.5" />
//                 <span className="sr-only">Open user menu</span>
//                 <img
//                   alt=""
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
//                 />
//               </button>

//               {/* Dropdown */}
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-52 bg-white text-gray-800 rounded-xl shadow-2xl z-50">
//                   <ul className="py-2">
//                     <li>
//                       <div className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50">
//                         <User className="w-4 h-4 text-blue-600" />
//                         <span className="text-sm">Mon Profil</span>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50">
//                         <Settings className="w-4 h-4 text-blue-600" />
//                         <span className="text-sm">Paramètres</span>
//                       </div>
//                     </li>
//                     <li className="border-t border-gray-200 my-1"></li>
//                     <li>
//                       <div className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600">
//                         <LogOut className="w-4 h-4" />
//                         <span className="text-sm font-medium">Déconnexion</span>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState, useRef, useEffect } from "react";
import { Search, LogOut, Settings, User, Ticket, Bell } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { notificationConfig } from "../utils/ticketConfig";
import { formatDate } from "../utils/formatDate";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function Header({ tickets, onSearch }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [ticketsFiltres, setTicketsFiltres] = useState(tickets);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Filtrer les tickets selon le mot-clé
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      const filtrage = tickets.filter(
        (ticket) =>
          ticket.titreTic.toLowerCase().includes(search.toLowerCase()) ||
          ticket.descTic.toLowerCase().includes(search.toLowerCase()) ||
          ticket.numTic.toString().includes(search),
      );
      setTicketsFiltres(filtrage);

      // Si un callback est fourni, on l’appelle
      if (onSearch) {
        onSearch(search);

        // Redirection vers MesTickets avec les résultats filtrés
        navigate("/Agent/MesTickets", { state: { tickets: filtrage } });

        // Vide le Search
        // setSearch("");
      } else {
        // Si l'input est vide → redirection vers /home
        navigate("/");
      }

      // Optionnel : redirection vers la liste de tickets filtrés
      navigate("/Agent/MesTickets", { state: { tickets: filtrage } });
    }
  };

  // Fermer le dropdown si clic en dehors
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = tickets.length;
  const ticketCount = tickets.length;

  return (
    <nav className="bg-blue-500 shadow-sm border-b border-blue-500 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center gap-8">
            <h1 className="text-white text-2xl font-bold pt-2">
              Centre d'Assistance
            </h1>

            {/* Barre de recherche */}
            <div className="relative hidden md:block">
              <form onSubmit={handleSearch}>
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un ticket, client ou ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 hover:border-blue-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 
                  transition-colors duration-200 rounded-lg text-sm w-96"
                />
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Tickets button */}
            <div className="relative group">
              <button
                onClick={() =>
                  navigate("/Agent/MesTickets", { state: { tickets } })
                }
                className="p-2 bg-white rounded-lg hover:bg-gray-100"
              >
                <Ticket className="w-5 h-5 text-gray-600" />
              </button>

              {/* Tooltip */}
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2
               opacity-0 group-hover:opacity-100
                bg-white font-semibold  text-gray-900 drop-shadow-lg  text-xs px-2 py-1 rounded
                transition duration-200 whitespace-nowrap"
              >
                Mes Tickets
              </span>
            </div>
            {/* Notifications Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <div className="relative group">
                  <button className="relative p-2 bg-white rounded-lg hover:bg-gray-100">
                    <IoMdNotificationsOutline className="w-5 h-5 text-gray-600" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                  {/* Tooltip */}
                  <span
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2
                    opacity-0 group-hover:opacity-100
                    bg-white font-semibold  text-gray-900 drop-shadow-lg  text-xs px-2 py-1 rounded
                    transition duration-200 whitespace-nowrap"
                  >
                    Mes notifications
                  </span>
                </div>
              </PopoverTrigger>

              <PopoverContent
                className="w-80 p-0 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm"
                align="end"
              >
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <Badge variant="secondary">{unreadCount}</Badge>
                </div>

                <div className="max-h-[400px] overflow-y-auto">
                  {tickets.map((ticket) => {
                    const Icon = notificationConfig?.icon || Ticket; // fallback si non défini
                    const bgColor =
                      notificationConfig?.bgColor || "bg-blue-100";
                    const color = notificationConfig?.color || "text-blue-600";

                    return (
                      <div
                        key={ticket.numTic}
                        className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="flex gap-3">
                          <div
                            className={`flex-shrink-0 ${bgColor} p-2 rounded-lg`}
                          >
                            <Icon className={`h-4 w-4 ${color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                              {ticket.titreTic}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              {ticket.descTic}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {/* {formatDate(ticket.descTic)} */}
                              Crée le 25/02/2026
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 border-t border-gray-200 text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    Voir toutes les notifications
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            {/* Profil */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-2"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white text-gray-800 rounded-xl shadow-2xl z-50">
                  <ul className="py-2">
                    <li className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50">
                      <User className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Mon Profil</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50">
                      <Settings className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Paramètres</span>
                    </li>
                    <li className="border-t border-gray-200 my-1"></li>
                    <li className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600">
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm font-medium">Déconnexion</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
