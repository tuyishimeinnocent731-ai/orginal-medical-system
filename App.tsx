
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './components/Dashboard.tsx';
import Patients from './components/Patients.tsx';
import Appointments from './components/Appointments.tsx';
import Billing from './components/Billing.tsx';
import Staff from './components/Staff.tsx';
import SymptomChecker from './components/SymptomChecker.tsx';
import Pharmacy from './components/Pharmacy.tsx';
import Laboratory from './components/Laboratory.tsx';
import SurgicalSchedule from './components/SurgicalSchedule.tsx';
import Telemedicine from './components/Telemedicine.tsx';
import Genomics from './components/Genomics.tsx';
import Settings from './components/Settings.tsx';
import Header from './components/Header.tsx';
import BedManagement from './components/BedManagement.tsx';
import Inventory from './components/Inventory.tsx';
import Financials from './components/Financials.tsx';
import Payroll from './components/Payroll.tsx';
import Maintenance from './components/Maintenance.tsx';
import AssetRegistry from './components/AssetRegistry.tsx';
import LeaveRequests from './components/LeaveRequests.tsx';
import ClinicalTrials from './components/ClinicalTrials.tsx';
import PublicHealth from './components/PublicHealth.tsx';
import AmbulanceDispatch from './components/AmbulanceDispatch.tsx';


export type View = 
  | 'dashboard'
  | 'patients'
  | 'appointments'
  | 'billing'
  | 'staff'
  | 'symptom-checker'
  | 'pharmacy'
  | 'laboratory'
  | 'surgical-schedule'
  | 'telemedicine'
  | 'genomics'
  | 'bed-management'
  | 'inventory'
  | 'financials'
  | 'payroll'
  | 'maintenance'
  | 'asset-registry'
  | 'leave-requests'
  | 'clinical-trials'
  | 'public-health'
  | 'ambulance-dispatch'
  | 'settings';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved preference, default to system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      return savedMode === 'true';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [currentView, setCurrentView] = useState<View>('dashboard');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
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
      case 'billing': return <Billing />;
      case 'staff': return <Staff />;
      case 'symptom-checker': return <SymptomChecker />;
      case 'pharmacy': return <Pharmacy />;
      case 'laboratory': return <Laboratory />;
      case 'surgical-schedule': return <SurgicalSchedule />;
      case 'telemedicine': return <Telemedicine />;
      case 'genomics': return <Genomics />;
      case 'bed-management': return <BedManagement />;
      case 'inventory': return <Inventory />;
      case 'financials': return <Financials />;
      case 'payroll': return <Payroll />;
      case 'maintenance': return <Maintenance />;
      case 'asset-registry': return <AssetRegistry />;
      case 'leave-requests': return <LeaveRequests />;
      case 'clinical-trials': return <ClinicalTrials />;
      case 'public-health': return <PublicHealth />;
      case 'ambulance-dispatch': return <AmbulanceDispatch />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
        <Sidebar currentView={currentView} setView={setCurrentView} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <main className="flex-1 p-6 overflow-y-auto">
            {renderView()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
