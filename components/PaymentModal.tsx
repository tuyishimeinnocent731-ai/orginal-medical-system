// FIX: Created this file to define the PaymentModal component.
import React from 'react';
import type { Invoice } from '../types';
import QrCode from './QrCode';

interface PaymentModalProps {
  invoice: Invoice;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ invoice, onClose, onPaymentSuccess }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md animate-fade-in text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Complete Your Payment</h2>
        <p className="text-gray-500 dark:text-gray-400">Invoice #{invoice.id}</p>
        
        <div className="my-6">
            <p className="text-gray-600 dark:text-gray-300">Amount Due</p>
            <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">${invoice.amount.toFixed(2)}</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
             <h3 className="font-semibold mb-2">Scan to Pay</h3>
             <div className="flex justify-center">
                <QrCode value={`/pay/${invoice.id}`} />
             </div>
             <p className="text-xs text-gray-500 mt-2">Use your banking or payment app to scan the QR code.</p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
            <button onClick={onClose} className="px-6 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg">Cancel</button>
            <button onClick={onPaymentSuccess} className="px-6 py-2 bg-green-600 text-white rounded-lg">Mark as Paid</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
