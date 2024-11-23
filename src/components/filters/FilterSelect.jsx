import React from 'react';

const FilterSelect = ({ label, value, onChange, options }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        className="w-full p-2 border border-gray-300 rounded-md"
        value={value}
        onChange={onChange}
      >
        <option value="all">All {label.split(' ').pop()}</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;