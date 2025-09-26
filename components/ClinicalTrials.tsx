
import React, { useState, useMemo } from 'react';
import { mockClinicalTrials } from '../services/mockData.ts';
import type { ClinicalTrial } from '../types.ts';
import { SearchIcon } from './IconComponents.tsx';

const getStatusBadge = (status: ClinicalTrial['status']) => {
  switch (status) {
    case 'Recruiting':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
    case 'Active':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
    case 'Completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
  }
};

const ClinicalTrials: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrials = useMemo(() => {
    return mockClinicalTrials.filter(trial =>
      trial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trial.principalInvestigator.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-6 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Clinical Trials</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Browse active and recruiting clinical trials.</p>
      </header>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by trial title or investigator..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Trial Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Phase</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Investigator</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredTrials.map((trial) => (
                <tr key={trial.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{trial.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{trial.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{trial.phase}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{trial.principalInvestigator}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(trial.status)}`}>
                      {trial.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClinicalTrials;
