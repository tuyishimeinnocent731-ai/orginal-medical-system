
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  admissionDate: string;
  department: 'Cardiology' | 'Neurology' | 'Oncology' | 'Orthopedics' | 'Pediatrics';
  bedNumber: string;
  status: 'Critical' | 'Stable' | 'Discharged';
  bloodType: string;
  vitals?: {
    heartRate: number[];
    spO2: number[];
  };
  timeline?: TimelineEvent[];
}

export interface Staff {
  id: string;
  name: string;
  role: 'Doctor' | 'Nurse' | 'Surgeon' | 'Admin' | 'Therapist';
  department: 'Cardiology' | 'Neurology' | 'Oncology' | 'Orthopedics' | 'Pediatrics' | 'Administration';
  onCall: boolean;
  phone: string;
  email: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  type: 'Consultation' | 'Follow-up' | 'Procedure';
  status: 'Scheduled' | 'Completed' | 'Canceled';
}

export interface Invoice {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface Notification {
  id: string;
  type: 'message' | 'alert' | 'billing' | 'surgery';
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

export interface Prescription {
    id: string;
    patientName: string;
    patientId: string;
    medicationName: string;
    dosage: string;
    frequency: string;
    duration: string;
    issueDate: string;
    status: 'Active' | 'Completed' | 'Canceled';
}

export interface LabResult {
    id: string;
    patientId: string;
    patientName: string;
    testName: string;
    result: string;
    referenceRange: string;
    date: string;
    status: 'Completed' | 'Pending';
}

export interface ImagingStudy {
  id: string;
  patientName: string;
  studyType: string;
  bodyPart: string;
  date: string;
  imageUrl: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'Admission' | 'Medication' | 'Observation' | 'Procedure' | 'Discharge';
}

export interface Bed {
  id: string;
  ward: string;
  isOccupied: boolean;
  patientId?: string;
  patientName?: string;
}

export interface Ambulance {
    id: string;
    status: 'Available' | 'En-route' | 'At Scene' | 'Returning';
    location: string;
    destination?: string;
}

export interface VirtualConsultation {
    id: string;
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    platform: 'Internal App' | 'Zoom' | 'Teams';
}

export interface GenomicData {
    id: string;
    patientName: string;
    sequenceId: string;
    summary: string;
    markers: { marker: string; value: string }[];
}

export interface ClinicalTrial {
    id: string;
    title: string;
    sponsor: string;
    status: 'Recruiting' | 'Active' | 'Completed';
    eligibility: string;
}

export interface FinancialRecord {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: 'Revenue' | 'Expense';
}

export interface PublicHealthData {
    region: string;
    disease: string;
    cases: number;
}

export interface Resource {
    id: string;
    name: string;
    type: 'MRI Machine' | 'Ventilator' | 'X-Ray';
    isAvailable: boolean;
}

export interface AuditLogEntry {
    id: string;
    timestamp: string;
    user: string;
    action: string;
    details: string;
}
