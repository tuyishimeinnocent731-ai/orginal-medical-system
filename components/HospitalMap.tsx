// FIX: Created this file to define the HospitalMap component.
import React from 'react';

const HospitalMap: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Hospital Layout</h2>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg flex justify-center items-center h-96">
        <p className="text-gray-500">
          [ Placeholder for an interactive hospital map ]
        </p>
        {/* In a real application, this could be an SVG, a library like Leaflet, or an image */}
        <img src="https://via.placeholder.com/800x400.png?text=Hospital+Floor+Plan" alt="Hospital Map" className="object-cover rounded-lg hidden"/>
      </div>
    </div>
  );
};

export default HospitalMap;
