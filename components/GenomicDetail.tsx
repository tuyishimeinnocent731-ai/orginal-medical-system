
// FIX: Created the GenomicDetail component to display specific genomic variants and their clinical implications for a patient.
import React, { useMemo } from 'react';
import { mockPatients, mockGenomicVariants } from '../services/mockData.ts';
import type { GenomicVariant } from '../types.ts';

interface GenomicDetailProps {
  patientId: string;
}

const getClassificationBadge = (classification: GenomicVariant['classification']) => {
  switch (classification) {
    case 'Pathogenic':
    case 'Likely Pathogenic':
      return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
    case 'Benign':
      return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    case 'Uncertain Significance':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
  }
};

const GenomicDetail: React.FC<GenomicDetailProps> = ({ patientId }) => {
    const patient = useMemo(() => mockPatients.find(p => p.id === patientId), [patientId]);

    if (!patient) {
        return <div className="text-center text-red-500">Patient not found.</div>;
    }

    // In a real app, this data would be fetched based on the patientId
    const genomicData = mockGenomicVariants;

    return (
        <div className="animate-fade-in space-y-6">
            <header>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Genomic Profile for {patient.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Analysis of significant genetic variants.</p>
            </header>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Gene</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Variant</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Classification</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Clinical Implication</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {genomicData.map((variant) => (
                                <tr key={variant.id}>
                                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm font-medium text-gray-900 dark:text-white">{variant.gene}</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-500 dark:text-gray-300">{variant.variant}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getClassificationBadge(variant.classification)}`}>
                                            {variant.classification}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{variant.implication}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GenomicDetail;