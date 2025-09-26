import type { 
  Patient, 
  Staff, 
  Appointment, 
  Invoice, 
  Notification,
  Surgery,
  Prescription,
  LabResult,
  ImagingStudy,
  TimelineEvent,
  Bed,
  Ambulance,
  VirtualConsultation,
  GenomicData,
  ClinicalTrial,
  FinancialRecord,
  PublicHealthData,
  Resource,
  AuditLogEntry
} from '../types.ts';

export const mockPatients: Patient[] = [
  { id: 'P001', name: 'John Doe', age: 45, gender: 'Male', admissionDate: '2023-10-01', department: 'Cardiology', bedNumber: 'C-101', status: 'Critical', bloodType: 'O+', vitals: { heartRate: [88, 90, 92, 89, 94, 91, 93], spO2: [95, 96, 95, 97, 96, 95, 96] }, timeline: [{id: 'T01', date: '2023-10-01', title: 'Admission', description: 'Admitted for chest pain.', type: 'Admission'}] },
  { id: 'P002', name: 'Jane Smith', age: 34, gender: 'Female', admissionDate: '2023-10-02', department: 'Neurology', bedNumber: 'N-203', status: 'Stable', bloodType: 'A-', timeline: [{id: 'T02', date: '2023-10-02', title: 'Admission', description: 'Admitted for severe migraines.', type: 'Admission'}]},
  { id: 'P003', name: 'Robert Johnson', age: 62, gender: 'Male', admissionDate: '2023-09-28', department: 'Oncology', bedNumber: 'O-305', status: 'Stable', bloodType: 'B+' },
  { id: 'P004', name: 'Emily White', age: 28, gender: 'Female', admissionDate: '2023-10-03', department: 'Orthopedics', bedNumber: 'OR-112', status: 'Stable', bloodType: 'AB+' },
  { id: 'P005', name: 'Michael Brown', age: 71, gender: 'Male', admissionDate: '2023-09-25', department: 'Cardiology', bedNumber: 'C-102', status: 'Discharged', bloodType: 'A+' },
  { id: 'P006', name: 'Jessica Davis', age: 8, gender: 'Female', admissionDate: '2023-10-04', department: 'Pediatrics', bedNumber: 'P-401', status: 'Critical', bloodType: 'O-', vitals: { heartRate: [110, 112, 115, 113, 118, 116, 117], spO2: [97, 98, 97, 99, 98, 97, 98] } },
];

export const mockStaff: Staff[] = [
  { id: 'S001', name: 'Dr. Emily Carter', role: 'Doctor', department: 'Cardiology', onCall: true, phone: '555-0101', email: 'ecarter@medidash.com' },
  { id: 'S002', name: 'James Wilson', role: 'Nurse', department: 'Neurology', onCall: false, phone: '555-0102', email: 'jwilson@medidash.com' },
  { id: 'S003', name: 'Dr. Olivia Martinez', role: 'Surgeon', department: 'Orthopedics', onCall: true, phone: '555-0103', email: 'omartinez@medidash.com' },
];

export const mockAppointments: Appointment[] = [
  { id: 'APP001', patientName: 'John Doe', doctorName: 'Dr. Carter', date: '2023-10-10', time: '10:00 AM', type: 'Follow-up', status: 'Scheduled' },
  { id: 'APP002', patientName: 'Jane Smith', doctorName: 'Dr. Chen', date: '2023-10-11', time: '11:30 AM', type: 'Consultation', status: 'Scheduled' },
  { id: 'APP003', patientName: 'Robert Johnson', doctorName: 'Dr. Lee', date: '2023-10-09', time: '02:00 PM', type: 'Procedure', status: 'Completed' },
];

export const mockInvoices: Invoice[] = [
  { id: 'INV001', patientName: 'John Doe', patientId: 'P001', date: '2023-10-05', amount: 1250.75, status: 'Pending' },
  { id: 'INV002', patientName: 'Jane Smith', patientId: 'P002', date: '2023-10-05', amount: 850.00, status: 'Paid' },
  { id: 'INV003', patientName: 'Michael Brown', patientId: 'P005', date: '2023-09-30', amount: 2500.00, status: 'Overdue' },
];

export const mockNotifications: Notification[] = [
  { id: 'N001', type: 'alert', message: 'Patient P001 vitals are unstable.', timestamp: '2 mins ago', read: false },
  { id: 'N002', type: 'billing', message: 'Invoice INV003 for Michael Brown is overdue.', timestamp: '1 hour ago', read: false },
  { id: 'N003', type: 'surgery', message: 'Surgery for Emily White scheduled for tomorrow.', timestamp: '3 hours ago', read: true },
  { id: 'N004', type: 'message', message: 'New message from Dr. Wilson.', timestamp: 'Yesterday', read: true },
];

export const mockSurgeries: Surgery[] = [
  { id: 'SURG001', patientName: 'Emily White', patientId: 'P004', procedure: 'Knee Arthroscopy', surgeon: 'Dr. Olivia Martinez', date: '2023-10-12', startTime: '09:00 AM', endTime: '11:00 AM', operatingRoom: 'OR 1', status: 'Scheduled' },
];

export const mockPrescriptions: Prescription[] = [
    { id: 'RX001', patientName: 'John Doe', patientId: 'P001', medicationName: 'Lisinopril', dosage: '10mg', frequency: 'Once a day', duration: '30 days', issueDate: '2023-10-02', status: 'Active' },
];

export const mockLabResults: LabResult[] = [
    { id: 'LR001', patientId: 'P002', patientName: 'Jane Smith', testName: 'Complete Blood Count', result: 'Normal', referenceRange: 'N/A', date: '2023-10-03', status: 'Completed' },
];

export const mockImagingStudies: ImagingStudy[] = [];
export const mockBeds: Bed[] = [
    { id: 'C-101', ward: 'Cardiology', isOccupied: true, patientId: 'P001', patientName: 'John Doe' },
    { id: 'C-102', ward: 'Cardiology', isOccupied: false },
    { id: 'N-203', ward: 'Neurology', isOccupied: true, patientId: 'P002', patientName: 'Jane Smith' },
];
export const mockAmbulances: Ambulance[] = [
    { id: 'AMB-01', status: 'Available', location: 'Station A' },
    { id: 'AMB-02', status: 'En-route', location: 'Main St.', destination: 'City General' },
];

export const mockConsultations: VirtualConsultation[] = [
    { id: 'VC001', patientName: 'Sarah Adams', doctorName: 'Dr. Chen', date: '2023-10-15', time: '03:00 PM', platform: 'Internal App' },
];

export const mockGenomicData: GenomicData[] = [
    { id: 'GD001', patientName: 'John Doe', sequenceId: 'SEQ98765', summary: 'Carrier for Factor V Leiden.', markers: [{ marker: 'FVL', value: 'Heterozygous' }] }
];
export const mockClinicalTrials: ClinicalTrial[] = [
    { id: 'CT001', title: 'A Study of a New Drug for Heart Failure', sponsor: 'PharmaCorp', status: 'Recruiting', eligibility: 'Age 50+, History of CHF' }
];

export const mockFinancialRecords: FinancialRecord[] = [
    { id: 'FR001', date: '2023-10-01', description: 'Patient Services', amount: 150000, type: 'Revenue' },
    { id: 'FR002', date: '2023-10-01', description: 'Salaries', amount: 80000, type: 'Expense' },
];

export const mockPublicHealthData: PublicHealthData[] = [
    { region: 'North', disease: 'Influenza', cases: 120 },
    { region: 'South', disease: 'COVID-19', cases: 45 },
];

export const mockResources: Resource[] = [
    { id: 'RES01', name: 'MRI-01', type: 'MRI Machine', isAvailable: true },
    { id: 'RES02', name: 'VENT-05', type: 'Ventilator', isAvailable: false },
];

export const mockAuditLog: AuditLogEntry[] = [
    { id: 'AL001', timestamp: '2023-10-05 10:00 AM', user: 'admin', action: 'User Login', details: 'Successful login' },
    { id: 'AL002', timestamp: '2023-10-05 10:05 AM', user: 'Dr. Carter', action: 'Update Patient', details: 'Updated vitals for P001' },
];
