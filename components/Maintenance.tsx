
import React, { useState } from 'react';
import { mockMaintenance } from '../services/mockData.ts';
import type { MaintenanceJob } from '../types.ts';

const Maintenance: React.FC = () => {
    const [jobs, setJobs] = useState<MaintenanceJob[]>(mockMaintenance);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Maintenance Schedule</h1>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                {jobs.length > 0 ? (
                    <table className="w-full text-left">
                        {/* Table implementation would go here */}
                    </table>
                ) : (
                    <p className="text-center text-gray-500 py-8">No maintenance jobs scheduled.</p>
                )}
            </div>
        </div>
    );
};

export default Maintenance;
