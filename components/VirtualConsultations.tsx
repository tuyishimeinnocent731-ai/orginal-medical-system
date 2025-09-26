
import React from 'react';

const mockConsultations = [
  { id: 1, patient: 'Alice Johnson', time: '2:00 PM', topic: 'Follow-up on blood pressure' },
  { id: 2, patient: 'Bob Williams', time: '3:30 PM', topic: 'Medication review' },
];

const VirtualConsultations: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Upcoming Virtual Consultations</h3>
      <div className="space-y-4">
        {mockConsultations.map((consult) => (
          <div key={consult.id} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{consult.patient}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{consult.topic}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{consult.time}</p>
              <button className="text-sm text-blue-600 hover:underline">Join Call</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualConsultations;
