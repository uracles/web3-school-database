import React from 'react';

const StudentRow = ({ student }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{student.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{student.class}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{student.graduationYear}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          student.status === 'current' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-purple-100 text-purple-800'
        }`}>
          {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
        </span>
      </td>
    </tr>
  );
};

export default StudentRow;