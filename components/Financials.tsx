// FIX: Created this file to define the Financials component.
import React from 'react';
import { mockFinancialRecords } from '../services/mockData.ts';

const Financials: React.FC = () => {
  const totalRevenue = mockFinancialRecords.filter(r => r.type === 'Revenue').reduce((acc, r) => acc + r.amount, 0);
  const totalExpenses = mockFinancialRecords.filter(r => r.type === 'Expense').reduce((acc, r) => acc + r.amount, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-green-500">Total Revenue</h3>
          <p className="text-3xl font-bold">${totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-red-500">Total Expenses</h3>
          <p className="text-3xl font-bold">${totalExpenses.toLocaleString()}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-blue-500">Net Income</h3>
          <p className="text-3xl font-bold">${(totalRevenue - totalExpenses).toLocaleString()}</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
        <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            [ Placeholder for financial charts (e.g., revenue vs. expense over time) ]
        </div>
      </div>
    </div>
  );
};

export default Financials;
