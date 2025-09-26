
import React, { useState, useCallback, useEffect } from 'react';
import type { View } from './types.ts';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './components/Dashboard.tsx';
import Patients from './components/Patients.tsx';
import Appointments from './components/Appointments.tsx';
import SymptomChecker from './components/SymptomChecker.tsx';
import DarkModeToggle from './components/DarkModeToggle.tsx';
import Billing from './components/Billing.tsx';
import Staff from './components/Staff.tsx';
import HospitalMap from './components/HospitalMap.tsx';
import GlobalSearch from './components/GlobalSearch.tsx';
import Notifications from './components/Notifications.tsx';
import Telemedicine from './components/Telemedicine.tsx';
import SurgicalSchedule from './components/SurgicalSchedule.tsx';
import PatientDetail from './components/PatientDetail.tsx';
import StaffDetail from './components/StaffDetail.tsx';
import DepartmentDetail from './components/DepartmentDetail.tsx';
import Pharmacy from './components/Pharmacy.tsx';
import Laboratory from './components/Laboratory.tsx';
import PatientPortal from './components/PatientPortal.tsx';
import VirtualConsultations from './components/VirtualConsultations.tsx';
import ConsultationRoom from './components/ConsultationRoom.tsx';
import Genomics from './components/Genomics.tsx';
import GenomicDetail from './components/GenomicDetail.tsx';
import WearableData from './components/WearableData.tsx';
import ClinicalTrials from './components/ClinicalTrials.tsx';
import Financials from './components/Financials.tsx';

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

  const navigate = useCallback((newView: View, id: string | null = null) => {
    setView(newView);
    setActiveId(id);
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return <Patients navigate={navigate} />;
      case 'patient-detail':
        return activeId ? <PatientDetail patientId={activeId} navigate={navigate} /> : <p>No patient selected.</p>;
      case 'staff-detail':
        return activeId ? <StaffDetail staffId={activeId} /> : <p>No staff selected.</p>;
      case 'department-detail':
        return activeId ? <DepartmentDetail departmentName={activeId} /> : <p>No department selected.</p>;
       case 'genomic-detail':
        return activeId ? <GenomicDetail patientId={activeId} /> : <p>No patient selected for genomic data.</p>;
      case 'wearable-data':
        return activeId ? <WearableData patientId={activeId} /> : <p>No patient selected for wearable data.</p>;
      case 'appointments':
        return <Appointments />;
      case 'symptom-checker':
        return <SymptomChecker />;
      case 'billing':
        return <Billing />;
      case 'staff':
        return <Staff navigate={navigate} />;
      case 'map':
        return <HospitalMap navigate={navigate} />;
      case 'telemedicine':
        return <Telemedicine />;
      case 'surgeries':
        return <SurgicalSchedule />;
      case 'pharmacy':
        return <Pharmacy />;
      case 'laboratory':
        return <Laboratory />;
      case 'patient-portal':
        return <PatientPortal navigate={navigate} />;
      case 'virtual-consultations':
        return <VirtualConsultations />;
      case 'consultation-room':
        return <ConsultationRoom />;
      case 'genomics':
        return <Genomics navigate={navigate} />;
      case 'clinical-trials':
        return <ClinicalTrials />;
      case 'financials':
        return <Financials />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen flex">
        <Sidebar currentView={view} navigate={navigate} />
        <div className="flex-1 flex flex-col">
           <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center sticky top-0 z-40">
            <div>
              {/* Breadcrumbs or Title could go here */}
            </div>
            <div className="flex items-center space-x-4">
              <GlobalSearch />
              <Notifications />
              <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </header>
          <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
