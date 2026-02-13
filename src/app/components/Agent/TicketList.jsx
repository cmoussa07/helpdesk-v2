// components/TicketList.jsx - Version statique
import React from 'react';

function TicketList() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Liste des tickets (6)</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Trier par :</span>
          <select className="text-sm border-none focus:outline-none focus:ring-0">
            <option>Date récente</option>
            <option>Priorité</option>
            <option>Statut</option>
            <option>Client</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priorité</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Ligne 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 bg-gray-100 inline-block px-3 py-1 rounded">#1</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">Table de se connecter à mon compte</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-800 font-medium text-xs">I</span>
                  </div>
                  <span className="text-sm text-gray-900">Ibrahim</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-red-100 text-red-800 px-3 py-1 text-xs font-medium rounded-full">
                  Ouvert
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-red-100 text-red-800 px-3 py-1 text-xs font-medium rounded-full">
                  Haute
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                21/12/2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  Technique
                </span>
              </td>
            </tr>
            
            {/* Ligne 2 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 bg-gray-100 inline-block px-3 py-1 rounded">#2</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">On sur ma dernière facture</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-800 font-medium text-xs">I</span>
                  </div>
                  <span className="text-sm text-gray-900">Ibrahim</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-medium rounded-full">
                  En cours
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-medium rounded-full">
                  Moyenne
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                20/12/2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  Facturation
                </span>
              </td>
            </tr>
            
            {/* Ligne 3 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 bg-gray-100 inline-block px-3 py-1 rounded">#3</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">Problème avec l'application mobile</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-800 font-medium text-xs">I</span>
                  </div>
                  <span className="text-sm text-gray-900">Ibrahim</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-red-100 text-red-800 px-3 py-1 text-xs font-medium rounded-full">
                  Ouvert
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium rounded-full">
                  Basse
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                19/12/2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  Technique
                </span>
              </td>
            </tr>
            
            {/* Ligne 4 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 bg-gray-100 inline-block px-3 py-1 rounded">#4</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">Question sur le renouvellement</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-800 font-medium text-xs">I</span>
                  </div>
                  <span className="text-sm text-gray-900">Ibrahim</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-green-100 text-green-800 px-3 py-1 text-xs font-medium rounded-full">
                  Résolu
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-medium rounded-full">
                  Moyenne
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                18/12/2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  Commercial
                </span>
              </td>
            </tr>
            
            {/* Ligne 5 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 bg-gray-100 inline-block px-3 py-1 rounded">#5</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">Demande de documentation</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-800 font-medium text-xs">I</span>
                  </div>
                  <span className="text-sm text-gray-900">Ibrahim</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium rounded-full">
                  En attente
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium rounded-full">
                  Basse
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                17/12/2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  Commercial
                </span>
              </td>
            </tr>
            
            {/* Ligne 6 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 bg-gray-100 inline-block px-3 py-1 rounded">#6</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">Bug dans le système de rapport</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-800 font-medium text-xs">I</span>
                  </div>
                  <span className="text-sm text-gray-900">Ibrahim</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-red-100 text-red-800 px-3 py-1 text-xs font-medium rounded-full">
                  Ouvert
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-red-100 text-red-800 px-3 py-1 text-xs font-medium rounded-full">
                  Haute
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                16/12/2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  Technique
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Affichage de <span className="font-medium">1</span> à <span className="font-medium">6</span> sur <span className="font-medium">6</span> tickets
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg">
              Précédent
            </button>
            <button className="px-3 py-1 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
              1
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketList;