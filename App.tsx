
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header.tsx';
import Dashboard from './components/Dashboard.tsx';
import Patients from './components/Patients.tsx';
import Appointments from './components/Appointments.tsx';
import Billing from './components/Billing.tsx';
import Staff from './components/Staff.tsx';
import SymptomChecker from './components/SymptomChecker.tsx';
import Telemedicine from './components/Telemedicine.tsx';
import SurgicalSchedule from './components/SurgicalSchedule.tsx';
import Pharmacy from './components/Pharmacy.tsx';
import Laboratory from './components/Laboratory.tsx';
import Genomics from './components/Genomics.tsx';
import HospitalMap from './components/HospitalMap.tsx';
import Settings from './components/Settings.tsx';
import BedManagement from './components/BedManagement.tsx';
import Inventory from './components/Inventory.tsx';
import Financials from './components/Financials.tsx';
import Payroll from './components/Payroll.tsx';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  const [currentView, setCurrentView] = useState('Dashboard');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderView = () => {
    switch (currentView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Patients':
        return <Patients />;
      case 'Appointments':
        return <Appointments />;
      case 'Symptom Checker':
        return <SymptomChecker />;
      case 'Billing':
        return <Billing />;
      case 'Staff':
        return <Staff />;
      case 'Telemedicine':
        return <Telemedicine />;
      case 'Surgical Schedule':
        return <SurgicalSchedule />;
      case 'Pharmacy':
        return <Pharmacy />;
      case 'Laboratory':
        return <Laboratory />;
      case 'Genomics':
        return <Genomics />;
      case 'Bed Management':
        return <BedManagement />;
      case 'Inventory':
        return <Inventory />;
      case 'Financials':
        return <Financials />;
      case 'Payroll':
        return <Payroll />;
      case 'Map':
        return <HospitalMap />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
      <Sidebar currentView={currentView} setView={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
