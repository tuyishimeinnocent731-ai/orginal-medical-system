// FIX: Created this file to define all application types.

export type View =
  | 'dashboard'
  | 'patients'
  | 'patient-detail'
  | 'staff'
  | 'staff-detail'
  | 'appointments'
  | 'symptom-checker'
  | 'telemedicine'
  | 'billing'
  | 'pharmacy'
  | 'laboratory'
  | 'surgical-schedule'
  | 'hospital-map'
  | 'department-detail'
  | 'patient-portal'
  | 'virtual-consultations'
  | 'consultation-room';

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
  medicalHistory?: string[];
  currentMedications?: Medication[];
  labResults?: LabResult[];
  imagingResults?: ImagingResult[];
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  department: Department;
  avatarUrl: string;
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

export interface SymptomAnalysisResult {
  possibleConditions: { name: string; explanation: string }[];
  suggestedNextSteps: string[];
  disclaimer: string;
}

export interface Invoice {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  items: { description: string; amount: number }[];
}

export interface ChatContact {
    id: string;
    name: string;
    avatarUrl: string;
    lastMessage: string;
    unreadCount: number;
    online?: boolean;
}

export interface ChatMessage {
    id: string;
    text: string;
    sender: 'user' | 'doctor';
    timestamp: string;
}

export interface Notification {
    id: string;
    type: 'message' | 'surgery' | 'billing' | 'alert';
    message: string;
    timestamp: string;
    read: boolean;
}

export interface Medication {
    id: string;
    name: string;
    dosage: string;
    frequency: string;
    status: 'Active' | 'Discontinued';
}

export interface LabResult {
    id: string;
    testName: string;
    patientName: string;
    patientId: string;
    value: string;
    referenceRange: string;
    date: string;
    status: 'Normal' | 'Abnormal' | 'Pending';
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
    type: 'Admission' | 'Discharge' | 'Procedure' | 'Medication' | 'Observation';
    title: string;
    description: string;
}

export interface ImagingResult {
    id: string;
    type: 'X-Ray' | 'MRI' | 'CT Scan';
    date: string;
    imageUrl: string;
    notes: string;
}

export interface Prescription {
    id: string;
    medicationName: string;
    dosage: string;
    frequency: string;
    duration: string;
    patientName: string;
    patientId: string;
    issueDate: string;
    status: 'Active' | 'Completed';
}

export interface VirtualConsultation {
    id: string;
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    status: 'Scheduled' | 'Completed' | 'Cancelled';
}
