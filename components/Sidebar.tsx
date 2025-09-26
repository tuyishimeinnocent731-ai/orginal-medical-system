import React from 'react';
import type { View } from '../types.ts';
import { 
    DashboardIcon, PatientsIcon, AppointmentsIcon, HeartIcon, BillingIcon, StaffIcon, MapIcon, 
    TelemedicineIcon, SurgeryIcon, PharmacyIcon, LabIcon, UserCircleIcon, DnaIcon, ClipboardIcon, DollarIcon,
    PublicHealthIcon
} from './IconComponents.tsx';

interface SidebarProps {
  currentView: View;
  navigate: (view: View) => void;
}

const NavLink: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      <div className="w-6 h-6 mr-3">{icon}</div>
      <span>{label}</span>
    </button>
  );
};

const NavSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{title}</h3>
        <div className="space-y-1">
            {children}
        </div>
    </div>
);

const Sidebar: React.FC<SidebarProps> = ({ currentView, navigate }) => {
  // FIX: Explicitly typed navItems to ensure 'view' is of type View, not string.
  const navItems: Record<string, { view: View; label: string; icon: React.ReactNode }[]> = {
    clinical: [
      { view: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
      { view: 'patients', label: 'Patients', icon: <PatientsIcon /> },
      { view: 'appointments', label: 'Appointments', icon: <AppointmentsIcon /> },
      { view: 'surgeries', label: 'Surgeries', icon: <SurgeryIcon /> },
      { view: 'telemedicine', label: 'Telemedicine', icon: <TelemedicineIcon /> },
    ],
    administrative: [
      { view: 'billing', label: 'Billing', icon: <BillingIcon /> },
      { view: 'staff', label: 'Staff', icon: <StaffIcon /> },
      { view: 'map', label: 'Hospital Map', icon: <MapIcon /> },
      { view: 'financials', label: 'Financials', icon: <DollarIcon /> },
      { view: 'public-health', label: 'Public Health', icon: <PublicHealthIcon /> },
    ],
    diagnostics: [
      { view: 'symptom-checker', label: 'AI Symptom Checker', icon: <HeartIcon /> },
      { view: 'laboratory', label: 'Laboratory', icon: <LabIcon /> },
      { view: 'pharmacy', label: 'Pharmacy', icon: <PharmacyIcon /> },
    ],
    advanced: [
      { view: 'genomics', label: 'Genomics', icon: <DnaIcon /> },
      { view: 'clinical-trials', label: 'Clinical Trials', icon: <ClipboardIcon /> },
    ],
    patientFocus: [
        { view: 'patient-portal', label: 'Patient Portal', icon: <UserCircleIcon /> },
    ]
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex-shrink-0 flex flex-col border-r dark:border-gray-700">
      <div className="p-4 flex items-center flex-shrink-0">
        <div className="p-2 bg-blue-600 rounded-lg">
           <HeartIcon className="w-6 h-6 text-white"/>
        </div>
        <h1 className="text-xl font-bold ml-3 text-gray-800 dark:text-white">HealthSys AI</h1>
      </div>
      
      <nav className="flex-1 space-y-6 overflow-y-auto p-4">
        <NavSection title="Clinical">
            {navItems.clinical.map(item => (
                <NavLink key={item.view} label={item.label} icon={item.icon} isActive={currentView === item.view} onClick={() => navigate(item.view)} />
            ))}
        </NavSection>
         <NavSection title="Administrative">
            {navItems.administrative.map(item => (
                <NavLink key={item.view} label={item.label} icon={item.icon} isActive={currentView === item.view} onClick={() => navigate(item.view)} />
            ))}
        </NavSection>
        <NavSection title="Diagnostics">
            {navItems.diagnostics.map(item => (
                <NavLink key={item.view} label={item.label} icon={item.icon} isActive={currentView === item.view} onClick={() => navigate(item.view)} />
            ))}
        </NavSection>
         <NavSection title="Advanced">
            {navItems.advanced.map(item => (
                <NavLink key={item.view} label={item.label} icon={item.icon} isActive={currentView === item.view} onClick={() => navigate(item.view)} />
            ))}
        </NavSection>
        <NavSection title="Patient Focus">
            {navItems.patientFocus.map(item => (
                <NavLink key={item.view} label={item.label} icon={item.icon} isActive={currentView === item.view} onClick={() => navigate(item.view)} />
            ))}
        </NavSection>
      </nav>
    </aside>
  );
};

export default Sidebar;