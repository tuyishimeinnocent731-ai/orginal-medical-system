
import React from 'react';

const mockAssets = [
    { id: 'ASSET001', name: 'MRI Machine - Siemens A', department: 'Radiology', purchaseDate: '2021-05-20', status: 'Operational' },
    { id: 'ASSET002', name: 'Ventilator - Philips B', department: 'ICU', purchaseDate: '2022-01-15', status: 'Operational' },
    { id: 'ASSET003', name: 'X-Ray Unit - GE C', department: 'Radiology', purchaseDate: '2019-11-10', status: 'Maintenance Required' },
];

const AssetRegistry: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Asset Registry</h1>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3">Asset ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Department</th>
                            <th className="p-3">Purchase Date</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockAssets.map(asset => (
                            <tr key={asset.id} className="border-b dark:border-gray-700">
                                <td className="p-3 font-mono">{asset.id}</td>
                                <td className="p-3 font-medium">{asset.name}</td>
                                <td className="p-3">{asset.department}</td>
                                <td className="p-3">{asset.purchaseDate}</td>
                                <td className="p-3">{asset.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssetRegistry;
