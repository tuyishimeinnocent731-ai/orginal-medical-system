// FIX: Created this file to define the SurgicalSchedule component.
import React, { useState } from 'react';
import { mockSurgeries } from '../services/mockData.ts';
import type { Surgery } from '../types.ts';
import BookSurgeryModal from './BookSurgeryModal.tsx';
import RoboticArmAnimation from './RoboticArmAnimation.tsx';

const SurgicalSchedule: React.FC = () => {
    const [surgeries, setSurgeries] = useState<Surgery[]>(mockSurgeries);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveSurgery = (surgeryData: Omit<Surgery, 'id'>) => {
        const newSurgery: Surgery = {
            ...surgeryData,
            id: `SURG${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`,
        };
        setSurgeries(prev => [...prev, newSurgery]);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                 <h1 className="text-3xl font-bold">Surgical Schedule</h1>
                 <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Book Surgery</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Patient</th>
                            <th className="p-3">Procedure</th>
                            <th className="p-3">Surgeon</th>
                            <th className="p-3">Date & Time</th>
                            <th className="p-3">OR</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {surgeries.map(surgery => (
                            <tr key={surgery.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium">{surgery.patientName}</td>
                                <td className="p-3">{surgery.procedure}</td>
                                <td className="p-3">{surgery.surgeon}</td>
                                <td className="p-3">{surgery.date} @ {surgery.startTime}</td>
                                <td className="p-3">{surgery.operatingRoom}</td>
                                <td className="p-3">{surgery.status}</td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
            </div>
             <div className="flex justify-center">
                <RoboticArmAnimation />
            </div>
            {isModalOpen && <BookSurgeryModal onClose={() => setIsModalOpen(false)} onSave={handleSaveSurgery} />}
        </div>
    );
};

export default SurgicalSchedule;
