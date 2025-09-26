
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
        setAppointments(prev => [newAppointment, ...prev].sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    };

    const getStatusColor = (status: Appointment['status']) => {
        switch (status) {
            case 'Scheduled': return 'bg-blue-100 text-blue-800';
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'Canceled': return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Appointments</h1>
                <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Book Appointment</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Patient</th>
                            <th className="p-3">Doctor</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Time</th>
                            <th className="p-3">Type</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(app => (
                            <tr key={app.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium">{app.patientName}</td>
                                <td className="p-3">{app.doctorName}</td>
                                <td className="p-3">{app.date}</td>
                                <td className="p-3">{app.time}</td>
                                <td className="p-3">{app.type}</td>
                                <td className="p-3">
                                     <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(app.status)}`}>
                                        {app.status}
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
