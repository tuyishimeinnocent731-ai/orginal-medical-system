// FIX: Created this file to define the Pharmacy component.
import React, { useState } from 'react';
import { mockPrescriptions } from '../services/mockData.ts';
import type { Prescription } from '../types.ts';
import IssuePrescriptionModal from './IssuePrescriptionModal.tsx';

const Pharmacy: React.FC = () => {
    const [prescriptions, setPrescriptions] = useState<Prescription[]>(mockPrescriptions);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSavePrescription = (newPrescription: Omit<Prescription, 'id'>) => {
        const prescriptionWithId: Prescription = {
            id: `RX${Date.now()}`,
            ...newPrescription,
        };
        setPrescriptions(prev => [prescriptionWithId, ...prev]);
    };

    return (
        <>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Pharmacy - Active Prescriptions</h2>
                    <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Issue New Prescription
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b dark:border-gray-700">
                            <tr>
                                <th className="p-3">Patient</th>
                                <th className="p-3">Medication</th>
                                <th className="p-3">Dosage</th>
                                <th className="p-3">Frequency</th>
                                <th className="p-3">Issued</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prescriptions.map(rx => (
                                <tr key={rx.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                    <td className="p-3 font-medium">{rx.patientName} ({rx.patientId})</td>
                                    <td className="p-3">{rx.medicationName}</td>
                                    <td className="p-3">{rx.dosage}</td>
                                    <td className="p-3">{rx.frequency}</td>
                                    <td className="p-3">{rx.issueDate}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            rx.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {rx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && <IssuePrescriptionModal onClose={() => setIsModalOpen(false)} onSave={handleSavePrescription} />}
        </>
    );
};

export default Pharmacy;
