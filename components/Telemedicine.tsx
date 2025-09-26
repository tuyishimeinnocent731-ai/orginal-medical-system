
import React from 'react';
import VirtualConsultations from './VirtualConsultations.tsx';

const Telemedicine: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Telemedicine</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Remote Patient Care</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Manage virtual appointments, communicate with patients remotely, and review data from wearable devices.
        </p>
      </div>
      <VirtualConsultations />
      {/* Other telemedicine components can be added here */}
    </div>
  );
};

export default Telemedicine;
