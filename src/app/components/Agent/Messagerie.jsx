// import { useState } from "react";
// import { Card, CardContent } from "../ui/card";
// import { Input } from "../ui/input";
// import { Search, MessageSquare, Mail, User, Clock } from "lucide-react";
// import { LuMessageCircleMore } from "react-icons/lu";

// export default function Messagerie() {
//   return (
//     <div className="space-y-6">
//       {/* En-tête */}
//       <div>
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">Messagerie</h2>
//         <p className="text-gray-600">
//           Toutes vos conversations et messages en un seul endroit
//         </p>
//       </div>

//       {/* Statistiques */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <Card className="border-2 border-purple-100 hover:shadow-lg transition-all duration-200 hover:scale-105">
//           <CardContent className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600 mb-1">Conversations</p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {/* {ticketsWithMessages.length} */} {5}
//                 </p>
//               </div>
//               <div className="bg-purple-100 p-3 rounded-lg">
//                 <LuMessageCircleMore className="h-6 w-6 text-purple-600" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="border-2 border-blue-100 hover:shadow-lg transition-all duration-200 hover:scale-105">
//           <CardContent className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600 mb-1">Total messages</p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {/* {totalMessages} */} {234}
//                 </p>
//               </div>
//               <div className="bg-blue-100 p-3 rounded-lg">
//                 <Mail className="h-6 w-6 text-blue-600" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="border-2 border-green-100 hover:shadow-lg transition-all duration-200 hover:scale-105">
//           <CardContent className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600 mb-1">Actives</p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {/* {activeConversations} */} {12}
//                 </p>
//               </div>
//               <div className="bg-green-100 p-3 rounded-lg">
//                 <Clock className="h-6 w-6 text-green-600" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="border-2 border-orange-100 hover:shadow-lg transition-all duration-200 hover:scale-105">
//           <CardContent className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600 mb-1">Messages clients</p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {/* {messagesFromCustomers} */} {45}
//                 </p>
//               </div>
//               <div className="bg-orange-100 p-3 rounded-lg">
//                 <User className="h-6 w-6 text-orange-600" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Barre de recherche */}
//       <Card>
//         <CardContent className="p-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//             <Input
//               type="text"
//               placeholder="Rechercher une conversation, un client, ou un message..."
//               className="pl-10 border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors"
//             />
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Search, Mail, User, Clock } from "lucide-react";
import { LuMessageCircleMore } from "react-icons/lu";
import { motion } from "framer-motion";

export default function Messagerie() {
  // Exemple statique pour l'instant
  const stats = [
    {
      label: "Conversations",
      value: 5,
      icon: <LuMessageCircleMore className="h-6 w-6 text-purple-600" />,
      bg: "bg-purple-100",
    },
    {
      label: "Total messages",
      value: 234,
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      label: "Actives",
      value: 12,
      icon: <Clock className="h-6 w-6 text-green-600" />,
      bg: "bg-green-100",
    },
    {
      label: "Messages clients",
      value: 45,
      icon: <User className="h-6 w-6 text-orange-600" />,
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Messagerie</h2>
        <p className="text-gray-600">
          Toutes vos conversations et messages en un seul endroit
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
          >
            <Card className="border-2 border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`${stat.bg} p-3 rounded-lg flex items-center justify-center`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Barre de recherche */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="border-2 border-gray-100 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher une conversation, un client, ou un message..."
                className="pl-10 border border-gray-300 rounded-md hover:border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-300"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
