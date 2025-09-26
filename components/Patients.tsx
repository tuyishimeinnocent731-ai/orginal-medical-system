// FIX: Created this file to define the Patients component.
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

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
        <input
            type="text"
            placeholder="Search patients by name or ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
        <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Patient</button>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Department</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map(patient => (
              <tr key={patient.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="p-3 font-mono">{patient.id}</td>
                <td className="p-3 font-medium">{patient.name}</td>
                <td className="p-3">{patient.age}</td>
                <td className="p-3">{patient.department}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${patient.status === 'Critical' ? 'bg-red-100 text-red-800' : patient.status === 'Stable' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {patient.status}
                  </span>
                </td>
                <td className="p-3">
                  <button onClick={() => setSelectedPatient(patient)} className="text-blue-600 dark:text-blue-400 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedPatient && <PatientDetailModal patient={selectedPatient} onClose={() => setSelectedPatient(null)} />}
      {isFormOpen && <PatientFormModal onSave={handleSavePatient} onClose={() => setIsFormOpen(false)} />}
    </div>
  );
};

export default Patients;
