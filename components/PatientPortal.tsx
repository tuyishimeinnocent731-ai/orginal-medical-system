// FIX: Created this file to define the PatientPortal component.
import React from 'react';
import { mockAppointments, mockPrescriptions } from '../services/mockData';
import { AppointmentsIcon, PharmacyIcon } from './IconComponents';
import type { View } from '../types';

interface PatientPortalProps {
    navigate: (view: View, id?: string) => void;
}

const PatientPortal: React.FC<PatientPortalProps> = ({ navigate }) => {
    // In a real app, you'd have a logged-in patient context.
    // We'll simulate this for "John Doe".
    const patientName = "John Doe";
    const patientAppointments = mockAppointments.filter(a => a.patientName === patientName && a.status === 'Scheduled');
    const patientPrescriptions = mockPrescriptions.filter(p => p.patientName === patientName && p.status === 'Active');

    return (
        <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
            <header className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome, {patientName}</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Your personal health dashboard.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Quick Actions */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
                    <div className="flex flex-col space-y-3">
                         <button onClick={() => navigate('appointments')} className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">
                            Schedule a New Appointment
                         </button>
                         <button onClick={() => navigate('telemedicine')} className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">
                            Message Your Doctor
                         </button>
                         <button onClick={() => navigate('billing')} className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">
                            View & Pay Bills
                         </button>
                    </div>
                </div>
                 {/* Health Summary */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Health Summary</h3>
                     <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Primary Doctor</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">Dr. Alice Carter</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Visit</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">October 15, 2023</p>
                        </div>
                     </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center"><AppointmentsIcon className="w-6 h-6 mr-2" /> Upcoming Appointments</h3>
                {patientAppointments.length > 0 ? (
                    <ul className="space-y-3">
                        {patientAppointments.map(app => (
                            <li key={app.id} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex justify-between">
                                <div>
                                    <p className="font-semibold">{app.department} with {app.doctor}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{app.date} at {app.time}</p>
                                </div>
                                <button className="text-sm text-blue-600 hover:underline">Details</button>
                            </li>
                        ))}
                    </ul>
                ) : <p className="text-gray-500 dark:text-gray-400">No upcoming appointments.</p>}
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center"><PharmacyIcon className="w-6 h-6 mr-2" /> Active Prescriptions</h3>
                {patientPrescriptions.length > 0 ? (
                     <ul className="space-y-3">
                        {patientPrescriptions.map(p => (
                            <li key={p.id} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                <p className="font-semibold">{p.medicationName}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{p.dosage}, {p.frequency}</p>
                            </li>
                        ))}
                    </ul>
                ) : <p className="text-gray-500 dark:text-gray-400">No active prescriptions.</p>}
            </div>
        </div>
    );
};

export default PatientPortal;
