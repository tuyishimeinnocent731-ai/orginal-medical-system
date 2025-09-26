
import type { 
    Patient, 
    Invoice, 
    Staff, 
    Notification, 
    Surgery, 
    Medication, 
    LabResult, 
    ImagingStudy, 
    TimelineEvent,
    Appointment,
    GenomicVariant,
    Resource,
    AuditLogEntry,
    Bed,
    InventoryItem,
    PayrollEntry,
    LeaveRequest,
    Asset,
    MaintenanceJob
} from '../types.ts';

export const mockTimelineEvents: TimelineEvent[] = [
    { id: 'T001', date: '2023-10-25', title: 'Admission', description: 'Patient admitted through ER with chest pains.', type: 'Admission' },
    { id: 'T002', date: '2023-10-25', title: 'Medication Administered', description: 'Administered Aspirin 325mg.', type: 'Medication' },
    { id: 'T003', date: '2023-10-26', title: 'Cardiac Catheterization', description: 'Procedure performed to check for blockages.', type: 'Procedure' },
];

export const mockImagingStudies: ImagingStudy[] = [
    { id: 'IMG001', patientName: 'John Doe', patientId: 'P001', studyType: 'Chest X-Ray', bodyPart: 'Thorax', date: '2023-10-25', imageUrl: 'https://via.placeholder.com/800x600.png?text=Chest+X-Ray' },
    { id: 'IMG002', patientName: 'John Doe', patientId: 'P001', studyType: 'MRI', bodyPart: 'Brain', date: '2023-10-27', imageUrl: 'https://via.placeholder.com/800x600.png?text=Brain+MRI' }
];

export const mockPatients: Patient[] = [
  { id: 'P001', name: 'John Doe', age: 45, gender: 'Male', admissionDate: '2023-10-25', department: 'Cardiology', bedNumber: 'C-101', status: 'Stable', bloodType: 'O+', timeline: mockTimelineEvents, imagingStudies: mockImagingStudies },
  { id: 'P002', name: 'Jane Smith', age: 62, gender: 'Female', admissionDate: '2023-10-22', department: 'Neurology', bedNumber: 'N-203', status: 'Critical', bloodType: 'A-', vitals: { heartRate: [110, 112, 115, 113, 116], spO2: [92, 93, 92, 94, 93] } },
  { id: 'P003', name: 'Robert Brown', age: 71, gender: 'Male', admissionDate: '2023-10-28', department: 'Oncology', bedNumber: 'O-305', status: 'Stable', bloodType: 'B+' },
  { id: 'P004', name: 'Emily White', age: 8, gender: 'Female', admissionDate: '2023-10-29', department: 'Pediatrics', bedNumber: 'P-102', status: 'Stable', bloodType: 'AB+' },
  { id: 'P005', name: 'Michael Green', age: 55, gender: 'Male', admissionDate: '2023-10-24', department: 'ICU', bedNumber: 'ICU-02', status: 'Critical', bloodType: 'A+', vitals: { heartRate: [90, 92, 88, 91, 89], spO2: [95, 96, 95, 95, 96] } },
  { id: 'P006', name: 'Sarah Black', age: 34, gender: 'Female', admissionDate: '2023-10-30', department: 'Cardiology', bedNumber: 'C-102', status: 'Discharged', bloodType: 'O-' },
];

export const mockInvoices: Invoice[] = [
    { id: 'INV001', patientName: 'John Doe', patientId: 'P001', date: '2023-10-28', amount: 1250.75, status: 'Paid' },
    { id: 'INV002', patientName: 'Jane Smith', patientId: 'P002', date: '2023-10-29', amount: 8430.00, status: 'Pending' },
    { id: 'INV003', patientName: 'Robert Brown', patientId: 'P003', date: '2023-09-15', amount: 4500.50, status: 'Overdue' },
];

export const mockStaff: Staff[] = [
    { id: 'S001', name: 'Dr. Alice Martin', role: 'Surgeon', department: 'Cardiology', onCall: true, phone: '555-1234', email: 'alice.martin@medidash.com' },
    { id: 'S002', name: 'Mark Evans', role: 'Nurse', department: 'Neurology', onCall: false, phone: '555-5678', email: 'mark.evans@medidash.com' },
    { id: 'S003', name: 'Dr. Susan Lee', role: 'Doctor', department: 'Pediatrics', onCall: true, phone: '555-8765', email: 'susan.lee@medidash.com' },
];

export const mockNotifications: Notification[] = [
    { id: 'N001', type: 'alert', message: 'Patient Jane Smith (P002) has critical vital signs.', timestamp: '2 mins ago', read: false },
    { id: 'N002', type: 'message', message: 'New message from Dr. Lee regarding patient Emily White.', timestamp: '15 mins ago', read: false },
    { id: 'N003', type: 'billing', message: 'Invoice INV003 is now overdue.', timestamp: '1 hour ago', read: true },
    { id: 'N004', type: 'surgery', message: 'Surgery for John Doe scheduled for 3:00 PM.', timestamp: '3 hours ago', read: true },
];

export const mockSurgeries: Surgery[] = [
    { id: 'SURG001', patientName: 'John Doe', patientId: 'P001', procedure: 'Coronary Artery Bypass', surgeon: 'Dr. Alice Martin', date: '2023-11-05', startTime: '09:00 AM', endTime: '01:00 PM', operatingRoom: 'OR 1', status: 'Scheduled' },
    { id: 'SURG002', patientName: 'Michael Green', patientId: 'P005', procedure: 'Appendectomy', surgeon: 'Dr. Crane', date: '2023-11-02', startTime: '11:00 AM', endTime: '12:30 PM', operatingRoom: 'OR 3', status: 'Completed' },
];

export const mockMedications: Medication[] = [
    { id: 'MED001', name: 'Aspirin', dosage: '81mg', frequency: 'Once Daily', stock: 1200 },
    { id: 'MED002', name: 'Lisinopril', dosage: '10mg', frequency: 'Once Daily', stock: 450 },
    { id: 'MED003', name: 'Metformin', dosage: '500mg', frequency: 'Twice Daily', stock: 80 },
    { id: 'MED004', name: 'Amoxicillin', dosage: '250mg', frequency: 'Three times daily', stock: 650 },
];

export const mockLabResults: LabResult[] = [
    { id: 'LR001', patientName: 'John Doe', patientId: 'P001', testName: 'Complete Blood Count', result: 'WBC 9.5 x 10^9/L', referenceRange: '4.5-11.0', date: '2023-10-26', status: 'Completed' },
    { id: 'LR002', patientName: 'Jane Smith', patientId: 'P002', testName: 'Troponin I', result: 'Pending', referenceRange: '<0.04 ng/mL', date: '2023-10-29', status: 'Pending' },
];

export const mockAppointments: Appointment[] = [
    { id: 'APP001', patientName: 'David Chen', doctorName: 'Dr. Susan Lee', date: '2023-11-10', time: '10:00 AM', type: 'Check-up', status: 'Scheduled' },
    { id: 'APP002', patientName: 'Maria Garcia', doctorName: 'Dr. Alice Martin', date: '2023-11-12', time: '02:30 PM', type: 'Consultation', status: 'Scheduled' },
];

export const mockGenomicVariants: GenomicVariant[] = [
    { id: 'GV001', gene: 'BRCA2', variant: 'c.5946delT', implication: 'Increased risk for breast and ovarian cancer.', classification: 'Pathogenic' },
    { id: 'GV002', gene: 'CYP2C19', variant: '*2', implication: 'Poor metabolizer of clopidogrel.', classification: 'Likely Pathogenic' },
    { id: 'GV003', gene: 'APOE', variant: 'E4', implication: 'Increased risk for Alzheimer\'s disease.', classification: 'Uncertain' },
];

export const mockResources: Resource[] = [
    { id: 'R001', name: 'MRI Unit 1', type: 'MRI Machine', isAvailable: true },
    { id: 'R002', name: 'Ventilator A-5', type: 'Ventilator', isAvailable: false },
    { id: 'R003', name: 'X-Ray Suite 2', type: 'X-Ray Room', isAvailable: true },
];

export const mockAuditLog: AuditLogEntry[] = [
  { id: 'AL001', timestamp: '2023-10-30 09:15:23', user: 'Dr. Alex Doe', action: 'View Patient Record', details: 'Patient ID: P002' },
  { id: 'AL002', timestamp: '2023-10-30 09:16:05', user: 'nurse_j.smith', action: 'Update Vitals', details: 'Patient ID: P002' },
  { id: 'AL003', timestamp: '2023-10-30 10:05:11', user: 'admin_b.jones', action: 'Create Invoice', details: 'Invoice ID: INV002' },
];

export const mockBeds: Bed[] = [
  { id: 'B001', ward: 'Cardiology', bedNumber: 'C-101', patientId: 'P001', patientName: 'John Doe', status: 'Occupied' },
  { id: 'B002', ward: 'Cardiology', bedNumber: 'C-102', patientId: null, patientName: null, status: 'Available' },
  { id: 'B003', ward: 'Cardiology', bedNumber: 'C-103', patientId: null, patientName: null, status: 'Cleaning' },
  { id: 'B004', ward: 'Neurology', bedNumber: 'N-203', patientId: 'P002', patientName: 'Jane Smith', status: 'Occupied' },
];

export const mockInventory: InventoryItem[] = [
  { id: 'INV01', name: 'Sterile Gauze', category: 'Medical Supplies', quantity: 500, location: 'Storage A' },
  { id: 'INV02', name: 'IV Drip Bags', category: 'Medical Supplies', quantity: 250, location: 'Storage B' },
  { id: 'INV03', name: 'Printer Paper', category: 'Office Supplies', quantity: 100, location: 'Admin Office' },
];

export const mockPayroll: PayrollEntry[] = [
  { id: 'PR001', employeeId: 'S001', employeeName: 'Dr. Alice Martin', period: '10/01 - 10/15', grossPay: 8000, netPay: 5500, status: 'Paid' },
  { id: 'PR002', employeeId: 'S002', employeeName: 'Mark Evans', period: '10/01 - 10/15', grossPay: 2500, netPay: 1900, status: 'Paid' },
  { id: 'PR003', employeeId: 'S003', employeeName: 'Dr. Susan Lee', period: '10/16 - 10/31', grossPay: 7500, netPay: 5200, status: 'Pending' },
];

export const mockLeaveRequests: LeaveRequest[] = [];
export const mockAssets: Asset[] = [];
export const mockMaintenance: MaintenanceJob[] = [];
