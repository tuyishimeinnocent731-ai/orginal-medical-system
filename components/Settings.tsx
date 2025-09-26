
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Settings</h1>

        {/* Profile Settings */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold border-b dark:border-gray-700 pb-3 mb-4">Profile</h2>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Name</label>
                    <input type="text" defaultValue="Dr. Alex Doe" className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 mt-1" />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
                    <input type="email" defaultValue="alex.doe@medidash.com" className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 mt-1" />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Changes</button>
            </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold border-b dark:border-gray-700 pb-3 mb-4">Notifications</h2>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="critical-alerts">Critical Patient Alerts</label>
                    <input type="checkbox" id="critical-alerts" defaultChecked className="h-4 w-4 rounded" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="new-messages">New Messages</label>
                    <input type="checkbox" id="new-messages" defaultChecked className="h-4 w-4 rounded" />
                </div>
                 <div className="flex items-center justify-between">
                    <label htmlFor="billing-updates">Billing Updates</label>
                    <input type="checkbox" id="billing-updates" className="h-4 w-4 rounded" />
                </div>
            </div>
        </div>

         {/* Data Export */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold border-b dark:border-gray-700 pb-3 mb-4">Data Management</h2>
             <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">Export Patient Data</button>
        </div>
    </div>
  );
};

export default Settings;
