
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './components/Dashboard.tsx';
import Patients from './components/Patients.tsx';
import Appointments from './components/Appointments.tsx';
import Staff from './components/Staff.tsx';
import Billing from './components/Billing.tsx';
import SymptomChecker from './components/SymptomChecker.tsx';
import DarkModeToggle from './components/DarkModeToggle.tsx';
import GlobalSearch from './components/GlobalSearch.tsx';
import Notifications from './components/Notifications.tsx';
import SurgicalSchedule from './components/SurgicalSchedule.tsx';
import Laboratory from './components/Laboratory.tsx';
import Pharmacy from './components/Pharmacy.tsx';
import BedManagement from './components/BedManagement.tsx';
import Settings from './components/Settings.tsx';
import Genomics from './components/Genomics.tsx';
import ClinicalTrials from './components/ClinicalTrials.tsx';
import Financials from './components/Financials.tsx';
import PublicHealth from './components/PublicHealth.tsx';
import AmbulanceDispatch from './components/AmbulanceDispatch.tsx';
import Telemedicine from './components/Telemedicine.tsx';

export type View =
  | 'dashboard'
  | 'patients'
  | 'appointments'
  | 'staff'
  | 'billing'
  | 'symptom-checker'
  | 'surgeries'
  | 'lab'
  | 'pharmacy'
  | 'beds'
  | 'settings'
  | 'genomics'
  | 'trials'
  | 'financials'
  | 'public-health'
  | 'dispatch'
  | 'telemedicine';


const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<View>('dashboard');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'patients': return <Patients />;
      case 'appointments': return <Appointments />;
      case 'staff': return <Staff />;
      case 'billing': return <Billing />;
      case 'symptom-checker': return <SymptomChecker />;
      case 'surgeries': return <SurgicalSchedule />;
      case 'lab': return <Laboratory />;
      case 'pharmacy': return <Pharmacy />;
      case 'beds': return <BedManagement />;
      case 'settings': return <Settings />;
      case 'genomics': return <Genomics />;
      case 'trials': return <ClinicalTrials />;
      case 'financials': return <Financials />;
      case 'public-health': return <PublicHealth />;
      case 'dispatch': return <AmbulanceDispatch />;
      case 'telemedicine': return <Telemedicine />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
          <div className="flex items-center space-x-4">
             <h1 className="text-xl font-bold capitalize">{currentView.replace('-', ' ')}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <GlobalSearch />
            <Notifications />
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">AD</div>
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
