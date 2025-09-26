// FIX: Created this file to define the PatientDetailModal component.
import React from 'react';
import type { Patient } from '../types.ts';
import AIPredictions from './AIPredictions.tsx';
import PatientTimeline from './PatientTimeline.tsx';

interface PatientDetailModalProps {
  patient: Patient;
  onClose: () => void;
}

const PatientDetailModal: React.FC<PatientDetailModalProps> = ({ patient, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
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
            <p className="text-gray-500 dark:text-gray-400">ID: {patient.id} | Age: {patient.age} | Gender: {patient.gender}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column: Details & Vitals */}
            <div className="md:col-span-1 space-y-6">
                 <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Patient Information</h4>
                    <p><strong>Department:</strong> {patient.department}</p>
                    <p><strong>Bed:</strong> {patient.bedNumber}</p>
                    <p><strong>Admission:</strong> {patient.admissionDate}</p>
                    <p><strong>Blood Type:</strong> {patient.bloodType}</p>
                    <p><strong>Status:</strong> <span className="font-bold">{patient.status}</span></p>
                 </div>
                 {patient.vitals && (
                     <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Latest Vitals</h4>
                        <p><strong>Heart Rate:</strong> {patient.vitals.heartRate.slice(-1)[0]} bpm</p>
                        <p><strong>SpO2:</strong> {patient.vitals.spO2.slice(-1)[0]}%</p>
                    </div>
                 )}
                <AIPredictions patientId={patient.id} />
            </div>

            {/* Right Column: Timeline */}
            <div className="md:col-span-2">
                <PatientTimeline timeline={patient.timeline} />
            </div>
        </div>

      </div>
    </div>
  );
};

export default PatientDetailModal;
