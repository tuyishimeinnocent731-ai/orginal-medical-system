// FIX: Created this file to define the application's data types.
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  bloodType: string;
  status: 'Stable' | 'Critical' | 'Discharged';
  department: 'Cardiology' | 'Neurology' | 'Oncology' | 'Orthopedics' | 'General Medicine' | 'Pediatrics';
  bedNumber: string;
  admissionDate: string;
  vitals?: {
    heartRate: number[];
    spO2: number[];
  };
  timeline?: TimelineEvent[];
  imagingStudies?: ImagingStudy[];
}

export interface Staff {
  id: string;
  name: string;
  role: 'Doctor' | 'Nurse' | 'Surgeon' | 'Administrator' | 'Technician';
  department: 'Cardiology' | 'Neurology' | 'Oncology' | 'Orthopedics' | 'General Medicine' | 'Pediatrics' | 'Administration';
  onCall: boolean;
  shift: 'Day' | 'Night';
}

export interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  type: 'Routine Checkup' | 'Consultation' | 'Follow-up';
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
    status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
}

export interface ImagingStudy {
    id: string;
    patientName: string;
    studyType: 'X-Ray' | 'CT Scan' | 'MRI';
    bodyPart: string;
    date: string;
    imageUrl: string;
}

export interface TimelineEvent {
    id: string;
    date: string;
    type: 'Admission' | 'Medication' | 'Observation' | 'Procedure' | 'Discharge';
    title: string;
    description: string;
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
    testName: string;
    result: string;
    referenceRange: string;
    date: string;
    status: 'Pending' | 'Completed';
}

export interface GenomicData {
    id: string;
    patientName: string;
    sequenceId: string;
    markers: { marker: string; value: string }[];
    summary: string;
}

export interface WearableDataPoint {
    time: string;
    value: number;
}
export interface WearableData {
    patientName: string;
    dataType: 'Heart Rate' | 'Steps' | 'Sleep';
    data: WearableDataPoint[];
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
    type: 'Revenue' | 'Expense';
    category: string;
    amount: number;
    date: string;
}

export interface PublicHealthData {
    region: string;
    disease: string;
    cases: number;
    date: string;
}

export interface Ambulance {
    id: string;
    location: { lat: number, lng: number };
    status: 'Available' | 'En-route' | 'At Scene' | 'Returning';
    destination?: string;
}

export interface Consultation {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  platform: 'Zoom' | 'Google Meet' | 'Hospital Portal';
  status: 'Scheduled' | 'Completed';
}
