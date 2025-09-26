// FIX: Created this file to provide mock data for the application.
import type { Patient, Staff, Appointment, Invoice, Notification, ChatContact, ChatMessage, Surgery, Medication, LabResult, TimelineEvent, Imaging } from '../types';

export const mockPatients: Patient[] = [
  { id: 'PT001', name: 'John Doe', age: 45, gender: 'Male', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg', department: 'Cardiology', lastVisit: '2024-05-10', status: 'Stable', vitals: { heartRate: [72, 75, 73], spO2: [98, 99, 98] }, medicalHistory: ['Hypertension'], currentMedications: [{id: 'MED01', name: 'Lisinopril', dosage: '10mg', frequency: 'Once a day', status: 'Active', patientId: 'PT001', patientName: 'John Doe'}], labResults: [{id: 'LAB01', testName: 'Cholesterol', value: '210 mg/dL', referenceRange: '<200 mg/dL', date: '2024-05-01', status: 'Abnormal', patientId: 'PT001', patientName: 'John Doe'}], timeline: [{id: 'TL01', date: '2024-05-10', title: 'Check-up', description: 'Routine cardiology follow-up.', type: 'Observation'}], imaging: [{id: 'IMG01', type: 'X-Ray', date: '2024-05-10', imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Chest+X-Ray', notes: 'No abnormalities found.'}] },
  { id: 'PT002', name: 'Jane Smith', age: 62, gender: 'Female', avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg', department: 'Neurology', lastVisit: '2024-05-12', status: 'Critical', vitals: { heartRate: [110, 112, 115], spO2: [92, 91, 93] } },
  { id: 'PT003', name: 'Robert Johnson', age: 33, gender: 'Male', avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg', department: 'Orthopedics', lastVisit: '2024-04-28', status: 'Stable' },
  { id: 'PT004', name: 'Emily Davis', age: 71, gender: 'Female', avatarUrl: 'https://randomuser.me/api/portraits/women/4.jpg', department: 'Oncology', lastVisit: '2024-05-15', status: 'Stable' },
  { id: 'PT005', name: 'Michael Brown', age: 55, gender: 'Male', avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg', department: 'General Medicine', lastVisit: '2024-05-09', status: 'Discharged' },
  { id: 'PT006', name: 'Sarah Wilson', age: 48, gender: 'Female', avatarUrl: 'https://randomuser.me/api/portraits/women/6.jpg', department: 'ICU', lastVisit: '2024-05-18', status: 'Critical', vitals: { heartRate: [120, 118, 122], spO2: [90, 91, 90] } },
  { id: 'PT007', name: 'David Martinez', age: 29, gender: 'Male', avatarUrl: 'https://randomuser.me/api/portraits/men/7.jpg', department: 'General Medicine', lastVisit: '2024-05-14', status: 'Stable' },
  { id: 'PT008', name: 'Linda Garcia', age: 68, gender: 'Female', avatarUrl: 'https://randomuser.me/api/portraits/women/8.jpg', department: 'Cardiology', lastVisit: '2024-05-11', status: 'Stable' },
];

export const mockStaff: Staff[] = [
  { id: 'ST001', name: 'Dr. Alice Grey', role: 'Cardiologist', department: 'Cardiology', avatarUrl: 'https://randomuser.me/api/portraits/women/10.jpg', onCall: true, assignedPatients: ['PT001', 'PT008'] },
  { id: 'ST002', name: 'Dr. Bob Vance', role: 'Neurologist', department: 'Neurology', avatarUrl: 'https://randomuser.me/api/portraits/men/11.jpg', onCall: false, assignedPatients: ['PT002'] },
  { id: 'ST003', name: 'Nurse Carol Danvers', role: 'Head Nurse', department: 'ICU', avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg', onCall: true, assignedPatients: ['PT006'] },
  { id: 'ST004', name: 'Dr. David Chen', role: 'Orthopedic Surgeon', department: 'Orthopedics', avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg', onCall: false },
  { id: 'ST005', name: 'Dr. Eve Adams', role: 'Oncologist', department: 'Oncology', avatarUrl: 'https://randomuser.me/api/portraits/women/14.jpg', onCall: true },
  { id: 'ST006', name: 'Frank Castle', role: 'Administrator', department: 'Administration', avatarUrl: 'https://randomuser.me/api/portraits/men/15.jpg', onCall: false },
];

export const mockAppointments: Appointment[] = [
  { id: 'APP001', patientName: 'John Doe', doctor: 'Dr. Alice Grey', department: 'Cardiology', date: '2024-05-20', time: '10:00 AM', status: 'Scheduled' },
  { id: 'APP002', patientName: 'Emily Davis', doctor: 'Dr. Eve Adams', department: 'Oncology', date: '2024-05-21', time: '11:30 AM', status: 'Scheduled' },
  { id: 'APP003', patientName: 'Michael Brown', doctor: 'Dr. Frank Moore', department: 'General Medicine', date: '2024-05-15', time: '02:00 PM', status: 'Completed' },
  { id: 'APP004', patientName: 'Robert Johnson', doctor: 'Dr. David Chen', department: 'Orthopedics', date: '2024-05-18', time: '09:00 AM', status: 'Cancelled' },
];

export const mockInvoices: Invoice[] = [
    { id: 'INV001', patientName: 'John Doe', service: 'Cardiology Consultation', date: '2024-05-10', amount: 250, status: 'Paid' },
    { id: 'INV002', patientName: 'Jane Smith', service: 'Neurology MRI Scan', date: '2024-05-12', amount: 1200, status: 'Unpaid' },
    { id: 'INV003', patientName: 'Robert Johnson', service: 'Orthopedics Follow-up', date: '2024-04-28', amount: 150, status: 'Paid' },
    { id: 'INV004', patientName: 'Emily Davis', service: 'Chemotherapy Session', date: '2024-05-15', amount: 3500, status: 'Overdue' },
];

export const mockNotifications: Notification[] = [
    { id: 'N01', type: 'alert', message: 'Critical vitals for Jane Smith in Neurology.', timestamp: '2 mins ago', read: false },
    { id: 'N02', type: 'surgery', message: 'Surgery for PT009 scheduled for 3 PM.', timestamp: '15 mins ago', read: false },
    { id: 'N03', type: 'message', message: 'New message from Dr. Alice Grey.', timestamp: '1 hour ago', read: true },
    { id: 'N04', type: 'billing', message: 'Invoice INV004 for Emily Davis is now overdue.', timestamp: '3 hours ago', read: false },
];

export const mockChatContacts: ChatContact[] = [
    { id: 'ST001', name: 'Dr. Alice Grey', avatarUrl: 'https://randomuser.me/api/portraits/women/10.jpg', lastMessage: 'Please review the latest ECG results.', unreadCount: 1 },
    { id: 'ST002', name: 'Dr. Bob Vance', avatarUrl: 'https://randomuser.me/api/portraits/men/11.jpg', lastMessage: 'Okay, I will check on the patient.', unreadCount: 0 },
    { id: 'ST003', name: 'Nurse Carol Danvers', avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg', lastMessage: 'The patient in room 302 needs attention.', unreadCount: 2 },
];

export const mockMessages: Record<string, ChatMessage[]> = {
    'ST001': [
        { id: 'm1', text: 'Hi Dr. Grey, can you check on John Doe?', sender: 'user', timestamp: '10:30 AM' },
        { id: 'm2', text: 'Of course. I am on my way.', sender: 'doctor', timestamp: '10:31 AM' },
    ],
    'ST002': [
        { id: 'm3', text: 'What is the status of Jane Smith?', sender: 'user', timestamp: '11:00 AM' },
        { id: 'm4', text: 'Her condition is critical but stable for now. I am monitoring her closely.', sender: 'doctor', timestamp: '11:02 AM' },
        { id: 'm5', text: 'Okay, I will check on the patient.', sender: 'user', timestamp: '11:03 AM' },
    ],
    'ST003': [
         { id: 'm6', text: 'The patient in room 302 needs attention.', sender: 'doctor', timestamp: '01:15 PM' },
    ]
};

export const mockSurgeries: Surgery[] = [
    { id: 'SURG01', patientName: 'Robert Johnson', patientId: 'PT003', procedure: 'Knee Arthroscopy', surgeon: 'Dr. David Chen', date: '2024-05-25', startTime: '08:00 AM', endTime: '10:00 AM', status: 'Scheduled', operatingRoom: 'OR 3' },
    { id: 'SURG02', patientName: 'New Patient', patientId: 'PT009', procedure: 'Appendectomy', surgeon: 'Dr. Frank Moore', date: '2024-05-22', startTime: '01:00 PM', endTime: '02:30 PM', status: 'In Progress', operatingRoom: 'OR 1' },
    { id: 'SURG03', patientName: 'Past Patient', patientId: 'PT010', procedure: 'Coronary Bypass', surgeon: 'Dr. Alice Grey', date: '2024-05-10', startTime: '09:00 AM', endTime: '01:00 PM', status: 'Completed', operatingRoom: 'OR 2' },
];

export const mockMedications: Medication[] = [
    { id: 'MED01', patientId: 'PT001', patientName: 'John Doe', name: 'Lisinopril', dosage: '10mg', frequency: 'Once a day', status: 'Active' },
    { id: 'MED02', patientId: 'PT002', patientName: 'Jane Smith', name: 'Mannitol', dosage: '20% IV', frequency: 'As needed', status: 'Active' },
    { id: 'MED03', patientId: 'PT004', patientName: 'Emily Davis', name: 'Cisplatin', dosage: '75mg/m²', frequency: 'Once every 3 weeks', status: 'Active' },
    { id: 'MED04', patientId: 'PT005', patientName: 'Michael Brown', name: 'Amoxicillin', dosage: '500mg', frequency: 'Twice a day', status: 'Discontinued' },
];

export const mockLabResults: LabResult[] = [
    { id: 'LAB01', patientId: 'PT001', patientName: 'John Doe', testName: 'Total Cholesterol', value: '210 mg/dL', referenceRange: '<200 mg/dL', date: '2024-05-10', status: 'Abnormal' },
    { id: 'LAB02', patientId: 'PT001', patientName: 'John Doe', testName: 'Hemoglobin A1c', value: '5.5%', referenceRange: '4.0-5.6%', date: '2024-05-10', status: 'Normal' },
    { id: 'LAB03', patientId: 'PT002', patientName: 'Jane Smith', testName: 'Platelet Count', value: '140 K/uL', referenceRange: '150-450 K/uL', date: '2024-05-18', status: 'Abnormal' },
    { id: 'LAB04', patientId: 'PT004', patientName: 'Emily Davis', testName: 'White Blood Cell Count', value: '3.8 K/uL', referenceRange: '4.5-11.0 K/uL', date: '2024-05-15', status: 'Abnormal' },
    { id: 'LAB05', patientId: 'PT007', patientName: 'David Martinez', testName: 'TSH', value: 'Pending', referenceRange: '0.4-4.0 mIU/L', date: '2024-05-19', status: 'Pending' },
];
