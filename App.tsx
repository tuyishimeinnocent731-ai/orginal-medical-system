// FIX: Created the main App component, which manages state, navigation, and renders different views of the hospital management dashboard.
import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import Appointments from './components/Appointments';
import Billing from './components/Billing';
import Staff from './components/Staff';
import SymptomChecker from './components/SymptomChecker';
import Telemedicine from './components/Telemedicine';
import DarkModeToggle from './components/DarkModeToggle';
import GlobalSearch from './components/GlobalSearch';
import Notifications from './components/Notifications';
import SurgicalSchedule from './components/SurgicalSchedule';
import Pharmacy from './components/Pharmacy';
import Laboratory from './components/Laboratory';
import HospitalMap from './components/HospitalMap';
import PatientDetail from './components/PatientDetail';
import StaffDetail from './components/StaffDetail';
import DepartmentDetail from './components/DepartmentDetail';
import PatientPortal from './components/PatientPortal';
import VirtualConsultations from './components/VirtualConsultations';
import ConsultationRoom from './components/ConsultationRoom';
import Genomics from './components/Genomics';
import GenomicDetail from './components/GenomicDetail';
import WearableData from './components/WearableData';
import type { View } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>('dashboard');
  const [activeId, setActiveId] = useState<string | null>(null);
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigate = (view: View, id: string | null = null) => {
    setView(view);
    setActiveId(id);
  };

  const pageTitle = useMemo(() => {
    if (view === 'patient-detail' && activeId) return 'Patient Details';
    if (view === 'staff-detail' && activeId) return 'Staff Details';
    if (view === 'department-detail' && activeId) return `${activeId} Department`;
    return view.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }, [view, activeId]);

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return <Patients navigate={navigate} />;
      case 'patient-detail':
        return activeId ? <PatientDetail patientId={activeId} navigate={navigate} /> : <p>No patient selected.</p>;
      case 'appointments':
        return <Appointments />;
      case 'billing':
        return <Billing />;
      case 'staff':
        return <Staff navigate={navigate} />;
      case 'staff-detail':
        return activeId ? <StaffDetail staffId={activeId} /> : <p>No staff selected.</p>;
      case 'symptom-checker':
        return <SymptomChecker />;
      case 'telemedicine':
        return <Telemedicine />;
      case 'surgical-schedule':
        return <SurgicalSchedule />;
      case 'pharmacy':
        return <Pharmacy />;
      case 'laboratory':
        return <Laboratory />;
      case 'hospital-map':
        return <HospitalMap navigate={navigate} />;
      case 'department-detail':
        return activeId ? <DepartmentDetail departmentName={activeId} /> : <p>No department selected.</p>;
      case 'patient-portal':
        return <PatientPortal navigate={navigate} />;
      case 'virtual-consultations':
        return <VirtualConsultations />;
       case 'consultation-room':
        return <ConsultationRoom />;
      case 'genomics':
        return <Genomics navigate={navigate} />;
      case 'genomic-detail':
        return activeId ? <GenomicDetail patientId={activeId} /> : <p>No patient selected for genomic detail.</p>;
      case 'wearable-data':
        return activeId ? <WearableData patientId={activeId} /> : <p>No patient selected for wearable data.</p>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex text-gray-800 dark:text-gray-200">
      <Sidebar currentView={view} navigate={navigate} />
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{pageTitle}</h1>
            <div className="flex items-center space-x-4">
                <GlobalSearch />
                <Notifications />
                <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>
        </header>
        {renderView()}
      </main>
    </div>
  );
};

export default App;
