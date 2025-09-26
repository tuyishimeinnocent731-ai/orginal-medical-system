
import React from 'react';

const mockAmbulances = [
    { id: 'AMB-01', status: 'En-route', location: 'Main St', eta: '5 mins' },
    { id: 'AMB-02', status: 'Available', location: 'Hospital', eta: 'N/A' },
    { id: 'AMB-03', status: 'On-scene', location: 'Oak Ave', eta: '0 mins' },
];

const AmbulanceDispatch: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Ambulance Dispatch</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
           <h2 className="text-xl font-semibold mb-4">Unit Status</h2>
           <div className="space-y-2">
            {mockAmbulances.map(amb => (
                 <div key={amb.id} className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <div className="flex justify-between items-center">
                        <p className="font-bold">{amb.id}</p>
                        <p className="text-sm">{amb.status}</p>
                        <p className="text-sm">ETA: {amb.eta}</p>
                    </div>
                 </div>
            ))}
           </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
          <h2 className="text-xl font-semibold mb-4">Live Map</h2>
          <div className="h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">[ Placeholder for live map tracking ]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceDispatch;
