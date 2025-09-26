// FIX: Created this file to define the StaffFormModal component.
import React, { useState } from 'react';
import type { Staff } from '../types.ts';

interface StaffFormModalProps {
  onClose: () => void;
  onSave: (staff: Omit<Staff, 'id'>) => void;
  staffMember?: Staff;
}

const StaffFormModal: React.FC<StaffFormModalProps> = ({ onClose, onSave, staffMember }) => {
  const [formData, setFormData] = useState({
    name: staffMember?.name || '',
    role: staffMember?.role || 'Nurse',
    department: staffMember?.department || 'Cardiology',
    onCall: staffMember?.onCall || false,
    phone: staffMember?.phone || '',
    email: staffMember?.email || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">{staffMember ? 'Edit Staff' : 'Add New Staff'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
                <option>Doctor</option>
                <option>Nurse</option>
                <option>Surgeon</option>
                <option>Admin</option>
            </select>
            <div className="flex items-center">
                <input type="checkbox" name="onCall" id="onCall" checked={formData.onCall} onChange={handleChange} className="h-4 w-4" />
                <label htmlFor="onCall" className="ml-2">On Call</label>
            </div>
            <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Save</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default StaffFormModal;
