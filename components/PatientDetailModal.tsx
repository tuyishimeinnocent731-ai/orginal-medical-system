
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
        className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
          aria-label="Close patient details"
        >
          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{patient.name}</h2>
            <p className="text-gray-500 dark:text-gray-400">ID: {patient.id} | Age: {patient.age} | {patient.gender}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Current Status</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Department</p>
                            <p className="font-semibold">{patient.department}</p>
                        </div>
                         <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Bed Number</p>
                            <p className="font-semibold">{patient.bedNumber}</p>
                        </div>
                         <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                            <p className="font-semibold">{patient.status}</p>
                        </div>
                         <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Admission Date</p>
                            <p className="font-semibold">{patient.admissionDate}</p>
                        </div>
                    </div>
                </div>
                <PatientTimeline timeline={patient.timeline} />
            </div>
            <div className="space-y-6">
                <AIPredictions patientId={patient.id} />
                {/* Placeholder for other details like medications, labs, etc. */}
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Assigned Staff</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Emily Carter</p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailModal;
