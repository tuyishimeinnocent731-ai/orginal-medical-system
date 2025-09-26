
import React, { useState, useEffect, useRef } from 'react';
import GlobalSearch from './GlobalSearch.tsx';
import Notifications from './Notifications.tsx';
import DarkModeToggle from './DarkModeToggle.tsx';

interface HeaderProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode, onLogout }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    return (
        <header className="flex-shrink-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm p-2 sm:p-4 flex justify-between items-center">
            <GlobalSearch />
            <div className="flex items-center space-x-2 sm:space-x-4">
                <Notifications />
                <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                <div className="relative" ref={profileRef}>
                    <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-2">
                        <img className="h-9 w-9 rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />
                        <div className="hidden sm:block">
                            <p className="font-semibold text-sm text-left">Dr. Alex Doe</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Cardiologist</p>
                        </div>
                    </button>
                    {isProfileOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg z-50 animate-fade-in">
                            <div className="p-2">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">My Profile</a>
                                <button
                                    onClick={onLogout}
                                    className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-md"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
