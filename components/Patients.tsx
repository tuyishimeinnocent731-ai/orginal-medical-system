
import React, { useState, useMemo } from 'react';
import { mockPatients } from '../services/mockData.ts';
import type { Patient } from '../types.ts';
import PatientDetailModal from './PatientDetailModal.tsx';
import PatientFormModal from './PatientFormModal.tsx';

const Patients: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>(mockPatients);
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = useMemo(() => {
        return patients.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.id.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [patients, searchTerm]);

    const handleSavePatient = (patientData: Omit<Patient, 'id'>) => {
        const newPatient: Patient = {
            ...patientData,
            id: `P${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`,
        };
        setPatients(prev => [newPatient, ...prev]);
    };
    
    const getStatusColor = (status: Patient['status']) => {
        switch (status) {
            case 'Critical': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
            case 'Stable': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
            case 'Discharged': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    }

    return (
        <div className="space-y-6">
             <div className="flex justify-between items-center">
                <div className="relative">
                     <input
                        type="text"
                        placeholder="Search by name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg w-full max-w-xs bg-white dark:bg-gray-800"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                       <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                </div>
                <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Add Patient
                </button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Patient ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Age</th>
                            <th className="p-3">Department</th>
                            <th className="p-3">Bed</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map(patient => (
                            <tr key={patient.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-mono text-sm">{patient.id}</td>
                                <td className="p-3 font-medium">{patient.name}</td>
                                <td className="p-3">{patient.age}</td>
                                <td className="p-3">{patient.department}</td>
                                <td className="p-3">{patient.bedNumber}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(patient.status)}`}>
                                        {patient.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <button onClick={() => setSelectedPatient(patient)} className="text-blue-600 hover:underline">
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedPatient && <PatientDetailModal patient={selectedPatient} onClose={() => setSelectedPatient(null)} />}
            {isFormOpen && <PatientFormModal onClose={() => setIsFormOpen(false)} onSave={handleSavePatient} />}
        </div>
    );
};

export default Patients;
