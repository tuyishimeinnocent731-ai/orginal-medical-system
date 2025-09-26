import React from 'react';
// FIX: Created types.ts to define the View type.
import type { View } from '../types';
// FIX: Created IconComponents.tsx to define the icon components.
import { DashboardIcon, PatientsIcon, AppointmentsIcon, SymptomCheckerIcon, LogoIcon, BillingIcon, StaffIcon, HospitalMapIcon, ChatBubbleIcon, SurgeryIcon, PillIcon, MicroscopeIcon } from './IconComponents';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  const navItems: { id: View; label: string; icon: React.FC<{className?: string}> }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'patients', label: 'Patients', icon: PatientsIcon },
    { id: 'appointments', label: 'Appointments', icon: AppointmentsIcon },
    { id: 'telemedicine', label: 'Telemedicine', icon: ChatBubbleIcon },
    { id: 'surgical-schedule', label: 'Surgical Schedule', icon: SurgeryIcon },
    { id: 'pharmacy', label: 'Pharmacy', icon: PillIcon },
    { id: 'laboratory', label: 'Laboratory', icon: MicroscopeIcon },
    { id: 'billing', label: 'Billing', icon: BillingIcon },
    { id: 'staff', label: 'Staff', icon: StaffIcon },
    { id: 'map', label: 'Hospital Map', icon: HospitalMapIcon },
    { id: 'symptom-checker', label: 'AI Symptom Checker', icon: SymptomCheckerIcon },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 shadow-lg flex flex-col">
      <div className="h-20 flex items-center justify-center px-4 border-b border-gray-200 dark:border-gray-700">
        <LogoIcon className="h-9 w-9 text-blue-600" />
        <h1 className="text-xl font-bold text-gray-800 dark:text-white ml-3">MediSync</h1>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-white'
                }`}
                aria-current={currentView === item.id}
              >
                <item.icon className="h-6 w-6 mr-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">&copy; 2024 MediSync. All rights reserved.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
