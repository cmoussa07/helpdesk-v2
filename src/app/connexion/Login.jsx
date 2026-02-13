

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLogin, isAuthenticated }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('client'); // 'client' ou 'admin'
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     // Validation basique
//     if (!email || !password) {
//       setError('Veuillez remplir tous les champs');
//       return;
//     }

//     // Appeler la fonction de connexion parente
//     const success = onLogin(email, password, role);
    
//     if (success) {
//       // Redirection selon le rôle
//       if (role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/client');
//       }
//     } else {
//       setError('Identifiants incorrects');
//     }
//   };

//   // Si déjà authentifié, rediriger
//   if (isAuthenticated) {
//     navigate('/');
//     return null;
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Connexion</h2>
        
//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           {/* Sélecteur de rôle */}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Je suis :</label>
//             <div className="flex gap-4">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   value="client"
//                   checked={role === 'client'}
//                   onChange={(e) => setRole(e.target.value)}
//                   className="mr-2"
//                 />
//                 Client
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   value="admin"
//                   checked={role === 'admin'}
//                   onChange={(e) => setRole(e.target.value)}
//                   className="mr-2"
//                 />
//                 Administrateur
//               </label>
//             </div>
//           </div>

//           {/* Champ Email */}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="votre@email.com"
//             />
//           </div>

//           {/* Champ Mot de passe */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-2">Mot de passe</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="••••••••"
//             />
//           </div>

//           {/* Bouton de connexion */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
//           >
//             Se connecter
//           </button>
//         </form>

//         <p className="text-center text-gray-500 mt-6 text-sm">
//           {role === 'client' 
//             ? 'Connectez-vous pour gérer vos tickets de support'
//             : 'Accédez au tableau de bord administrateur'
//           }
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// app/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation simple
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    // Simulation d'authentification
    // En réalité, tu ferais un appel API ici
    const userData = {
      id: 1,
      name: 'IBRAHIM',
      email: email,
      role: 'client'
    };

    // Appeler la fonction de connexion du parent
    onLogin(userData);
    
    // Rediriger vers la page d'accueil
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Connexion Client</h2>
          <p className="text-gray-600 mt-2">Accédez à votre centre d'assistance</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Adresse email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Se connecter
          </button>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Démo : Utilisez n'importe quelle adresse email et mot de passe
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;