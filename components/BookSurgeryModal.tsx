
// FIX: Created this file to define the BookSurgeryModal component.
import React, { useState } from 'react';
// FIX: Added file extension to the 'types' import to resolve a module not found error.
import type { Surgery } from '../types.ts';

interface BookSurgeryModalProps {
  onClose: () => void;
  onSave: (surgery: Omit<Surgery, 'id'>) => void;
}

const BookSurgeryModal: React.FC<BookSurgeryModalProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    procedure: '',
    surgeon: '',
    date: '',
    startTime: '',
    endTime: '',
    operatingRoom: 'OR 1' as Surgery['operatingRoom'],
    status: 'Scheduled' as Surgery['status'],
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
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Book New Surgery</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="patientName" placeholder="Patient Name" value={formData.patientName} onChange={handleChange} required className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <input type="text" name="patientId" placeholder="Patient ID" value={formData.patientId} onChange={handleChange} required className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <input type="text" name="procedure" placeholder="Procedure" value={formData.procedure} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          <input type="text" name="surgeon" placeholder="Surgeon" value={formData.surgeon} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <input type="date" name="date" value={formData.date} onChange={handleChange} required className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
             <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} required className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
             <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} required className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <select name="operatingRoom" value={formData.operatingRoom} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
            <option>OR 1</option>
            <option>OR 2</option>
            <option>OR 3</option>
            <option>OR 4</option>
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

export default BookSurgeryModal;