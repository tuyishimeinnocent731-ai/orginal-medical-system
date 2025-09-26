// FIX: Created this file to define the SurgicalSchedule component.
import React, { useState } from 'react';
import { mockSurgeries } from '../services/mockData.ts';
import type { Surgery } from '../types.ts';
import BookSurgeryModal from './BookSurgeryModal.tsx';
import RoboticArmAnimation from './RoboticArmAnimation.tsx';

const SurgicalSchedule: React.FC = () => {
    const [surgeries, setSurgeries] = useState<Surgery[]>(mockSurgeries);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveSurgery = (newSurgery: Omit<Surgery, 'id'>) => {
        const surgeryWithId: Surgery = {
            id: `SURG${Date.now()}`,
            ...newSurgery,
        };
        setSurgeries(prev => [...prev, surgeryWithId].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    };

    const getStatusColor = (status: Surgery['status']) => {
        switch (status) {
            case 'Scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
            case 'In Progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
            case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
            case 'Cancelled': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };
    
    return (
        <>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Surgical Schedule</h2>
                    <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Book New Surgery
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {surgeries.map(surgery => (
                        <div key={surgery.id} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border dark:border-gray-700">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-lg">{surgery.procedure}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Patient: {surgery.patientName} ({surgery.patientId})</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Surgeon: {surgery.surgeon}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(surgery.status)}`}>
                                    {surgery.status}
                                </span>
                            </div>
                            <div className="mt-4 pt-4 border-t dark:border-gray-700 flex justify-between items-center">
                                <div>
                                    <p className="text-sm"><strong>Date:</strong> {surgery.date}</p>
                                    <p className="text-sm"><strong>Time:</strong> {surgery.startTime} - {surgery.endTime}</p>
                                    <p className="text-sm"><strong>Room:</strong> {surgery.operatingRoom}</p>
                                </div>
                                <RoboticArmAnimation />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && <BookSurgeryModal onClose={() => setIsModalOpen(false)} onSave={handleSaveSurgery} />}
        </>
    );
};

export default SurgicalSchedule;
