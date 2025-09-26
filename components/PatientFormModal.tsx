
// FIX: Created this file to define the PatientFormModal component.
import React, { useState } from 'react';
// FIX: Added file extension to the 'types' import to resolve a module not found error.
import type { Patient } from '../types.ts';

interface PatientFormModalProps {
  onClose: () => void;
  onSave: (patient: Omit<Patient, 'id'>) => void;
  patient?: Patient;
}

const PatientFormModal: React.FC<PatientFormModalProps> = ({ onClose, onSave, patient }) => {
  const [formData, setFormData] = useState({
    name: patient?.name || '',
    age: patient?.age || 0,
    gender: patient?.gender || 'Other',
    admissionDate: patient?.admissionDate || new Date().toISOString().split('T')[0],
    department: patient?.department || 'Cardiology',
    bedNumber: patient?.bedNumber || '',
    status: patient?.status || 'Stable',
    bloodType: patient?.bloodType || 'O+',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'age' ? parseInt(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData as Omit<Patient, 'id'>);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">{patient ? 'Edit Patient' : 'Add New Patient'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          <select name="department" value={formData.department} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Oncology</option>
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

export default PatientFormModal;