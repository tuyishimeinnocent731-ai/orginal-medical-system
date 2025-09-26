
import React from 'react';
import StatCard from './StatCard.tsx';
import PatientAdmissionsChart from './PatientAdmissionsChart.tsx';
import DepartmentOccupancyChart from './DepartmentOccupancyChart.tsx';
import LiveVitalsMonitor from './LiveVitalsMonitor.tsx';
import { mockPatients } from '../services/mockData.ts';

const Dashboard: React.FC = () => {
  const totalPatients = mockPatients.filter(p => p.status !== 'Discharged').length;
  const criticalPatients = mockPatients.filter(p => p.status === 'Critical').length;
  
  const availableBeds = 150; // Mock total beds
  const occupiedBeds = totalPatients;
  const occupancyRate = ((occupiedBeds / availableBeds) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Patients" 
          value={totalPatients} 
          icon={<svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
        />
        <StatCard 
          title="Bed Occupancy" 
          value={`${occupancyRate}%`} 
          icon={<svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h5m-5 4h5" /></svg>}
        />
        <StatCard 
          title="Critical Patients" 
          value={criticalPatients} 
          icon={<svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard 
          title="Avg. Stay (Days)" 
          value="5.2" 
          icon={<svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PatientAdmissionsChart />
        </div>
        <div>
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
