export const getUniqueValues = (students, field) => {
    return [...new Set(students.map(student => student[field]))];
  };
  
  export const filterStudents = (students, { year, className }) => {
    return students.filter(student => {
      const yearMatch = year === 'all' || student.graduationYear === parseInt(year);
      const classMatch = className === 'all' || student.class === className;
      return yearMatch && classMatch;
    });
  };
  
  export const getStudentStats = (students) => {
    return {
      total: students.length,
      current: students.filter(s => s.status === 'current').length,
      graduates: students.filter(s => s.status === 'graduate').length,
    };
  };