
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'Jan', revenue: 120000, expenses: 80000 },
  { name: 'Feb', revenue: 150000, expenses: 90000 },
  { name: 'Mar', revenue: 180000, expenses: 100000 },
  { name: 'Apr', revenue: 160000, expenses: 95000 },
  { name: 'May', revenue: 200000, expenses: 110000 },
  { name: 'Jun', revenue: 220000, expenses: 120000 },
];

const Financials: React.FC = () => {
    const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
    const tickColor = isDarkMode ? '#9CA3AF' : '#6B7280';
    const gridColor = isDarkMode ? '#4B5563' : '#E5E7EB';

  return (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold">Financials</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Revenue vs. Expenses</h3>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: tickColor }} />
                    <YAxis tick={{ fill: tickColor }} tickFormatter={(value) => `$${Number(value) / 1000}k`} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                            borderColor: isDarkMode ? '#4B5563' : '#e5e7eb',
                        }}
                    />
                    <Legend />
                    <Bar dataKey="revenue" fill="#3B82F6" name="Revenue" />
                    <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
};

export default Financials;
