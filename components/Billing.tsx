// FIX: Created this file to define the Billing component.
import React, { useState, useMemo } from 'react';
import { mockInvoices } from '../services/mockData.ts';
import type { Invoice } from '../types.ts';
import PaymentModal from './PaymentModal.tsx';

const Billing: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredInvoices = useMemo(() => {
    return invoices
      .filter(i => searchTerm === '' || i.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || i.id.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(i => filterStatus === 'All' || i.status === filterStatus);
  }, [invoices, searchTerm, filterStatus]);

  const handlePaymentSuccess = () => {
    if (selectedInvoice) {
      setInvoices(invoices.map(inv => inv.id === selectedInvoice.id ? { ...inv, status: 'Paid' } : inv));
      setSelectedInvoice(null);
    }
  };

  const getStatusColor = (status: Invoice['status']) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'Overdue': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
      default: return 'bg-gray-200';
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <h2 className="text-xl font-semibold">Patient Invoices</h2>
          <input
            type="text"
            placeholder="Search by patient or invoice ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="mb-4">
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="w-full sm:w-auto p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
            <option value="All">All Statuses</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b dark:border-gray-700">
              <tr>
                <th className="p-3">Invoice ID</th>
                <th className="p-3">Patient Name</th>
                <th className="p-3">Date</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map(invoice => (
                <tr key={invoice.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="p-3 font-mono text-sm">{invoice.id}</td>
                  <td className="p-3 font-medium">{invoice.patientName}</td>
                  <td className="p-3">{invoice.date}</td>
                  <td className="p-3">${invoice.amount.toFixed(2)}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {invoice.status !== 'Paid' && (
                      <button onClick={() => setSelectedInvoice(invoice)} className="text-blue-600 dark:text-blue-400 hover:underline">
                        Process Payment
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedInvoice && <PaymentModal invoice={selectedInvoice} onClose={() => setSelectedInvoice(null)} onPaymentSuccess={handlePaymentSuccess} />}
    </>
  );
};

export default Billing;
