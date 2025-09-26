// FIX: Created a comprehensive mock data file to simulate a backend, providing realistic data for patients, staff, appointments, and other entities.
import type { Patient, Staff, Appointment, Invoice, Notification, ChatContact, ChatMessage, Surgery, Prescription, LabResult, ImagingStudy, VirtualConsultation, GenomicVariant } from '../types';

export const mockPatients: Patient[] = [
  {
    id: 'P001',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    avatarUrl: 'https://i.pravatar.cc/150?u=P001',
    department: 'Cardiology',
    lastVisit: '2023-10-15',
    status: 'Stable',
    vitals: {
      heartRate: [72, 75, 73, 76, 74],
      spO2: [98, 99, 97, 98, 99],
      bloodPressure: ['120/80', '122/81', '121/79', '123/80', '120/80'],
    },
    timeline: [
        { id: 'T001', date: '2023-10-15', title: 'Admitted', description: 'Admitted for chest pain.', type: 'Admission' },
        { id: 'T002', date: '2023-10-16', title: 'Angiogram', description: 'Coronary angiogram performed.', type: 'Procedure' },
        { id: 'T003', date: '2023-10-17', title: 'Medication Update', description: 'Started on beta-blockers.', type: 'Medication' },
    ],
    imagingStudies: [
      { id: 'IMG001', patientId: 'P001', patientName: 'John Doe', studyType: 'X-Ray', bodyPart: 'Chest', date: '2023-10-15', imageUrl: '/images/xray.jpg', thumbnailUrl: '/images/xray-thumb.jpg' },
      { id: 'IMG002', patientId: 'P001', patientName: 'John Doe', studyType: 'CT Scan', bodyPart: 'Head', date: '2023-10-16', imageUrl: '/images/ct.jpg', thumbnailUrl: '/images/ct-thumb.jpg' },
    ],
    hasGenomicData: true,
  },
  {
    id: 'P002',
    name: 'Jane Smith',
    age: 32,
    gender: 'Female',
    avatarUrl: 'https://i.pravatar.cc/150?u=P002',
    department: 'Neurology',
    lastVisit: '2023-11-01',
    status: 'Critical',
    vitals: {
      heartRate: [110, 112, 109, 115, 113],
      spO2: [92, 93, 91, 92, 94],
      bloodPressure: ['140/90', '142/91', '139/89', '145/92', '141/90'],
    },
  },
  {
    id: 'P003',
    name: 'Robert Johnson',
    age: 68,
    gender: 'Male',
    avatarUrl: 'https://i.pravatar.cc/150?u=P003',
    department: 'Orthopedics',
    lastVisit: '2023-09-20',
    status: 'Stable',
  },
  {
    id: 'P004',
    name: 'Emily Williams',
    age: 25,
    gender: 'Female',
    avatarUrl: 'https://i.pravatar.cc/150?u=P004',
    department: 'General Medicine',
    lastVisit: '2023-11-05',
    status: 'Discharged',
  },
  {
    id: 'P005',
    name: 'Michael Brown',
    age: 55,
    gender: 'Male',
    avatarUrl: 'https://i.pravatar.cc/150?u=P005',
    department: 'Oncology',
    lastVisit: '2023-11-10',
    status: 'Stable',
  },
  {
    id: 'P006',
    name: 'Jessica Davis',
    age: 71,
    gender: 'Female',
    avatarUrl: 'https://i.pravatar.cc/150?u=P006',
    department: 'ICU',
    lastVisit: '2023-11-12',
    status: 'Critical',
    vitals: {
      heartRate: [120, 125, 122, 128, 124],
      spO2: [90, 89, 91, 88, 90],
      bloodPressure: ['90/60', '92/61', '88/59', '95/62', '91/60'],
    },
  },
  {
    id: 'P007',
    name: 'Chris Miller',
    age: 42,
    gender: 'Male',
    avatarUrl: 'https://i.pravatar.cc/150?u=P007',
    department: 'Cardiology',
    lastVisit: '2023-11-11',
    status: 'Stable',
  },
  {
    id: 'P008',
    name: 'Patricia Wilson',
    age: 58,
    gender: 'Female',
    avatarUrl: 'https://i.pravatar.cc/150?u=P008',
    department: 'Oncology',
    lastVisit: '2023-11-09',
    status: 'Stable',
  }
];

export const mockStaff: Staff[] = [
  { id: 'S001', name: 'Dr. Alice Carter', role: 'Cardiologist', department: 'Cardiology', avatarUrl: 'https://i.pravatar.cc/150?u=S001', onCall: true, assignedPatients: ['P001', 'P007'] },
  { id: 'S002', name: 'Dr. Ben Davis', role: 'Neurologist', department: 'Neurology', avatarUrl: 'https://i.pravatar.cc/150?u=S002', onCall: false, assignedPatients: ['P002'] },
  { id: 'S003', name: 'Nurse Carol White', role: 'Head Nurse', department: 'ICU', avatarUrl: 'https://i.pravatar.cc/150?u=S003', onCall: true, assignedPatients: ['P006'] },
  { id: 'S004', name: 'Dr. David Evans', role: 'Orthopedic Surgeon', department: 'Orthopedics', avatarUrl: 'https://i.pravatar.cc/150?u=S004', onCall: false, assignedPatients: ['P003'] },
  { id: 'S005', name: 'Dr. Frank Green', role: 'Oncologist', department: 'Oncology', avatarUrl: 'https://i.pravatar.cc/150?u=S005', onCall: true, assignedPatients: ['P005', 'P008'] },
  { id: 'S006', name: 'Nurse Grace Hall', role: 'Registered Nurse', department: 'General Medicine', avatarUrl: 'https://i.pravatar.cc/150?u=S006', onCall: false },
];

export const mockAppointments: Appointment[] = [
  { id: 'A001', patientName: 'John Doe', doctor: 'Dr. Alice Carter', department: 'Cardiology', date: '2023-11-20', time: '10:00 AM', status: 'Scheduled' },
  { id: 'A002', patientName: 'Emily Williams', doctor: 'Dr. Frank Green', department: 'General Medicine', date: '2023-11-05', time: '02:30 PM', status: 'Completed' },
  { id: 'A003', patientName: 'Robert Johnson', doctor: 'Dr. David Evans', department: 'Orthopedics', date: '2023-11-22', time: '11:00 AM', status: 'Scheduled' },
  { id: 'A004', patientName: 'Michael Brown', doctor: 'Dr. Frank Green', department: 'Oncology', date: '2023-11-15', time: '09:00 AM', status: 'Cancelled' },
];

export const mockInvoices: Invoice[] = [
  { id: 'INV001', patientName: 'John Doe', patientId: 'P001', date: '2023-10-20', amount: 1250.75, status: 'Paid' },
  { id: 'INV002', patientName: 'Jane Smith', patientId: 'P002', date: '2023-11-05', amount: 3400.00, status: 'Pending' },
  { id: 'INV003', patientName: 'Robert Johnson', patientId: 'P003', date: '2023-09-25', amount: 850.00, status: 'Overdue' },
  { id: 'INV004', patientName: 'Michael Brown', patientId: 'P005', date: '2023-11-12', amount: 5500.50, status: 'Pending' },
];

export const mockNotifications: Notification[] = [
    { id: 'N001', message: 'New message from Dr. Alice Carter regarding John Doe.', type: 'message', timestamp: '5m ago', read: false },
    { id: 'N002', message: 'Patient P002 vitals are critical.', type: 'alert', timestamp: '1h ago', read: false },
    { id: 'N003', message: 'Invoice #INV003 is overdue.', type: 'billing', timestamp: '2d ago', read: true },
    { id: 'N004', message: 'Surgery for Robert Johnson scheduled for tomorrow.', type: 'surgery', timestamp: '1d ago', read: false },
];

export const mockChatContacts: ChatContact[] = [
    { id: 'S001', name: 'Dr. Alice Carter', avatarUrl: 'https://i.pravatar.cc/150?u=S001', lastMessage: "Let's discuss the new test results.", unreadCount: 1 },
    { id: 'S002', name: 'Dr. Ben Davis', avatarUrl: 'https://i.pravatar.cc/150?u=S002', lastMessage: 'Okay, I will check on them.', unreadCount: 0 },
    { id: 'S003', name: 'Nurse Carol White', avatarUrl: 'https://i.pravatar.cc/150?u=S003', lastMessage: "Patient in room 3 needs assistance.", unreadCount: 0 },
];

export const mockMessages: Record<string, ChatMessage[]> = {
    'S001': [
        { id: 'm1', text: 'Hi, can we review the latest ECG for John Doe?', sender: 'user', timestamp: '10:30 AM' },
        { id: 'm2', text: "Of course. I'm looking at it now. Everything seems stable.", sender: 'doctor', timestamp: '10:32 AM' },
    ],
    'S002': [
        { id: 'm3', text: "Morning Dr. Davis. How is Jane Smith's condition?", sender: 'user', timestamp: '09:00 AM' },
        { id: 'm4', text: 'Still critical, but we are managing it. No significant changes overnight.', sender: 'doctor', timestamp: '09:05 AM' },
        { id: 'm5', text: 'Okay, I will check on them.', sender: 'user', timestamp: '09:06 AM' },
    ],
    'S003': [],
};

export const mockSurgeries: Surgery[] = [
    { id: 'SURG001', patientName: 'Robert Johnson', patientId: 'P003', procedure: 'Knee Replacement', surgeon: 'Dr. David Evans', date: '2023-11-25', startTime: '08:00', endTime: '11:00', operatingRoom: 'OR 1', status: 'Scheduled' },
    { id: 'SURG002', patientName: 'John Doe', patientId: 'P001', procedure: 'Coronary Bypass', surgeon: 'Dr. Alice Carter', date: '2023-11-10', startTime: '09:00', endTime: '14:00', operatingRoom: 'OR 2', status: 'Completed' },
    { id: 'SURG003', patientName: 'New Patient', patientId: 'PXXX', procedure: 'Appendectomy', surgeon: 'Dr. General', date: '2023-11-18', startTime: '13:00', endTime: '14:30', operatingRoom: 'OR 3', status: 'In Progress' },
];

export const mockPrescriptions: Prescription[] = [
    { id: 'RX001', patientName: 'John Doe', patientId: 'P001', medicationName: 'Lisinopril', dosage: '10mg', frequency: 'Once a day', duration: '30 days', issueDate: '2023-10-20', status: 'Active' },
    { id: 'RX002', patientName: 'Emily Williams', patientId: 'P004', medicationName: 'Amoxicillin', dosage: '500mg', frequency: 'Twice a day', duration: '7 days', issueDate: '2023-11-05', status: 'Completed' },
    { id: 'RX003', patientName: 'Michael Brown', patientId: 'P005', medicationName: 'Chemotherapy Drug A', dosage: 'IV', frequency: 'Cycle 1', duration: 'N/A', issueDate: '2023-11-11', status: 'Active' },
];

export const mockLabResults: LabResult[] = [
    { id: 'LAB001', patientName: 'John Doe', patientId: 'P001', testName: 'Complete Blood Count', result: 'Normal', referenceRange: 'N/A', date: '2023-10-16', status: 'Completed' },
    { id: 'LAB002', patientName: 'Jane Smith', patientId: 'P002', testName: 'Troponin I', result: '0.8 ng/mL', referenceRange: '< 0.4 ng/mL', date: '2023-11-12', status: 'Abnormal' },
    { id: 'LAB003', patientName: 'Michael Brown', patientId: 'P005', testName: 'Tumor Markers', result: 'Pending', referenceRange: 'N/A', date: '2023-11-13', status: 'Pending' },
];

export const mockVirtualConsultations: VirtualConsultation[] = [
  { id: 'VC001', patientName: 'Emily Williams', doctorName: 'Dr. Frank Green', date: '2023-11-28', time: '03:00 PM', status: 'Scheduled' },
  { id: 'VC002', patientName: 'John Doe', doctorName: 'Dr. Alice Carter', date: '2023-11-14', time: '11:00 AM', status: 'Completed' },
];

export const mockGenomicVariants: GenomicVariant[] = [
  { id: 'GV001', gene: 'BRCA1', variant: 'c.5266dupC', classification: 'Pathogenic', implication: 'Increased risk of breast and ovarian cancer.' },
  { id: 'GV002', gene: 'CFTR', variant: 'p.Phe508del', classification: 'Pathogenic', implication: 'Associated with cystic fibrosis.' },
  { id: 'GV003', gene: 'APOE', variant: 'ε4', classification: 'Likely Pathogenic', implication: 'Increased risk factor for Alzheimer\'s disease.' },
];
