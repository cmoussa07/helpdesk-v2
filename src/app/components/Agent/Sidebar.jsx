// import logo from "../../../assets/logo.png";
import logo from "../../../assets/mon_helpdesk.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

// Icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbUsersPlus } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { Inbox, Users, Clock } from "lucide-react";
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

export default function Sidebar({ tickets }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { section: "Principal" },
    {
      icon: <IoHomeOutline size={22} />,
      label: "Tableau de bord",
      path: "/Agent",
    },
    {
      icon: <Inbox size={22} />,
      label: "Tickets",
      path: "/Agent/MesTickets",
      count: tickets.length, // Affiche le nombre de tickets
    },

    { section: "Équipe" },
    {
      icon: <Users size={22} />,
      label: "Membres équipe",
      path: "/Agent/Equipe",
    },
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
          className={`ml-1 rounded-lg transition-all duration-300 ${open ? "w-20 opacity-100" : "w-0 opacity-0"}`}
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
                            : undefined,
                        )
                }
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer
                  ${location.pathname === item.path ? "bg-slate-100 text-slate-900" : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"}
                  transition-all duration-200 group`}
              >
                {/* Icon */}
                <span
                  className={`min-w-[22px] flex justify-center ${location.pathname === item.path ? "text-slate-700" : "text-slate-500"}`}
                >
                  {item.icon}
                </span>

                {/* Label */}
                {open && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}

                {/* 🔥 Badge compteur*/}
                {open && item.count != null && item.count > 0 && (
                  <span
                    className={`absolute ${
                      open ? "right-3" : "top-1 right-1"
                    }  bg-amber-500 text-white text-[10px] font-medium rounded-full h-4 min-w-4 flex items-center justify-center px-1`}
                  >
                    {item.count > 9 ? "9+" : item.count}
                  </span>
                )}

                {/* Tooltip when closed */}
                {!open && (
                  <span className="absolute left-14 bg-slate-800 text-white text-xs font-medium whitespace-nowrap rounded-md px-2 py-1.5 shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-50">
                    {item.label}
                  </span>
                )}
              </li>
            ),
          )}
        </ul>
        {/* Raccourcis */}
        {open && (
          <div className="mt-6 px-3 pt-4 border-t border-slate-200/70">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3">
              Raccourcis
            </p>

            <ul className="space-y-1">
              {/* Item */}
              <li
                className="group flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer
                text-sm font-medium text-slate-600
                hover:bg-slate-100 hover:text-slate-900
                transition-all duration-200"
              >
                <Users
                  size={20}
                  className="text-slate-500 group-hover:text-slate-700 transition-colors"
                />
                <span>Clients</span>
              </li>

              {/* Item */}
              <li
                className="group flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer
                text-sm font-medium text-slate-600
                hover:bg-slate-100 hover:text-slate-900
                transition-all duration-200"
              >
                <Clock
                  size={20}
                  className="text-slate-500 group-hover:text-slate-700 transition-colors"
                />
                <span>Rapports</span>
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
            <span className="text-xs text-slate-500 truncate block">
              saheb@gmail.com
            </span>
          </div>
        )}
      </div>
    </aside>
  );
}
