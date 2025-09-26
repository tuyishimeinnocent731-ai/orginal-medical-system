import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
// FIX: Created mockData.ts to provide the mock patient data.
import { mockPatients } from '../services/mockData';
// FIX: Created types.ts to define the Patient type.
import type { Patient } from '../types';

const LiveVitalsMonitor: React.FC = () => {
    const criticalPatients = mockPatients.filter(p => p.status === 'Critical' && p.vitals);
    const [liveData, setLiveData] = useState<Record<string, { time: number; heartRate: number; spO2: number }[]>>({});

    useEffect(() => {
        const initialData: Record<string, { time: number; heartRate: number; spO2: number }[]> = {};
        criticalPatients.forEach(p => {
            initialData[p.id] = p.vitals!.heartRate.map((hr, index) => ({
                time: index,
                heartRate: hr,
                spO2: p.vitals!.spO2[index],
            }));
        });
        setLiveData(initialData);

        const interval = setInterval(() => {
            setLiveData(prevData => {
                const newData = { ...prevData };
                criticalPatients.forEach(p => {
                    const patientHistory = newData[p.id] || [];
                    const lastEntry = patientHistory[patientHistory.length - 1];
                    if (lastEntry) {
                        const newHeartRate = Math.round(lastEntry.heartRate + (Math.random() - 0.5) * 4);
                        const newSpO2 = Math.min(100, Math.max(85, Math.round(lastEntry.spO2 + (Math.random() - 0.5) * 2)));
                        
                        const updatedHistory = [...patientHistory, { time: lastEntry.time + 1, heartRate: newHeartRate, spO2: newSpO2 }];

                        if (updatedHistory.length > 20) {
                            updatedHistory.shift();
                        }
                        newData[p.id] = updatedHistory;
                    }
                });
                return newData;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
    const tickColor = isDarkMode ? '#9CA3AF' : '#6B7280';
    const gridColor = isDarkMode ? '#4B5563' : '#E5E7EB';

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Live Critical Vitals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-80">
                {criticalPatients.map(patient => (
                    <div key={patient.id}>
                        <h4 className="font-medium dark:text-gray-200">{patient.name} <span className="text-sm text-gray-500 dark:text-gray-400">({patient.department})</span></h4>
                        <ResponsiveContainer width="100%" height="90%">
                            <LineChart data={liveData[patient.id]} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                                <XAxis dataKey="time" tick={false} />
                                <YAxis yAxisId="left" domain={[60, 140]} tick={{ fill: tickColor, fontSize: 12 }} />
                                <YAxis yAxisId="right" orientation="right" domain={[85, 100]} tick={{ fill: tickColor, fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                                        borderColor: isDarkMode ? '#4B5563' : '#e5e7eb',
                                    }}
                                />
                                <Legend wrapperStyle={{fontSize: '12px'}}/>
                                <Line yAxisId="left" type="monotone" dataKey="heartRate" stroke="#EF4444" strokeWidth={2} dot={false} name="HR" />
                                <Line yAxisId="right" type="monotone" dataKey="spO2" stroke="#3B82F6" strokeWidth={2} dot={false} name="SpO2" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveVitalsMonitor;
