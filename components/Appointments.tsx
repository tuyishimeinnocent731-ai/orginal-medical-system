import React from 'react';
// FIX: Created mockData.ts to provide mock appointment data.
import { mockAppointments } from '../services/mockData';
// FIX: Created types.ts to define the Appointment type.
import type { Appointment } from '../types';

const getStatusColors = (status: Appointment['status']) => {
  switch (status) {
    case 'Scheduled':
      return {
        badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
        border: 'border-blue-500'
      };
    case 'Completed':
      return {
        badge: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        border: 'border-green-500'
      };
    case 'Cancelled':
      return {
        badge: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
        border: 'border-red-500'
      };
  }
};

const AppointmentCard: React.FC<{ appointment: Appointment }> = ({ appointment }) => {
    const colors = getStatusColors(appointment.status);
    return (
        <div className={`bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 ${colors.border}`}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-bold text-lg text-gray-800 dark:text-white">{appointment.patientName}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">with {appointment.doctor}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colors.badge}`}>
                    {appointment.status}
                </span>
            </div>
            <div className="mt-4 border-t dark:border-gray-700 pt-4">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                    <span>Department: <span className="font-medium text-gray-900 dark:text-white">{appointment.department}</span></span>
                    <span>Date: <span className="font-medium text-gray-900 dark:text-white">{appointment.date} at {appointment.time}</span></span>
                </div>
            </div>
        </div>
    );
};

const Appointments: React.FC = () => {
  const scheduled = mockAppointments.filter(a => a.status === 'Scheduled');
  const completed = mockAppointments.filter(a => a.status === 'Completed');
  const cancelled = mockAppointments.filter(a => a.status === 'Cancelled');

  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Appointment Schedule</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">View and manage all appointments.</p>
      </header>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Scheduled ({scheduled.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {scheduled.map(app => <AppointmentCard key={app.id} appointment={app} />)}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Completed ({completed.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {completed.map(app => <AppointmentCard key={app.id} appointment={app} />)}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Cancelled ({cancelled.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cancelled.map(app => <AppointmentCard key={app.id} appointment={app} />)}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
