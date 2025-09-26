// FIX: Created this file to define the Sidebar component.
import React from 'react';
import { DashboardIcon, PatientIcon, AppointmentIcon, BillingIcon, StaffIcon, SurgeryIcon, PharmacyIcon, LaboratoryIcon, TelemedicineIcon, AiIcon, GenomicsIcon, ClinicalTrialsIcon } from './IconComponents.tsx';
import type { View } from '../types.ts';

interface SidebarProps {
  currentView: View;
  setView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const navItems: { name: View; icon: React.ReactNode }[] = [
    { name: 'Dashboard', icon: <DashboardIcon className="w-6 h-6" /> },
    { name: 'Patients', icon: <PatientIcon className="w-6 h-6" /> },
    { name: 'Appointments', icon: <AppointmentIcon className="w-6 h-6" /> },
    { name: 'SymptomChecker', icon: <AiIcon className="w-6 h-6" /> },
    { name: 'Billing', icon: <BillingIcon className="w-6 h-6" /> },
    { name: 'Staff', icon: <StaffIcon className="w-6 h-6" /> },
    { name: 'Surgery', icon: <SurgeryIcon className="w-6 h-6" /> },
    { name: 'Pharmacy', icon: <PharmacyIcon className="w-6 h-6" /> },
    { name: 'Laboratory', icon: <LaboratoryIcon className="w-6 h-6" /> },
    { name: 'Telemedicine', icon: <TelemedicineIcon className="w-6 h-6" /> },
    { name: 'Genomics', icon: <GenomicsIcon className="w-6 h-6" /> },
    { name: 'Clinical Trials', icon: <ClinicalTrialsIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex flex-col">
      <div className="p-4 border-b dark:border-gray-700">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">CarePulse</h2>
      </div>
      <nav className="flex-1 p-2 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setView(item.name)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
              currentView === item.name
                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t dark:border-gray-700">
        <p className="text-xs text-gray-500">© 2024 CarePulse Health</p>
      </div>
    </div>
  );
};

export default Sidebar;