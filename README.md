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
import { Ticket, Plus, Users, LogOut, MessageSquare } from "lucide-react";
import { LuMessageCircleMore } from "react-icons/lu";

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

const menuItems = [
{ section: "Général" },
{
icon: <IoHomeOutline size={30} />,
label: "Tableau de bord",
path: "/Agent",
},

{ section: "Tickets" },
{
icon: <Ticket size={30} />,
label: "Mes tickets",
path: "/Agent/MesTickets",
},
{
icon: <Plus size={30} />,
label: "Nouveau ticket",
path: "/Agent/CreateTicket",
},

{ section: "Équipe" },
{ icon: <Users size={30} />, label: "Membres équipe", path: "/Agent/Equipe" },
{
icon: <TbUsersPlus size={30} />,
label: "Attribuer ticket",
path: "/Agent/AttribuerTicket",
},

{ section: "Communication" },
{
icon: <LuMessageCircleMore size={30} />,
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

return (
<div
className={`shadow-md h-screen p-2 flex flex-col overflow-hidden bg-blue-500 text-white duration-500 ${
        open ? "w-60" : "w-16"
      }`} >
