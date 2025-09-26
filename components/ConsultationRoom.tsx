// FIX: Created this file to define the ConsultationRoom component.
import React from 'react';
import { TelemedicineIcon } from './IconComponents.tsx';

interface ConsultationRoomProps {
  patientName: string;
  doctorName: string;
  onEndConsultation: () => void;
}

const ConsultationRoom: React.FC<ConsultationRoomProps> = ({ patientName, doctorName, onEndConsultation }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Consultation in Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[60vh]">
        {/* Patient Video Feed */}
        <div className="bg-black rounded-lg flex flex-col justify-between p-2">
          <div className="flex-1 flex items-center justify-center">
            <TelemedicineIcon className="w-24 h-24 text-gray-600"/>
          </div>
          <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">{patientName}</span>
        </div>
        {/* Doctor Video Feed */}
        <div className="bg-black rounded-lg flex flex-col justify-between p-2">
           <div className="flex-1 flex items-center justify-center">
            <TelemedicineIcon className="w-16 h-16 text-gray-600"/>
          </div>
          <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">{doctorName}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={onEndConsultation}
          className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors"
        >
          End Consultation
        </button>
      </div>
    </div>
  );
};

export default ConsultationRoom;
