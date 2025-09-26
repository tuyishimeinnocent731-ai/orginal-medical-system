// FIX: Created this file to define the LabResultFormModal component.
import React, { useState } from 'react';
import type { LabResult } from '../types.ts';

interface LabResultFormModalProps {
  onClose: () => void;
  onSave: (formData: Omit<LabResult, 'id'>) => void;
}

const LabResultFormModal: React.FC<LabResultFormModalProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    patientId: '',
    patientName: '',
    testName: '',
    result: '',
    referenceRange: '',
    date: new Date().toISOString().split('T')[0],
    status: 'Completed' as LabResult['status'],
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
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Add Lab Result</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="patientId" placeholder="Patient ID" value={formData.patientId} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <input type="text" name="testName" placeholder="Test Name" value={formData.testName} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-ray-600" />
            <input type="text" name="result" placeholder="Result" value={formData.result} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
             <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
                <option>Completed</option>
                <option>Pending</option>
            </select>
            <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Save</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LabResultFormModal;
