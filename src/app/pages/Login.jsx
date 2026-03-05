import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { User, Lock, UserCog, Mail, Phone } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import mon_helpdesk from "../../assets/mon_helpdesk.jpg";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // States pour le formulaire client
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  // Comptes de démonstration
  // const demoAccounts = [
  //   {
  //     name: "Marie Dubois",
  //     email: "marie@email.com",
  //     role: "client",
  //     ticketCount: 3,
  //   },
  //   {
  //     name: "Pierre Martin",
  //     email: "pierre@email.com",
  //     role: "client",
  //     ticketCount: 1,
  //   },
  //   {
  //     name: "Emma Leroy",
  //     email: "emma@email.com",
  //     role: "client",
  //     ticketCount: 5,
  //   },
  // ];
  //  {/* Comptes de démonstration */}
  //         <div className="mt-6 pt-6 border-t border-gray-200">
  //           <p className="text-gray-600 mb-3 text-center font-medium">
  //             Comptes clients de démonstration
  //           </p>
  //           <div className="space-y-2">
  //             {demoAccounts.map((account) => (
  //               <button
  //                 key={account.email}
  //                 onClick={() => useDemoAccount(account)}
  //                 className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
  //               >
  //                 <div className="flex items-center justify-between">
  //                   <div>
  //                     <p className="text-gray-900 font-medium group-hover:text-blue-600">
  //                       {account.name}
  //                     </p>
  //                     <p className="text-gray-500 text-sm flex items-center gap-1">
  //                       <Mail className="h-3 w-3" />
  //                       {account.email}
  //                     </p>
  //                   </div>
  //                   <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">
  //                     {account.ticketCount} ticket
  //                     {account.ticketCount > 1 ? "s" : ""}
  //                   </span>
  //                 </div>
  //               </button>
  //             ))}
  //           </div>
  //         </div>

  //         {/* Note d'information */}
  //         <p className="text-xs text-gray-400 text-center mt-4">
  //           Les identifiants sont fournis à titre de démonstration. Aucune
  //           information personnelle n'est stockée.
  //         </p>

  // Compte agent (admin)
  const agentAccount = {
    name: "Admin Support",
    email: "admin@support.com",
    role: "agent",
    ticketCount: 12,
  };

  // Gestion connexion client
  const handleClientLogin = (e) => {
    e.preventDefault();

    // Vérifier si l'email existe dans les comptes démo
    const existingUser = demoAccounts.find(
      (acc) => acc.email.toLowerCase() === customerEmail.toLowerCase(),
    );

    if (existingUser) {
      // Si l'utilisateur existe, on le connecte
      login(existingUser);
      navigate("/Client");
    } else {
      // Sinon, on crée un nouveau compte client
      const newUser = {
        name: customerName,
        email: customerEmail,
        role: "client",
      };
      login(newUser);
      navigate("/Client");
    }
  };

  // Gestion connexion agent
  const handleAgentLogin = () => {
    login(agentAccount);
    navigate("/Agent");
  };

  // Utiliser un compte démo
  const useDemoAccount = (account) => {
    login(account);
    navigate("/Client");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-blue-100 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 mb-2">
          <div className="flex justify-center mb-4">
            <div className=" rounded-2xl shadow-lg transition-all duration-300">
              <img
                src={mon_helpdesk}
                alt="Mon logo Helpdesk"
                className="h-full w-full max-h-32 max-w-32 rounded-xl object-contain"
              />
            </div>
          </div>
          {/* <CardTitle className="text-center text-2xl font-bold">
            Bienvenue sur Mon Helpdesk
          </CardTitle> */}
          <CardDescription className="text-center text-sm text-gray-600 pb-3">
            Votre partenaire pour résoudre tous vos problèmes techniques
          </CardDescription>
          {/* <p className="text-gray-600 text-center mt-2">
            Choisissez votre mode de connexion
          </p> */}
        </CardHeader>

        <CardContent className="p-6">
          {/* Formulaire Client */}
          <form onSubmit={handleClientLogin} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <User className="h-4 w-4 text-gray-600" />
                Votre nom
              </label>
              <Input
                id="name"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Jean Dupont"
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <Mail className="h-4 w-4 text-gray-600" />
                Votre email
              </label>
              <Input
                id="email"
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="jean.dupont@email.com"
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2"
            >
              Connexion
            </Button>
          </form>
          <p className="text-sm text-center mt-4">
            Pas de compte ?{" "}
            <button
              onClick={() => navigate("/Inscription")}
              className="text-blue-600 hover:underline"
            >
              S'inscrire
            </button>
          </p>

          {/* Séparateur */}
          {/* <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ou</span>
            </div>
          </div> */}

          {/* Bouton Agent / Admin */}
          <div className="mt-4">
            <Button
              onClick={handleAgentLogin}
              variant="outline"
              className="w-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center gap-2 py-2"
            >
              <UserCog className="h-5 w-5 text-gray-600" />
              <span>Accès Agent / Administrateur</span>
            </Button>
          </div>

          {/* Informations agent */}
          {/* <div className="mt-2 text-xs text-gray-500 text-center">
              <p>
                Agent: {agentAccount.name} - {agentAccount.email}
              </p>
            </div>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
