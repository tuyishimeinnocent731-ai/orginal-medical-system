import React from 'react';
import GlobalSearch from './GlobalSearch.tsx';
import Notifications from './Notifications.tsx';
import DarkModeToggle from './DarkModeToggle.tsx';

const Header: React.FC<{ toggleDarkMode: () => void; isDarkMode: boolean }> = ({ toggleDarkMode, isDarkMode }) => (
  <header className="flex-shrink-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm p-2 sm:p-4 flex justify-between items-center">
    <GlobalSearch />
    <div className="flex items-center space-x-2 sm:space-x-4">
      <Notifications />
      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="flex items-center space-x-2">
        <img className="h-9 w-9 rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />
        <div className="hidden sm:block">
            <p className="font-semibold text-sm">Dr. Alex Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Cardiologist</p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;