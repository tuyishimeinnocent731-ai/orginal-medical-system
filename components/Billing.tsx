
import React, { useState } from 'react';
// FIX: Added file extensions to imports of 'mockData' and 'types' to resolve module not found errors.
import { mockInvoices } from '../services/mockData.ts';
import type { Invoice } from '../types.ts';
import InvoiceFormModal from './InvoiceFormModal.tsx';

const Billing: React.FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleSaveInvoice = (formData: Omit<Invoice, 'id' | 'status'>) => {
        const newInvoice: Invoice = {
            ...formData,
            id: `INV${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`,
            status: 'Pending',
        };
        setInvoices(prev => [newInvoice, ...prev]);
    };

    const getStatusColor = (status: Invoice['status']) => {
        switch (status) {
            case 'Paid': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Overdue': return 'bg-red-100 text-red-800';
        }
    };
    
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Billing</h1>
                <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Create Invoice</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Invoice ID</th>
                            <th className="p-3">Patient</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map(invoice => (
                            <tr key={invoice.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium font-mono">{invoice.id}</td>
                                <td className="p-3">{invoice.patientName} ({invoice.patientId})</td>
                                <td className="p-3">{invoice.date}</td>
                                <td className="p-3">${invoice.amount.toFixed(2)}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                                        {invoice.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isFormOpen && <InvoiceFormModal onClose={() => setIsFormOpen(false)} onSave={handleSaveInvoice} />}
        </div>
    );
};

export default Billing;