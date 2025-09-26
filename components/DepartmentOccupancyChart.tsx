import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// FIX: Created mockData.ts to provide the mock patient data.
import { mockPatients } from '../services/mockData';

const DepartmentOccupancyChart: React.FC = () => {
    const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
    const tickColor = isDarkMode ? '#9CA3AF' : '#6B7280';

    const departmentCounts = mockPatients.reduce((acc, patient) => {
        if (patient.status !== 'Discharged') {
            acc[patient.department] = (acc[patient.department] || 0) + 1;
        }
        return acc;
    }, {} as Record<string, number>);

    const data = Object.keys(departmentCounts).map(key => ({
        name: key,
        value: departmentCounts[key]
    }));

    const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#6366F1'];

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Department Workload</h3>
            <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        // FIX: Added nullish coalescing operator to prevent type error on `percent`.
                        label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
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
                         labelStyle={{ color: isDarkMode ? '#F3F4F6' : '#1F2937' }}
                    />
                    <Legend wrapperStyle={{ color: tickColor, fontSize: '12px' }} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DepartmentOccupancyChart;