// FIX: Created this file to define the Sidebar component.
import React from 'react';
import type { View } from '../types';
import { 
    DashboardIcon, PatientsIcon, StaffIcon, AppointmentsIcon, SymptomCheckerIcon, 
    BillingIcon, PharmacyIcon, LaboratoryIcon, SurgeryIcon, TelemedicineIcon, HospitalMapIcon, PatientPortalIcon 
} from './IconComponents';

interface SidebarProps {
  currentView: View;
  navigate: (view: View) => void;
}

const navItems = [
  { view: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
  { view: 'patients', label: 'Patients', icon: PatientsIcon },
  { view: 'staff', label: 'Staff', icon: StaffIcon },
  { view: 'appointments', label: 'Appointments', icon: AppointmentsIcon },
  { view: 'surgical-schedule', label: 'Surgeries', icon: SurgeryIcon },
  { view: 'laboratory', label: 'Lab Results', icon: LaboratoryIcon },
  { view: 'pharmacy', label: 'Pharmacy', icon: PharmacyIcon },
  { view: 'billing', label: 'Billing', icon: BillingIcon },
  { view: 'telemedicine', label: 'Telemedicine', icon: TelemedicineIcon },
  { view: 'hospital-map', label: 'Map', icon: HospitalMapIcon },
  { view: 'symptom-checker', label: 'AI Checker', icon: SymptomCheckerIcon },
  { view: 'patient-portal', label: 'Patient Portal', icon: PatientPortalIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ currentView, navigate }) => {
  const NavItem: React.FC<{item: typeof navItems[0]}> = ({ item }) => {
    const isActive = currentView === item.view;
    const activeClass = 'bg-blue-500 text-white';
    const inactiveClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700';
    
    return (
      <li>
        <button
          onClick={() => navigate(item.view)}
          className={`w-full flex items-center justify-center lg:justify-start p-3 my-1 rounded-lg transition-colors duration-200 ${isActive ? activeClass : inactiveClass}`}
          title={item.label}
        >
          <item.icon className="h-6 w-6" />
          <span className="hidden lg:inline ml-4 font-medium">{item.label}</span>
        </button>
      </li>
    );
  };

  return (
    <aside className="bg-white dark:bg-gray-800 w-20 lg:w-64 fixed h-full shadow-lg z-10 transition-all duration-300">
      <div className="p-4 border-b dark:border-gray-700">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 text-center">
          <span className="lg:hidden">H+</span>
          <span className="hidden lg:inline">HealthPlus</span>
        </h1>
      </div>
      <nav className="p-2">
        <ul>
          {navItems.map(item => <NavItem key={item.view} item={item} />)}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
