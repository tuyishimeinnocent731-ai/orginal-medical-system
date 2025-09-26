// FIX: Created this file to define the Sidebar component.
import React from 'react';
import {
  DashboardIcon, PatientsIcon, AppointmentsIcon, BillingIcon, StaffIcon, SymptomCheckerIcon,
  SurgeryIcon, PharmacyIcon, LaboratoryIcon, TelemedicineIcon, GenomicsIcon, ClinicalTrialsIcon,
  FinancialsIcon, PublicHealthIcon, AmbulanceDispatchIcon
} from './IconComponents.tsx';

type View = 'Dashboard' | 'Patients' | 'Appointments' | 'Billing' | 'Staff' | 'SymptomChecker' | 'SurgicalSchedule' | 'Pharmacy' | 'Laboratory' | 'Telemedicine' | 'Genomics' | 'ClinicalTrials' | 'Financials' | 'PublicHealth' | 'AmbulanceDispatch';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const navItems: { view: View; label: string; icon: React.FC<any> }[] = [
  { view: 'Dashboard', label: 'Dashboard', icon: DashboardIcon },
  { view: 'Patients', label: 'Patients', icon: PatientsIcon },
  { view: 'Appointments', label: 'Appointments', icon: AppointmentsIcon },
  { view: 'SurgicalSchedule', label: 'Surgeries', icon: SurgeryIcon },
  { view: 'Billing', label: 'Billing', icon: BillingIcon },
  { view: 'Staff', label: 'Staff', icon: StaffIcon },
  { view: 'Pharmacy', label: 'Pharmacy', icon: PharmacyIcon },
  { view: 'Laboratory', label: 'Laboratory', icon: LaboratoryIcon },
  { view: 'Telemedicine', label: 'Telemedicine', icon: TelemedicineIcon },
  { view: 'AmbulanceDispatch', label: 'Dispatch', icon: AmbulanceDispatchIcon },
  { view: 'SymptomChecker', label: 'AI Symptom Checker', icon: SymptomCheckerIcon },
  { view: 'Genomics', label: 'Genomics', icon: GenomicsIcon },
  { view: 'ClinicalTrials', label: 'Clinical Trials', icon: ClinicalTrialsIcon },
  { view: 'Financials', label: 'Financials', icon: FinancialsIcon },
  { view: 'PublicHealth', label: 'Public Health', icon: PublicHealthIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 flex-shrink-0 border-r dark:border-gray-700 flex flex-col">
      <div className="h-16 flex items-center justify-center border-b dark:border-gray-700">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">MedSys</h1>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navItems.map(item => (
          <button
            key={item.view}
            onClick={() => setActiveView(item.view)}
            className={`w-full flex items-center p-3 rounded-lg transition-colors text-left
              ${activeView === item.view
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            <item.icon className="w-6 h-6 mr-3" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
