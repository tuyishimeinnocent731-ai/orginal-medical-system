
import React from 'react';
// FIX: Added file extensions to imports of 'mockData' and 'types' to resolve module not found errors.
import { mockGenomicVariants } from '../services/mockData.ts';
import type { GenomicVariant } from '../types.ts';

const Genomics: React.FC = () => {
  const getClassificationColor = (classification: GenomicVariant['classification']) => {
    switch (classification) {
      case 'Pathogenic':
      case 'Likely Pathogenic':
        return 'bg-red-100 text-red-800';
      case 'Uncertain':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Genomics Data</h1>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="p-3">Gene</th>
              <th className="p-3">Variant</th>
              <th className="p-3">Implication</th>
              <th className="p-3">Classification</th>
            </tr>
          </thead>
          <tbody>
            {mockGenomicVariants.map(variant => (
              <tr key={variant.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="p-3 font-medium font-mono">{variant.gene}</td>
                <td className="p-3 font-mono">{variant.variant}</td>
                <td className="p-3">{variant.implication}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getClassificationColor(variant.classification)}`}>
                    {variant.classification}
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

export default Genomics;