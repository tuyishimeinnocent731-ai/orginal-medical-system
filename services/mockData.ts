
import type { Patient, Staff, Appointment, Invoice, Surgery, Notification, ChatContact, ChatMessage, Prescription, LabResult, VirtualConsultation, GenomicVariant, ClinicalTrial } from '../types.ts';

export const mockPatients: Patient[] = [
  {
    id: 'P001',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    department: 'Cardiology',
    lastVisit: '2023-10-15',
    status: 'Stable',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    vitals: { heartRate: [72, 75, 74, 73, 76], spO2: [98, 99, 98, 98, 99], bloodPressure: ['120/80', '122/81', '121/79', '120/80', '123/82'] },
    timeline: [
        { id: 't1', date: '2023-10-12', type: 'Admission', title: 'Admitted to Cardiology', description: 'Patient admitted with chest pain and shortness of breath.' },
        { id: 't2', date: '2023-10-13', type: 'Procedure', title: 'Angiogram', description: 'Coronary angiogram performed, showed minor blockage.' },
        { id: 't3', date: '2023-10-15', type: 'Observation', title: 'Condition Stable', description: 'Patient responding well to medication, condition is stable.' },
    ],
    imagingStudies: [
      { id: 'img1', patientName: 'John Doe', studyType: 'X-Ray', bodyPart: 'Chest', date: '2023-10-12', thumbnailUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Chest+X-Ray', imageUrl: 'https://via.placeholder.com/600/000000/FFFFFF/?text=Chest+X-Ray' },
    ],
    hasGenomicData: true,
  },
  {
    id: 'P002',
    name: 'Jane Smith',
    age: 62,
    gender: 'Female',
    department: 'Neurology',
    lastVisit: '2023-11-01',
    status: 'Critical',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    vitals: { heartRate: [95, 98, 102, 100, 105], spO2: [95, 94, 93, 94, 92], bloodPressure: ['140/90', '142/91', '145/93', '141/90', '148/95'] },
    timeline: [
        { id: 't4', date: '2023-11-01', type: 'Admission', title: 'Admitted to ICU', description: 'Patient admitted after a severe stroke.' },
    ],
    imagingStudies: [
      { id: 'img2', patientName: 'Jane Smith', studyType: 'MRI', bodyPart: 'Brain', date: '2023-11-01', thumbnailUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Brain+MRI', imageUrl: 'https://via.placeholder.com/600/000000/FFFFFF/?text=Brain+MRI' },
    ]
  },
  {
    id: 'P003',
    name: 'Robert Johnson',
    age: 78,
    gender: 'Male',
    department: 'Orthopedics',
    lastVisit: '2023-09-20',
    status: 'Discharged',
    avatarUrl: 'https://randomuser.me/api/portraits/men/55.jpg',
    timeline: [
      { id: 't5', date: '2023-09-15', type: 'Procedure', title: 'Hip Replacement', description: 'Successful hip replacement surgery.' },
      { id: 't6', date: '2023-09-20', type: 'Discharge', title: 'Discharged', description: 'Patient discharged after successful recovery.' }
    ]
  },
  {
    id: 'P004',
    name: 'Emily Davis',
    age: 34,
    gender: 'Female',
    department: 'Oncology',
    lastVisit: '2023-11-05',
    status: 'Stable',
    avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    timeline: [],
    hasGenomicData: true,
  },
  {
    id: 'P005',
    name: 'Michael Brown',
    age: 55,
    gender: 'Male',
    department: 'ICU',
    lastVisit: '2023-11-04',
    status: 'Critical',
    avatarUrl: 'https://randomuser.me/api/portraits/men/78.jpg',
    vitals: { heartRate: [110, 112, 108, 115, 113], spO2: [92, 91, 93, 90, 91], bloodPressure: ['150/95', '155/98', '152/96', '158/100', '156/99'] },
    timeline: [],
  },
  {
    id: 'P006',
    name: 'Sarah Wilson',
    age: 48,
    gender: 'Female',
    department: 'General Medicine',
    lastVisit: '2023-11-02',
    status: 'Stable',
    avatarUrl: 'https://randomuser.me/api/portraits/women/88.jpg',
    timeline: [],
  },
];

export const mockStaff: Staff[] = [
  { id: 'S001', name: 'Dr. Alice Carter', role: 'Cardiologist', department: 'Cardiology', onCall: true, avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg', assignedPatients: ['P001'] },
  { id: 'S002', name: 'Dr. Ben Stone', role: 'Neurologist', department: 'Neurology', onCall: false, avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg', assignedPatients: ['P002'] },
  { id: 'S003', name: 'Nurse Carol White', role: 'Head Nurse', department: 'ICU', onCall: true, avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg', assignedPatients: ['P005'] },
  { id: 'S004', name: 'Dr. David Green', role: 'Orthopedic Surgeon', department: 'Orthopedics', onCall: false, avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg', assignedPatients: [] },
  { id: 'S005', name: 'Dr. Evelyn Reed', role: 'Oncologist', department: 'Oncology', onCall: true, avatarUrl: 'https://randomuser.me/api/portraits/women/5.jpg', assignedPatients: ['P004'] },
  { id: 'S006', name: 'Nurse Frank Hall', role: 'Registered Nurse', department: 'General Medicine', onCall: false, avatarUrl: 'https://randomuser.me/api/portraits/men/6.jpg', assignedPatients: ['P006'] },
];

export const mockAppointments: Appointment[] = [
  { id: 'A001', patientName: 'John Doe', doctor: 'Dr. Alice Carter', department: 'Cardiology', date: '2023-11-15', time: '10:00 AM', status: 'Scheduled' },
  { id: 'A002', patientName: 'Emily Davis', doctor: 'Dr. Evelyn Reed', department: 'Oncology', date: '2023-11-16', time: '02:30 PM', status: 'Scheduled' },
  { id: 'A003', patientName: 'Robert Johnson', doctor: 'Dr. David Green', department: 'Orthopedics', date: '2023-10-25', time: '11:00 AM', status: 'Completed' },
  { id: 'A004', patientName: 'Sarah Wilson', doctor: 'Dr. Frank Hall', department: 'General Medicine', date: '2023-11-10', time: '09:00 AM', status: 'Cancelled' },
];

export const mockInvoices: Invoice[] = [
    { id: 'INV001', patientName: 'John Doe', patientId: 'P001', date: '2023-10-20', amount: 1250.75, status: 'Paid' },
    { id: 'INV002', patientName: 'Jane Smith', patientId: 'P002', date: '2023-11-05', amount: 8500.00, status: 'Pending' },
    { id: 'INV003', patientName: 'Robert Johnson', patientId: 'P003', date: '2023-09-25', amount: 15300.50, status: 'Paid' },
    { id: 'INV004', patientName: 'Emily Davis', patientId: 'P004', date: '2023-10-15', amount: 450.00, status: 'Overdue' },
];

export const mockSurgeries: Surgery[] = [
    { id: 'SURG001', patientName: 'Robert Johnson', patientId: 'P003', procedure: 'Hip Replacement Follow-up', surgeon: 'Dr. David Green', date: '2023-11-20', startTime: '09:00 AM', endTime: '10:00 AM', operatingRoom: 'OR 1', status: 'Scheduled' },
    { id: 'SURG002', patientName: 'New Patient', patientId: 'P007', procedure: 'Appendectomy', surgeon: 'Dr. General', date: '2023-11-08', startTime: '11:00 AM', endTime: '12:30 PM', operatingRoom: 'OR 3', status: 'In Progress' },
    { id: 'SURG003', patientName: 'Old Patient', patientId: 'P008', procedure: 'Knee Arthroscopy', surgeon: 'Dr. David Green', date: '2023-10-15', startTime: '02:00 PM', endTime: '04:00 PM', operatingRoom: 'OR 2', status: 'Completed' },
];

export const mockNotifications: Notification[] = [
    { id: 'N001', type: 'message', message: 'New message from Dr. Carter regarding John Doe.', timestamp: '5m ago', read: false },
    { id: 'N002', type: 'alert', message: 'Jane Smith\'s SpO2 dropped to 91%.', timestamp: '15m ago', read: false },
    { id: 'N003', type: 'surgery', message: 'Surgery for Robert Johnson scheduled for Nov 20.', timestamp: '1h ago', read: true },
    { id: 'N004', type: 'billing', message: 'Invoice INV004 for Emily Davis is now overdue.', timestamp: '2d ago', read: true },
];

export const mockChatContacts: ChatContact[] = [
    { id: 'S001', name: 'Dr. Alice Carter', avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg', lastMessage: 'Please check his latest EKG.', unreadCount: 1 },
    { id: 'S002', name: 'Dr. Ben Stone', avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg', lastMessage: 'The MRI results are in.', unreadCount: 0 },
    { id: 'S005', name: 'Dr. Evelyn Reed', avatarUrl: 'https://randomuser.me/api/portraits/women/5.jpg', lastMessage: 'Okay, I will arrange that.', unreadCount: 0 },
];

export const mockMessages: Record<string, ChatMessage[]> = {
    'S001': [
        { id: 'm1', text: 'Hi, can we discuss John Doe\'s case?', sender: 'doctor', timestamp: '10:30 AM' },
        { id: 'm2', text: 'Of course. I was about to message you. Please check his latest EKG.', sender: 'user', timestamp: '10:31 AM' },
    ],
    'S002': [
        { id: 'm3', text: 'The MRI results for Jane Smith are in.', sender: 'doctor', timestamp: 'Yesterday' },
        { id: 'm4', text: 'Thank you, I will review them now.', sender: 'user', timestamp: 'Yesterday' },
    ],
    'S005': [
        { id: 'm5', text: 'Can you schedule a PET scan for Emily Davis?', sender: 'user', timestamp: '2 days ago' },
        { id: 'm6', text: 'Okay, I will arrange that.', sender: 'doctor', timestamp: '2 days ago' },
    ],
};

export const mockPrescriptions: Prescription[] = [
    { id: 'RX001', patientName: 'John Doe', patientId: 'P001', medicationName: 'Lisinopril', dosage: '10mg', frequency: 'Once a day', duration: '30 days', issueDate: '2023-10-15', status: 'Active' },
    { id: 'RX002', patientName: 'Emily Davis', patientId: 'P004', medicationName: 'Tamoxifen', dosage: '20mg', frequency: 'Once a day', duration: '90 days', issueDate: '2023-11-05', status: 'Active' },
    { id: 'RX003', patientName: 'Robert Johnson', patientId: 'P003', medicationName: 'Oxycodone', dosage: '5mg', frequency: 'As needed for pain', duration: '7 days', issueDate: '2023-09-20', status: 'Completed' },
];

export const mockLabResults: LabResult[] = [
    { id: 'LAB001', patientName: 'John Doe', patientId: 'P001', testName: 'Troponin T', result: '0.01 ng/mL', referenceRange: '< 0.04 ng/mL', date: '2023-10-12', status: 'Completed' },
    { id: 'LAB002', patientName: 'Jane Smith', patientId: 'P002', testName: 'Complete Blood Count', result: 'See report', referenceRange: 'N/A', date: '2023-11-01', status: 'Pending' },
    { id: 'LAB003', patientName: 'Emily Davis', patientId: 'P004', testName: 'Tumor Markers (CEA)', result: '5.5 ng/mL', referenceRange: '< 2.5 ng/mL', date: '2023-11-05', status: 'Abnormal' },
];

export const mockVirtualConsultations: VirtualConsultation[] = [
    { id: 'VC001', patientName: 'Sarah Wilson', doctorName: 'Dr. Frank Hall', date: '2023-11-22', time: '03:00 PM', status: 'Scheduled' },
    { id: 'VC002', patientName: 'John Doe', doctorName: 'Dr. Alice Carter', date: '2023-11-25', time: '11:00 AM', status: 'Scheduled' },
    { id: 'VC003', patientName: 'Robert Johnson', doctorName: 'Dr. David Green', date: '2023-10-28', time: '10:00 AM', status: 'Completed' },
];

export const mockGenomicVariants: GenomicVariant[] = [
    { id: 'GEN001', gene: 'BRCA2', variant: 'c.5946delT', classification: 'Pathogenic', implication: 'Increased risk of breast and ovarian cancer.' },
    { id: 'GEN002', gene: 'APOE', variant: 'e4 Allele', classification: 'Likely Pathogenic', implication: 'Increased risk factor for Alzheimer\'s disease.' },
    { id: 'GEN003', gene: 'MTHFR', variant: 'c.677C>T', classification: 'Benign', implication: 'Common polymorphism with minor clinical significance.' },
    { id: 'GEN004', gene: 'TP53', variant: 'c.818G>A', classification: 'Uncertain Significance', implication: 'Effect on protein function is not fully understood.' },
];

export const mockClinicalTrials: ClinicalTrial[] = [
    { id: 'CT001', title: 'A Study of a New Drug for Heart Failure', phase: 'Phase III', status: 'Recruiting', principalInvestigator: 'Dr. Alice Carter' },
    { id: 'CT002', title: 'Targeted Therapy for Glioblastoma Multiforme', phase: 'Phase II', status: 'Active', principalInvestigator: 'Dr. Ben Stone' },
    { id: 'CT003', title: 'Immunotherapy in Early-Stage Lung Cancer', phase: 'Phase III', status: 'Active', principalInvestigator: 'Dr. Evelyn Reed' },
    { id: 'CT004', title: 'Long-term Outcomes of Robotic Knee Surgery', phase: 'Phase IV', status: 'Completed', principalInvestigator: 'Dr. David Green' },
];
