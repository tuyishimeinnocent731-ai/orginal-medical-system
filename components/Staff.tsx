
import React, { useState } from 'react';
// FIX: Added file extensions to imports of 'mockData' and 'types' to resolve module not found errors.
import { mockStaff } from '../services/mockData.ts';
import type { Staff } from '../types.ts';
import StaffFormModal from './StaffFormModal.tsx';

const Staff: React.FC = () => {
    const [staff, setStaff] = useState<Staff[]>(mockStaff);
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    const handleSaveStaff = (staffData: Omit<Staff, 'id'>) => {
        const newStaff: Staff = {
            ...staffData,
            id: `S${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`,
        };
        setStaff(prev => [newStaff, ...prev]);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-3xl font-bold">Staff Management</h1>
                <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto">Add Staff</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Role</th>
                            <th className="p-3 hidden sm:table-cell">Department</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 hidden md:table-cell">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staff.map(member => (
                            <tr key={member.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium">{member.name}</td>
                                <td className="p-3">{member.role}</td>
                                <td className="p-3 hidden sm:table-cell">{member.department}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${member.onCall ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                                        {member.onCall ? 'On Call' : 'Off Duty'}
                                    </span>
                                </td>
                                <td className="p-3 text-sm hidden md:table-cell">{member.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isFormOpen && <StaffFormModal onClose={() => setIsFormOpen(false)} onSave={handleSaveStaff} />}
        </div>
    );
};

export default Staff;