
import React from 'react';
import QrCode from './QrCode.tsx';

const PatientPortal: React.FC = () => {
  const portalLink = "https://medidash.example.com/portal/P001";
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Patient Portal Access</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300 mb-2">
                Provide patients with secure access to their health records, appointment schedules, and lab results through the online portal.
            </p>
            <p className="text-sm text-gray-500">Share this link or QR code with the patient:</p>
            <input 
                type="text" 
                readOnly 
                value={portalLink}
                className="w-full mt-2 p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm"
            />
        </div>
        <div>
            <QrCode value={portalLink} size={150} />
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;
