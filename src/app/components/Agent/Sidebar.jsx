// export default function Sidebar() {
//   const [open, setOpen] = useState(true);
//   const navigate = useNavigate();

//   // return (
//   //   <div
//   //     className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-blue-500 text-white ${
//   //       open ? "w-60" : "w-16"
//   //     }`}
//   //   >
//   //     {/* Header */}
//   //     <div className="px-3 py-1 h-16 flex justify-between items-center">
//   //       <img
//   //         src={logo}
//   //         alt="Logo"
//   //         className={`${open ? "w-10" : "w-0"} rounded-md`}
//   //       />
//   //       <MdMenuOpen
//   //         size={34}
//   //         className={`duration-500 cursor-pointer ${!open && "rotate-180"}`}
//   //         onClick={() => setOpen(!open)}
//   //       />
//   //     </div>

//   //     {/* Body avec scroll */}

//   //     <div className="flex-1 overflow-y-auto py-4 px-2 sidebar-scroll">
//   //       <ul>
//   //         {menuItems.map((item, index) =>
//   //           item.section ? (
//   //             <p
//   //               key={index}
//   //               className="text-gray-200 text-xs mt-4 mb-1 uppercase px-3"
//   //             >
//   //               {item.section}
//   //             </p>
//   //           ) : (
//   //             <li
//   //               key={index}
//   //               onClick={() => navigate(item.path)}
//   //               className={`px-3 py-2 my-1 rounded-md duration-300 cursor-pointer flex gap-3 items-center group ${
//   //                 location.pathname === item.path
//   //                   ? "bg-blue-800"
//   //                   : "hover:bg-blue-700"
//   //               }`}
//   //             >
//   //               <div>{item.icon}</div>
//   //               <p
//   //                 style={{ transitionDelay: `${index * 100}ms` }}
//   //                 className={`whitespace-pre duration-500 ${open ? "" : "opacity-0 translate-x-28 overflow-hidden"}`}
//   //               >
//   //                 {item.label}
//   //               </p>
//   //               <p
//   //                 className={`${
//   //                   open && "hidden"
//   //                 } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden
//   //               group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
//   //               >
//   //                 {item.label}
//   //               </p>
//   //             </li>
//   //           ),
//   //         )}
//   //       </ul>
//   //     </div>

//   //     {/* Footer */}
//   //     <div className="flex items-center gap-2 px-3 py-3 border-t border-blue-400">
//   //       <FaUserCircle size={30} />
//   //       <div
//   //         className={`leading-5 ${!open && "w-0 translate-x-24"} duration-500 overflow-hidden`}
//   //       >
//   //         <p>Saheb</p>
//   //         <span className="text-xs">saheb@gmail.com</span>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );

//   return (
//     <div
//       className={`shadow-md h-screen p-2flex flex-col overflow-hidden bg-blue-500 text-white duration-500 ${
//         open ? "w-60" : "w-16"
//       }`}
//     >
//       {/* Header */}
//       <div className="px-3 py-2 h-16 flex justify-between items-center">
//         <img
//           src={logo}
//           alt="Logo"
//           className={`${open ? "w-10" : "w-0"} rounded-md`}
//         />
//         <MdMenuOpen
//           size={34}
//           className={`duration-500 cursor-pointer ${!open && "rotate-180"}`}
//           onClick={() => setOpen(!open)}
//         />
//       </div>

//       {/* MENU SCROLL UNIQUEMENT ICI */}
//       <div className="flex-1">
//         <ul className="flex-1">
//           {menuItems.map((item, index) => {
//             return (
//               <li
//                 key={index}
//                 onClick={() => navigate(item.path)}
//                 className={`px-3 py-2 my-2 rounded-md duration-300 cursor-pointer flex gap-3 items-center relative group ${
//                   location.pathname === item.path
//                     ? "bg-white/20"
//                     : "hover:bg-white/10"
//                 }`}
//               >
//                 {/* Icône */}
//                 <div>{item.icon}</div>

//                 {/* Label principal (visible si sidebar ouverte) */}
//                 <p
//                   style={{ transitionDelay: `${index + 3}00ms` }}
//                   className={`whitespace-pre duration-500 ${
//                     !open && "opacity-0 translate-x-28 overflow-hidden"
//                   }`}
//                 >
//                   {item.label}
//                 </p>

//                 {/* Tooltip (visible si sidebar fermée au hover) */}
//                 <p
//                   className={`${
//                     open && "hidden"
//                   } absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}
//                 >
//                   {item.label}
//                 </p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {/* footer */}
//       <div className="flex items-center gap-2 px-3 py-2">
//         <div>
//           <FaUserCircle size={30} />
//         </div>
//         <div
//           className={`leading-5 ${!open && "w-0 translate-x-24"} duration-500 overflow-hidden`}
//         >
//           <p>Saheb</p>
//           <span className="text-xs">saheb@gmail.com</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// import logo from "../../../assets/logo.png";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";

// import { MdMenuOpen } from "react-icons/md";
// import { IoHomeOutline } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";
// import { TbUsersPlus } from "react-icons/tb";
// import { RiSettings4Line } from "react-icons/ri";
// import { LuMessageCircleMore } from "react-icons/lu";
// import { Ticket, Plus, Users } from "lucide-react";

// const menuItems = [
//   { section: "Général" },
//   {
//     icon: <IoHomeOutline size={20} />,
//     label: "Tableau de bord",
//     path: "/Agent",
//   },

//   { section: "Tickets" },
//   {
//     icon: <Ticket size={20} />,
//     label: "Mes tickets",
//     path: "/Agent/MesTickets",
//   },
//   {
//     icon: <Plus size={20} />,
//     label: "Nouveau ticket",
//     path: "/Agent/CreateTicket",
//   },

//   { section: "Équipe" },
//   { icon: <Users size={20} />, label: "Membres équipe", path: "/Agent/Equipe" },
//   {
//     icon: <TbUsersPlus size={20} />,
//     label: "Attribuer ticket",
//     path: "/Agent/AttribuerTicket",
//   },

//   { section: "Communication" },
//   {
//     icon: <LuMessageCircleMore size={20} />,
//     label: "Messagerie",
//     path: "/Agent/Messagerie",
//   },

//   { section: "Paramètres" },
//   {
//     icon: <RiSettings4Line size={20} />,
//     label: "Profil",
//     path: "/Agent/Profil",
//   },
// ];

// export default function Sidebar() {
//   const [open, setOpen] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <aside
//       className={`h-screen bg-gradient-to-b from-blue-600 to-blue-700 text-white
//       flex flex-col shadow-xl overflow-hidden
//       transition-all duration-300
//       ${open ? "w-64" : "w-16"}`}
//     >
//       {/* HEADER */}
//       <div className="h-16 flex items-center justify-between px-3 border-b border-white/10">
//         <img
//           src={logo}
//           alt="logo"
//           className={`transition-all duration-300 ${open ? "w-9" : "w-0 opacity-0"}`}
//         />

//         <MdMenuOpen
//           size={26}
//           onClick={() => setOpen(!open)}
//           className={`cursor-pointer transition-transform ${!open && "rotate-180"}`}
//         />
//       </div>

//       {/* MENU */}
//       <div className="flex-1 overflow-y-auto sidebar-scroll py-3">
//         <ul className="space-y-1 px-2">
//           {menuItems.map((item, index) =>
//             item.section ? (
//               open && (
//                 <p
//                   key={index}
//                   className="text-xs text-white/60 uppercase mt-4 mb-2 px-2 tracking-wider"
//                 >
//                   {item.section}
//                 </p>
//               )
//             ) : (
//               <li
//                 key={index}
//                 onClick={() => navigate(item.path)}
//                 className={`
//                   relative flex items-center gap-3
//                   px-3 py-2 rounded-lg cursor-pointer
//                   transition-all duration-200
//                   ${
//                     location.pathname === item.path
//                       ? "bg-white/20"
//                       : "hover:bg-white/10"
//                   }
//                 `}
//               >
//                 {/* Icon */}
//                 <span className="min-w-[20px]">{item.icon}</span>

//                 {/* Label */}
//                 {open && (
//                   <span className="text-sm font-medium whitespace-nowrap">
//                     {item.label}
//                   </span>
//                 )}

//                 {/* Tooltip quand fermé */}
//                 {!open && (
//                   <span
//                     className="
//                       absolute left-14 bg-white text-gray-800 text-xs
//                       px-2 py-1 rounded shadow-lg opacity-0
//                       group-hover:opacity-100
//                     "
//                   >
//                     {item.label}
//                   </span>
//                 )}
//               </li>
//             ),
//           )}
//         </ul>
//       </div>

//       {/* FOOTER */}
//       <div className="border-t border-white/10 p-3 flex items-center gap-2">
//         <FaUserCircle size={26} />
//         {open && (
//           <div className="text-sm leading-4">
//             <p className="font-medium">Saheb</p>
//             <span className="text-xs text-white/70">saheb@gmail.com</span>
//           </div>
//         )}
//       </div>
//     </aside>
//   );
// }

// import logo from "../../../assets/logo.png";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";

// // Icons
// import { MdMenuOpen } from "react-icons/md";
// import { IoHomeOutline } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";
// import { TbReportSearch, TbUsersPlus } from "react-icons/tb";
// import { RiSettings4Line } from "react-icons/ri";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import {
//   Ticket,
//   Plus,
//   Users,
//   Inbox,
//   Clock,
//   CheckCircle2,
//   XCircleIcon,
// } from "lucide-react";
// import { LuMessageCircleMore } from "react-icons/lu";

// const menuItems = [
// // 🏠 Général
// { section: "Général" },
// { icons: <IoHomeOutline size={30} />, label: "Tableau de bord", path: "/" },

// // 🎫 Tickets
// { section: "Tickets" },
// {
// icons: <Ticket size={30} />,
// label: "Mes tickets",
// path: "/Agent/MesTickets",
// },
// // {
// // icons: <Ticket size={30} />,
// // label: "Tickets équipe",
// // path: "/Agent/TicketsEquipe",
// // },
// // {
// // icons: <Ticket size={30} />,
// // label: "Tous les tickets",
// // path: "/Agent/TousTickets",
// // },
// {
// icons: <Plus size={30} />,
// label: "Nouveau ticket",
// path: "/Communs/CreateTicket",
// },

// // 👥 Équipe
// { section: "Équipe" },
// {
// icons: <Users size={30} />,
// label: "Membres équipe",
// path: "/Agent/Equipe",
// },
// {
// icons: <TbUsersPlus size={30} />,
// label: "Attribuer ticket",
// path: "/Agent/AttribuerTicket",
// },
// {
// icons: <TbReportSearch size={30} />,
// label: "Charge de travail",
// path: "/Agent/ChargeTravail",
// },

// // 💬 Communication
// { section: "Communication" },
// {
// icons: <MessageSquare size={30} />,
// label: "Messages",
// path: "/Agent/Messages",
// },
// {
// icons: <MessageSquare size={30} />,
// label: "Discussions clients",
// path: "/Agent/DiscussionsClients",
// },

// // 📊 Suivi
// { section: "Suivi" },
// {
// icons: <TbReportSearch size={30} />,
// label: "Historique statuts",
// path: "/Agent/HistoriqueStatuts",
// },
// {
// icons: <TbReportSearch size={30} />,
// label: "Tickets résolus",
// path: "/Agent/TicketsResolus",
// },

// // ⚙️ Paramètres
// { section: "Paramètres" },
// {
// icons: <RiSettings4Line size={30} />,
// label: "Mon profil",
// path: "/Agent/Parametres",
// },
// { icons: <LogOut size={30} />, label: "Déconnexion", path: "/logout" },
// ];

// const menuItems = [
//   { section: "Général" },
//   {
//     icon: <IoHomeOutline size={30} />,
//     label: "Tableau de bord",
//     path: "/Agent",
//   },

//   { section: "Tickets" },
//   {
//     icon: <Inbox size={30} />,
//     label: "Tous les tickets",
//     path: "/Agent/MesTickets",
//   },
//   {
//     icon: <Plus size={30} />,
//     label: "Creer un ticket",
//     path: "/Agent/CreateTicketModal",
//   },
//   {
//     icon: <Ticket size={30} />,
//     label: "Tickets Ouverts",
//     path: "/Agent/MesTickets",
//   },
//   {
//     icon: <Clock size={30} />,
//     label: "Tickets En cours",
//     path: "/Agent/MesTickets",
//   },
//   {
//     icon: <CheckCircle2 size={30} />,
//     label: "Tickets Résolu",
//     path: "/Agent/MesTickets",
//   },
//   {
//     icon: <XCircleIcon size={30} />,
//     label: "Tickets Fermés",
//     path: "/Agent/MesTickets",
//   },

//   { section: "Équipe" },
//   { icon: <Users size={30} />, label: "Membres équipe", path: "/Agent/Equipe" },
//   {
//     icon: <TbUsersPlus size={30} />,
//     label: "Attribuer ticket",
//     path: "/Agent/AttribuerTicket",
//   },

//   { section: "Communication" },
//   {
//     icon: <LuMessageCircleMore size={30} />,
//     label: "Messagerie",
//     path: "/Agent/Messagerie",
//   },

//   { section: "Paramètres" },
//   {
//     icon: <RiSettings4Line size={22} />,
//     label: "Profil",
//     path: "/Agent/Profil",
//   },
// ];

// export default function Sidebar() {
//   const [open, setOpen] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // return (
//   //   <div
//   //     className={`shadow-md p-2 h-screen  flex flex-col duration-500 bg-blue-500 text-white ${
//   //       open ? "w-60" : "w-16"
//   //     }`}
//   //   >
//   //     {/* Header */}
//   //     <div className="px-3 py-1 h-16 flex justify-between items-center">
//   //       <img
//   //         src={logo}
//   //         alt="Logo"
//   //         className={`${open ? "w-10" : "w-0"} rounded-md`}
//   //       />
//   //       <MdMenuOpen
//   //         size={34}
//   //         className={`duration-500 cursor-pointer ${!open && "rotate-180"}`}
//   //         onClick={() => setOpen(!open)}
//   //       />
//   //     </div>

//   //     {/* Body */}
//   //     <ul className="flex-1 mb-6 overflow-y-auto py-4 px-2 sidebar-scroll">
//   //       {menuItems.map((item, index) =>
//   //         item.section ? (
//   //           <p
//   //             key={index}
//   //             className="text-gray-200 text-xs mt-4 mb-1 uppercase px-3"
//   //           >
//   //             {item.section}
//   //           </p>
//   //         ) : (
//   //           <li
//   //             key={index}
//   //             onClick={() => navigate(item.path)}
//   //             className={`px-3 py-2 my-1 rounded-md duration-300 cursor-pointer flex gap-3 items-center group ${
//   //               location.pathname === item.path
//   //                 ? "bg-blue-800"
//   //                 : "hover:bg-blue-700"
//   //             }`}
//   //           >
//   //             <div>{item.icon}</div>
//   //             <p
//   //               style={{ transitionDelay: `${index * 100}ms` }}
//   //               className={`whitespace-pre duration-500 ${open ? "" : "opacity-0 translate-x-28 overflow-hidden"}`}
//   //             >
//   //               {item.label}
//   //             </p>
//   //             <p
//   //               className={`${
//   //                 open && "hidden"
//   //               } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden
//   //               group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
//   //             >
//   //               {item.label}
//   //             </p>
//   //           </li>
//   //         ),
//   //       )}
//   //     </ul>

//   //     {/* Footer */}
//   //     <div className="flex items-center gap-2 px-3 py-2 mt-auto">
//   //       <FaUserCircle size={30} />
//   //       <div
//   //         className={`leading-5 ${!open && "w-0 translate-x-24"} duration-500 overflow-hidden`}
//   //       >
//   //         <p>Saheb</p>
//   //         <span className="text-xs">saheb@gmail.com</span>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );

//   return (
//     <div
//       className={`
//       shadow-2xl h-screen flex flex-col duration-500
//       bg-gradient-to-b from-blue-600 to-violet-600
//       text-white backdrop-blur-lg
//       ${open ? "w-60" : "w-16"}
//     `}
//     >
//       {/* Header */}
//       <div className="px-3 py-1 h-16 flex justify-between items-center">
//         <img
//           src={logo}
//           alt="Logo"
//           className={`
//           rounded-xl transition-all duration-500
//           ${open ? "w-10 opacity-100" : "w-0 opacity-0"}
//         `}
//         />

//         <MdMenuOpen
//           size={34}
//           className={`
//           duration-500 cursor-pointer
//           hover:scale-110 hover:rotate-12
//           ${!open && "rotate-180"}
//         `}
//           onClick={() => setOpen(!open)}
//         />
//       </div>

//       {/* Body */}
//       <ul className="flex-1 mb-6 overflow-y-auto py-4 px-2 sidebar-scroll space-y-1">
//         {menuItems.map((item, index) =>
//           item.section ? (
//             <p
//               key={index}
//               className="text-white/60 text-xs mt-4 mb-1 uppercase tracking-widest px-3"
//             >
//               {item.section}
//             </p>
//           ) : (
//             <li
//               key={index}
//               onClick={() => navigate(item.path)}
//               className={`
//               relative px-3 py-2 my-1 rounded-xl duration-300
//               cursor-pointer flex gap-3 items-center group
//               transition-all
//               ${
//                 location.pathname === item.path
//                   ? "bg-white/25 shadow-lg"
//                   : "hover:bg-white/20 hover:translate-x-2"
//               }
//             `}
//             >
//               <div className="group-hover:scale-110 transition">
//                 {item.icon}
//               </div>

//               <p
//                 style={{ transitionDelay: `${index * 70}ms` }}
//                 className={`
//                 whitespace-pre duration-500
//                 ${open ? "" : "opacity-0 translate-x-20 overflow-hidden"}
//               `}
//               >
//                 {item.label}
//               </p>

//               {/* Tooltip */}
//               <p
//                 className={`
//                 ${open && "hidden"}
//                 absolute left-14 bg-white text-gray-900 font-semibold
//                 whitespace-pre text-xs rounded-lg shadow-xl
//                 px-0 py-0 w-0 overflow-hidden
//                 group-hover:px-2 group-hover:py-1
//                 group-hover:w-fit group-hover:opacity-100
//                 transition-all duration-300
//               `}
//               >
//                 {item.label}
//               </p>
//             </li>
//           ),
//         )}
//       </ul>

//       {/* Footer */}
//       <div className="flex items-center gap-2 px-3 py-3 mt-auto bg-white/10 backdrop-blur-md rounded-t-2xl">
//         <FaUserCircle size={30} />

//         <div
//           className={`
//           leading-5 duration-500 overflow-hidden
//           ${!open && "w-0 translate-x-24"}
//         `}
//         >
//           <p className="font-medium">Saheb</p>
//           <span className="text-xs text-white/70">saheb@gmail.com</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// import logo from "../../../assets/logo.png";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";

// // Icons
// import { MdMenuOpen } from "react-icons/md";
// import { IoHomeOutline } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";
// import { TbUsersPlus } from "react-icons/tb";
// import { RiSettings4Line } from "react-icons/ri";
// import { Card, CardContent } from "../ui/card";
// import {
//   Inbox,
//   Ticket,
//   Plus,
//   Clock,
//   CheckCircle2,
//   XCircleIcon,
//   Users,
//   TrendingUp,
//   AlertCircle,
// } from "lucide-react";
// import { LuMessageCircleMore } from "react-icons/lu";

// export default function Sidebar({ setIsModalOpen }) {
//   const [open, setOpen] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menuItems = [
//     { section: "GENERAL" },
//     {
//       icon: <IoHomeOutline size={30} />,
//       label: "Tableau de bord",
//       path: "/Agent",
//       statut: "tous",
//     },

//     { section: "TICKETS" },
//     {
//       icon: <Plus size={30} />,
//       label: "Créer un ticket",
//       action: () => setIsModalOpen(true),
//       statut: "tous",
//     },

//     {
//       icon: <Inbox size={30} />,
//       label: "Tous les tickets",
//       path: "/Agent/MesTickets",
//       statut: "tous",
//     },
//     {
//       icon: <Ticket size={30} />,
//       label: "Tickets Ouverts",
//       path: "/Agent/MesTickets",
//       statut: "Ouvert",
//     },
//     {
//       icon: <Clock size={30} />,
//       label: "Tickets En cours",
//       path: "/Agent/MesTickets",
//       statut: "En cours",
//     },
//     {
//       icon: <CheckCircle2 size={30} />,
//       label: "Tickets Résolu",
//       path: "/Agent/MesTickets",
//       statut: "Resolu",
//     },
//     {
//       icon: <XCircleIcon size={30} />,
//       label: "Tickets Fermés",
//       path: "/Agent/MesTickets",
//       statut: "Ferme",
//     },

//     { section: "EQUIPE" },
//     {
//       icon: <Users size={30} />,
//       label: "Membres équipe",
//       path: "/Agent/Equipe",
//       statut: "tous",
//     },
//     {
//       icon: <TbUsersPlus size={30} />,
//       label: "Attribuer ticket",
//       path: "/Agent/AttribuerTicket",
//       statut: "tous",
//     },

//     { section: "COMMUNICATION" },
//     {
//       icon: <LuMessageCircleMore size={30} />,
//       label: "Messagerie",
//       path: "/Agent/Messagerie",
//       statut: "tous",
//     },

//     { section: "STASTISTIQUES" },

//     { section: "Paramètres" },
//     {
//       icon: <RiSettings4Line size={30} />,
//       label: "Profil",
//       path: "/Agent/Profil",
//       statut: "tous",
//     },
//   ];

//   return (
//     <div
//       className={`shadow-2xl h-screen flex flex-col duration-500
//         bg-gradient-to-b from-blue-600 to-violet-600 text-white backdrop-blur-lg
//         ${open ? "w-60" : "w-16"}`}
//     >
//       {/* HEADER */}
//       <div className="px-3 py-1 h-16 flex justify-between items-center">
//         <img
//           src={logo}
//           alt="Logo"
//           className={`rounded-xl transition-all duration-500 ${open ? "w-10 opacity-100" : "w-0 opacity-0"}`}
//         />
//         <MdMenuOpen
//           size={34}
//           className={`duration-500 cursor-pointer hover:scale-110 hover:rotate-12 ${!open && "rotate-180"}`}
//           onClick={() => setOpen(!open)}
//         />
//       </div>

//       {/* MENU */}
//       <ul className="flex-1 mb-6 overflow-y-auto py-4 px-2 sidebar-scroll space-y-1">
//         {menuItems.map((item, index) =>
//           item.section ? (
//             open && (
//               <p
//                 key={index}
//                 className="text-white/60 text-xs mt-4 mb-1 uppercase tracking-widest px-3"
//               >
//                 {item.section}
//               </p>
//             )
//           ) : (
//             <li
//               key={index}
//               onClick={item.action ? item.action : () => navigate(item.path)}
//               className={`relative px-3 py-2 my-1 rounded-xl duration-300 cursor-pointer flex gap-3 items-center group
//               ${location.pathname === item.path ? "bg-white/25 shadow-lg" : "hover:bg-white/20 hover:translate-x-2"}`}
//             >
//               <div className="group-hover:scale-110 transition">
//                 {item.icon}
//               </div>

//               {/* Label */}
//               <p
//                 style={{ transitionDelay: `${index * 100}ms` }}
//                 className={`whitespace-pre duration-500 ${
//                   !open && "opacity-0 translate-x-28 overflow-hidden"
//                 }`}
//               >
//                 {item.label}
//               </p>

//               {/* Tooltip */}
//               <p
//                 className={`${
//                   open && "hidden"
//                 } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
//               >
//                 {item.label}
//               </p>
//             </li>
//           ),
//         )}

//         {open /* Statistiques rapides */ && (
//           <div className="px-4 mt-6 mb-4">
//             <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
//               Statistiques
//             </h3>
//             <Card className="border-2 border-gray-100">
//               <CardContent className="p-4 space-y-3">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="bg-red-50 p-1.5 rounded">
//                       <AlertCircle className="h-4 w-4 text-red-600" />
//                     </div>
//                     <span className="text-sm text-gray-700">Urgents</span>
//                   </div>
//                   <span className="text-lg font-semibold text-gray-900">
//                     {/* {stats.urgent} */}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="bg-blue-50 p-1.5 rounded">
//                       <TrendingUp className="h-4 w-4 text-blue-600" />
//                     </div>
//                     <span className="text-sm text-gray-700">
//                       Taux résolution
//                     </span>
//                   </div>
//                   <span className="text-lg font-semibold text-green-600">
//                     {/* {stats.total > 0
//                   ? Math.round((stats.resolved / stats.total) * 100)
//                   : 0} */}
//                     %
//                   </span>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}
//       </ul>

//       {/* FOOTER */}
//       <div className="flex items-center gap-2 px-3 py-3 mt-auto bg-white/10 backdrop-blur-md rounded-t-2xl">
//         <FaUserCircle size={30} />
//         <div
//           className={`leading-5 duration-500 overflow-hidden ${!open && "w-0 translate-x-24"}`}
//         >
//           <p className="font-medium">Saheb</p>
//           <span className="text-xs text-white/70">saheb@gmail.com</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import logo from "../../../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

// Icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbUsersPlus } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { Inbox, Plus, Users, Clock } from "lucide-react";
import { LuMessageCircleMore } from "react-icons/lu";

// const menuItems = [
//   { section: "Général" },
//   {
//     icon: <IoHomeOutline size={28} />,
//     label: "Tableau de bord",
//     path: "/Agent",
//   },

//   { section: "Tickets" },
//   {
//     icon: <Plus size={28} />,
//     label: "Créer un ticket",
//     onClick: () => setIsModalOpen(true),
//     statut: "tous",
//   },
//   {
//     icon: <Inbox size={28} />,
//     label: "Tous les tickets",
//     path: "/Agent/MesTickets",
//     statut: "tous",
//   },
//   {
//     icon: <Clock size={28} />,
//     label: "Tickets En cours",
//     path: "/Agent/MesTickets",
//     statut: "En cours",
//   },
//   {
//     icon: <CheckCircle2 size={28} />,
//     label: "Tickets Résolu",
//     path: "/Agent/MesTickets",
//     statut: "Résolu",
//   },
//   {
//     icon: <XCircle size={28} />,
//     label: "Tickets Fermés",
//     path: "/Agent/MesTickets",
//     statut: "Fermé",
//   },

//   { section: "Équipe" },
//   { icon: <Users size={28} />, label: "Membres équipe", path: "/Agent/Equipe" },
//   {
//     icon: <TbUsersPlus size={28} />,
//     label: "Attribuer ticket",
//     path: "/Agent/AttribuerTicket",
//   },

//   { section: "Communication" },
//   {
//     icon: <LuMessageCircleMore size={28} />,
//     label: "Messagerie",
//     path: "/Agent/Messagerie",
//   },

//   { section: "Paramètres" },
//   {
//     icon: <RiSettings4Line size={28} />,
//     label: "Profil",
//     path: "/Agent/Profil",
//   },
// ];

export default function Sidebar({ setIsModalOpen }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { section: "Général" },
    {
      icon: <IoHomeOutline size={28} />,
      label: "Tableau de bord",
      path: "/Agent",
    },

    { section: "Tickets" },
    {
      icon: <Plus size={28} />,
      label: "Créer un ticket",
      onClick: () => setIsModalOpen(true),
    },
    {
      icon: <Inbox size={28} />,
      label: "Tickets",
      path: "/Agent/MesTickets",
    },

    { section: "Équipe" },
    {
      icon: <Users size={28} />,
      label: "Membres équipe",
      path: "/Agent/Equipe",
    },
    {
      icon: <TbUsersPlus size={28} />,
      label: "Attribuer ticket",
      path: "/Agent/AttribuerTicket",
    },

    { section: "Communication" },
    {
      icon: <LuMessageCircleMore size={28} />,
      label: "Messagerie",
      path: "/Agent/Messagerie",
    },

    { section: "Paramètres" },
    {
      icon: <RiSettings4Line size={28} />,
      label: "Profil",
      path: "/Agent/Profil",
    },
  ];

  return (
    <aside
      className={`h-screen flex flex-col bg-white text-slate-700
      border-r border-slate-200 transition-[width] duration-300 overflow-hidden ${open ? "w-64" : "w-16"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-3 border-b border-slate-100">
        <img
          src={logo}
          alt="Logo"
          className={`rounded-lg transition-all duration-300 ${open ? "w-9 opacity-100" : "w-0 opacity-0"}`}
        />
        <MdMenuOpen
          size={26}
          onClick={() => setOpen(!open)}
          className={`cursor-pointer text-slate-500 hover:text-slate-700 transition-transform ${!open && "rotate-180"}`}
        />
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto sidebar-scroll py-3">
        <ul className="space-y-0.5 px-2">
          {menuItems.map((item, index) =>
            item.section ? (
              open && (
                <p
                  key={index}
                  className="text-xs text-slate-400 uppercase mt-4 mb-2 px-2 tracking-wider select-none font-medium"
                >
                  {item.section}
                </p>
              )
            ) : (
              <li
                key={index}
                onClick={
                  item.onClick
                    ? item.onClick
                    : () =>
                        navigate(
                          item.path,
                          item.statut != null
                            ? { state: { statut: item.statut } }
                            : undefined
                        )
                }
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer
                  ${location.pathname === item.path ? "bg-slate-100 text-slate-900" : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"}
                  transition-all duration-200 group`}
              >
                {/* Icon */}
                <span className={`min-w-[28px] flex justify-center ${location.pathname === item.path ? "text-slate-700" : "text-slate-500"}`}>
                  {item.icon}
                </span>

                {/* Label */}
                {open && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}

                {/* Tooltip when closed */}
                {!open && (
                  <span
                    className="absolute left-14 bg-slate-800 text-white text-xs font-medium whitespace-nowrap rounded-md px-2 py-1.5 shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-50"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ),
          )}
        </ul>
        {/* ACTIONS RAPIDES */}
        {open && (
          <div className="mt-6 px-2">
            <h3 className="text-slate-400 font-semibold text-xs mb-2 uppercase tracking-wider">
              Actions rapides
            </h3>
            <ul className="space-y-0.5">
              <li className="flex items-center gap-2 text-slate-500 cursor-pointer hover:bg-slate-50 hover:text-slate-700 rounded-lg px-2 py-1.5 transition text-sm">
                <Users size={18} />
                Clients
              </li>
              <li className="flex items-center gap-2 text-slate-500 cursor-pointer hover:bg-slate-50 hover:text-slate-700 rounded-lg px-2 py-1.5 transition text-sm">
                <Clock size={18} />
                Rapports
              </li>
              <li className="flex items-center gap-2 text-slate-500 cursor-pointer hover:bg-slate-50 hover:text-slate-700 rounded-lg px-2 py-1.5 transition text-sm">
                <RiSettings4Line size={18} />
                Paramètres
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 px-3 py-3 mt-auto border-t border-slate-100 bg-slate-50/50">
        <FaUserCircle size={26} className="text-slate-400 flex-shrink-0" />
        {open && (
          <div className="leading-5 text-sm overflow-hidden min-w-0">
            <p className="font-medium text-slate-800 truncate">Saheb</p>
            <span className="text-xs text-slate-500 truncate block">saheb@gmail.com</span>
          </div>
        )}
      </div>
    </aside>
  );
}
