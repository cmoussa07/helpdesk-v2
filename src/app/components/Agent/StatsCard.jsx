// components/StatsCard.jsx - Version statique
import React from 'react';

function StatsCard({ title, value, bgColor, textColor }) {
  return (
    <div className={`${bgColor} rounded-lg shadow p-6`}>
      <h3 className="text-gray-600 text-sm font-medium mb-2">{title}</h3>
      <div className="flex items-center">
        <span className={`${textColor} text-3xl font-bold`}>{value}</span>
      </div>
    </div>
  );
}

export default StatsCard;