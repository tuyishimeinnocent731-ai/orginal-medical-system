// FIX: Created this file to define the Staff component.
import React, { useState, useMemo } from 'react';
import { mockStaff } from '../services/mockData.ts';
import type { Staff } from '../types.ts';

const Staff: React.FC = () => {
  const [staff] = useState<Staff[]>(mockStaff);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStaff = useMemo(() => {
    return staff.filter(s =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [staff, searchTerm]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Hospital Staff</h2>
        <input
          type="text"
          placeholder="Search staff..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-64 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Department</th>
              <th className="p-3">Shift</th>
              <th className="p-3">On Call</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map(member => (
              <tr key={member.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="p-3 font-medium">{member.name}</td>
                <td className="p-3">{member.role}</td>
                <td className="p-3">{member.department}</td>
                <td className="p-3">{member.shift}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${member.onCall ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'} dark:bg-opacity-20`}>
                    {member.onCall ? 'Yes' : 'No'}
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

export default Staff;
