
import React from 'react';
import { mockStaff } from '../services/mockData.ts';

const Payroll: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Payroll</h1>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="p-3">Staff Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Salary (Annual)</th>
              <th className="p-3">Last Payment Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockStaff.map(staff => (
              <tr key={staff.id} className="border-b dark:border-gray-700">
                <td className="p-3 font-medium">{staff.name}</td>
                <td className="p-3">{staff.role}</td>
                <td className="p-3">$120,000</td>
                <td className="p-3">2023-10-25</td>
                <td className="p-3">
                    <button className="text-blue-600 hover:underline">View Details</button>
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
