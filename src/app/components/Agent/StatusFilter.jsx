// components/StatusFilter.jsx - Version statique
import React from 'react';

function StatusFilter() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Filtrer par statut</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full mr-3 bg-gray-100"></div>
            <span className="text-gray-700">Tous les statuts</span>
          </div>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
            24
          </span>
        </div>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full mr-3 bg-red-100"></div>
            <span className="text-gray-700">Ouvert</span>
          </div>
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
            8
          </span>
        </div>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full mr-3 bg-yellow-100"></div>
            <span className="text-gray-700">En cours</span>
          </div>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
            6
          </span>
        </div>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full mr-3 bg-green-100"></div>
            <span className="text-gray-700">Résolu</span>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
            10
          </span>
        </div>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full mr-3 bg-blue-100"></div>
            <span className="text-gray-700">En attente</span>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            4
          </span>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-sm">Statut sélectionné :</span>
          <span className="text-blue-600 font-medium">Tous les statuts</span>
        </div>
      </div>
    </div>
  );
}

export default StatusFilter;