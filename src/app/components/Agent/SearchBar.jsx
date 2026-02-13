// components/SearchBar.jsx - Version statique
import React from 'react';

function SearchBar() {
  return (
    <div className="mb-6">
      <h2 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
        chercher par titre, description, client ou ID...
      </h2>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Rechercher un ticket..." 
          className="w-full p-4 pl-12 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute left-4 top-4 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;