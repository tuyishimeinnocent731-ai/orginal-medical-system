// FIX: Created the PatientDetail component to display a comprehensive view of a single patient's data, including vitals, timeline, and AI predictions.
import React, { useMemo, useState } from 'react';
import { mockPatients } from '../services/mockData';
import type { View, ImagingStudy } from '../types';
import AIPredictions from './AIPredictions';
import PatientTimeline from './PatientTimeline';
import ImagingViewerModal from './ImagingViewerModal';

interface PatientDetailProps {
  patientId: string;
  navigate: (view: View, id: string | null) => void;
}

const getStatusBadge = (status: 'Stable' | 'Critical' | 'Discharged') => {
  switch (status) {
    case 'Stable':
      return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
    case 'Critical':
      return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
    case 'Discharged':
      return 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};


const PatientDetail: React.FC<PatientDetailProps> = ({ patientId, navigate }) => {
  const [selectedImage, setSelectedImage] = useState<ImagingStudy | null>(null);

  const patient = useMemo(() => mockPatients.find(p => p.id === patientId), [patientId]);

  if (!patient) {
    return <div className="text-center text-red-500">Patient not found.</div>;
  }

  const latestVitals = patient.vitals ? {
      heartRate: patient.vitals.heartRate.slice(-1)[0],
      spO2: patient.vitals.spO2.slice(-1)[0],
      bloodPressure: patient.vitals.bloodPressure.slice(-1)[0],
  } : null;

  return (
    <div className="animate-fade-in space-y-6">
      <header className="flex flex-col md:flex-row items-start justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <div className="flex items-center">
            <img src={patient.avatarUrl} alt={patient.name} className="w-24 h-24 rounded-full object-cover mr-6 ring-4 ring-blue-500/50" />
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{patient.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">{patient.id} &bull; {patient.age} years old &bull; {patient.gender}</p>
                <p className="text-gray-500 dark:text-gray-400">Department: {patient.department}</p>
            </div>
        </div>
        <div className="mt-4 md:mt-0">
             <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusBadge(patient.status)}`}>
                {patient.status}
            </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <PatientTimeline timeline={patient.timeline} />
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Imaging Studies</h3>
                {patient.imagingStudies && patient.imagingStudies.length > 0 ? (
                    <div className="flex space-x-4 overflow-x-auto p-2">
                        {patient.imagingStudies.map(study => (
                            <div key={study.id} onClick={() => setSelectedImage(study)} className="cursor-pointer flex-shrink-0 group">
                                <img src={study.thumbnailUrl} alt={study.studyType} className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-500 transition"/>
                                <p className="text-sm text-center mt-2 font-medium">{study.studyType}</p>
                                <p className="text-xs text-center text-gray-500">{study.date}</p>
                            </div>
                        ))}
                    </div>
                ): (
                    <p className="text-gray-500 dark:text-gray-400">No imaging studies available.</p>
                )}
            </div>
        </div>

        <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Latest Vitals</h3>
                {latestVitals ? (
                    <div className="space-y-3">
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Heart Rate</p>
                            <p className="text-2xl font-bold text-red-500">{latestVitals.heartRate} <span className="text-sm font-normal">BPM</span></p>
                        </div>
                         <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Blood Pressure</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{latestVitals.bloodPressure} <span className="text-sm font-normal">mmHg</span></p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">SpO2</p>
                            <p className="text-2xl font-bold text-blue-500">{latestVitals.spO2}%</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500 dark:text-gray-400">No vitals data available.</p>
                )}
            </div>
            
            <AIPredictions patientId={patient.id} />
             {patient.hasGenomicData && (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                     <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Advanced Data</h3>
                     <div className="space-y-2">
                        <button onClick={() => navigate('genomic-detail', patient.id)} className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">
                            View Genomic Data
                         </button>
                         <button onClick={() => navigate('wearable-data', patient.id)} className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">
                            View Wearable Data
                         </button>
                    </div>
                </div>
            )}
        </div>
      </div>
      {selectedImage && <ImagingViewerModal imagingStudy={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default PatientDetail;
