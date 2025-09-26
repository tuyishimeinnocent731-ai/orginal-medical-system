import React, { useState, useMemo } from 'react';
// FIX: Created mockData.ts to provide mock staff data.
import { mockStaff } from '../services/mockData';
// FIX: Created IconComponents.tsx to provide the SearchIcon component.
import { SearchIcon } from './IconComponents';
// FIX: Created types.ts to define the View type.
import type { View } from '../types';

interface StaffProps {
    navigate: (view: View, id: string) => void;
}

const Staff: React.FC<StaffProps> = ({ navigate }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStaff = useMemo(() => {
        return mockStaff.filter(staff =>
            staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staff.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staff.role.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <div className="space-y-6 animate-fade-in">
            <header>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Staff Directory</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Find and manage hospital personnel.</p>
            </header>

             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search by name, role, or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredStaff.map(staffMember => (
                    <div 
                        key={staffMember.id} 
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
                        onClick={() => navigate('staff-detail', staffMember.id)}
                    >
                        <img src={staffMember.avatarUrl} alt={staffMember.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-gray-200 dark:ring-gray-700" />
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{staffMember.name}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{staffMember.role}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{staffMember.department}</p>
                        {staffMember.onCall && (
                            <div className="mt-4">
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                                    On Call
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Staff;
