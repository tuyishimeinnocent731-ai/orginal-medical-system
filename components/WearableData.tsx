
// FIX: Created the WearableData component to visualize patient data from wearable devices using charts for metrics like sleep and activity.
import React, { useMemo } from 'react';
import { mockPatients } from '../services/mockData.ts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface WearableDataProps {
  patientId: string;
}

// Mock data for a single patient's wearables
const wearableData = {
    steps: [
        { day: 'Mon', steps: 8200 }, { day: 'Tue', steps: 9340 }, { day: 'Wed', steps: 7500 },
        { day: 'Thu', steps: 10200 }, { day: 'Fri', steps: 6800 }, { day: 'Sat', steps: 12400 }, { day: 'Sun', steps: 7800 },
    ],
    sleep: [
        { day: 'Mon', hours: 7.2 }, { day: 'Tue', hours: 6.5 }, { day: 'Wed', hours: 8.1 },
        { day: 'Thu', hours: 7.0 }, { day: 'Fri', hours: 5.9 }, { day: 'Sat', hours: 8.5 }, { day: 'Sun', hours: 7.5 },
    ]
};

const WearableData: React.FC<WearableDataProps> = ({ patientId }) => {
    const patient = useMemo(() => mockPatients.find(p => p.id === patientId), [patientId]);
    const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
    const tickColor = isDarkMode ? '#9CA3AF' : '#6B7280';
    const gridColor = isDarkMode ? '#4B5563' : '#E5E7EB';
    
    if (!patient) {
        return <div className="text-center text-red-500">Patient not found.</div>;
    }

    return (
        <div className="animate-fade-in space-y-8">
            <header>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Wearable Device Data for {patient.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Review of daily activity and sleep patterns from the last week.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Daily Steps</h3>
                     <ResponsiveContainer width="100%" height="90%">
                        <BarChart data={wearableData.steps}>
                            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                            <XAxis dataKey="day" tick={{ fill: tickColor }} />
                            <YAxis tick={{ fill: tickColor }} />
                            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#374151' : '#fff', borderRadius: '0.5rem' }} />
                            <Legend />
                            <Bar dataKey="steps" fill="#10B981" barSize={30} radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-96">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Sleep Duration (hours)</h3>
                    <ResponsiveContainer width="100%" height="90%">
                        <AreaChart data={wearableData.sleep}>
                            <defs>
                                <linearGradient id="colorSleep" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                            <XAxis dataKey="day" tick={{ fill: tickColor }} />
                            <YAxis domain={[4, 10]} tick={{ fill: tickColor }}/>
                            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#374151' : '#fff', borderRadius: '0.5rem' }} />
                            <Legend />
                            <Area type="monotone" dataKey="hours" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorSleep)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default WearableData;