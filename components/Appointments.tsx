
import React, { useState } from 'react';
import { mockAppointments } from '../services/mockData.ts';
import type { Appointment } from '../types.ts';
import AppointmentFormModal from './AppointmentFormModal.tsx';

const Appointments: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleSaveAppointment = (formData: Omit<Appointment, 'id' | 'status'>) => {
        const newAppointment: Appointment = {
            ...formData,
            id: `APP${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`,
            status: 'Scheduled',
        };
        setAppointments(prev => [...prev, newAppointment]);
    };
    
    const getStatusColor = (status: Appointment['status']) => {
        switch (status) {
            case 'Scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200';
            case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200';
            case 'Cancelled': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-3xl font-bold">Appointments</h1>
                <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto">Book Appointment</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Patient</th>
                            <th className="p-3 hidden md:table-cell">Doctor</th>
                            <th className="p-3">Date</th>
                            <th className="p-3 hidden sm:table-cell">Time</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appt => (
                            <tr key={appt.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium">{appt.patientName}</td>
                                <td className="p-3 hidden md:table-cell">{appt.doctorName}</td>
                                <td className="p-3">{appt.date}</td>
                                <td className="p-3 hidden sm:table-cell">{appt.time}</td>
                                <td className="p-3">
                                     <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(appt.status)}`}>
                                        {appt.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isFormOpen && <AppointmentFormModal onClose={() => setIsFormOpen(false)} onSave={handleSaveAppointment} />}
        </div>
    );
};

export default Appointments;