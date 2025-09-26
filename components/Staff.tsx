// FIX: Created this file to define the Staff component.
import React, { useState } from 'react';
import { mockStaff } from '../services/mockData.ts';
import type { Staff } from '../types.ts';
import StaffFormModal from './StaffFormModal.tsx';

const Staff: React.FC = () => {
    const [staff, setStaff] = useState<Staff[]>(mockStaff);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleSaveStaff = (formData: Omit<Staff, 'id'>) => {
        const newStaff: Staff = {
            ...formData,
            id: `S${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`,
        };
        setStaff(prev => [newStaff, ...prev]);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Staff</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staff.map(member => (
                    <div key={member.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-blue-500">{member.role}</p>
                        <p className="text-gray-500 dark:text-gray-400">{member.department}</p>
                        <div className="mt-4 pt-4 border-t dark:border-gray-700">
                             <p className="text-sm"><strong>Status:</strong> {member.onCall ? 'On Call' : 'Off Duty'}</p>
                             <p className="text-sm"><strong>Contact:</strong> {member.email}</p>
                        </div>
                    </div>
                ))}
            </div>
            {isFormOpen && <StaffFormModal onClose={() => setIsFormOpen(false)} onSave={handleSaveStaff} />}
        </div>
    );
};

export default Staff;
