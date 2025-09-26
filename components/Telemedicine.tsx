// FIX: Created this file to define the Telemedicine component.
import React from 'react';
import VirtualConsultations from './VirtualConsultations.tsx';
import ConsultationRoom from './ConsultationRoom.tsx';

const Telemedicine: React.FC = () => {
  const [inConsultation, setInConsultation] = React.useState(false);
  const [consultationDetails, setConsultationDetails] = React.useState({ patientName: '', doctorName: '' });

  const startConsultation = (patientName: string, doctorName: string) => {
    setConsultationDetails({ patientName, doctorName });
    setInConsultation(true);
  };
  
  const endConsultation = () => {
    setInConsultation(false);
    setConsultationDetails({ patientName: '', doctorName: '' });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Telemedicine Suite</h1>
      {inConsultation ? (
        <ConsultationRoom 
          patientName={consultationDetails.patientName} 
          doctorName={consultationDetails.doctorName}
          onEndConsultation={endConsultation}
        />
      ) : (
        <VirtualConsultations onStartConsultation={startConsultation} />
      )}
    </div>
  );
};

export default Telemedicine;
