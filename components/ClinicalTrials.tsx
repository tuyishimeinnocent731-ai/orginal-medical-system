
import React from 'react';

const mockTrials = [
  { id: 'CT001', title: 'A Study of a New Drug for Cardiology Patients', phase: 3, status: 'Recruiting' },
  { id: 'CT002', title: 'Neurological Disorder Treatment Efficacy', phase: 2, status: 'Active' },
];

const ClinicalTrials: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Clinical Trials</h1>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="p-3">Trial ID</th>
              <th className="p-3">Title</th>
              <th className="p-3">Phase</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockTrials.map(trial => (
              <tr key={trial.id} className="border-b dark:border-gray-700">
                <td className="p-3 font-mono">{trial.id}</td>
                <td className="p-3 font-medium">{trial.title}</td>
                <td className="p-3">{trial.phase}</td>
                <td className="p-3">{trial.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClinicalTrials;
