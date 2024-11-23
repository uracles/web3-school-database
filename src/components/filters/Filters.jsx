import React from 'react';
import FilterSelect from './FilterSelect';

const Filters = ({ years, classes, selectedYear, selectedClass, onYearChange, onClassChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FilterSelect
          label="Filter by Graduation Year"
          value={selectedYear}
          onChange={onYearChange}
          options={years}
        />
        <FilterSelect
          label="Filter by Class"
          value={selectedClass}
          onChange={onClassChange}
          options={classes}
        />
      </div>
    </div>
  );
};

export default Filters;