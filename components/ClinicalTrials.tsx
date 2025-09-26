// FIX: Created this file to define the ClinicalTrials component.
import React from 'react';
import { mockClinicalTrials } from '../services/mockData.ts';

const ClinicalTrials: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Available Clinical Trials</h2>
      <div className="space-y-4">
        {mockClinicalTrials.map(trial => (
          <div key={trial.id} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border dark:border-gray-700">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg">{trial.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                trial.status === 'Recruiting' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {trial.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Sponsor: {trial.sponsor}</p>
            <p className="mt-2 text-sm"><strong>Eligibility:</strong> {trial.eligibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalTrials;
