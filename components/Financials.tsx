
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Q1', revenue: 400000, expenses: 240000 },
  { name: 'Q2', revenue: 300000, expenses: 139800 },
  { name: 'Q3', revenue: 500000, expenses: 380000 },
  { name: 'Q4', revenue: 450000, expenses: 290000 },
];

const Financials: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Financial Overview</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quarterly Performance</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#3B82F6" name="Revenue" />
            <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Financials;
