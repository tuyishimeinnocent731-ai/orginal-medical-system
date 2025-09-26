// FIX: Created the Sidebar component to provide primary navigation for the application, with dynamic highlighting for the active view.
import React from 'react';
import type { View } from '../types';
import { 
    DashboardIcon, 
    PatientsIcon, 
    AppointmentsIcon, 
    BillingIcon,
    StaffIcon,
    SymptomCheckerIcon,
    TelemedicineIcon,
    SurgeryIcon,
    PharmacyIcon,
    LaboratoryIcon,
    MapIcon,
    PatientPortalIcon,
    GenomicsIcon,
    WearablesIcon
} from './IconComponents';

interface SidebarProps {
  currentView: View;
  navigate: (view: View) => void;
}

const NavLink: React.FC<{
  view: View;
  currentView: View;
  navigate: (view: View) => void;
  icon: React.ReactNode;
  label: string;
}> = ({ view, currentView, navigate, icon, label }) => {
  const isActive = currentView === view;
  return (
    <button
      onClick={() => navigate(view)}
      className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </button>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentView, navigate }) => {
    const adminLinks = [
        { view: 'dashboard', icon: <DashboardIcon className="w-5 h-5" />, label: 'Dashboard' },
        { view: 'patients', icon: <PatientsIcon className="w-5 h-5" />, label: 'Patients' },
        { view: 'staff', icon: <StaffIcon className="w-5 h-5" />, label: 'Staff' },
        { view: 'appointments', icon: <AppointmentsIcon className="w-5 h-5" />, label: 'Appointments' },
        { view: 'surgical-schedule', icon: <SurgeryIcon className="w-5 h-5" />, label: 'Surgery' },
        { view: 'billing', icon: <BillingIcon className="w-5 h-5" />, label: 'Billing' },
        { view: 'pharmacy', icon: <PharmacyIcon className="w-5 h-5" />, label: 'Pharmacy' },
        { view: 'laboratory', icon: <LaboratoryIcon className="w-5 h-5" />, label: 'Laboratory' },
        { view: 'hospital-map', icon: <MapIcon className="w-5 h-5" />, label: 'Hospital Map' },
    ];
    
    const toolLinks = [
        { view: 'symptom-checker', icon: <SymptomCheckerIcon className="w-5 h-5" />, label: 'AI Symptom Checker' },
        { view: 'telemedicine', icon: <TelemedicineIcon className="w-5 h-5" />, label: 'Telemedicine' },
    ];

    const patientLinks = [
        { view: 'patient-portal', icon: <PatientPortalIcon className="w-5 h-5" />, label: 'Patient Portal' },
    ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 p-4 flex flex-col shadow-lg border-r dark:border-gray-700">
        <div className="flex items-center mb-8">
            <div className="p-2 bg-blue-600 rounded-lg">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path></svg>
            </div>
            <h1 className="ml-3 text-xl font-bold text-gray-800 dark:text-white">HealthSys</h1>
        </div>

      <nav className="flex-1 space-y-2">
        {adminLinks.map(link => (
          <NavLink key={link.view} {...link} currentView={currentView} navigate={navigate} />
        ))}
        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tools</h3>
            {toolLinks.map(link => (
                <NavLink key={link.view} {...link} currentView={currentView} navigate={navigate} />
            ))}
        </div>
         <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Patient View</h3>
            {patientLinks.map(link => (
                <NavLink key={link.view} {...link} currentView={currentView} navigate={navigate} />
            ))}
        </div>
      </nav>

      <div className="mt-auto">
        {/* User Profile Section */}
      </div>
    </aside>
  );
};

export default Sidebar;
