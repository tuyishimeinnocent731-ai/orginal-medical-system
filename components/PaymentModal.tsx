
import React from 'react';

interface PaymentModalProps {
  onClose: () => void;
  invoiceId: string;
  amount: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose, invoiceId, amount }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Process Payment</h2>
        <p className="mb-6">Invoice: <span className="font-mono">{invoiceId}</span> | Amount: <span className="font-semibold">${amount.toFixed(2)}</span></p>
        <form className="space-y-4">
          <input type="text" placeholder="Card Number" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          <div className="grid grid-cols-2 gap-4">
             <input type="text" placeholder="MM/YY" className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
             <input type="text" placeholder="CVC" className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg">Pay Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
