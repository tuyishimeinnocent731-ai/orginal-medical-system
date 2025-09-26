
import React from 'react';
import type { Department } from '../types.ts';

const BedManagement: React.FC = () => {
    const departments: { name: Department; total: number; occupied: number }[] = [
        { name: 'Cardiology', total: 20, occupied: 18 },
        { name: 'Neurology', total: 15, occupied: 12 },
        { name: 'Oncology', total: 25, occupied: 22 },
        { name: 'Pediatrics', total: 10, occupied: 5 },
        { name: 'ICU', total: 12, occupied: 11 },
        { name: 'Orthopedics', total: 18, occupied: 15 },
    ];

    const renderBeds = (total: number, occupied: number) => {
        const beds = [];
        for (let i = 1; i <= total; i++) {
            const isOccupied = i <= occupied;
            beds.push(
                <div key={i} className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold ${isOccupied ? 'bg-red-400 dark:bg-red-600' : 'bg-green-400 dark:bg-green-600'}`}>
                    {i}
                </div>
            );
        }
        return beds;
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Bed Management</h1>
            <div className="space-y-8">
                {departments.map(dept => (
                    <div key={dept.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">{dept.name}</h2>
                            <p className="font-medium">
                                Occupancy: {dept.occupied} / {dept.total} 
                                <span className="text-sm text-gray-500"> ({((dept.occupied / dept.total) * 100).toFixed(1)}%)</span>
                            </p>
                        </div>
                        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
                            {renderBeds(dept.total, dept.occupied)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BedManagement;
