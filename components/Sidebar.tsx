import React from 'react';
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
    LabIcon,
    GenomicsIcon,
    MapIcon,
    SettingsIcon,
    BedIcon,
    InventoryIcon,
    FinancialsIcon,
    PayrollIcon
} from './IconComponents.tsx';

interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

const navItems = [
  { name: 'Dashboard', icon: DashboardIcon },
  { name: 'Patients', icon: PatientsIcon },
  { name: 'Appointments', icon: AppointmentsIcon },
  { name: 'Symptom Checker', icon: SymptomCheckerIcon },
  { name: 'Billing', icon: BillingIcon },
  { name: 'Staff', icon: StaffIcon },
  { name: 'Telemedicine', icon: TelemedicineIcon },
  { name: 'Surgical Schedule', icon: SurgeryIcon },
  { name: 'Pharmacy', icon: PharmacyIcon },
  { name: 'Laboratory', icon: LabIcon },
  { name: 'Genomics', icon: GenomicsIcon },
  { name: 'Bed Management', icon: BedIcon },
  { name: 'Inventory', icon: InventoryIcon },
  { name: 'Financials', icon: FinancialsIcon },
  { name: 'Payroll', icon: PayrollIcon },
  { name: 'Map', icon: MapIcon },
  { name: 'Settings', icon: SettingsIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  return (
    <aside className="w-20 md:w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex flex-col transition-all duration-300">
      <div className="h-16 flex items-center justify-center border-b dark:border-gray-700">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 hidden md:block">MediDash</h1>
        <div className="md:hidden text-blue-600 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-2 md:p-4 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setView(item.name);
            }}
            title={item.name}
            className={`flex items-center justify-center md:justify-start md:space-x-3 p-3 md:p-2 rounded-lg transition-colors ${
              currentView === item.name
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <item.icon className="w-6 h-6 flex-shrink-0" />
            <span className="font-medium hidden md:block">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;