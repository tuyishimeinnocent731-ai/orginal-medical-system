
import React, { useMemo } from 'react';
// FIX: Created mockData.ts to provide mock staff and patient data.
import { mockStaff, mockPatients } from '../services/mockData.ts';
// FIX: Created IconComponents.tsx to provide icon components.
import { StaffIcon, PatientsIcon } from './IconComponents.tsx';
import StatCard from './StatCard.tsx';

interface DepartmentDetailProps {
  departmentName: string;
}

const DepartmentDetail: React.FC<DepartmentDetailProps> = ({ departmentName }) => {
    
    const staffInDept = useMemo(() => mockStaff.filter(s => s.department === departmentName), [departmentName]);
    const patientsInDept = useMemo(() => mockPatients.filter(p => p.department === departmentName && p.status !== 'Discharged'), [departmentName]);

    if (staffInDept.length === 0 && patientsInDept.length === 0) {
         return <div className="text-center text-red-500">Department "{departmentName}" not found or has no activity.</div>;
    }

    return (
        <div className="animate-fade-in space-y-8">
            <header>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{departmentName} Department Dashboard</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Live status and overview.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Active Patients" value={patientsInDept.length} icon={<PatientsIcon className="w-6 h-6 text-blue-800"/>} color="bg-blue-100 dark:bg-blue-900/50" />
                <StatCard title="Staff Members" value={staffInDept.length} icon={<StaffIcon className="w-6 h-6 text-green-800"/>} color="bg-green-100 dark:bg-green-900/50" />
                <StatCard title="Staff On Call" value={staffInDept.filter(s=>s.onCall).length} icon={<StaffIcon className="w-6 h-6 text-yellow-800"/>} color="bg-yellow-100 dark:bg-yellow-900/50" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Staff Roster</h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                        {staffInDept.map(staff => (
                             <div key={staff.id} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                <img src={staff.avatarUrl} alt={staff.name} className="w-10 h-10 rounded-full object-cover" />
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800 dark:text-white">{staff.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{staff.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Current Patients</h3>
                     <div className="space-y-3 max-h-96 overflow-y-auto">
                        {patientsInDept.map(patient => (
                             <div key={patient.id} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                <img src={patient.avatarUrl} alt={patient.name} className="w-10 h-10 rounded-full object-cover" />
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800 dark:text-white">{patient.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{patient.id} - {patient.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentDetail;