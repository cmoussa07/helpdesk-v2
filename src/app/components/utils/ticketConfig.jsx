import { MessageSquare } from "lucide-react";
export const ticketConfig = {
  status: {
    1: {
      color: "blue", // Pour le workflow
      bgColor: "bg-blue-100 text-blue-800", // Pour le badge
      description: "Votre ticket a été créé et sera traité prochainement",
    },
    2: {
      color: "orange",
      bgColor: "bg-yellow-100 text-yellow-800",
      description: "Notre équipe travaille actuellement sur votre demande",
    },
    3: {
      color: "green",
      bgColor: "bg-green-100 text-green-800",
      description:
        "Votre ticket a été résolu. Si le problème persiste, n'hésitez pas à le signaler",
    },
    4: {
      color: "red",
      bgColor: "bg-gray-100 text-gray-800",
      description: "Ce ticket est fermé",
    },
  },
  priorite: {
    1: {
      bgColor: "bg-red-100 text-red-800",
      color: "text-red-800",
    },
    2: {
      bgColor: "bg-orange-100 text-orange-600",
      color: "text-orange-600",
    },
    3: {
      bgColor: "bg-blue-100 text-blue-600",
      color: "text-blue-600",
    },
    4: {
      bgColor: "bg-gray-100 text-gray-800",
      color: "text-gray-800",
    },
  },
};

export const notificationConfig = [
  {
    icon: MessageSquare,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];
