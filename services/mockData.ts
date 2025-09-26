
import type { Patient, Appointment, Invoice, Staff, Notification, Surgery, Medication, LabResult, ImagingStudy, TimelineEvent, GenomicVariant, Resource, AuditLog } from '../types.ts';

export const mockTimelineEvents: TimelineEvent[] = [
    { id: 'T001', date: '2023-10-26', type: 'Admission', title: 'Patient Admitted', description: 'Admitted to Cardiology department with chest pain.' },
    { id: 'T002', date: '2023-10-26', type: 'Diagnosis', title: 'Initial Diagnosis', description: 'Diagnosed with Unstable Angina.' },
    { id: 'T003', date: '2023-10-27', type: 'Procedure', title: 'Angiogram', description: 'Coronary angiogram performed. Revealed 80% blockage in LAD.' },
    { id: 'T004', date: '2023-10-28', type: 'Procedure', title: 'Angioplasty', description: 'Successful angioplasty with stent placement.' },
    { id: 'T005', date: '2023-10-30', type: 'Discharge', title: 'Patient Discharged', description: 'Discharged with medication and follow-up plan.' },
];

export const mockImagingStudies: ImagingStudy[] = [
    { id: 'IMG001', patientName: 'John Doe', studyType: 'Chest X-Ray', bodyPart: 'Chest', date: '2023-10-26', imageUrl: 'https://via.placeholder.com/600x600.png?text=Chest+X-Ray' },
    { id: 'IMG002', patientName: 'John Doe', studyType: 'Coronary Angiogram', bodyPart: 'Heart', date: '2023-10-27', imageUrl: 'https://via.placeholder.com/600x600.png?text=Angiogram' },
];


export const mockPatients: Patient[] = [
  { id: 'P001', name: 'John Doe', age: 45, gender: 'Male', bloodType: 'O+', admissionDate: '2023-10-26', department: 'Cardiology', bedNumber: 'C-101', status: 'Stable', diagnosis: 'Coronary Artery Disease', timeline: mockTimelineEvents, imagingStudies: mockImagingStudies },
  { id: 'P002', name: 'Jane Smith', age: 62, gender: 'Female', bloodType: 'A-', admissionDate: '2023-10-22', department: 'Neurology', bedNumber: 'N-203', status: 'Stable', diagnosis: 'Ischemic Stroke' },
  { id: 'P003', name: 'Robert Johnson', age: 71, gender: 'Male', bloodType: 'B+', admissionDate: '2023-10-15', department: 'Oncology', bedNumber: 'O-305', status: 'Critical', diagnosis: 'Lung Cancer', vitals: { heartRate: [110, 112, 115, 113], spO2: [92, 91, 93, 92], bloodPressure: [], temperature: [] } },
  { id: 'P004', name: 'Emily Williams', age: 8, gender: 'Female', bloodType: 'AB+', admissionDate: '2023-10-28', department: 'Pediatrics', bedNumber: 'P-102', status: 'Stable', diagnosis: 'Asthma Exacerbation' },
  { id: 'P005', name: 'Michael Brown', age: 55, gender: 'Male', bloodType: 'O-', admissionDate: '2023-10-20', department: 'Orthopedics', bedNumber: 'OR-401', status: 'Discharged', dischargeDate: '2023-10-29', diagnosis: 'Hip Replacement' },
  { id: 'P006', name: 'Sarah Miller', age: 80, gender: 'Female', bloodType: 'A+', admissionDate: '2023-10-25', department: 'ICU', bedNumber: 'ICU-02', status: 'Critical', diagnosis: 'Sepsis', vitals: { heartRate: [120, 125, 122, 124], spO2: [90, 88, 89, 90], bloodPressure: [], temperature: [] } },
];

export const mockAppointments: Appointment[] = [
  { id: 'APP001', patientName: 'David Garcia', doctorName: 'Dr. Emily Carter', date: '2023-11-05', time: '10:00 AM', type: 'Consultation', status: 'Scheduled' },
  { id: 'APP002', patientName: 'Linda Martinez', doctorName: 'Dr. James Lee', date: '2023-11-05', time: '11:30 AM', type: 'Follow-up', status: 'Scheduled' },
  { id: 'APP003', patientName: 'John Doe', doctorName: 'Dr. Emily Carter', date: '2023-11-03', time: '02:00 PM', type: 'Follow-up', status: 'Completed' },
  { id: 'APP004', patientName: 'Chris Rodriguez', doctorName: 'Dr. Sarah Hill', date: '2023-11-02', time: '09:00 AM', type: 'Check-up', status: 'Canceled' },
];

export const mockInvoices: Invoice[] = [
  { id: 'INV001', patientId: 'P001', patientName: 'John Doe', date: '2023-10-30', amount: 15200.00, status: 'Paid' },
  { id: 'INV002', patientId: 'P002', patientName: 'Jane Smith', date: '2023-10-28', amount: 8500.50, status: 'Pending' },
  { id: 'INV003', patientId: 'P005', patientName: 'Michael Brown', date: '2023-09-15', amount: 25000.00, status: 'Overdue' },
];

export const mockStaff: Staff[] = [
  { id: 'S001', name: 'Dr. Emily Carter', role: 'Doctor', department: 'Cardiology', onCall: true, phone: '555-1234', email: 'ecarter@medidash.com' },
  { id: 'S002', name: 'James Lee', role: 'Nurse', department: 'Neurology', onCall: false, phone: '555-5678', email: 'jlee@medidash.com' },
  { id: 'S003', name: 'Dr. Alan Grant', role: 'Surgeon', department: 'Orthopedics', onCall: true, phone: '555-9012', email: 'agrant@medidash.com' },
];

export const mockNotifications: Notification[] = [
  { id: 'N001', type: 'alert', message: 'Patient Robert Johnson (O-305) heart rate is critical.', timestamp: '2 mins ago', read: false },
  { id: 'N002', type: 'message', message: 'New message from Dr. Carter regarding patient John Doe.', timestamp: '15 mins ago', read: false },
  { id: 'N003', type: 'surgery', message: 'Surgery for P007 scheduled in OR 2 at 3:00 PM.', timestamp: '1 hour ago', read: true },
  { id: 'N004', type: 'billing', message: 'Invoice #INV003 for Michael Brown is now overdue.', timestamp: '3 hours ago', read: true },
];

export const mockSurgeries: Surgery[] = [
    { id: 'SURG001', patientName: 'Mark Wilson', patientId: 'P010', procedure: 'Knee Arthroscopy', surgeon: 'Dr. Alan Grant', date: '2023-11-06', startTime: '09:00 AM', endTime: '11:00 AM', operatingRoom: 'OR 1', status: 'Scheduled' },
    { id: 'SURG002', patientName: 'Jessica Taylor', patientId: 'P011', procedure: 'Appendectomy', surgeon: 'Dr. Maria Chen', date: '2023-11-06', startTime: '12:00 PM', endTime: '01:00 PM', operatingRoom: 'OR 3', status: 'Scheduled' },
];

export const mockMedications: Medication[] = [
    { id: 'MED001', name: 'Aspirin', dosage: '81mg', frequency: 'Once daily', stock: 1200 },
    { id: 'MED002', name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', stock: 850 },
    { id: 'MED003', name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', stock: 450 },
    { id: 'MED004', name: 'Amoxicillin', dosage: '250mg', frequency: 'Three times daily', stock: 80 },
];

export const mockLabResults: LabResult[] = [
    { id: 'LR001', patientId: 'P001', patientName: 'John Doe', testName: 'Troponin T', result: '<0.01 ng/mL', referenceRange: '<0.04 ng/mL', date: '2023-10-26', status: 'Completed' },
    { id: 'LR002', patientId: 'P003', patientName: 'Robert Johnson', testName: 'Complete Blood Count', result: 'WBC 15.2', referenceRange: '4.5-11.0', date: '2023-10-29', status: 'Completed' },
    { id: 'LR003', patientId: 'P002', patientName: 'Jane Smith', testName: 'Lipid Panel', result: 'Pending', referenceRange: '', date: '2023-10-30', status: 'Pending' },
];

export const mockGenomicVariants: GenomicVariant[] = [
    { id: 'GV001', gene: 'BRCA1', variant: 'c.5266dupC', implication: 'Increased risk of breast and ovarian cancer.', classification: 'Pathogenic' },
    { id: 'GV002', gene: 'APOE', variant: 'e4/e4', implication: 'Increased risk for Alzheimer\'s disease.', classification: 'Likely Pathogenic' },
    { id: 'GV003', gene: 'CYP2C19', variant: '*2', implication: 'Poor metabolizer of Clopidogrel.', classification: 'Pathogenic' },
];

export const mockResources: Resource[] = [
    { id: 'RES001', name: 'MRI Unit 1', type: 'MRI Machine', isAvailable: true },
    { id: 'RES002', name: 'Ventilator A-5', type: 'Ventilator', isAvailable: false },
    { id: 'RES003', name: 'X-Ray Room 3', type: 'X-Ray', isAvailable: true },
    { id: 'RES004', name: 'Ultrasound Cart 2', type: 'Ultrasound', isAvailable: false },
];

export const mockAuditLog: AuditLog[] = [
    { id: 'AUD001', timestamp: '2023-10-30 10:05:14', user: 'Dr. Carter', action: 'View Patient Record', details: 'Viewed record for John Doe (P001)' },
    { id: 'AUD002', timestamp: '2023-10-30 10:04:30', user: 'Nurse Lee', action: 'Update Vitals', details: 'Updated vitals for Robert Johnson (P003)' },
    { id: 'AUD003', timestamp: '2023-10-30 09:55:02', user: 'Admin User', action: 'User Login', details: 'Admin User logged in successfully' },
];
