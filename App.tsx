// FIX: Created this file to define the main App component.
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './components/Dashboard.tsx';
import Patients from './components/Patients.tsx';
import Appointments from './components/Appointments.tsx';
import Billing from './components/Billing.tsx';
import Staff from './components/Staff.tsx';
import SymptomChecker from './components/SymptomChecker.tsx';
import DarkModeToggle from './components/DarkModeToggle.tsx';
import GlobalSearch from './components/GlobalSearch.tsx';
import Notifications from './components/Notifications.tsx';
import SurgicalSchedule from './components/SurgicalSchedule.tsx';
import Pharmacy from './components/Pharmacy.tsx';
import Laboratory from './components/Laboratory.tsx';
import Telemedicine from './components/Telemedicine.tsx';
import Genomics from './components/Genomics.tsx';
import ClinicalTrials from './components/ClinicalTrials.tsx';
import Financials from './components/Financials.tsx';
import PublicHealth from './components/PublicHealth.tsx';
import AmbulanceDispatch from './components/AmbulanceDispatch.tsx';

type View = 'Dashboard' | 'Patients' | 'Appointments' | 'Billing' | 'Staff' | 'SymptomChecker' | 'SurgicalSchedule' | 'Pharmacy' | 'Laboratory' | 'Telemedicine' | 'Genomics' | 'ClinicalTrials' | 'Financials' | 'PublicHealth' | 'AmbulanceDispatch';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [activeView, setActiveView] = useState<View>('Dashboard');

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  }, []);

  const renderView = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Patients':
        return <Patients />;
      case 'Appointments':
        return <Appointments />;
      case 'Billing':
        return <Billing />;
      case 'Staff':
        return <Staff />;
      case 'SymptomChecker':
        return <SymptomChecker />;
      case 'SurgicalSchedule':
        return <SurgicalSchedule />;
      case 'Pharmacy':
        return <Pharmacy />;
      case 'Laboratory':
        return <Laboratory />;
      case 'Telemedicine':
        return <Telemedicine />;
      case 'Genomics':
        return <Genomics />;
      case 'ClinicalTrials':
        return <ClinicalTrials />;
      case 'Financials':
        return <Financials />;
      case 'PublicHealth':
        return <PublicHealth />;
      case 'AmbulanceDispatch':
        return <AmbulanceDispatch />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
          <h1 className="text-2xl font-bold">{activeView}</h1>
          <div className="flex items-center space-x-4">
            <GlobalSearch />
            <Notifications />
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
