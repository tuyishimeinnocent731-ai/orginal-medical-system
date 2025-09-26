
import React, { useState } from 'react';
import { mockBeds } from '../services/mockData.ts';
import type { Bed } from '../types.ts';

const BedManagement: React.FC = () => {
    const [beds] = useState<Bed[]>(mockBeds);
    
    const wards = beds.reduce((acc, bed) => {
        if (!acc[bed.ward]) {
            acc[bed.ward] = [];
        }
        acc[bed.ward].push(bed);
        return acc;
    }, {} as Record<string, Bed[]>);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Bed Management</h1>
            {Object.entries(wards).map(([wardName, wardBeds]) => (
                <div key={wardName} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4">{wardName}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {wardBeds.map(bed => (
                            <div 
                                key={bed.id}
                                className={`p-3 rounded-lg border-2 text-center ${
                                    bed.isOccupied 
                                    ? 'bg-red-100 dark:bg-red-900/50 border-red-400' 
                                    : 'bg-green-100 dark:bg-green-900/50 border-green-400'
                                }`}
                            >
                                <p className="font-bold text-lg dark:text-white">{bed.id}</p>
                                {bed.isOccupied ? (
                                    <p className="text-xs text-red-700 dark:text-red-300 truncate" title={bed.patientName}>
                                        {bed.patientName}
                                    </p>
                                ) : (
                                    <p className="text-xs text-green-700 dark:text-green-300">Available</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BedManagement;
