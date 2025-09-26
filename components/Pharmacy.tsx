
import React, { useState } from 'react';
// FIX: Added file extensions to imports of 'mockData' and 'types' to resolve module not found errors.
import { mockMedications } from '../services/mockData.ts';
import type { Medication } from '../types.ts';

const Pharmacy: React.FC = () => {
    const [medications] = useState<Medication[]>(mockMedications);

    const getStockColor = (stock: number) => {
        if (stock < 100) return 'text-red-500 dark:text-red-400';
        if (stock < 500) return 'text-yellow-500 dark:text-yellow-400';
        return 'text-green-500 dark:text-green-400';
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-3xl font-bold">Pharmacy Inventory</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto">Order Stock</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Medication</th>
                            <th className="p-3 hidden sm:table-cell">Dosage</th>
                            <th className="p-3 hidden md:table-cell">Frequency</th>
                            <th className="p-3">Stock Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medications.map(med => (
                            <tr key={med.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium">{med.name}</td>
                                <td className="p-3 hidden sm:table-cell">{med.dosage}</td>
                                <td className="p-3 hidden md:table-cell">{med.frequency}</td>
                                <td className={`p-3 font-semibold ${getStockColor(med.stock)}`}>
                                    {med.stock} units
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pharmacy;