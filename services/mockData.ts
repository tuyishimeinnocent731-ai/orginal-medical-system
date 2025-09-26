// FIX: Created this file to provide mock data for the application.
import type { Patient, Staff, Appointment, Invoice, ChatContact, ChatMessage, Notification, LabResult, Surgery, Medication, Prescription, VirtualConsultation } from '../types';

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
      heartRate: [72, 75, 74, 76, 73],
      spO2: [98, 99, 98, 97, 98],
      bloodPressure: ['120/80', '122/81', '121/79', '123/82', '120/80'],
    },
    timeline: [
        { id: 'T001', date: '2023-10-12', type: 'Admission', title: 'Admitted to Cardiology', description: 'Patient admitted with chest pain.' },
        { id: 'T002', date: '2023-10-13', type: 'Procedure', title: 'Angiogram', description: 'Coronary angiogram performed, showed minor blockage.'},
        { id: 'T003', date: '2023-10-14', type: 'Medication', title: 'Started on Aspirin', description: 'Prescribed 81mg daily aspirin.'}
    ],
    medicalHistory: ['Hypertension', 'High Cholesterol'],
    currentMedications: [{id: 'M001', name: 'Aspirin', dosage: '81mg', frequency: 'Once Daily', status: 'Active'}],
    labResults: [{ id: 'L001', testName: 'Troponin I', patientName: 'John Doe', patientId: 'P001', value: '0.01 ng/mL', referenceRange: '< 0.04 ng/mL', date: '2023-10-12', status: 'Normal' }],
    imagingResults: [{ id: 'I001', type: 'X-Ray', date: '2023-10-12', imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Chest+X-Ray', notes: 'Lungs are clear.' }]
  },
  {
    id: 'P002',
    name: 'Jane Smith',
    age: 62,
    gender: 'Female',
    avatarUrl: 'https://i.pravatar.cc/150?u=P002',
    department: 'Neurology',
    lastVisit: '2023-09-20',
    status: 'Critical',
    vitals: {
      heartRate: [88, 92, 90, 95, 93],
      spO2: [95, 94, 95, 93, 94],
      bloodPressure: ['140/90', '145/92', '142/88', '148/95', '144/90'],
    },
  },
  {
    id: 'P003',
    name: 'Robert Brown',
    age: 78,
    gender: 'Male',
    avatarUrl: 'https://i.pravatar.cc/150?u=P003',
    department: 'Orthopedics',
    lastVisit: '2023-11-01',
    status: 'Stable',
  },
  {
    id: 'P004',
    name: 'Emily White',
    age: 34,
    gender: 'Female',
    avatarUrl: 'https://i.pravatar.cc/150?u=P004',
    department: 'General Medicine',
    lastVisit: '2023-10-28',
    status: 'Discharged',
  },
  {
    id: 'P005',
    name: 'Michael Green',
    age: 55,
    gender: 'Male',
    avatarUrl: 'https://i.pravatar.cc/150?u=P005',
    department: 'ICU',
    lastVisit: '2023-11-05',
    status: 'Critical',
    vitals: {
      heartRate: [110, 115, 112, 118, 114],
      spO2: [92, 91, 93, 90, 92],
      bloodPressure: ['100/60', '98/58', '102/62', '95/55', '100/60'],
    },
  },
   {
    id: 'P006',
    name: 'Olivia Martinez',
    age: 41,
    gender: 'Female',
    avatarUrl: 'https://i.pravatar.cc/150?u=P006',
    department: 'Oncology',
    lastVisit: '2023-11-02',
    status: 'Stable',
  },
  {
    id: 'P007',
    name: 'David Wilson',
    age: 68,
    gender: 'Male',
    avatarUrl: 'https://i.pravatar.cc/150?u=P007',
    department: 'Cardiology',
    lastVisit: '2023-10-30',
    status: 'Stable',
  },
  {
    id: 'P008',
    name: 'Sophia Anderson',
    age: 29,
    gender: 'Female',
    avatarUrl: 'https://i.pravatar.cc/150?u=P008',
    department: 'General Medicine',
    lastVisit: '2023-11-04',
    status: 'Stable',
  },
];

export const mockStaff: Staff[] = [
  {
    id: 'S001',
    name: 'Dr. Alice Carter',
    role: 'Cardiologist',
    department: 'Cardiology',
    avatarUrl: 'https://i.pravatar.cc/150?u=S001',
    onCall: true,
    assignedPatients: ['P001', 'P007'],
  },
  {
    id: 'S002',
    name: 'Dr. Ben Davis',
    role: 'Neurologist',
    department: 'Neurology',
    avatarUrl: 'https://i.pravatar.cc/150?u=S002',
    onCall: false,
     assignedPatients: ['P002'],
  },
  {
    id: 'S003',
    name: 'Nurse Carol White',
    role: 'Head Nurse',
    department: 'ICU',
    avatarUrl: 'https://i.pravatar.cc/150?u=S003',
    onCall: true,
  },
  {
    id: 'S004',
    name: 'Dr. Frank Miller',
    role: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    avatarUrl: 'https://i.pravatar.cc/150?u=S004',
    onCall: false,
    assignedPatients: ['P003'],
  },
];

export const mockAppointments: Appointment[] = [
  { id: 'A001', patientName: 'John Doe', doctor: 'Dr. Alice Carter', department: 'Cardiology', date: '2023-11-15', time: '10:00 AM', status: 'Scheduled' },
  { id: 'A002', patientName: 'Sarah Johnson', doctor: 'Dr. Ben Davis', department: 'Neurology', date: '2023-11-16', time: '11:30 AM', status: 'Scheduled' },
  { id: 'A003', patientName: 'Emily White', doctor: 'Dr. Primary Care', department: 'General Medicine', date: '2023-10-28', time: '09:00 AM', status: 'Completed' },
  { id: 'A004', patientName: 'Robert Brown', doctor: 'Dr. Frank Miller', department: 'Orthopedics', date: '2023-11-01', time: '02:00 PM', status: 'Completed' },
  { id: 'A005', patientName: 'Kevin Harris', doctor: 'Dr. Alice Carter', department: 'Cardiology', date: '2023-11-10', time: '01:00 PM', status: 'Cancelled' },
];

export const mockInvoices: Invoice[] = [
    { id: 'INV001', patientName: 'John Doe', patientId: 'P001', date: '2023-10-20', amount: 1250.75, status: 'Paid', items: [{description: 'Cardiology Consultation', amount: 300}, {description: 'EKG Test', amount: 150.75}, {description: 'Hospital Stay (2 nights)', amount: 800}] },
    { id: 'INV002', patientName: 'Jane Smith', patientId: 'P002', date: '2023-09-25', amount: 3400.00, status: 'Pending', items: [{description: 'Neurology Consultation', amount: 400}, {description: 'MRI Scan', amount: 3000}] },
    { id: 'INV003', patientName: 'Emily White', patientId: 'P004', date: '2023-11-01', amount: 150.00, status: 'Overdue', items: [{description: 'General Check-up', amount: 150}] },
];

export const mockChatContacts: ChatContact[] = [
    { id: 'S001', name: 'Dr. Alice Carter', avatarUrl: 'https://i.pravatar.cc/150?u=S001', lastMessage: 'Please check the latest lab results.', unreadCount: 2, online: true },
    { id: 'S002', name: 'Dr. Ben Davis', avatarUrl: 'https://i.pravatar.cc/150?u=S002', lastMessage: 'The patient is responding well to treatment.', unreadCount: 0, online: true },
    { id: 'S003', name: 'Nurse Carol White', avatarUrl: 'https://i.pravatar.cc/150?u=S003', lastMessage: 'Okay, I will.', unreadCount: 0, online: false },
];

export const mockMessages: Record<string, ChatMessage[]> = {
    'S001': [
        { id: 'm1', text: 'Hi Dr. Carter, how are the new EKG readings for John Doe?', sender: 'user', timestamp: '10:30 AM' },
        { id: 'm2', text: 'They look stable. No significant changes from yesterday.', sender: 'doctor', timestamp: '10:32 AM' },
        { id: 'm3', text: 'Please check the latest lab results.', sender: 'doctor', timestamp: '10:32 AM' },
    ],
    'S002': [
        { id: 'm4', text: 'Dr. Davis, an update on Jane Smith?', sender: 'user', timestamp: '09:15 AM' },
        { id: 'm5', text: 'The patient is responding well to treatment.', sender: 'doctor', timestamp: '09:20 AM' },
    ],
    'S003': [
         { id: 'm6', text: 'Can you prepare the discharge papers for Emily White?', sender: 'user', timestamp: 'Yesterday' },
         { id: 'm7', text: 'Okay, I will.', sender: 'doctor', timestamp: 'Yesterday' },
    ]
};

export const mockNotifications: Notification[] = [
    { id: 'N001', type: 'alert', message: 'Critical vitals alert for Jane Smith in ICU.', timestamp: '2 mins ago', read: false },
    { id: 'N002', type: 'surgery', message: 'Surgery for Robert Brown scheduled for 2:00 PM.', timestamp: '1 hour ago', read: false },
    { id: 'N003', type: 'message', message: 'New message from Dr. Alice Carter.', timestamp: '3 hours ago', read: false },
    { id: 'N004', type: 'billing', message: 'Invoice #INV003 for Emily White is now overdue.', timestamp: '1 day ago', read: true },
];

export const mockLabResults: LabResult[] = [
    { id: 'L001', testName: 'Complete Blood Count (CBC)', patientName: 'John Doe', patientId: 'P001', value: 'WBC 5.2', referenceRange: '4.0-11.0', date: '2023-11-04', status: 'Normal' },
    { id: 'L002', testName: 'Lipid Panel', patientName: 'John Doe', patientId: 'P001', value: 'LDL 130', referenceRange: '< 100', date: '2023-11-04', status: 'Abnormal' },
    { id: 'L003', testName: 'Thyroid-Stimulating Hormone (TSH)', patientName: 'Jane Smith', patientId: 'P002', value: '2.1', referenceRange: '0.4-4.0', date: '2023-11-03', status: 'Normal' },
    { id: 'L004', testName: 'Glucose, Plasma', patientName: 'Robert Brown', patientId: 'P003', value: 'Pending', referenceRange: '70-99', date: '2023-11-05', status: 'Pending' },
];

export const mockSurgeries: Surgery[] = [
    { id: 'SURG001', patientName: 'Robert Brown', patientId: 'P003', procedure: 'Knee Replacement', surgeon: 'Dr. Frank Miller', date: '2023-11-10', startTime: '09:00 AM', endTime: '11:30 AM', operatingRoom: 'OR 3', status: 'Scheduled' },
    { id: 'SURG002', patientName: 'Michael Green', patientId: 'P005', procedure: 'Emergency Appendectomy', surgeon: 'Dr. General Surgeon', date: '2023-11-05', startTime: '08:00 PM', endTime: '09:00 PM', operatingRoom: 'OR 1', status: 'In Progress' },
    { id: 'SURG003', patientName: 'Past Patient', patientId: 'P999', procedure: 'Gallbladder Removal', surgeon: 'Dr. Eva Wilson', date: '2023-10-28', startTime: '10:00 AM', endTime: '11:00 AM', operatingRoom: 'OR 2', status: 'Completed' },
    { id: 'SURG004', patientName: 'Cancelled Patient', patientId: 'P888', procedure: 'Hernia Repair', surgeon: 'Dr. Sam Jones', date: '2023-11-06', startTime: '01:00 PM', endTime: '02:30 PM', operatingRoom: 'OR 4', status: 'Cancelled' },
];

export const mockMedications: Medication[] = [
    { id: 'MED001', name: 'Lisinopril', dosage: '10mg', frequency: 'Once Daily', status: 'Active' },
    { id: 'MED002', name: 'Metformin', dosage: '500mg', frequency: 'Twice Daily', status: 'Active' },
    { id: 'MED003', name: 'Atorvastatin', dosage: '20mg', frequency: 'Once Daily', status: 'Active' },
    { id: 'MED004', name: 'Amoxicillin', dosage: '250mg', frequency: 'Three times daily', status: 'Discontinued' },
];

export const mockPrescriptions: Prescription[] = [
    { id: 'PRES001', medicationName: 'Lisinopril 10mg', dosage: '1 tablet', frequency: 'Once a day', duration: '30 days', patientName: 'John Doe', patientId: 'P001', issueDate: '2023-11-01', status: 'Active' },
    { id: 'PRES002', medicationName: 'Metformin 500mg', dosage: '1 tablet', frequency: 'Twice a day', duration: '90 days', patientName: 'Jane Smith', patientId: 'P002', issueDate: '2023-10-15', status: 'Active' },
];

export const mockVirtualConsultations: VirtualConsultation[] = [
    { id: 'VC001', patientName: 'Sarah Johnson', doctorName: 'Dr. Ben Davis', date: '2023-11-20', time: '02:00 PM', status: 'Scheduled' },
    { id: 'VC002', patientName: 'Kevin Harris', doctorName: 'Dr. Primary Care', date: '2023-11-22', time: '10:30 AM', status: 'Scheduled' },
    { id: 'VC003', patientName: 'Emily White', doctorName: 'Dr. Primary Care', date: '2023-11-02', time: '03:00 PM', status: 'Completed' },
];
