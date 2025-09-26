
// FIX: Created this file to define the AIPredictions component.
import React from 'react';

interface AIPredictionsProps {
  patientId: string;
}

const AIPredictions: React.FC<AIPredictionsProps> = ({ patientId }) => {
  // In a real app, this would fetch predictions from a service.
  const predictions = {
    readmissionRisk: 'Low (15%)',
    potentialDiagnosis: 'Stable Angina',
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">AI Predictions</h3>
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Readmission Risk</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{predictions.readmissionRisk}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Potential Diagnosis Aid</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{predictions.potentialDiagnosis}</p>
        </div>
         <p className="text-xs text-gray-400 dark:text-gray-500 pt-2 border-t dark:border-gray-700">For clinical support only. Not a diagnosis.</p>
      </div>
    </div>
  );
};

export default AIPredictions;