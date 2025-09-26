

import React from 'react';
import StatCard from './StatCard.tsx';
import PatientAdmissionsChart from './PatientAdmissionsChart.tsx';
import DepartmentOccupancyChart from './DepartmentOccupancyChart.tsx';
import LiveVitalsMonitor from './LiveVitalsMonitor.tsx';
// FIX: Added file extension to the import of IconComponents to resolve module error.
import { PatientsIcon } from './IconComponents.tsx';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Patients" 
          value="1,254" 
          change="+5.4%" 
          changeType="increase" 
          icon={<PatientsIcon className="w-6 h-6 text-blue-500" />} 
        />
        <StatCard 
          title="Beds Occupied" 
          value="82%" 
          change="-1.2%" 
          changeType="decrease" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>}
        />
        <StatCard 
          title="Avg. Stay" 
          value="4.2 Days" 
          change="+0.1 Days" 
          changeType="increase" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard 
          title="Surgeries Today" 
          value="28" 
          change="+3" 
          changeType="increase" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" /></svg>}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PatientAdmissionsChart />
        <DepartmentOccupancyChart />
      </div>

      {/* Live Vitals */}
      <div>
        <LiveVitalsMonitor />
      </div>
    </div>
  );
};

export default Dashboard;