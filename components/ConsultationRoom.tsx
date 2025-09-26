
import React from 'react';

// Placeholder for a video call interface
const ConsultationRoom: React.FC = () => {
  return (
    <div className="bg-black p-4 rounded-xl shadow-lg flex flex-col h-[600px]">
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-lg flex items-center justify-center">
          <p className="text-white">Patient Video</p>
        </div>
        <div className="bg-gray-800 rounded-lg flex items-center justify-center">
          <p className="text-white">Doctor Video (You)</p>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4 p-4 mt-4 bg-gray-900 rounded-lg">
        <button className="p-3 bg-gray-700 rounded-full text-white">Mute</button>
        <button className="p-3 bg-gray-700 rounded-full text-white">Stop Video</button>
        <button className="p-3 bg-red-600 rounded-full text-white">End Call</button>
      </div>
    </div>
  );
};

export default ConsultationRoom;
