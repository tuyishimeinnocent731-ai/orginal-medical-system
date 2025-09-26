
import React from 'react';
import { mockAuditLog } from '../services/mockData.ts';

const AuditLog: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Audit Log</h1>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
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
              <tr key={log.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="p-3 font-mono text-sm">{log.timestamp}</td>
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
