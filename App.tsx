
import React, { useState, useEffect } from 'react';
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
import BedManagement from './components/BedManagement.tsx';
import Settings from './components/Settings.tsx';
import Pharmacy from './components/Pharmacy.tsx';
import Laboratory from './components/Laboratory.tsx';
import SurgicalSchedule from './components/SurgicalSchedule.tsx';
import Telemedicine from './components/Telemedicine.tsx';
import Financials from './components/Financials.tsx';
import AmbulanceDispatch from './components/AmbulanceDispatch.tsx';

export type View = 'Dashboard' | 'Patients' | 'Appointments' | 'Billing' | 'Staff' | 'Symptom Checker' | 'Bed Management' | 'Pharmacy' | 'Laboratory' | 'Surgical Schedule' | 'Telemedicine' | 'Financials' | 'Ambulance Dispatch' | 'Settings';

const App: React.FC = () => {
    const [activeView, setActiveView] = useState<View>('Dashboard');
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' || 
                   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

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
            case 'Symptom Checker':
                return <SymptomChecker />;
            case 'Bed Management':
                return <BedManagement />;
            case 'Pharmacy':
                return <Pharmacy />;
            case 'Laboratory':
                return <Laboratory />;
            case 'Surgical Schedule':
                return <SurgicalSchedule />;
            case 'Telemedicine':
                return <Telemedicine />;
            case 'Financials':
                return <Financials />;
            case 'Ambulance Dispatch':
                return <AmbulanceDispatch />;
            case 'Settings':
                return <Settings />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans`}>
            <Sidebar activeView={activeView} setActiveView={setActiveView} />
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
                    <h1 className="text-xl font-semibold">{activeView}</h1>
                    <div className="flex items-center space-x-4">
                        <GlobalSearch />
                        <Notifications />
                        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                </header>
                <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
                    {renderView()}
                </div>
            </main>
        </div>
    );
};

export default App;
