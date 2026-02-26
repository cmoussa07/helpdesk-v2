import logo from "../../../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

// Icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch, TbUsersPlus } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { Ticket, Plus, Users, LogOut, MessageSquare } from "lucide-react";

// const menuItems = [
//   // 🏠 Général
//   { section: "Général" },
//   { icons: <IoHomeOutline size={30} />, label: "Tableau de bord", path: "/" },

//   // 🎫 Tickets
//   { section: "Tickets" },
//   {
//     icons: <Ticket size={30} />,
//     label: "Mes tickets",
//     path: "/Agent/MesTickets",
//   },
//   // {
//   //   icons: <Ticket size={30} />,
//   //   label: "Tickets équipe",
//   //   path: "/Agent/TicketsEquipe",
//   // },
//   // {
//   //   icons: <Ticket size={30} />,
//   //   label: "Tous les tickets",
//   //   path: "/Agent/TousTickets",
//   // },
//   {
//     icons: <Plus size={30} />,
//     label: "Nouveau ticket",
//     path: "/Communs/CreateTicket",
//   },

//   // 👥 Équipe
//   { section: "Équipe" },
//   {
//     icons: <Users size={30} />,
//     label: "Membres équipe",
//     path: "/Agent/Equipe",
//   },
//   {
//     icons: <TbUsersPlus size={30} />,
//     label: "Attribuer ticket",
//     path: "/Agent/AttribuerTicket",
//   },
//   // {
//   //   icons: <TbReportSearch size={30} />,
//   //   label: "Charge de travail",
//   //   path: "/Agent/ChargeTravail",
//   // },

//   // 💬 Communication
//   { section: "Communication" },
//   {
//     icons: <LuMessageCircleMore size={30} />,
//     label: "Messagerie",
//     path: "/Agent/Messagerie",
//   },
//   // {
//   //   icons: <MessageSquare size={30} />,
//   //   label: "Discussions clients",
//   //   path: "/Agent/DiscussionsClients",
//   // },

//   // 📊 Suivi
//   { section: "Suivi" },
//   {
//     icons: <TbReportSearch size={30} />,
//     label: "Historique statuts",
//     path: "/Agent/HistoriqueStatuts",
//   },
//   {
//     icons: <TbReportSearch size={30} />,
//     label: "Tickets résolus",
//     path: "/Agent/TicketsResolus",
//   },

//   // ⚙️ Paramètres
//   { section: "Paramètres" },
//   {
//     icons: <RiSettings4Line size={30} />,
//     label: "Mon profil",
//     path: "/Agent/Parametres",
//   },
//   { icons: <LogOut size={30} />, label: "Déconnexion", path: "/logout" },
// ];

const menuItems = [
  { section: "Général" },
  {
    icon: <IoHomeOutline size={22} />,
    label: "Tableau de bord",
    path: "/Agent",
  },

  { section: "Tickets" },
  {
    icon: <Ticket size={22} />,
    label: "Mes tickets",
    path: "/Agent/MesTickets",
  },
  {
    icon: <Plus size={22} />,
    label: "Nouveau ticket",
    path: "/Agent/CreateTicket",
  },

  { section: "Équipe" },
  { icon: <Users size={22} />, label: "Membres équipe", path: "/Agent/Equipe" },
  {
    icon: <TbUsersPlus size={22} />,
    label: "Attribuer ticket",
    path: "/Agent/AttribuerTicket",
  },

  { section: "Communication" },
  {
    icon: <LuMessageCircleMore size={22} />,
    label: "Messagerie",
    path: "/Agent/Messagerie",
  },

  { section: "Paramètres" },
  {
    icon: <RiSettings4Line size={22} />,
    label: "Profil",
    path: "/Agent/Profil",
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // return (
  //   <div
  //     className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-blue-500 text-white ${
  //       open ? "w-60" : "w-16"
  //     }`}
  //   >
  //     {/* Header */}
  //     <div className="px-3 py-1 h-16 flex justify-between items-center">
  //       <img
  //         src={logo}
  //         alt="Logo"
  //         className={`${open ? "w-10" : "w-0"} rounded-md`}
  //       />
  //       <MdMenuOpen
  //         size={34}
  //         className={`duration-500 cursor-pointer ${!open && "rotate-180"}`}
  //         onClick={() => setOpen(!open)}
  //       />
  //     </div>

  //     {/* Body avec scroll */}

  //     <div className="flex-1 overflow-y-auto py-4 px-2 sidebar-scroll">
  //       <ul>
  //         {menuItems.map((item, index) =>
  //           item.section ? (
  //             <p
  //               key={index}
  //               className="text-gray-200 text-xs mt-4 mb-1 uppercase px-3"
  //             >
  //               {item.section}
  //             </p>
  //           ) : (
  //             <li
  //               key={index}
  //               onClick={() => navigate(item.path)}
  //               className={`px-3 py-2 my-1 rounded-md duration-300 cursor-pointer flex gap-3 items-center group ${
  //                 location.pathname === item.path
  //                   ? "bg-blue-800"
  //                   : "hover:bg-blue-700"
  //               }`}
  //             >
  //               <div>{item.icon}</div>
  //               <p
  //                 style={{ transitionDelay: `${index * 100}ms` }}
  //                 className={`whitespace-pre duration-500 ${open ? "" : "opacity-0 translate-x-28 overflow-hidden"}`}
  //               >
  //                 {item.label}
  //               </p>
  //               <p
  //                 className={`${
  //                   open && "hidden"
  //                 } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden
  //               group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
  //               >
  //                 {item.label}
  //               </p>
  //             </li>
  //           ),
  //         )}
  //       </ul>
  //     </div>

  //     {/* Footer */}
  //     <div className="flex items-center gap-2 px-3 py-3 border-t border-blue-400">
  //       <FaUserCircle size={30} />
  //       <div
  //         className={`leading-5 ${!open && "w-0 translate-x-24"} duration-500 overflow-hidden`}
  //       >
  //         <p>Saheb</p>
  //         <span className="text-xs">saheb@gmail.com</span>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div
      className={`shadow-md h-screen p-2flex flex-col overflow-hidden bg-blue-500 text-white duration-500 ${
        open ? "w-60" : "w-16"
      }`}
    >
      {/* Header */}
      <div className="px-3 py-2 h-16 flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className={`${open ? "w-10" : "w-0"} rounded-md`}
        />
        <MdMenuOpen
          size={34}
          className={`duration-500 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* MENU SCROLL UNIQUEMENT ICI */}
      <div className="flex-1 overflow-y-auto sidebar-scroll px-2 py-4">
        <ul className="flex-1">
          {menuItems.map((item, index) => {
            // Si c’est une section
            if (item.section) {
              return (
                <p
                  key={index}
                  className="text-gray-400 text-xs mt-4 mb-1 uppercase px-3"
                >
                  {item.section}
                </p>
              );
            }

            // Sinon c’est un lien normal
            return (
              <li
                key={index}
                onClick={() => navigate(item.path)}
                className={`px-3 py-2 my-2 rounded-md duration-300 cursor-pointer flex gap-3 items-center relative group ${
                  location.pathname === item.path
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                {/* Icône */}
                <div>{item.icon}</div>

                {/* Label principal (visible si sidebar ouverte) */}
                <p
                  style={{ transitionDelay: `${index + 3}00ms` }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {item.label}
                </p>

                {/* Tooltip (visible si sidebar fermée au hover) */}
                <p
                  className={`${
                    open && "hidden"
                  } absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}
                >
                  {item.label}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* footer */}
      <div className="flex items-center gap-2 px-3 py-2">
        <div>
          <FaUserCircle size={30} />
        </div>
        <div
          className={`leading-5 ${!open && "w-0 translate-x-24"} duration-500 overflow-hidden`}
        >
          <p>Saheb</p>
          <span className="text-xs">saheb@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

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
