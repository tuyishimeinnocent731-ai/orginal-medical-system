
import React from 'react';
import { mockPatients } from '../services/mockData.ts';
import PatientTimeline from './PatientTimeline.tsx';
import AIPredictions from './AIPredictions.tsx';
import ImagingViewerModal from './ImagingViewerModal.tsx';
import type { ImagingStudy } from '../types.ts';

// This is a placeholder for a dedicated patient detail page, assuming routing.
// For this app, we primarily use the PatientDetailModal.
// This component shows how a full page could be structured.

const PatientDetail: React.FC<{ patientId?: string }> = ({ patientId = "P001" }) => {
  const patient = mockPatients.find(p => p.id === patientId);
  const [selectedImage, setSelectedImage] = React.useState<ImagingStudy | null>(null);

  if (!patient) {
    return <div>Patient not found.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold">{patient.name}</h1>
        <p className="text-gray-500">{patient.age} y/o {patient.gender} - {patient.department}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <PatientTimeline timeline={patient.timeline} />

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Imaging Studies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {patient.imagingStudies?.map(study => (
                        <div key={study.id} className="cursor-pointer" onClick={() => setSelectedImage(study)}>
                            <img src={study.imageUrl} alt={study.studyType} className="rounded-lg object-cover w-full h-32 bg-gray-200" />
                            <p className="text-sm mt-2 text-center font-medium">{study.studyType}</p>
                            <p className="text-xs text-center text-gray-500">{study.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="space-y-6">
          <AIPredictions patientId={patient.id} />
          {/* Add more detail components here */}
        </div>
      </div>
      {selectedImage && <ImagingViewerModal imagingStudy={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default PatientDetail;
