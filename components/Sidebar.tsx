
import React from 'react';
import type { View } from '../App.tsx';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  // FIX: Updated the type of navItems to include '---' as a valid value, resolving the type error in the map function.
  const navItems: (View | '---')[] = [
    'Dashboard',
    'Patients',
    'Appointments',
    'Surgical Schedule',
    'Bed Management',
    'Ambulance Dispatch',
    '---',
    'Symptom Checker',
    'Telemedicine',
    '---',
    'Pharmacy',
    'Laboratory',
    'Billing',
    'Financials',
    'Staff',
    'Settings',
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 flex-shrink-0 border-r dark:border-gray-700 flex flex-col">
      <div className="h-16 flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 border-b dark:border-gray-700">
        MediDash
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navItems.map((item, index) => 
          item === '---' ? (
             <div key={index} className="pt-2">
                <hr className="border-t border-gray-200 dark:border-gray-700" />
            </div>
          ) : (
            <button
              key={item}
              onClick={() => setActiveView(item)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center
                ${
                  activeView === item
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {item}
            </button>
          )
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
