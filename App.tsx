// FIX: Created this file to define the main App component.
import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import Staff from './components/Staff';
import Appointments from './components/Appointments';
import SymptomChecker from './components/SymptomChecker';
import DarkModeToggle from './components/DarkModeToggle';
import GlobalSearch from './components/GlobalSearch';
import Notifications from './components/Notifications';
import type { View } from './types';
import PatientDetail from './components/PatientDetail';
import StaffDetail from './components/StaffDetail';
import DepartmentDetail from './components/DepartmentDetail';
import Billing from './components/Billing';
import Pharmacy from './components/Pharmacy';
import Laboratory from './components/Laboratory';
import SurgicalSchedule from './components/SurgicalSchedule';
import Telemedicine from './components/Telemedicine';
import HospitalMap from './components/HospitalMap';
import PatientPortal from './components/PatientPortal';
import VirtualConsultations from './components/VirtualConsultations';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [activeId, setActiveId] = useState<string | null>(null);

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

  const navigate = useCallback((view: View, id: string | null = null) => {
    setCurrentView(view);
    setActiveId(id);
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return <Patients navigate={navigate} />;
      case 'patient-detail':
        return activeId ? <PatientDetail patientId={activeId} navigate={navigate} /> : <div>Patient not found.</div>;
      case 'staff':
        return <Staff navigate={navigate} />;
      case 'staff-detail':
        return activeId ? <StaffDetail staffId={activeId} /> : <div>Staff member not found.</div>;
       case 'department-detail':
        return activeId ? <DepartmentDetail departmentName={activeId} /> : <div>Department not found.</div>;
      case 'appointments':
        return <Appointments />;
      case 'symptom-checker':
        return <SymptomChecker />;
      case 'billing':
        return <Billing />;
      case 'pharmacy':
        return <Pharmacy />;
      case 'laboratory':
        return <Laboratory />;
      case 'surgical-schedule':
          return <SurgicalSchedule />;
      case 'telemedicine':
          return <Telemedicine />;
      case 'hospital-map':
          return <HospitalMap navigate={navigate} />;
      case 'patient-portal':
          return <PatientPortal navigate={navigate} />;
      case 'virtual-consultations':
          return <VirtualConsultations />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex text-gray-800 dark:text-gray-200">
      <Sidebar currentView={currentView} navigate={navigate} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 ml-20 lg:ml-64 transition-all duration-300">
        <header className="flex justify-between items-center mb-8">
            <GlobalSearch />
            <div className="flex items-center space-x-4">
                <Notifications />
                <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
