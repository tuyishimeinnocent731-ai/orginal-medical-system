// FIX: Created this file to provide mock data for the application.
import type { Patient, Staff, Appointment, Invoice, Notification, Surgery, Prescription, LabResult, GenomicData, ClinicalTrial, FinancialRecord, PublicHealthData, Ambulance, Consultation } from '../types.ts';

export const mockPatients: Patient[] = [
  { id: 'P001', name: 'John Doe', age: 45, gender: 'Male', bloodType: 'O+', status: 'Stable', department: 'Cardiology', bedNumber: 'C101', admissionDate: '2023-10-01', vitals: { heartRate: [72, 75, 71], spO2: [98, 99, 97] } },
  { id: 'P002', name: 'Jane Smith', age: 62, gender: 'Female', bloodType: 'A-', status: 'Critical', department: 'Neurology', bedNumber: 'N203', admissionDate: '2023-10-02', vitals: { heartRate: [110, 115, 112], spO2: [92, 91, 93] } },
  { id: 'P003', name: 'Robert Johnson', age: 71, gender: 'Male', bloodType: 'B+', status: 'Discharged', department: 'Oncology', bedNumber: 'O305', admissionDate: '2023-09-15' },
  { id: 'P004', name: 'Emily White', age: 34, gender: 'Female', bloodType: 'AB+', status: 'Stable', department: 'Orthopedics', bedNumber: 'OR402', admissionDate: '2023-10-03' },
  { id: 'P005', name: 'Michael Brown', age: 50, gender: 'Male', bloodType: 'O-', status: 'Critical', department: 'Cardiology', bedNumber: 'C102', admissionDate: '2023-10-04', vitals: { heartRate: [95, 98, 94], spO2: [94, 95, 93] } },
];

export const mockStaff: Staff[] = [
  { id: 'S001', name: 'Dr. Alice Williams', role: 'Surgeon', department: 'Cardiology', onCall: true, shift: 'Day' },
  { id: 'S002', name: 'Dr. Bob Davis', role: 'Doctor', department: 'Neurology', onCall: false, shift: 'Night' },
  { id: 'S003', name: 'Nurse Carol Miller', role: 'Nurse', department: 'Oncology', onCall: true, shift: 'Day' },
  { id: 'S004', name: 'Admin Tom Wilson', role: 'Administrator', department: 'Administration', onCall: false, shift: 'Day' },
];

export const mockAppointments: Appointment[] = [
  { id: 'A001', patientName: 'John Doe', doctorName: 'Dr. Williams', date: '2023-10-10', time: '10:00 AM', type: 'Follow-up', status: 'Scheduled' },
  { id: 'A002', patientName: 'Emily White', doctorName: 'Dr. Davis', date: '2023-10-11', time: '02:00 PM', type: 'Consultation', status: 'Scheduled' },
  { id: 'A003', patientName: 'Robert Johnson', doctorName: 'Dr. Miller', date: '2023-10-05', time: '11:30 AM', type: 'Routine Checkup', status: 'Completed' },
];

export const mockInvoices: Invoice[] = [
  { id: 'INV001', patientName: 'John Doe', patientId: 'P001', date: '2023-10-05', amount: 1250.75, status: 'Paid' },
  { id: 'INV002', patientName: 'Jane Smith', patientId: 'P002', date: '2023-10-06', amount: 8400.00, status: 'Pending' },
  { id: 'INV003', patientName: 'Emily White', patientId: 'P004', date: '2023-10-07', amount: 320.50, status: 'Pending' },
];

export const mockNotifications: Notification[] = [
  { id: 'N001', type: 'alert', message: 'Patient Jane Smith (N203) vitals are unstable.', timestamp: '2 mins ago', read: false },
  { id: 'N002', type: 'surgery', message: 'Surgery for John Doe scheduled in OR 2 at 3:00 PM.', timestamp: '1 hour ago', read: false },
  { id: 'N003', type: 'billing', message: 'Invoice #INV002 is now overdue.', timestamp: '3 hours ago', read: true },
  { id: 'N004', type: 'message', message: 'Dr. Davis sent a new message regarding patient Emily White.', timestamp: '1 day ago', read: true },
];

export const mockSurgeries: Surgery[] = [
    { id: 'SURG001', patientName: 'John Doe', patientId: 'P001', procedure: 'Coronary Artery Bypass', surgeon: 'Dr. Alice Williams', date: '2023-10-10', startTime: '1:00 PM', endTime: '5:00 PM', operatingRoom: 'OR 1', status: 'Scheduled' },
    { id: 'SURG002', patientName: 'Emily White', patientId: 'P004', procedure: 'Knee Replacement', surgeon: 'Dr. Evans', date: '2023-10-12', startTime: '9:00 AM', endTime: '11:30 AM', operatingRoom: 'OR 3', status: 'Scheduled' },
];

export const mockPrescriptions: Prescription[] = [
    { id: 'RX001', patientName: 'John Doe', patientId: 'P001', medicationName: 'Aspirin', dosage: '81mg', frequency: 'Once daily', duration: 'Ongoing', issueDate: '2023-10-02', status: 'Active' },
    { id: 'RX002', patientName: 'Emily White', patientId: 'P004', medicationName: 'Ibuprofen', dosage: '600mg', frequency: 'As needed for pain', duration: '7 days', issueDate: '2023-10-04', status: 'Active' },
];

export const mockLabResults: LabResult[] = [
    { id: 'LAB001', patientName: 'Jane Smith', testName: 'Complete Blood Count', result: 'WBC: 11.5 x10^3/uL', referenceRange: '4.5-11.0', date: '2023-10-03', status: 'Completed' },
    { id: 'LAB002', patientName: 'John Doe', testName: 'Lipid Panel', result: 'Pending', referenceRange: 'N/A', date: '2023-10-05', status: 'Pending' },
];

export const mockGenomicData: GenomicData[] = [
  { id: 'GEN001', patientName: 'Jane Smith', sequenceId: 'SEQ99827-B', markers: [{ marker: 'BRCA1', value: 'Negative' }, { marker: 'APOE4', value: 'Positive' }], summary: 'Elevated risk for Alzheimer\'s disease detected.' }
];

export const mockClinicalTrials: ClinicalTrial[] = [
    { id: 'CT001', title: 'A Study of a New Drug for Heart Failure', sponsor: 'PharmaCorp', status: 'Recruiting', eligibility: 'Age 50+, History of CHF' },
    { id: 'CT002', title: 'Advanced Glioblastoma Treatment Options', sponsor: 'NeuroGen', status: 'Active', eligibility: 'Diagnosed with Grade IV Glioblastoma' },
];

export const mockFinancialRecords: FinancialRecord[] = [
    { id: 'FIN001', type: 'Revenue', category: 'Insurance Payouts', amount: 250000, date: '2023-10-01' },
    { id: 'FIN002', type: 'Expense', category: 'Surgical Supplies', amount: 45000, date: '2023-10-02' },
    { id: 'FIN003', type: 'Revenue', category: 'Patient Payments', amount: 75000, date: '2023-10-03' },
    { id: 'FIN004', type: 'Expense', category: 'Salaries', amount: 150000, date: '2023-10-04' },
];

export const mockPublicHealthData: PublicHealthData[] = [
    { region: 'North County', disease: 'Influenza', cases: 152, date: '2023-10-05' },
    { region: 'South County', disease: 'Influenza', cases: 98, date: '2023-10-05' },
    { region: 'Downtown', disease: 'COVID-19', cases: 45, date: '2023-10-05' },
];

export const mockAmbulances: Ambulance[] = [
    { id: 'AMB01', location: { lat: 34.0522, lng: -118.2437 }, status: 'Available' },
    { id: 'AMB02', location: { lat: 34.0622, lng: -118.2537 }, status: 'En-route', destination: 'City General Hospital' },
    { id: 'AMB03', location: { lat: 34.0422, lng: -118.2637 }, status: 'At Scene' },
];

export const mockConsultations: Consultation[] = [
  { id: 'CON001', patientName: 'Robert Johnson', doctorName: 'Dr. Carol Miller', date: '2023-10-15', time: '09:00 AM', platform: 'Hospital Portal', status: 'Scheduled' },
  { id: 'CON002', patientName: 'New Patient', doctorName: 'Dr. Bob Davis', date: '2023-10-16', time: '11:00 AM', platform: 'Zoom', status: 'Scheduled' },
];
