
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatCard from './StatCard.tsx';
import { FinancialsIcon } from './IconComponents.tsx';

const revenueData = [
  { name: 'Jan', revenue: 400000, expenses: 240000 },
  { name: 'Feb', revenue: 300000, expenses: 139800 },
  { name: 'Mar', revenue: 500000, expenses: 380000 },
  { name: 'Apr', revenue: 478000, expenses: 390800 },
  { name: 'May', revenue: 589000, expenses: 480000 },
  { name: 'Jun', revenue: 439000, expenses: 380000 },
];

const departmentCostData = [
  { name: 'Cardiology', cost: 120000 },
  { name: 'Neurology', cost: 95000 },
  { name: 'Oncology', cost: 150000 },
  { name: 'Pediatrics', cost: 75000 },
  { name: 'ICU', cost: 180000 },
];

const Financials: React.FC = () => {
  const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
  const tickColor = isDarkMode ? '#9CA3AF' : '#6B7280';
  const gridColor = isDarkMode ? '#4B5563' : '#E5E7EB';

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Financials</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue (YTD)" value="$2.7M" change="+12%" changeType="increase" icon={<FinancialsIcon className="w-6 h-6 text-blue-500" />} />
        <StatCard title="Total Expenses (YTD)" value="$1.9M" change="+8%" changeType="increase" icon={<FinancialsIcon className="w-6 h-6 text-blue-500" />} />
        <StatCard title="Net Profit (YTD)" value="$800K" change="+21%" changeType="increase" icon={<FinancialsIcon className="w-6 h-6 text-blue-500" />} />
        <StatCard title="Accounts Receivable" value="$450K" change="-5%" changeType="decrease" icon={<FinancialsIcon className="w-6 h-6 text-blue-500" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
          <h3 className="text-lg font-semibold mb-4">Revenue vs. Expenses</h3>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="name" tick={{ fill: tickColor }} />
              <YAxis tick={{ fill: tickColor }} />
              <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#374151' : '#fff' }} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3B82F6" />
              <Line type="monotone" dataKey="expenses" stroke="#EF4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
          <h3 className="text-lg font-semibold mb-4">Costs by Department</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={departmentCostData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis type="number" tick={{ fill: tickColor }} />
              <YAxis type="category" dataKey="name" width={80} tick={{ fill: tickColor }} />
              <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#374151' : '#fff' }} />
              <Legend />
              <Bar dataKey="cost" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Financials;
