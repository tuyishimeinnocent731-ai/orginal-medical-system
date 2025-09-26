
import React from 'react';
import type { Patient } from '../types.ts';
import PatientTimeline from './PatientTimeline.tsx';
import AIPredictions from './AIPredictions.tsx';

interface PatientDetailModalProps {
  patient: Patient;
  onClose: () => void;
}

const PatientDetailModal: React.FC<PatientDetailModalProps> = ({ patient, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Patient Details</h2>
            <button 
                onClick={onClose}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-label="Close modal"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        
        <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {/* Patient Info Header */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div><p className="font-semibold">Name:</p> <p>{patient.name}</p></div>
                    <div><p className="font-semibold">Age:</p> <p>{patient.age}</p></div>
                    <div><p className="font-semibold">Gender:</p> <p>{patient.gender}</p></div>
                    <div><p className="font-semibold">Blood Type:</p> <p>{patient.bloodType}</p></div>
                    <div><p className="font-semibold">Admission:</p> <p>{patient.admissionDate}</p></div>
                    <div><p className="font-semibold">Department:</p> <p>{patient.department}</p></div>
                    <div><p className="font-semibold">Bed:</p> <p>{patient.bedNumber}</p></div>
                    <div><p className="font-semibold">Status:</p> <p className={`font-bold ${patient.status === 'Critical' ? 'text-red-500' : 'text-green-500'}`}>{patient.status}</p></div>
                    <div className="col-span-full"><p className="font-semibold">Diagnosis:</p> <p>{patient.diagnosis || 'N/A'}</p></div>
                 </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <PatientTimeline timeline={patient.timeline} />
                </div>
                <div>
                    <AIPredictions patientId={patient.id} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailModal;
