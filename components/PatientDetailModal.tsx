
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
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{patient.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {patient.age} years old, {patient.gender} | Blood Type: {patient.bloodType}
                </p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
                 {/* Admission Details */}
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Admission Details</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <p><span className="text-gray-500">Department:</span> {patient.department}</p>
                        <p><span className="text-gray-500">Bed:</span> {patient.bedNumber}</p>
                        <p><span className="text-gray-500">Admission:</span> {patient.admissionDate}</p>
                        <p><span className="text-gray-500">Status:</span> {patient.status}</p>
                    </div>
                </div>

                {/* Timeline */}
                <PatientTimeline timeline={patient.timeline} />
            </div>
            <div className="space-y-6">
                <AIPredictions patientId={patient.id} />
                {/* Actions */}
                <div className="space-y-2">
                    <button className="w-full text-left p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Issue Prescription</button>
                    <button className="w-full text-left p-3 bg-green-500 text-white rounded-lg hover:bg-green-600">Order Lab Test</button>
                    <button className="w-full text-left p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Schedule Procedure</button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PatientDetailModal;
