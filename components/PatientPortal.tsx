// FIX: Created this file to define the PatientPortal component.
import React from 'react';

// This is a placeholder for a patient-facing portal.
const PatientPortal: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Patient Portal Gateway</h2>
      <p className="text-gray-500">
        This view would be the entry point to a secure portal for patients to
        view their records, schedule appointments, and pay bills.
      </p>
    </div>
  );
};

export default PatientPortal;
