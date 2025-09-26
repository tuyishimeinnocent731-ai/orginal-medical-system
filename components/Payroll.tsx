
import React from 'react';
import { mockPayroll } from '../services/mockData.ts';
import type { PayrollEntry } from '../types.ts';

const Payroll: React.FC = () => {
  const getStatusColor = (status: PayrollEntry['status']) => {
    return status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Payroll</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Run Payroll Cycle</button>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="p-3">Employee</th>
              <th className="p-3">Pay Period</th>
              <th className="p-3">Gross Pay</th>
              <th className="p-3">Net Pay</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockPayroll.map(entry => (
              <tr key={entry.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="p-3 font-medium">{entry.employeeName} ({entry.employeeId})</td>
                <td className="p-3">{entry.period}</td>
                <td className="p-3">${entry.grossPay.toFixed(2)}</td>
                <td className="p-3">${entry.netPay.toFixed(2)}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(entry.status)}`}>
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payroll;
