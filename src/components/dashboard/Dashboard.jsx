import React from 'react';
import { Users, UserCheck, GraduationCap } from 'lucide-react';
import StatCard from './StatCard';

const Dashboard = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <StatCard 
        title="Total Students" 
        value={stats.total} 
        icon={Users} 
        iconColor="blue-500" 
      />
      <StatCard 
        title="Current Students" 
        value={stats.current} 
        icon={UserCheck} 
        iconColor="green-500" 
      />
      <StatCard 
        title="Graduates" 
        value={stats.graduates} 
        icon={GraduationCap} 
        iconColor="purple-500" 
      />
    </div>
  );
};

export default Dashboard;