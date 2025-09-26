// FIX: Created this file to define the Laboratory component.
import React, { useState } from 'react';
import { mockLabResults } from '../services/mockData.ts';
import type { LabResult } from '../types.ts';
import LabResultFormModal from './LabResultFormModal.tsx';

const Laboratory: React.FC = () => {
    const [results, setResults] = useState<LabResult[]>(mockLabResults);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleSaveResult = (formData: Omit<LabResult, 'id'>) => {
        const newResult: LabResult = {
            ...formData,
            id: `LR${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`,
        };
        setResults(prev => [newResult, ...prev]);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Laboratory Results</h1>
                <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Result</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Patient</th>
                            <th className="p-3">Test Name</th>
                            <th className="p-3">Result</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(res => (
                            <tr key={res.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium">{res.patientName} ({res.patientId})</td>
                                <td className="p-3">{res.testName}</td>
                                <td className="p-3 font-mono">{res.result}</td>
                                <td className="p-3">
                                     <span className={`px-2 py-1 text-xs font-semibold rounded-full ${res.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {res.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isFormOpen && <LabResultFormModal onClose={() => setIsFormOpen(false)} onSave={handleSaveResult} />}
        </div>
    );
};

export default Laboratory;
