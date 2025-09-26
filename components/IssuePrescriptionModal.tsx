
// FIX: Created this file to define the IssuePrescriptionModal component.
import React, { useState } from 'react';
import type { Prescription } from '../types.ts';

interface IssuePrescriptionModalProps {
  onClose: () => void;
  onSave: (prescription: Omit<Prescription, 'id'>) => void;
}

const IssuePrescriptionModal: React.FC<IssuePrescriptionModalProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    medicationName: '',
    dosage: '',
    frequency: '',
    duration: '',
    issueDate: new Date().toISOString().split('T')[0],
    status: 'Active' as Prescription['status'],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Issue New Prescription</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="patientName" placeholder="Patient Name" value={formData.patientName} onChange={handleChange} required className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <input type="text" name="patientId" placeholder="Patient ID" value={formData.patientId} onChange={handleChange} required className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <input type="text" name="medicationName" placeholder="Medication Name" value={formData.medicationName} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <input type="text" name="dosage" placeholder="Dosage (e.g., 10mg)" value={formData.dosage} onChange={handleChange} required className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
             <input type="text" name="frequency" placeholder="Frequency (e.g., Once a day)" value={formData.frequency} onChange={handleChange} required className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
             <input type="text" name="duration" placeholder="Duration (e.g., 30 days)" value={formData.duration} onChange={handleChange} required className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Issue Prescription</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssuePrescriptionModal;