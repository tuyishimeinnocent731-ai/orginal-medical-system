
// FIX: Created this file to define the InvoiceFormModal component.
import React, { useState } from 'react';
// FIX: Added file extension to the 'types' import to resolve a module not found error.
import type { Invoice } from '../types.ts';

interface InvoiceFormModalProps {
  onClose: () => void;
  onSave: (formData: Omit<Invoice, 'id' | 'status'>) => void;
}

const InvoiceFormModal: React.FC<InvoiceFormModalProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    date: new Date().toISOString().split('T')[0],
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'amount' ? parseFloat(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Create New Invoice</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="patientName" placeholder="Patient Name" value={formData.patientName} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <input type="text" name="patientId" placeholder="Patient ID" value={formData.patientId} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Create</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceFormModal;