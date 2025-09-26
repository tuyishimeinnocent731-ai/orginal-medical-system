
export type Department = 'Cardiology' | 'Neurology' | 'Oncology' | 'Pediatrics' | 'ICU' | 'Orthopedics' | 'General Surgery';

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  bloodType: string;
  admissionDate: string;
  dischargeDate?: string;
  diagnosis?: string;
  department: Department;
  bedNumber: string;
  status: 'Stable' | 'Critical' | 'Discharged';
  vitals?: {
    heartRate: number[];
    bloodPressure: string[];
    spO2: number[];
    temperature: number[];
  };
  timeline?: TimelineEvent[];
  imagingStudies?: ImagingStudy[];
}

export interface Appointment {
    id: string;
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    type: 'Consultation' | 'Follow-up' | 'Check-up';
    status: 'Scheduled' | 'Completed' | 'Canceled';
}

export interface Invoice {
    id: string;
    patientId: string;
    patientName: string;
    date: string;
    amount: number;
    status: 'Paid' | 'Pending' | 'Overdue';
}

export interface Staff {
    id: string;
    name: string;
    role: 'Doctor' | 'Nurse' | 'Surgeon' | 'Admin' | 'Technician';
    department: Department;
    onCall: boolean;
    phone: string;
    email: string;
}

export interface Notification {
    id: string;
    type: 'message' | 'alert' | 'surgery' | 'billing';
    message: string;
    timestamp: string;
    read: boolean;
}

export interface Surgery {
    id: string;
    patientName: string;
    patientId: string;
    procedure: string;
    surgeon: string;
    date: string;
    startTime: string;
    endTime: string;
    operatingRoom: 'OR 1' | 'OR 2' | 'OR 3' | 'OR 4';
    status: 'Scheduled' | 'In Progress' | 'Completed' | 'Canceled';
}

export interface Medication {
    id: string;
    name: string;
    dosage: string;
    frequency: string;
    stock: number;
}

export interface LabResult {
    id: string;
    patientId: string;
    patientName: string;
    testName: string;
    result: string;
    referenceRange: string;
    date: string;
    status: 'Pending' | 'Completed';
}

export interface ImagingStudy {
    id: string;
    patientName: string;
    studyType: string; // e.g., 'X-Ray', 'MRI'
    bodyPart: string;
    date: string;
    imageUrl: string;
}

export interface TimelineEvent {
    id: string;
    date: string;
    type: 'Admission' | 'Diagnosis' | 'Procedure' | 'Medication' | 'Discharge' | 'Observation';
    title: string;
    description: string;
}

export interface GenomicVariant {
    id: string;
    gene: string;
    variant: string;
    implication: string;
    classification: 'Pathogenic' | 'Likely Pathogenic' | 'Uncertain' | 'Likely Benign' | 'Benign';
}

export interface Resource {
    id: string;
    name: string;
    type: 'MRI Machine' | 'Ventilator' | 'X-Ray' | 'Ultrasound';
    isAvailable: boolean;
}

export interface AuditLog {
    id: string;
    timestamp: string;
    user: string;
    action: string;
    details: string;
}
