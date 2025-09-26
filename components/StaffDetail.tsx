
import React, { useMemo } from 'react';
// FIX: Created mockData.ts to provide mock staff and patient data.
import { mockStaff, mockPatients } from '../services/mockData.ts';
// FIX: Created types.ts to define the Patient type.
import type { Patient } from '../types.ts';

interface StaffDetailProps {
  staffId: string;
}

const StaffDetail: React.FC<StaffDetailProps> = ({ staffId }) => {
    const staffMember = useMemo(() => mockStaff.find(s => s.id === staffId), [staffId]);

    if (!staffMember) {
        return <div className="text-center text-red-500">Staff member not found.</div>;
    }

    const assignedPatients = mockPatients.filter(p => staffMember.assignedPatients?.includes(p.id));

    return (
        <div className="animate-fade-in space-y-6">
            <header className="flex flex-col md:flex-row items-start justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="flex items-center">
                    <img src={staffMember.avatarUrl} alt={staffMember.name} className="w-24 h-24 rounded-full object-cover mr-6 ring-4 ring-blue-500/50" />
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{staffMember.name}</h2>
                        <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mt-1">{staffMember.role}</p>
                        <p className="text-gray-500 dark:text-gray-400">Department: {staffMember.department}</p>
                    </div>
                </div>
                 {staffMember.onCall && (
                    <div className="mt-4 md:mt-0">
                        <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                            On Call
                        </span>
                    </div>
                )}
            </header>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Assigned Patients ({assignedPatients.length})</h3>
                {assignedPatients.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {assignedPatients.map(patient => (
                            <div key={patient.id} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                <img src={patient.avatarUrl} alt={patient.name} className="w-10 h-10 rounded-full object-cover" />
                                <div className="ml-3">
                                    <p className="font-semibold text-gray-800 dark:text-white">{patient.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{patient.id} - {patient.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 dark:text-gray-400">No patients currently assigned.</p>
                )}
            </div>
        </div>
    );
};

export default StaffDetail;