// FIX: Created this file to define the Dashboard component.
import React from 'react';
import StatCard from './StatCard.tsx';
import { AdmissionsIcon, BedIcon, DischargedIcon, VitalsIcon } from './IconComponents.tsx';
import PatientAdmissionsChart from './PatientAdmissionsChart.tsx';
import DepartmentOccupancyChart from './DepartmentOccupancyChart.tsx';
import LiveVitalsMonitor from './LiveVitalsMonitor.tsx';
import { mockPatients } from '../services/mockData.ts';

const Dashboard: React.FC = () => {

  const totalPatients = mockPatients.filter(p => p.status !== 'Discharged').length;
  const criticalPatients = mockPatients.filter(p => p.status === 'Critical').length;
  const dischargedToday = 12; // Mock data
  const avgStay = '4.5 Days'; // Mock data

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Patients" value={totalPatients} icon={<BedIcon className="w-6 h-6 text-white" />} color="bg-blue-500" />
        <StatCard title="Critical Condition" value={criticalPatients} icon={<VitalsIcon className="w-6 h-6 text-white" />} color="bg-red-500" />
        <StatCard title="Discharged Today" value={dischargedToday} icon={<DischargedIcon className="w-6 h-6 text-white" />} color="bg-green-500" />
        <StatCard title="Avg. Length of Stay" value={avgStay} icon={<AdmissionsIcon className="w-6 h-6 text-white" />} color="bg-yellow-500" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <PatientAdmissionsChart />
        </div>
        <div className="lg:col-span-2">
          <DepartmentOccupancyChart />
        </div>
      </div>
      
      {/* Live Vitals Monitor */}
      <div>
        <LiveVitalsMonitor />
      </div>
    </div>
  );
};

export default Dashboard;
