// FIX: Created this file to define the VirtualConsultations component.
import React from 'react';
import { mockConsultations } from '../services/mockData.ts';
import { TelemedicineIcon } from './IconComponents.tsx';

interface VirtualConsultationsProps {
  onStartConsultation: (patientName: string, doctorName: string) => void;
}

const VirtualConsultations: React.FC<VirtualConsultationsProps> = ({ onStartConsultation }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upcoming Virtual Consultations</h2>
      <div className="space-y-4">
        {mockConsultations.map(consult => (
          <div key={consult.id} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-bold">{consult.patientName}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">with {consult.doctorName}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{consult.date} at {consult.time} via {consult.platform}</p>
            </div>
            <button
              onClick={() => onStartConsultation(consult.patientName, consult.doctorName)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2"
            >
              <TelemedicineIcon className="w-5 h-5" />
              Start Call
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualConsultations;
