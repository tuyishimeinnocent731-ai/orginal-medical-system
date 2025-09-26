
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatCard from './StatCard.tsx';
import { DollarIcon } from './IconComponents.tsx';

const revenueData = [
  { name: 'Jan', revenue: 400000, expenses: 240000 },
  { name: 'Feb', revenue: 300000, expenses: 139800 },
  { name: 'Mar', revenue: 500000, expenses: 380000 },
  { name: 'Apr', revenue: 450000, expenses: 290800 },
  { name: 'May', revenue: 600000, expenses: 480000 },
  { name: 'Jun', revenue: 550000, expenses: 350000 },
  { name: 'Jul', revenue: 700000, expenses: 430000 },
];

const Financials: React.FC = () => {
    const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
    const tickColor = isDarkMode ? '#9CA3AF' : '#6B7280';
    const gridColor = isDarkMode ? '#4B5563' : '#E5E7EB';
    
    const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
    const totalExpenses = revenueData.reduce((sum, item) => sum + item.expenses, 0);
    const netProfit = totalRevenue - totalExpenses;

  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Financial Overview</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Key financial metrics and performance.</p>
      </header>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Revenue" value={`$${(totalRevenue / 1000000).toFixed(2)}M`} icon={<DollarIcon className="w-6 h-6 text-green-800" />} color="bg-green-100 dark:bg-green-900/50" />
        <StatCard title="Total Expenses" value={`$${(totalExpenses / 1000000).toFixed(2)}M`} icon={<DollarIcon className="w-6 h-6 text-red-800" />} color="bg-red-100 dark:bg-red-900/50" />
        <StatCard title="Net Profit" value={`$${(netProfit / 1000000).toFixed(2)}M`} icon={<DollarIcon className="w-6 h-6 text-blue-800" />} color="bg-blue-100 dark:bg-blue-900/50" />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Revenue vs. Expenses</h3>
         <ResponsiveContainer width="100%" height="90%">
            <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis dataKey="name" tick={{ fill: tickColor }} />
                <YAxis tick={{ fill: tickColor }} tickFormatter={(value) => `$${Number(value) / 1000}k`} />
                <Tooltip
                    contentStyle={{ backgroundColor: isDarkMode ? '#374151' : '#fff', borderRadius: '0.5rem' }}
                    formatter={(value) => `$${Number(value).toLocaleString()}`}
                 />
                <Legend />
                <Bar dataKey="revenue" fill="#3B82F6" name="Revenue" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" fill="#EF4444" name="Expenses" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Financials;
