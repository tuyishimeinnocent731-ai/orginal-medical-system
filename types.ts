// FIX: Created a central types file to define all data structures used throughout the application, such as Patient, Staff, and View.
export type View = 
  | 'dashboard' 
  | 'patients' 
  | 'patient-detail'
  | 'appointments' 
  | 'billing' 
  | 'staff' 
  | 'staff-detail'
  | 'symptom-checker'
  | 'telemedicine'
  | 'surgical-schedule'
  | 'pharmacy'
  | 'laboratory'
  | 'hospital-map'
  | 'department-detail'
  | 'patient-portal'
  | 'virtual-consultations'
  | 'consultation-room'
  | 'genomics'
  | 'genomic-detail'
  | 'wearable-data';

export type Department = 'Cardiology' | 'Neurology' | 'Orthopedics' | 'ICU' | 'Oncology' | 'General Medicine';

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  avatarUrl: string;
  department: Department;
  lastVisit: string;
  status: 'Stable' | 'Critical' | 'Discharged';
  vitals?: {
    heartRate: number[];
    spO2: number[];
    bloodPressure: string[];
  };
  timeline?: TimelineEvent[];
  imagingStudies?: ImagingStudy[];
  hasGenomicData?: boolean;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  department: Department;
  avatarUrl:string;
  onCall: boolean;
  assignedPatients?: string[];
}

export interface Appointment {
  id: string;
  patientName: string;
  doctor: string;
  department: Department;
  date: string;
  time: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

export interface Invoice {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface SymptomAnalysisResult {
  possibleConditions: {
    name: string;
    explanation: string;
  }[];
  suggestedNextSteps: string[];
  disclaimer: string;
}

export interface Notification {
    id: string;
    message: string;
    timestamp: string;
    type: 'message' | 'alert' | 'billing' | 'surgery';
    read: boolean;
}

export interface ChatContact {
    id: string;
    name: string;
    avatarUrl: string;
    lastMessage: string;
    unreadCount: number;
}

export interface ChatMessage {
    id: string;
    text: string;
    sender: 'user' | 'doctor';
    timestamp: string;
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
    operatingRoom: string;
    status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
}

export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    description: string;
    type: 'Admission' | 'Discharge' | 'Procedure' | 'Medication' | 'Test';
}

export interface Prescription {
    id: string;
    patientName: string;
    patientId: string;
    medicationName: string;
    dosage: string;
    frequency: string;
    duration: string;
    issueDate: string;
    status: 'Active' | 'Completed' | 'Cancelled';
}

export interface LabResult {
    id: string;
    patientName: string;
    patientId: string;
    testName: string;
    result: string;
    referenceRange: string;
    date: string;
    status: 'Pending' | 'Completed' | 'Abnormal';
}

export interface ImagingStudy {
    id: string;
    patientName: string;
    patientId: string;
    studyType: 'X-Ray' | 'MRI' | 'CT Scan';
    bodyPart: string;
    date: string;
    imageUrl: string;
    thumbnailUrl: string;
}

export interface VirtualConsultation {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

export interface GenomicVariant {
  id: string;
  gene: string;
  variant: string;
  classification: 'Pathogenic' | 'Likely Pathogenic' | 'Benign' | 'Uncertain Significance';
  implication: string;
}
