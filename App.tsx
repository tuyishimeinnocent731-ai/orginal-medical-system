// FIX: Created this file to provide the main application component.
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './components/Dashboard.tsx';
import Patients from './components/Patients.tsx';
import Appointments from './components/Appointments.tsx';
import Billing from './components/Billing.tsx';
import Staff from './components/Staff.tsx';
import SurgicalSchedule from './components/SurgicalSchedule.tsx';
import Pharmacy from './components/Pharmacy.tsx';
import Laboratory from './components/Laboratory.tsx';
import SymptomChecker from './components/SymptomChecker.tsx';
import Telemedicine from './components/Telemedicine.tsx';
import DarkModeToggle from './components/DarkModeToggle.tsx';
import GlobalSearch from './components/GlobalSearch.tsx';
import Notifications from './components/Notifications.tsx';
import Genomics from './components/Genomics.tsx';
import ClinicalTrials from './components/ClinicalTrials.tsx';
import type { View } from './types.ts';

const App: React.FC = () => {
  const [view, setView] = useState<View>('Dashboard');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const renderView = () => {
    switch (view) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Patients':
        return <Patients />;
      case 'Appointments':
        return <Appointments />;
      case 'Billing':
        return <Billing />;
       case 'SymptomChecker':
        return <SymptomChecker />;
      case 'Staff':
          return <Staff />;
      case 'Surgery':
          return <SurgicalSchedule />;
      case 'Pharmacy':
          return <Pharmacy />;
      case 'Laboratory':
          return <Laboratory />;
      case 'Telemedicine':
          return <Telemedicine />;
      case 'Genomics':
          return <Genomics />;
      case 'Clinical Trials':
          return <ClinicalTrials />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans`}>
      <Sidebar currentView={view} setView={setView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm z-10">
          <h1 className="text-2xl font-semibold">{view}</h1>
          <div className="flex items-center gap-4">
            <GlobalSearch />
            <Notifications />
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <img src="https://i.pravatar.cc/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;