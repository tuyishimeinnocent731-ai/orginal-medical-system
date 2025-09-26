
// FIX: Created this file to define the AppointmentFormModal component.
import React, { useState } from 'react';
// FIX: Added file extension to the 'types' import to resolve a module not found error.
import type { Appointment } from '../types.ts';

interface AppointmentFormModalProps {
  onClose: () => void;
  onSave: (formData: Omit<Appointment, 'id' | 'status'>) => void;
}

const AppointmentFormModal: React.FC<AppointmentFormModalProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    time: '',
    type: 'Consultation' as Appointment['type'],
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
        <h2 className="text-2xl font-bold mb-6">Book New Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="patientName" placeholder="Patient Name" value={formData.patientName} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <input type="text" name="doctorName" placeholder="Doctor Name" value={formData.doctorName} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Book</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentFormModal;