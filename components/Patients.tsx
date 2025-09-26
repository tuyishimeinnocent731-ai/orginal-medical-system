
import React, { useState, useMemo } from 'react';
import { mockPatients } from '../services/mockData.ts';
import type { Patient } from '../types.ts';
import PatientFormModal from './PatientFormModal.tsx';
import PatientDetailModal from './PatientDetailModal.tsx';

const Patients: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>(mockPatients);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>(undefined);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = useMemo(() => {
        return patients.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [patients, searchTerm]);

    const handleSavePatient = (patientData: Omit<Patient, 'id'>) => {
        if (selectedPatient) {
            // Edit
            setPatients(patients.map(p => p.id === selectedPatient.id ? { ...p, ...patientData } : p));
        } else {
            // Add
            const newPatient: Patient = {
                ...patientData,
                id: `P${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`,
            };
            setPatients(prev => [newPatient, ...prev]);
        }
    };

    const handleOpenForm = (patient?: Patient) => {
        setSelectedPatient(patient);
        setIsFormOpen(true);
    };

    const handleOpenDetail = (patient: Patient) => {
        setSelectedPatient(patient);
        setIsDetailOpen(true);
    };
    
    const getStatusColor = (status: Patient['status']) => {
        switch (status) {
            case 'Stable': return 'bg-green-100 text-green-800';
            case 'Critical': return 'bg-red-100 text-red-800';
            case 'Discharged': return 'bg-blue-100 text-blue-800';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Patient Records</h1>
                <button onClick={() => handleOpenForm()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Patient</button>
            </div>
             <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
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
                                <td className="p-3 font-medium">{patient.name}</td>
                                <td className="p-3">{patient.age}</td>
                                <td className="p-3">{patient.department}</td>
                                <td className="p-3">{patient.bedNumber}</td>
                                <td className="p-3">
                                     <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(patient.status)}`}>
                                        {patient.status}
                                    </span>
                                </td>
                                <td className="p-3 space-x-2">
                                    <button onClick={() => handleOpenDetail(patient)} className="text-blue-600 hover:underline">View</button>
                                    <button onClick={() => handleOpenForm(patient)} className="text-green-600 hover:underline">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isFormOpen && <PatientFormModal onClose={() => setIsFormOpen(false)} onSave={handleSavePatient} patient={selectedPatient} />}
            {isDetailOpen && selectedPatient && <PatientDetailModal onClose={() => setIsDetailOpen(false)} patient={selectedPatient} />}
        </div>
    );
};

export default Patients;
