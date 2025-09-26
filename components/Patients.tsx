// FIX: Created this file to define the Patients component.
import React, { useState, useMemo } from 'react';
import { mockPatients } from '../services/mockData.ts';
import type { Patient } from '../types.ts';
import PatientDetailModal from './PatientDetailModal.tsx';

const Patients: React.FC = () => {
  const [patients] = useState<Patient[]>(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const departments = useMemo(() => ['All', ...Array.from(new Set(mockPatients.map(p => p.department)))], []);
  const statuses = useMemo(() => ['All', ...Array.from(new Set(mockPatients.map(p => p.status)))], []);

  const filteredPatients = useMemo(() => {
    return patients
      .filter(p => searchTerm === '' || p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(p => filterDepartment === 'All' || p.department === filterDepartment)
      .filter(p => filterStatus === 'All' || p.status === filterStatus);
  }, [patients, searchTerm, filterDepartment, filterStatus]);

  const getStatusColor = (status: Patient['status']) => {
    switch (status) {
      case 'Critical': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
      case 'Stable': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      case 'Discharged': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <h2 className="text-xl font-semibold">Patient Roster</h2>
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <select value={filterDepartment} onChange={e => setFilterDepartment(e.target.value)} className="w-full sm:w-auto p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
            {departments.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="w-full sm:w-auto p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="overflow-x-auto">
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
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(patient.status)}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button onClick={() => setSelectedPatient(patient)} className="text-blue-600 dark:text-blue-400 hover:underline">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedPatient && <PatientDetailModal patient={selectedPatient} onClose={() => setSelectedPatient(null)} />}
    </>
  );
};

export default Patients;
