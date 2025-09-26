// FIX: Created this file to define all shared types for the application.

export type View =
  | 'dashboard'
  | 'patients'
  | 'patient-detail'
  | 'staff-detail'
  | 'department-detail'
  | 'appointments'
  | 'symptom-checker'
  | 'billing'
  | 'staff'
  | 'map'
  | 'telemedicine'
  | 'surgical-schedule'
  | 'pharmacy'
  | 'laboratory';

export interface Navigation {
  view: View;
  id: string | null;
}

export type Department = 'Cardiology' | 'Neurology' | 'Orthopedics' | 'ICU' | 'Oncology' | 'General Medicine' | 'Surgery' | 'Administration';

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
  };
  medicalHistory?: string[];
  currentMedications?: Medication[];
  labResults?: LabResult[];
  timeline?: TimelineEvent[];
  imaging?: Imaging[];
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
  department: Patient['department'];
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
  service: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Unpaid' | 'Overdue';
}

export interface Notification {
  id: string;
  type: 'message' | 'alert' | 'billing' | 'surgery';
  message: string;
  timestamp: string;
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
    status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
    operatingRoom: string;
}

export interface Medication {
    id: string;
    name: string;
    dosage: string;
    frequency: string;
    status: 'Active' | 'Discontinued';
    patientId: string;
    patientName: string;
}

export interface LabResult {
    id: string;
    testName: string;
    value: string;
    referenceRange: string;
    date: string;
    status: 'Normal' | 'Abnormal' | 'Pending';
    patientId: string;
    patientName: string;
}

export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    description: string;
    type: 'Admission' | 'Discharge' | 'Procedure' | 'Medication' | 'Observation' | 'Test Result';
}

export interface Imaging {
    id: string;
    type: 'X-Ray' | 'MRI' | 'CT Scan';
    date: string;
    imageUrl: string;
    notes: string;
}
