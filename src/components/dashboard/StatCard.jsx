import React from 'react';

const StatCard = ({ title, value, icon: Icon, iconColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <Icon className={`text-${iconColor}`} size={24} />
      </div>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
  );
};

export default StatCard;