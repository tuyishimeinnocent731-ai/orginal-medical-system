// FIX: Created this file to define the PatientDetail component.
import React, { useMemo, useState } from 'react';
import { mockPatients } from '../services/mockData';
import type { Patient, View, ImagingResult } from '../types';
import StatCard from './StatCard';
import { PatientsIcon } from './IconComponents';
import AIPredictions from './AIPredictions';
import PatientTimeline from './PatientTimeline';
import ImagingViewerModal from './ImagingViewerModal';

interface PatientDetailProps {
  patientId: string;
  navigate: (view: View, id: string | null) => void;
}

const getStatusColor = (status: Patient['status']) => {
  switch (status) {
    case 'Stable': return 'text-green-500';
    case 'Critical': return 'text-red-500';
    case 'Discharged': return 'text-gray-500';
  }
};

const PatientDetail: React.FC<PatientDetailProps> = ({ patientId, navigate }) => {
  const [viewingImage, setViewingImage] = useState<ImagingResult | null>(null);
  const patient = useMemo(() => mockPatients.find(p => p.id === patientId), [patientId]);

  if (!patient) {
    return (
        <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-red-500">Patient Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">The requested patient record could not be located.</p>
            <button onClick={() => navigate('patients', null)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Back to Patient Directory
            </button>
        </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
        <button onClick={() => navigate('patients', null)} className="text-blue-600 dark:text-blue-400 hover:underline mb-4">&larr; Back to Patients</button>
      <header className="flex flex-col md:flex-row items-start justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <div className="flex items-center">
            <img src={patient.avatarUrl} alt={patient.name} className="w-24 h-24 rounded-full object-cover mr-6 ring-4 ring-blue-500/50" />
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{patient.name}</h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">ID: {patient.id} &bull; {patient.age} years old &bull; {patient.gender}</p>
                <p className="text-gray-500 dark:text-gray-400">Department: {patient.department}</p>
                <p className={`font-semibold text-lg mt-2 ${getStatusColor(patient.status)}`}>Status: {patient.status}</p>
            </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Heart Rate" value={`${patient.vitals?.heartRate.slice(-1)[0] ?? 'N/A'} bpm`} icon={<>❤️</>} color="bg-red-100 dark:bg-red-900/50" />
                <StatCard title="SpO2" value={`${patient.vitals?.spO2.slice(-1)[0] ?? 'N/A'} %`} icon={<>💨</>} color="bg-blue-100 dark:bg-blue-900/50" />
                <StatCard title="Blood Pressure" value={patient.vitals?.bloodPressure.slice(-1)[0] ?? 'N/A'} icon={<>🩸</>} color="bg-purple-100 dark:bg-purple-900/50" />
            </div>
            <PatientTimeline timeline={patient.timeline} />
        </div>
        <div className="space-y-6">
            <AIPredictions patientId={patient.id} />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Medical History</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {patient.medicalHistory?.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Imaging Results</h3>
                <div className="space-y-3">
                    {patient.imagingResults?.map(img => (
                        <div key={img.id} onClick={() => setViewingImage(img)} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                            <p className="font-semibold text-gray-800 dark:text-white">{img.type} - {img.date}</p>
                            <p className="text-sm text-blue-500">Click to view</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
       {viewingImage && <ImagingViewerModal imageUrl={viewingImage.imageUrl} onClose={() => setViewingImage(null)} />}
    </div>
  );
};

export default PatientDetail;
