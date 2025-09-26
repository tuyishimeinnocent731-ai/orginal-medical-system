// FIX: Created this file to define the PatientDetail component.
import React, { useMemo, useState } from 'react';
import { mockPatients, mockStaff } from '../services/mockData';
import type { Patient } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AIPredictions from './AIPredictions';
import PatientTimeline from './PatientTimeline';
import ImagingViewerModal from './ImagingViewerModal';

interface PatientDetailProps {
  patientId: string;
}

const PatientDetail: React.FC<PatientDetailProps> = ({ patientId }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const patient = useMemo(() => mockPatients.find(p => p.id === patientId), [patientId]);

  if (!patient) {
    return <div className="text-center text-red-500">Patient not found.</div>;
  }
  
  const assignedDoctor = mockStaff.find(s => s.assignedPatients?.includes(patient.id));

  const vitalsData = patient.vitals?.heartRate.map((hr, index) => ({
    name: `T${index}`,
    heartRate: hr,
    spO2: patient.vitals?.spO2[index],
  })) || [];

  return (
    <div className="animate-fade-in space-y-6">
        <header className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-start justify-between">
                <div className="flex items-center">
                    <img src={patient.avatarUrl} alt={patient.name} className="w-24 h-24 rounded-full object-cover mr-6 ring-4 ring-blue-500/50" />
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{patient.name}</h2>
                        <p className="text-gray-500 dark:text-gray-400">{patient.age} years old, {patient.gender}</p>
                        <p className="text-gray-500 dark:text-gray-400">ID: {patient.id}</p>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">Department: {patient.department}</p>
                     {assignedDoctor && <p className="text-md text-gray-500 dark:text-gray-400">Attending: {assignedDoctor.name}</p>}
                </div>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
                {patient.vitals && (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-80">
                         <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Vitals</h3>
                         <ResponsiveContainer width="100%" height="85%">
                            <LineChart data={vitalsData} >
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(128,128,128,0.3)" />
                                <XAxis dataKey="name" />
                                <YAxis yAxisId="left" domain={[60, 140]} />
                                <YAxis yAxisId="right" orientation="right" domain={[85, 100]} />
                                <Tooltip />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="heartRate" stroke="#EF4444" name="Heart Rate" />
                                <Line yAxisId="right" type="monotone" dataKey="spO2" stroke="#3B82F6" name="SpO2 (%)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
                <PatientTimeline timeline={patient.timeline} />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
                <AIPredictions patientId={patient.id} />
                {patient.currentMedications && (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Medications</h3>
                        <ul className="space-y-2">
                            {patient.currentMedications.map(med => (
                                <li key={med.id} className="text-gray-600 dark:text-gray-300">{med.name} - {med.dosage}</li>
                            ))}
                        </ul>
                    </div>
                )}
                 {patient.labResults && (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Lab Results</h3>
                        <ul className="space-y-2">
                            {patient.labResults.map(lab => (
                                <li key={lab.id} className="text-gray-600 dark:text-gray-300">{lab.testName}: <span className="font-semibold">{lab.value}</span></li>
                            ))}
                        </ul>
                    </div>
                )}
                 {patient.imaging && (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Imaging</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {patient.imaging.map(img => (
                                <img key={img.id} src={img.imageUrl} alt={img.type} className="rounded-md cursor-pointer" onClick={() => setSelectedImage(img.imageUrl)} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>

        {selectedImage && <ImagingViewerModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default PatientDetail;
