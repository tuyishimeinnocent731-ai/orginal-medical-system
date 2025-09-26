// FIX: Created this file to define the AuditLog component.
import React from 'react';
import { mockAuditLog } from '../services/mockData.ts';

const AuditLog: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Audit Log</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="p-3">Timestamp</th>
              <th className="p-3">User</th>
              <th className="p-3">Action</th>
              <th className="p-3">Details</th>
            </tr>
          </thead>
          <tbody>
            {mockAuditLog.map(log => (
              <tr key={log.id} className="border-b dark:border-gray-700">
                <td className="p-3 text-sm text-gray-500">{log.timestamp}</td>
                <td className="p-3 font-medium">{log.user}</td>
                <td className="p-3">{log.action}</td>
                <td className="p-3 text-sm">{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditLog;
