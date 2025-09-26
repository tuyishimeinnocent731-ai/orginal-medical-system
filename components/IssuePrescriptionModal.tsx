
import React, { useState } from 'react';

interface IssuePrescriptionModalProps {
  onClose: () => void;
  patientId: string;
}

const IssuePrescriptionModal: React.FC<IssuePrescriptionModalProps> = ({ onClose, patientId }) => {
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Issuing prescription for patient ${patientId}: ${medication}, ${dosage}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Issue Prescription</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Medication Name" value={medication} onChange={e => setMedication(e.target.value)} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          <input type="text" placeholder="Dosage (e.g., 500mg, twice a day)" value={dosage} onChange={e => setDosage(e.target.value)} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Issue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssuePrescriptionModal;
