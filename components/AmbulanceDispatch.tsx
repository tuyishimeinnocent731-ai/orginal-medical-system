// FIX: Created this file to define the AmbulanceDispatch component.
import React from 'react';
import { mockAmbulances } from '../services/mockData.ts';
import type { Ambulance } from '../types.ts';

const AmbulanceDispatch: React.FC = () => {

  const getStatusColor = (status: Ambulance['status']) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'En-route': return 'bg-blue-100 text-blue-800';
      case 'At Scene': return 'bg-yellow-100 text-yellow-800';
      case 'Returning': return 'bg-purple-100 text-purple-800';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Ambulance Fleet Status</h2>
        <div className="space-y-3">
          {mockAmbulances.map(amb => (
            <div key={amb.id} className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-bold">{amb.id}</p>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(amb.status)}`}>
                  {amb.status}
                </span>
              </div>
              {amb.destination && <p className="text-sm text-gray-500 dark:text-gray-400">To: {amb.destination}</p>}
            </div>
          ))}
        </div>
      </div>
       <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Live Dispatch Map</h2>
        <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          [ Placeholder for an interactive map showing ambulance locations ]
        </div>
      </div>
    </div>
  );
};

export default AmbulanceDispatch;
