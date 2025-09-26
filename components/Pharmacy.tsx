// FIX: Created this file to define the Pharmacy component.
import React, { useState, useMemo } from 'react';
import { mockMedications } from '../services/mockData';
import type { Medication } from '../types';
import { SearchIcon } from './IconComponents';

const getStatusBadge = (status: Medication['status']) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    case 'Discontinued':
      return 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};

const Pharmacy: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMedications = useMemo(() => {
    return mockMedications.filter(med =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.patientId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-6 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Pharmacy Management</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Track and manage patient medications.</p>
      </header>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by medication, patient name, or patient ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Medication</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Patient</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Dosage</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Frequency</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredMedications.map((med) => (
                <tr key={med.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{med.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{med.patientName}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{med.patientId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{med.dosage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{med.frequency}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(med.status)}`}>
                      {med.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
