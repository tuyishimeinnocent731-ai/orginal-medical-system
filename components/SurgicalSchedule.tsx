
// FIX: Created this file to define the SurgicalSchedule component.
import React, { useState, useMemo } from 'react';
import { mockSurgeries } from '../services/mockData.ts';
import type { Surgery } from '../types.ts';
import { SearchIcon } from './IconComponents.tsx';
import BookSurgeryModal from './BookSurgeryModal.tsx';

const getStatusBadge = (status: Surgery['status']) => {
  switch (status) {
    case 'Scheduled':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
    case 'In Progress':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
    case 'Completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    case 'Cancelled':
      return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
  }
};

const SurgicalSchedule: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [surgeries, setSurgeries] = useState(mockSurgeries);

  const filteredSurgeries = useMemo(() => {
    return surgeries.filter(surgery =>
      surgery.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surgery.procedure.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surgery.surgeon.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, surgeries]);

  const handleAddSurgery = (newSurgery: Omit<Surgery, 'id'>) => {
    const surgeryWithId = { ...newSurgery, id: `SURG${Date.now()}` };
    setSurgeries(prev => [surgeryWithId, ...prev]);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <header className="flex justify-between items-center">
        <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Surgical Schedule</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">View and manage upcoming surgeries.</p>
        </div>
        <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            Book New Surgery
        </button>
      </header>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by patient, procedure, or surgeon..."
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
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Patient / Procedure</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Surgeon / OR</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date & Time</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredSurgeries.map((surgery) => (
                <tr key={surgery.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{surgery.patientName} ({surgery.patientId})</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{surgery.procedure}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{surgery.surgeon}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{surgery.operatingRoom}</div>
                  </td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div>{surgery.date}</div>
                    <div>{surgery.startTime} - {surgery.endTime}</div>
                   </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(surgery.status)}`}>
                      {surgery.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && <BookSurgeryModal onClose={() => setIsModalOpen(false)} onSave={handleAddSurgery} />}
    </div>
  );
};

export default SurgicalSchedule;