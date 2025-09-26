
import React from 'react';
import { DashboardIcon, PatientsIcon, AppointmentsIcon, BillingIcon, StaffIcon, HeartIcon, PharmacyIcon, LabIcon, SurgeryIcon, TelemedicineIcon, GenomicsIcon, SettingsIcon } from './IconComponents.tsx';
import type { View } from '../App.tsx';

interface SidebarProps {
  currentView: View;
  setView: (view: View) => void;
}

const NavLink: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  const activeClass = 'bg-blue-500 text-white';
  const inactiveClass = 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700';
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onClick(); }}
      className={`flex items-center px-4 py-2.5 rounded-lg transition-colors duration-200 ${isActive ? activeClass : inactiveClass}`}
    >
      {icon}
      <span className="ml-4 font-medium">{label}</span>
    </a>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex-shrink-0 flex flex-col">
      <div className="h-16 flex items-center justify-center border-b dark:border-gray-700">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">MediDash</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Main Menu</h2>
        <NavLink icon={<DashboardIcon className="w-6 h-6" />} label="Dashboard" isActive={currentView === 'dashboard'} onClick={() => setView('dashboard')} />
        <NavLink icon={<PatientsIcon className="w-6 h-6" />} label="Patients" isActive={currentView === 'patients'} onClick={() => setView('patients')} />
        <NavLink icon={<AppointmentsIcon className="w-6 h-6" />} label="Appointments" isActive={currentView === 'appointments'} onClick={() => setView('appointments')} />
        <NavLink icon={<BillingIcon className="w-6 h-6" />} label="Billing" isActive={currentView === 'billing'} onClick={() => setView('billing')} />
        <NavLink icon={<StaffIcon className="w-6 h-6" />} label="Staff" isActive={currentView === 'staff'} onClick={() => setView('staff')} />
        <NavLink icon={<HeartIcon className="w-6 h-6" />} label="Symptom Checker" isActive={currentView === 'symptom-checker'} onClick={() => setView('symptom-checker')} />
        
        <h2 className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Clinical</h2>
        <NavLink icon={<PharmacyIcon className="w-6 h-6" />} label="Pharmacy" isActive={currentView === 'pharmacy'} onClick={() => setView('pharmacy')} />
        <NavLink icon={<LabIcon className="w-6 h-6" />} label="Laboratory" isActive={currentView === 'laboratory'} onClick={() => setView('laboratory')} />
        <NavLink icon={<SurgeryIcon className="w-6 h-6" />} label="Surgeries" isActive={currentView === 'surgical-schedule'} onClick={() => setView('surgical-schedule')} />
        <NavLink icon={<TelemedicineIcon className="w-6 h-6" />} label="Telemedicine" isActive={currentView === 'telemedicine'} onClick={() => setView('telemedicine')} />
        <NavLink icon={<GenomicsIcon className="w-6 h-6" />} label="Genomics" isActive={currentView === 'genomics'} onClick={() => setView('genomics')} />
      </nav>
      <div className="p-4 border-t dark:border-gray-700">
        <NavLink icon={<SettingsIcon className="w-6 h-6" />} label="Settings" isActive={currentView === 'settings'} onClick={() => setView('settings')} />
      </div>
    </aside>
  );
};

export default Sidebar;
