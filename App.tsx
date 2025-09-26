import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
// FIX: The imported files were missing. They have been created and now export the required components.
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import Appointments from './components/Appointments';
import SymptomChecker from './components/SymptomChecker';
import Billing from './components/Billing';
import Staff from './components/Staff';
import HospitalMap from './components/HospitalMap';
import Telemedicine from './components/Telemedicine';
import SurgicalSchedule from './components/SurgicalSchedule';
import DarkModeToggle from './components/DarkModeToggle';
import GlobalSearch from './components/GlobalSearch';
import Notifications from './components/Notifications';
import PatientDetail from './components/PatientDetail';
import StaffDetail from './components/StaffDetail';
import DepartmentDetail from './components/DepartmentDetail';
import Pharmacy from './components/Pharmacy';
import Laboratory from './components/Laboratory';
// FIX: The types.ts file was missing. It has been created with all necessary type definitions.
import type { View, Navigation } from './types';
// FIX: The mockData.ts file was missing. It has been created and populated with data.
import { mockPatients, mockStaff } from './services/mockData';

const App: React.FC = () => {
  const [navigation, setNavigation] = useState<Navigation>({ view: 'dashboard', id: null });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true';
    }
    return false;
  });

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

  const handleNavigate = (view: View, id: string | null = null) => {
    setNavigation({ view, id });
  };
  
  const renderView = () => {
    const { view, id } = navigation;
    switch (view) {
      case 'dashboard': return <Dashboard />;
      case 'patients': return <Patients navigate={handleNavigate} />;
      case 'patient-detail': return id ? <PatientDetail patientId={id} /> : <Patients navigate={handleNavigate}/>;
      case 'staff-detail': return id ? <StaffDetail staffId={id} /> : <Staff navigate={handleNavigate}/>;
      case 'department-detail': return id ? <DepartmentDetail departmentName={id} /> : <HospitalMap navigate={handleNavigate}/>;
      case 'appointments': return <Appointments />;
      case 'symptom-checker': return <SymptomChecker />;
      case 'billing': return <Billing />;
      case 'staff': return <Staff navigate={handleNavigate} />;
      case 'map': return <HospitalMap navigate={handleNavigate} />;
      case 'telemedicine': return <Telemedicine />;
      case 'surgical-schedule': return <SurgicalSchedule />;
      case 'pharmacy': return <Pharmacy />;
      case 'laboratory': return <Laboratory />;
      default: return <Dashboard />;
    }
  };
  
  const Breadcrumbs: React.FC = () => {
    const { view, id } = navigation;
    if (view === 'dashboard' || !id) return null;

    let parentView: View | null = null;
    let parentLabel = '';
    let currentLabel = id;

    if (view === 'patient-detail') {
        parentView = 'patients';
        parentLabel = 'Patients';
        const patient = mockPatients.find(p => p.id === id);
        if (patient) currentLabel = patient.name;
    } else if (view === 'staff-detail') {
        parentView = 'staff';
        parentLabel = 'Staff';
         const staff = mockStaff.find(s => s.id === id);
        if (staff) currentLabel = staff.name;
    } else if (view === 'department-detail') {
        parentView = 'map';
        parentLabel = 'Hospital Map';
        currentLabel = id;
    }


    if (!parentView) return null;

    return (
        <nav className="text-sm font-medium" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex items-center">
                <li className="flex items-center">
                    <button onClick={() => handleNavigate(parentView!)} className="text-gray-500 dark:text-gray-400 hover:text-blue-600">
                        {parentLabel}
                    </button>
                </li>
                <li className="flex items-center">
                    <svg className="fill-current w-3 h-3 mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 1L6 0l13 10L6 20l1-1 12-9z"/></svg>
                </li>
                <li className="flex items-center">
                    <span className="text-gray-800 dark:text-gray-200">{currentLabel}</span>
                </li>
            </ol>
        </nav>
    );
  }


  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 font-sans">
      <Sidebar currentView={navigation.view} setCurrentView={(v) => handleNavigate(v)} />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="flex justify-between items-center p-4 sticky top-0 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm z-30 border-b border-gray-200 dark:border-gray-800">
            <div className="flex-1 min-w-0">
                { navigation.view !== 'dashboard' && <Breadcrumbs /> }
            </div>
            <div className="flex items-center space-x-4">
              <GlobalSearch />
              <Notifications />
              <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
            </div>
        </header>
        <div className="p-6 lg:p-10">
            {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
