// FIX: Created this file to define the PublicHealth component.
import React from 'react';
import { mockPublicHealthData } from '../services/mockData.ts';

const PublicHealth: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Regional Health Data</h2>
        <table className="w-full text-left">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="p-2">Region</th>
              <th className="p-2">Disease</th>
              <th className="p-2">Cases</th>
            </tr>
          </thead>
          <tbody>
            {mockPublicHealthData.map((data, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="p-2 font-medium">{data.region}</td>
                <td className="p-2">{data.disease}</td>
                <td className="p-2 font-bold">{data.cases}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Disease Outbreak Map</h2>
        <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          [ Placeholder for an interactive map showing public health data ]
        </div>
      </div>
    </div>
  );
};

export default PublicHealth;
