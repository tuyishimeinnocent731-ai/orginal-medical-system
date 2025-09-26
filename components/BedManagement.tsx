import React from 'react';
import { mockBeds } from '../services/mockData.ts';
import type { Bed } from '../types.ts';

const BedManagement: React.FC = () => {
  const wards = [...new Set(mockBeds.map(b => b.ward))];

  const getStatusClasses = (status: Bed['status']) => {
    switch (status) {
      case 'Occupied':
        return 'bg-red-200 dark:bg-red-800 border-red-400 text-red-900 dark:text-red-100';
      case 'Available':
        return 'bg-green-200 dark:bg-green-800 border-green-400 text-green-900 dark:text-green-100';
      case 'Cleaning':
        return 'bg-yellow-200 dark:bg-yellow-700 border-yellow-400 text-yellow-900 dark:text-yellow-100';
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bed Management</h1>
      {wards.map(ward => (
        <div key={ward} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">{ward}</h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
            {mockBeds.filter(b => b.ward === ward).map(bed => (
              <div
                key={bed.id}
                className={`p-2 sm:p-3 rounded-lg border-2 text-center transition-transform duration-200 hover:scale-105 ${getStatusClasses(bed.status)}`}
              >
                <p className="font-bold text-base sm:text-lg">{bed.bedNumber}</p>
                <p className="text-xs truncate">{bed.patientName || bed.status}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BedManagement;