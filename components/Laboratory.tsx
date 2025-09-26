// FIX: Created this file to define the Laboratory component.
import React from 'react';
import { mockLabResults } from '../services/mockData.ts';
import type { LabResult } from '../types.ts';

const Laboratory: React.FC = () => {
    const getStatusColor = (status: LabResult['status']) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
            case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
            default: return 'bg-gray-200';
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Laboratory Results</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Patient Name</th>
                            <th className="p-3">Test Name</th>
                            <th className="p-3">Result</th>
                            <th className="p-3">Reference Range</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockLabResults.map(result => (
                            <tr key={result.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium">{result.patientName}</td>
                                <td className="p-3">{result.testName}</td>
                                <td className="p-3 font-semibold">{result.result}</td>
                                <td className="p-3 text-sm text-gray-500">{result.referenceRange}</td>
                                <td className="p-3">{result.date}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(result.status)}`}>
                                        {result.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Laboratory;
