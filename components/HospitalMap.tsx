
import React, { useState } from 'react';
// FIX: Created types.ts to define the Patient and View types.
import type { View, Department } from '../types.ts';

const departments: Record<string, { x: number; y: number; width: number; height: number; beds: number }> = {
    'Cardiology': { x: 20, y: 20, width: 200, height: 100, beds: 20 },
    'Neurology': { x: 20, y: 140, width: 200, height: 100, beds: 15 },
    'Orthopedics': { x: 20, y: 260, width: 200, height: 100, beds: 25 },
    'ICU': { x: 240, y: 20, width: 250, height: 160, beds: 10 },
    'Oncology': { x: 240, y: 200, width: 250, height: 160, beds: 18 },
    'General Medicine': { x: 510, y: 20, width: 200, height: 340, beds: 40 },
};

interface HospitalMapProps {
    navigate: (view: View, id: string) => void;
}

const HospitalMap: React.FC<HospitalMapProps> = ({ navigate }) => {
    const [hoveredDept, setHoveredDept] = useState<Department | null>(null);

    return (
        <div className="space-y-6 animate-fade-in">
            <header>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Interactive Hospital Map</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Click on a department to view its dedicated dashboard.</p>
            </header>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                <svg viewBox="0 0 730 380" className="w-full h-full">
                    {Object.entries(departments).map(([name, { x, y, width, height }]) => (
                        <g 
                            key={name} 
                            onClick={() => navigate('department-detail', name)}
                            onMouseEnter={() => setHoveredDept(name as Department)}
                            onMouseLeave={() => setHoveredDept(null)}
                            className="cursor-pointer group"
                        >
                            <rect
                                x={x} y={y} width={width} height={height}
                                className="fill-gray-200 dark:fill-gray-700 group-hover:fill-blue-400 dark:group-hover:fill-blue-600 transition-all duration-300"
                                strokeWidth="2"
                                stroke="#FFFFFF"
                                ry="8"
                            />
                            <text 
                                x={x + width / 2} y={y + height / 2} 
                                textAnchor="middle" dy=".3em" 
                                className="font-semibold pointer-events-none fill-gray-700 dark:fill-gray-300 group-hover:fill-white transition-colors"
                            >
                                {name}
                            </text>
                        </g>
                    ))}
                </svg>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                {hoveredDept ? `Click to view details for the ${hoveredDept} department.` : 'Hover over a department for more information.'}
            </div>
        </div>
    );
};

export default HospitalMap;