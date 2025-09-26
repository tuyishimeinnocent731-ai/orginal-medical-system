
import type { Patient, Appointment, Staff, Notification, Surgery, LabResult, Invoice, Bed, Resource, AuditLogEntry, Medication, GenomicVariant, ImagingStudy } from '../types.ts';

export const mockPatients: Patient[] = [
  { id: 'P001', name: 'John Doe', age: 45, gender: 'Male', bloodType: 'O+', admissionDate: '2023-10-01', department: 'Cardiology', bedNumber: 'C-101', status: 'Stable', timeline: [{id: 'T01', date: '2023-10-01', type: 'Admission', title: 'Admitted', description: 'Admitted for chest pain.'}], vitals: { heartRate: [72, 75, 74], spO2: [98, 99, 98] } },
  { id: 'P002', name: 'Jane Smith', age: 62, gender: 'Female', bloodType: 'A-', admissionDate: '2023-09-28', department: 'Neurology', bedNumber: 'N-203', status: 'Critical', timeline: [{id: 'T02', date: '2023-09-28', type: 'Admission', title: 'Admitted', description: 'Admitted post-stroke.'}], vitals: { heartRate: [88, 90, 92], spO2: [95, 94, 95] } },
  { id: 'P003', name: 'Robert Johnson', age: 33, gender: 'Male', bloodType: 'B+', admissionDate: '2023-10-02', department: 'Oncology', bedNumber: 'O-305', status: 'Stable', timeline: [{id: 'T03', date: '2023-10-02', type: 'Admission', title: 'Admitted', description: 'Scheduled chemotherapy.'}] },
  { id: 'P004', name: 'Emily White', age: 78, gender: 'Female', bloodType: 'AB+', admissionDate: '2023-09-30', department: 'Cardiology', bedNumber: 'C-102', status: 'Discharged' },
];

export const mockAppointments: Appointment[] = [
  { id: 'APP001', patientName: 'Michael Brown', doctorName: 'Dr. Davis', date: '2023-10-15', time: '10:00 AM', type: 'Consultation', status: 'Scheduled' },
  { id: 'APP002', patientName: 'Sarah Wilson', doctorName: 'Dr. Miller', date: '2023-10-12', time: '02:30 PM', type: 'Follow-up', status: 'Completed' },
  { id: 'APP003', patientName: 'David Lee', doctorName: 'Dr. Garcia', date: '2023-10-11', time: '11:00 AM', type: 'Check-up', status: 'Canceled' },
];

export const mockStaff: Staff[] = [
  { id: 'S001', name: 'Dr. Emily Carter', role: 'Doctor', department: 'Cardiology', onCall: true, phone: '555-1234', email: 'ecarter@med.com' },
  { id: 'S002', name: 'Mark Evans', role: 'Nurse', department: 'Neurology', onCall: false, phone: '555-5678', email: 'mevans@med.com' },
  { id: 'S003', name: 'Dr. Alan Grant', role: 'Surgeon', department: 'Oncology', onCall: true, phone: '555-8765', email: 'agrant@med.com' },
];

export const mockNotifications: Notification[] = [
  { id: 'N01', type: 'alert', message: 'Patient John Doe (P001) has critical lab results.', timestamp: '2 mins ago', read: false },
  { id: 'N02', type: 'message', message: 'New message from Dr. Smith regarding patient P002.', timestamp: '15 mins ago', read: false },
  { id: 'N03', type: 'surgery', message: 'Surgery for P003 is scheduled for 3:00 PM.', timestamp: '1 hour ago', read: true },
  { id: 'N04', type: 'billing', message: 'Invoice #INV004 for P004 is overdue.', timestamp: '3 hours ago', read: true },
];

export const mockSurgeries: Surgery[] = [
    { id: 'SURG001', patientName: 'Liam Neeson', patientId: 'P005', procedure: 'Appendectomy', surgeon: 'Dr. Alan Grant', date: '2023-10-20', startTime: '09:00', endTime: '10:30', operatingRoom: 'OR 1', status: 'Scheduled' }
];

export const mockLabResults: LabResult[] = [
    { id: 'LR001', patientId: 'P001', patientName: 'John Doe', testName: 'Troponin T', result: '0.03 ng/mL', referenceRange: '< 0.01 ng/mL', date: '2023-10-05', status: 'Completed'}
];

export const mockInvoices: Invoice[] = [
    { id: 'INV001', patientId: 'P001', patientName: 'John Doe', date: '2023-10-05', amount: 1250.00, status: 'Paid' },
    { id: 'INV002', patientId: 'P002', patientName: 'Jane Smith', date: '2023-10-02', amount: 3400.50, status: 'Pending' },
    { id: 'INV003', patientId: 'P004', patientName: 'Emily White', date: '2023-09-25', amount: 850.75, status: 'Overdue' },
];

export const mockBeds: Bed[] = [
    { id: 'C-101', ward: 'Cardiology', isOccupied: true, patientName: 'John Doe' },
    { id: 'C-102', ward: 'Cardiology', isOccupied: false },
    { id: 'N-203', ward: 'Neurology', isOccupied: true, patientName: 'Jane Smith' },
    { id: 'O-305', ward: 'Oncology', isOccupied: true, patientName: 'Robert Johnson' },
];

export const mockResources: Resource[] = [
    { id: 'RES01', name: 'MRI-01', type: 'MRI Machine', isAvailable: true },
    { id: 'RES02', name: 'VENT-05', type: 'Ventilator', isAvailable: false },
    { id: 'RES03', name: 'XRAY-02', type: 'X-Ray', isAvailable: true },
];

export const mockAuditLog: AuditLogEntry[] = [
    { id: 'LOG01', timestamp: '2023-10-05 10:05 AM', user: 'Dr. Carter', action: 'View Patient', details: 'Viewed patient P001' },
    { id: 'LOG02', timestamp: '2023-10-05 10:02 AM', user: 'Admin', action: 'Login', details: 'Successful login' },
];

export const mockMedications: Medication[] = [
    { id: 'MED01', name: 'Aspirin', dosage: '81mg', frequency: 'Once a day', stock: 1500 },
    { id: 'MED02', name: 'Lisinopril', dosage: '10mg', frequency: 'Once a day', stock: 800 },
    { id: 'MED03', name: 'Metformin', dosage: '500mg', frequency: 'Twice a day', stock: 1200 },
];

export const mockGenomicVariants: GenomicVariant[] = [
    { id: 'GV01', gene: 'BRCA1', variant: 'c.5266dupC', implication: 'Increased risk of breast and ovarian cancer', classification: 'Pathogenic'},
];

export const mockImagingStudies: ImagingStudy[] = [
    { id: 'IMG01', patientName: 'John Doe', studyType: 'Chest X-Ray', bodyPart: 'Thorax', date: '2023-10-01', imageUrl: 'https://via.placeholder.com/800x600.png?text=Chest+X-Ray' },
    { id: 'IMG02', patientName: 'Jane Smith', studyType: 'Brain MRI', bodyPart: 'Head', date: '2023-09-29', imageUrl: 'https://via.placeholder.com/800x600.png?text=Brain+MRI' },
];
