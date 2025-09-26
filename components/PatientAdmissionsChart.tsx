
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', admissions: 400 },
  { name: 'Feb', admissions: 300 },
  { name: 'Mar', admissions: 500 },
  { name: 'Apr', admissions: 450 },
  { name: 'May', admissions: 600 },
  { name: 'Jun', admissions: 550 },
  { name: 'Jul', admissions: 700 },
];

const PatientAdmissionsChart: React.FC = () => {
  const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
  const tickColor = isDarkMode ? '#9CA3AF' : '#6B7280';
  const gridColor = isDarkMode ? '#4B5563' : '#E5E7EB';

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Patient Admissions (Last 7 Months)</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <XAxis dataKey="name" tick={{ fill: tickColor }} />
          <YAxis tick={{ fill: tickColor }} />
          <Tooltip
            contentStyle={{
              backgroundColor: isDarkMode ? '#374151' : '#ffffff',
              borderColor: isDarkMode ? '#4B5563' : '#e5e7eb',
              borderRadius: '0.5rem',
            }}
            labelStyle={{ color: isDarkMode ? '#F3F4F6' : '#1F2937' }}
          />
          <Legend wrapperStyle={{ color: tickColor }} />
          <Bar dataKey="admissions" fill="#3B82F6" barSize={30} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientAdmissionsChart;