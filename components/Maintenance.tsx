
import React from 'react';

const mockMaintenance = [
    { id: 'MAINT01', assetId: 'ASSET003', issue: 'Image artifacts reported', scheduledDate: '2023-11-08', status: 'Scheduled' },
    { id: 'MAINT02', assetId: 'ASSET001', issue: 'Annual preventative maintenance', scheduledDate: '2023-11-15', status: 'Scheduled' },
    { id: 'MAINT03', assetId: 'ASSET002', issue: 'Filter replacement', scheduledDate: '2023-10-28', status: 'Completed' },
];

const Maintenance: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Maintenance Schedule</h1>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Asset ID</th>
                            <th className="p-3">Issue</th>
                            <th className="p-3">Scheduled Date</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockMaintenance.map(item => (
                            <tr key={item.id} className="border-b dark:border-gray-700">
                                <td className="p-3 font-mono">{item.assetId}</td>
                                <td className="p-3">{item.issue}</td>
                                <td className="p-3">{item.scheduledDate}</td>
                                <td className="p-3">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Maintenance;
