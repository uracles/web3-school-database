import React, { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
// /home/miraclesh/web3-school-database/src/components/dashboard/Dashboard.jsx
import Filters from './components/filters/Filters';
import StudentTable from './components/StudentTable/StudentTable';
import { initialStudents } from './data/students';
import { getUniqueValues, filterStudents, getStudentStats } from './utils/studentUtils';

const App = () => {
  const [students] = useState(initialStudents);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');

  const graduationYears = getUniqueValues(students, 'graduationYear');
  const classes = getUniqueValues(students, 'class');
  
  const filteredStudents = filterStudents(students, { 
    year: selectedYear, 
    className: selectedClass 
  });
  
  const stats = getStudentStats(students);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Dashboard stats={stats} />
      <Filters
        years={graduationYears}
        classes={classes}
        selectedYear={selectedYear}
        selectedClass={selectedClass}
        onYearChange={(e) => setSelectedYear(e.target.value)}
        onClassChange={(e) => setSelectedClass(e.target.value)}
      />
      <StudentTable students={filteredStudents} />
    </div>
  );
};

export default App;