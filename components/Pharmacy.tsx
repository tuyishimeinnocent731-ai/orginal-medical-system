// FIX: Created this file to define the Pharmacy component.
import React, { useState } from 'react';
import { mockPrescriptions } from '../services/mockData.ts';
import type { Prescription } from '../types.ts';
import IssuePrescriptionModal from './IssuePrescriptionModal.tsx';

const Pharmacy: React.FC = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>(mockPrescriptions);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSavePrescription = (formData: Omit<Prescription, 'id'>) => {
    const newPrescription: Prescription = {
      ...formData,
      id: `RX${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`,
    };
    setPrescriptions(prev => [newPrescription, ...prev]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pharmacy Management</h1>
        <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Issue Prescription
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Medication</th>
              <th className="p-3">Dosage</th>
              <th className="p-3">Frequency</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map(rx => (
              <tr key={rx.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="p-3 font-medium">{rx.patientName}</td>
                <td className="p-3">{rx.medicationName}</td>
                <td className="p-3">{rx.dosage}</td>
                <td className="p-3">{rx.frequency}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${rx.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {rx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <IssuePrescriptionModal onClose={() => setIsModalOpen(false)} onSave={handleSavePrescription} />}
    </div>
  );
};

export default Pharmacy;
