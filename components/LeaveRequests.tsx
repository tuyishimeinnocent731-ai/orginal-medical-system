
import React, { useState } from 'react';
import { mockLeaveRequests } from '../services/mockData.ts';
import type { LeaveRequest } from '../types.ts';

const LeaveRequests: React.FC = () => {
    const [requests, setRequests] = useState<LeaveRequest[]>(mockLeaveRequests);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Leave Requests</h1>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                {requests.length > 0 ? (
                    <table className="w-full text-left">
                        {/* Table implementation would go here */}
                    </table>
                ) : (
                    <p className="text-center text-gray-500 py-8">No pending leave requests.</p>
                )}
            </div>
        </div>
    );
};

export default LeaveRequests;
