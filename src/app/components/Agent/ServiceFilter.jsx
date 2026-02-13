// components/ServiceFilter.jsx - Version statique
import React from 'react';

function ServiceFilter() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Toute copie :</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
          <span className="text-gray-700 font-medium">Toute copie de service</span>
        </div>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded cursor-pointer">
          <span className="text-gray-700">Service technique</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            12
          </span>
        </div>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded cursor-pointer">
          <span className="text-gray-700">Service commercial</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            8
          </span>
        </div>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded cursor-pointer">
          <span className="text-gray-700">Support client</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            20
          </span>
        </div>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded cursor-pointer">
          <span className="text-gray-700">Service financier</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            5
          </span>
        </div>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded cursor-pointer">
          <span className="text-gray-700">Développement</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            15
          </span>
        </div>
        
        <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center">
          <span>+ Toute copie de service</span>
        </button>
      </div>
    </div>
  );
}

export default ServiceFilter;