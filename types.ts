// FIX: Created this file to define all shared types for the application.

export type View = 'Dashboard' | 'Patients' | 'Appointments' | 'SymptomChecker' | 'Billing' | 'Staff' | 'Surgery' | 'Pharmacy' | 'Laboratory' | 'Telemedicine' | 'Genomics' | 'Clinical Trials';

export interface Vitals {
  heartRate: number[];
  spO2: number[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'Admission' | 'Diagnosis' | 'Procedure' | 'Medication' | 'Discharge';
  title: string;
  description: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  admissionDate: string;
  department: 'Cardiology' | 'Neurology' | 'Oncology' | 'Orthopedics' | 'Pediatrics' | 'ICU';
  bedNumber: string;
  status: 'Stable' | 'Critical' | 'Discharged';
  bloodType: string;
  vitals?: Vitals;
  timeline?: TimelineEvent[];
}

export interface Staff {
  id: string;
  name: string;
  role: 'Doctor' | 'Nurse' | 'Surgeon' | 'Admin' | 'Technician';
  department: 'Cardiology' | 'Neurology' | 'Oncology' | 'Orthopedics' | 'Pediatrics' | 'Administration' | 'ICU' | 'Laboratory';
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
  type: 'Check-up' | 'Consultation' | 'Follow-up';
  status: 'Scheduled' | 'Completed' | 'Cancelled';
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
    type: 'alert' | 'message' | 'surgery' | 'billing';
    message: string;
    timestamp: string;
    read: boolean;
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

export interface ImagingStudy {
    id: string;
    patientName: string;
    studyType: 'X-Ray' | 'MRI' | 'CT Scan';
    bodyPart: string;
    date: string;
    imageUrl: string;
}

export interface Consultation {
    id: string;
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    platform: 'TeleHealth App' | 'Zoom';
}

export interface GenomicData {
    id: string;
    patientName: string;
    sequenceId: string;
    summary: string;
    markers: { marker: string, value: string }[];
}

export interface ClinicalTrial {
    id: string;
    title: string;
    sponsor: string;
    status: 'Recruiting' | 'Active';
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

export interface Ambulance {
    id: string;
    status: 'Available' | 'En-route' | 'At Scene' | 'Returning';
    location: string;
    destination?: string;
}

export interface AuditLogEntry {
    id: string;
    timestamp: string;
    user: string;
    action: string;
    details: string;
}

export interface Resource {
    id: string;
    name: string; // e.g., 'MRI Scanner 1', 'Operating Room 3'
    type: 'Equipment' | 'Room';
    isAvailable: boolean;
}