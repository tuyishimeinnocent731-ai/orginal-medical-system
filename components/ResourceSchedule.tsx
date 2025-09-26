
// FIX: Created this file to define the ResourceSchedule component.
import React from 'react';
// FIX: Added file extension to the 'mockData' import to resolve a module not found error.
import { mockResources } from '../services/mockData.ts';

const ResourceSchedule: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Resource Schedule</h2>
      <div className="space-y-3">
        {mockResources.map(resource => (
          <div key={resource.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <div>
              <p className="font-medium">{resource.name}</p>
              <p className="text-sm text-gray-500">{resource.type}</p>
            </div>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${resource.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {resource.isAvailable ? 'Available' : 'In Use'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceSchedule;