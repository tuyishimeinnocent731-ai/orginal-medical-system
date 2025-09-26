
import React from 'react';

const mockLeaveRequests = [
    { id: 'LR01', staffName: 'James Lee', dates: '2023-11-20 to 2023-11-25', status: 'Pending' },
    { id: 'LR02', staffName: 'Dr. Emily Carter', dates: '2023-12-01 to 2023-12-03', status: 'Approved' },
    { id: 'LR03', staffName: 'Dr. Alan Grant', dates: '2023-11-15', status: 'Rejected' },
];

const LeaveRequests: React.FC = () => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Approved': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Rejected': return 'bg-red-100 text-red-800';
        }
    };
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Leave Requests</h1>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Staff Name</th>
                            <th className="p-3">Dates</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockLeaveRequests.map(req => (
                            <tr key={req.id} className="border-b dark:border-gray-700">
                                <td className="p-3 font-medium">{req.staffName}</td>
                                <td className="p-3">{req.dates}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(req.status)}`}>
                                        {req.status}
                                    </span>
                                </td>
                                <td className="p-3 space-x-2">
                                    <button className="text-green-600 hover:underline">Approve</button>
                                    <button className="text-red-600 hover:underline">Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaveRequests;
