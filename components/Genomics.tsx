
// FIX: Created the Genomics component to list patients with available genomic data, providing an entry point to detailed genomic analysis.
import React from 'react';
import { mockPatients } from '../services/mockData.ts';
import type { View } from '../types.ts';

interface GenomicsProps {
    navigate: (view: View, id: string) => void;
}

const Genomics: React.FC<GenomicsProps> = ({ navigate }) => {
    const patientsWithGenomicData = mockPatients.filter(p => p.hasGenomicData);

    return (
        <div className="space-y-6 animate-fade-in">
            <header>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Genomics Data</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Browse patients with available genomic sequencing data.</p>
            </header>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Patient</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Department</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {patientsWithGenomicData.map((patient) => (
                                <tr key={patient.id} onClick={() => navigate('genomic-detail', patient.id)} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full object-cover" src={patient.avatarUrl} alt={patient.name} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">{patient.name}</div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">{patient.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{patient.department}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{patient.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Genomics;