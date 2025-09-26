// FIX: Created this file to define the Appointments component.
import React, { useState, useMemo } from 'react';
import { mockAppointments } from '../services/mockData.ts';
import type { Appointment } from '../types.ts';

const Appointments: React.FC = () => {
  const [appointments] = useState<Appointment[]>(mockAppointments);
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredAppointments = useMemo(() => {
    if (filterStatus === 'All') return appointments;
    return appointments.filter(a => a.status === filterStatus);
  }, [appointments, filterStatus]);

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      case 'Cancelled': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Appointments Schedule</h2>
        <div>
          <span className="mr-2">Filter by status:</span>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
            <option value="All">All</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Patient</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map(appointment => (
              <tr key={appointment.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="p-3">{appointment.date}</td>
                <td className="p-3">{appointment.time}</td>
                <td className="p-3 font-medium">{appointment.patientName}</td>
                <td className="p-3">{appointment.doctorName}</td>
                <td className="p-3">{appointment.type}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
