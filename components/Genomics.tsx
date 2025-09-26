// FIX: Created this file to define the Genomics component.
import React from 'react';
import { mockGenomicData } from '../services/mockData.ts';

const Genomics: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Genomic Data Overview</h2>
      <div className="space-y-4">
        {mockGenomicData.map(data => (
          <div key={data.id} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
            <h3 className="font-bold text-lg">{data.patientName}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Sequence ID: {data.sequenceId}</p>
            <p className="mt-2">{data.summary}</p>
            <div className="mt-2">
              <h4 className="font-semibold">Key Markers:</h4>
              <ul className="list-disc list-inside text-sm">
                {data.markers.map(m => <li key={m.marker}>{m.marker}: <span className="font-mono">{m.value}</span></li>)}
              </ul>
            </div>
            <button className="text-blue-600 dark:text-blue-400 hover:underline mt-2">View Full Report</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genomics;
