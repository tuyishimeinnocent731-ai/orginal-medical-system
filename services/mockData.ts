// FIX: Created this file to provide mock data for the application.
import type { Patient, Staff, Appointment, Surgery, Invoice, Notification, LabResult, Prescription, ImagingStudy, Consultation, GenomicData, ClinicalTrial, FinancialRecord, PublicHealthData, Ambulance, AuditLogEntry, Resource } from '../types.ts';

export const mockPatients: Patient[] = [
  { id: 'P001', name: 'John Doe', age: 45, gender: 'Male', admissionDate: '2023-10-01', department: 'Cardiology', bedNumber: 'C-101', status: 'Critical', bloodType: 'O+', vitals: { heartRate: [110, 112, 115], spO2: [92, 93, 91] }, timeline: [{id: 'T1', date: '2023-10-01', type: 'Admission', title: 'Admitted', description: 'Admitted for chest pain.' }] },
  { id: 'P002', name: 'Jane Smith', age: 34, gender: 'Female', admissionDate: '2023-10-02', department: 'Neurology', bedNumber: 'N-203', status: 'Stable', bloodType: 'A-', vitals: { heartRate: [72, 75, 74], spO2: [98, 99, 98] }, timeline: [{id: 'T2', date: '2023-10-02', type: 'Admission', title: 'Admitted', description: 'Admitted for severe migraine.' }] },
  { id: 'P003', name: 'Peter Jones', age: 62, gender: 'Male', admissionDate: '2023-09-28', department: 'Oncology', bedNumber: 'O-305', status: 'Stable', bloodType: 'B+', timeline: [] },
  { id: 'P004', name: 'Mary Johnson', age: 28, gender: 'Female', admissionDate: '2023-10-03', department: 'Orthopedics', bedNumber: 'OR-112', status: 'Stable', bloodType: 'AB+' },
  { id: 'P005', name: 'David Williams', age: 71, gender: 'Male', admissionDate: '2023-09-25', department: 'Cardiology', bedNumber: 'C-102', status: 'Discharged', bloodType: 'O-' },
  { id: 'P006', name: 'Emily Brown', age: 8, gender: 'Female', admissionDate: '2023-10-04', department: 'Pediatrics', bedNumber: 'P-101', status: 'Stable', bloodType: 'A+' },
  { id: 'P007', name: 'Michael Miller', age: 55, gender: 'Male', admissionDate: '2023-10-01', department: 'ICU', bedNumber: 'ICU-02', status: 'Critical', bloodType: 'B-', vitals: { heartRate: [120, 125, 122], spO2: [90, 89, 91] } },
];

export const mockStaff: Staff[] = [
  { id: 'S001', name: 'Dr. Alice Roberts', role: 'Surgeon', department: 'Cardiology', onCall: true, phone: '555-1234', email: 'aroberts@hospital.com' },
  { id: 'S002', name: 'Dr. Bob White', role: 'Doctor', department: 'Neurology', onCall: false, phone: '555-5678', email: 'bwhite@hospital.com' },
  { id: 'S003', name: 'Nurse Carol Green', role: 'Nurse', department: 'ICU', onCall: true, phone: '555-8765', email: 'cgreen@hospital.com' },
  { id: 'S004', name: 'Admin Tom Davis', role: 'Admin', department: 'Administration', onCall: false, phone: '555-4321', email: 'tdavis@hospital.com' },
];

export const mockAppointments: Appointment[] = [
  { id: 'A001', patientName: 'Robert Brown', doctorName: 'Dr. Alice Roberts', date: '2023-10-15', time: '10:00 AM', type: 'Follow-up', status: 'Scheduled' },
  { id: 'A002', patientName: 'Linda Wilson', doctorName: 'Dr. Bob White', date: '2023-10-15', time: '11:30 AM', type: 'Consultation', status: 'Scheduled' },
  { id: 'A003', patientName: 'James Taylor', doctorName: 'Dr. Bob White', date: '2023-10-14', time: '02:00 PM', type: 'Check-up', status: 'Completed' },
];

export const mockInvoices: Invoice[] = [
    { id: 'INV001', patientName: 'John Doe', patientId: 'P001', date: '2023-10-05', amount: 1250.75, status: 'Pending' },
    { id: 'INV002', patientName: 'David Williams', patientId: 'P005', date: '2023-10-01', amount: 850.00, status: 'Paid' },
    { id: 'INV003', patientName: 'Peter Jones', patientId: 'P003', date: '2023-09-30', amount: 3200.50, status: 'Overdue' },
];

export const mockNotifications: Notification[] = [
    { id: 'N1', type: 'alert', message: 'Critical vitals for John Doe in C-101.', timestamp: '2 mins ago', read: false },
    { id: 'N2', type: 'surgery', message: 'Surgery for Jane Smith scheduled for 3 PM.', timestamp: '1 hour ago', read: false },
    { id: 'N3', type: 'message', message: 'New message from Dr. White.', timestamp: '3 hours ago', read: true },
    { id: 'N4', type: 'billing', message: 'Invoice INV003 for Peter Jones is overdue.', timestamp: '1 day ago', read: true },
];

export const mockSurgeries: Surgery[] = [
  { id: 'SURG001', patientName: 'Jane Smith', patientId: 'P002', procedure: 'Craniotomy', surgeon: 'Dr. Evelyn Reed', date: '2023-10-16', startTime: '09:00', endTime: '13:00', operatingRoom: 'OR 1', status: 'Scheduled' },
  { id: 'SURG002', patientName: 'Mary Johnson', patientId: 'P004', procedure: 'Knee Replacement', surgeon: 'Dr. Leo Grant', date: '2023-10-15', startTime: '14:00', endTime: '16:30', operatingRoom: 'OR 3', status: 'Scheduled' },
];

export const mockPrescriptions: Prescription[] = [
    { id: 'RX001', patientName: 'John Doe', patientId: 'P001', medicationName: 'Lisinopril', dosage: '10mg', frequency: 'Once a day', duration: '30 days', issueDate: '2023-10-02', status: 'Active'},
    { id: 'RX002', patientName: 'Jane Smith', patientId: 'P002', medicationName: 'Sumatriptan', dosage: '50mg', frequency: 'As needed', duration: 'N/A', issueDate: '2023-10-03', status: 'Active'},
];

export const mockLabResults: LabResult[] = [
    { id: 'LR001', patientId: 'P001', patientName: 'John Doe', testName: 'Troponin T', result: '0.8 ng/mL', referenceRange: '< 0.1 ng/mL', date: '2023-10-01', status: 'Completed'},
    { id: 'LR002', patientId: 'P003', patientName: 'Peter Jones', testName: 'CBC', result: 'Pending', referenceRange: 'N/A', date: '2023-10-05', status: 'Pending'},
];

export const mockConsultations: Consultation[] = [
    { id: 'C001', patientName: 'Richard Hall', doctorName: 'Dr. Davis', date: '2023-10-18', time: '02:00 PM', platform: 'TeleHealth App' },
    { id: 'C002', patientName: 'Susan Clark', doctorName: 'Dr. Roberts', date: '2023-10-19', time: '10:00 AM', platform: 'Zoom' },
];

export const mockGenomicData: GenomicData[] = [
    { id: 'G001', patientName: 'Peter Jones', sequenceId: 'SEQ9982-A', summary: 'Patient has a known variant in the BRCA2 gene, suggesting an increased risk for certain cancers.', markers: [ { marker: 'BRCA2', value: 'Positive' }, { marker: 'TP53', value: 'Negative' } ]}
];

export const mockClinicalTrials: ClinicalTrial[] = [
    { id: 'CT001', title: 'A Study of a New Drug for Heart Failure', sponsor: 'PharmaCo', status: 'Recruiting', eligibility: 'Age 50+, diagnosed with congestive heart failure.'}
];

export const mockFinancialRecords: FinancialRecord[] = [
    { id: 'FR001', date: '2023-09-01', description: 'Insurance Payment Batch', amount: 150000, type: 'Revenue' },
    { id: 'FR002', date: '2023-09-05', description: 'Surgical Supplies', amount: 35000, type: 'Expense' },
];

export const mockPublicHealthData: PublicHealthData[] = [
    { region: 'North County', disease: 'Influenza', cases: 124 },
    { region: 'South County', disease: 'Influenza', cases: 88 },
];

export const mockAmbulances: Ambulance[] = [
    { id: 'AMB-01', status: 'Available', location: 'Station 1' },
    { id: 'AMB-02', status: 'En-route', location: 'Hwy 101', destination: '123 Oak St' },
    { id: 'AMB-03', status: 'Returning', location: 'Main St' },
];

export const mockAuditLog: AuditLogEntry[] = [
  { id: 'LOG001', timestamp: '2023-10-15 10:05:12', user: 'Dr. Alice Roberts', action: 'View Patient Record', details: 'Viewed record for P001' },
  { id: 'LOG002', timestamp: '2023-10-15 10:04:30', user: 'Nurse Carol Green', action: 'Update Vitals', details: 'Updated vitals for P007' },
];

export const mockResources: Resource[] = [
    { id: 'RES01', name: 'MRI Scanner 1', type: 'Equipment', isAvailable: true },
    { id: 'RES02', name: 'Operating Room 3', type: 'Room', isAvailable: false },
];
