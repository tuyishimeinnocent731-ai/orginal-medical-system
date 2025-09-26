// FIX: Created this file to define the VirtualConsultations component.
import React from 'react';
import { mockVirtualConsultations } from '../services/mockData';
import type { VirtualConsultation } from '../types';
import { TelemedicineIcon } from './IconComponents';

const getStatusBadge = (status: VirtualConsultation['status']) => {
  switch (status) {
    case 'Scheduled':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
    case 'Completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    case 'Cancelled':
      return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
  }
};

const VirtualConsultations: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Virtual Consultations</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Manage and join your virtual appointments.</p>
      </header>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Upcoming Consultations</h3>
        <div className="space-y-4">
          {mockVirtualConsultations.filter(c => c.status === 'Scheduled').map(consult => (
            <div key={consult.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full mr-4">
                  <TelemedicineIcon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Consultation with {consult.doctorName}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">For patient: {consult.patientName}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{consult.date} at {consult.time}</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
                Join Call
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Past Consultations</h3>
        <ul className="divide-y dark:divide-gray-700">
          {mockVirtualConsultations.filter(c => c.status !== 'Scheduled').map(consult => (
            <li key={consult.id} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">{consult.doctorName} & {consult.patientName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{consult.date}</p>
              </div>
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(consult.status)}`}>
                {consult.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VirtualConsultations;
