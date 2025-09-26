// FIX: Created this file to define the Appointments component.
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
            id: `A${(Math.random() * 1000).toFixed(0).padStart(3, '0')}`,
            status: 'Scheduled',
        };
        setAppointments(prev => [newAppointment, ...prev]);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <button onClick={() => setIsFormOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Book Appointment
                </button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
                <div className="space-y-4">
                    {appointments.filter(a => a.status === 'Scheduled').map(app => (
                        <div key={app.id} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <p className="font-bold">{app.patientName}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">with {app.doctorName}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{app.date} at {app.time}</p>
                            </div>
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                {app.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {isFormOpen && <AppointmentFormModal onClose={() => setIsFormOpen(false)} onSave={handleSaveAppointment} />}
        </div>
    );
};

export default Appointments;
