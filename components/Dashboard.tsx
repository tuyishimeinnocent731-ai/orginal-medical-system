
// FIX: Created this file to define the Dashboard component.
import React from 'react';
// FIX: Added file extensions to imports.
import StatCard from './StatCard.tsx';
import PatientAdmissionsChart from './PatientAdmissionsChart.tsx';
import DepartmentOccupancyChart from './DepartmentOccupancyChart.tsx';
import LiveVitalsMonitor from './LiveVitalsMonitor.tsx';
import { mockPatients, mockStaff } from '../services/mockData.ts';
import { PatientsIcon, StaffIcon } from './IconComponents.tsx';

const Dashboard: React.FC = () => {
  const activePatients = mockPatients.filter(p => p.status !== 'Discharged').length;
  const criticalPatients = mockPatients.filter(p => p.status === 'Critical').length;
  const staffOnCall = mockStaff.filter(s => s.onCall).length;
  
  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Hospital Overview</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Real-time statistics and insights.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Patients" value={activePatients} icon={<PatientsIcon className="w-6 h-6 text-blue-800" />} color="bg-blue-100 dark:bg-blue-900/50" />
        <StatCard title="Critical Condition" value={criticalPatients} icon={<PatientsIcon className="w-6 h-6 text-red-800" />} color="bg-red-100 dark:bg-red-900/50" />
        <StatCard title="Total Staff" value={mockStaff.length} icon={<StaffIcon className="w-6 h-6 text-green-800" />} color="bg-green-100 dark:bg-green-900/50" />
        <StatCard title="Staff On Call" value={staffOnCall} icon={<StaffIcon className="w-6 h-6 text-yellow-800" />} color="bg-yellow-100 dark:bg-yellow-900/50" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
            <PatientAdmissionsChart />
        </div>
        <div className="lg:col-span-2">
            <DepartmentOccupancyChart />
        </div>
      </div>
      
      <div>
        <LiveVitalsMonitor />
      </div>

    </div>
  );
};

export default Dashboard;