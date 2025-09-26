
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Cardiology', value: 40 },
  { name: 'Neurology', value: 25 },
  { name: 'Oncology', value: 30 },
  { name: 'Pediatrics', value: 15 },
  { name: 'ICU', value: 18 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444'];

const DepartmentOccupancyChart: React.FC = () => {
    const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
    const legendColor = isDarkMode ? '#D1D5DB' : '#4B5563';

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Department Occupancy</h3>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
             contentStyle={{
              backgroundColor: isDarkMode ? '#374151' : '#ffffff',
              borderColor: isDarkMode ? '#4B5563' : '#e5e7eb',
              borderRadius: '0.5rem',
            }}
          />
          <Legend wrapperStyle={{ color: legendColor, fontSize: '14px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentOccupancyChart;
