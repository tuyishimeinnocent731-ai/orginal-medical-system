export type View = 
  | 'dashboard'
  | 'patients'
  | 'patient-detail'
  | 'appointments'
  | 'symptom-checker'
  | 'billing'
  | 'staff'
  | 'staff-detail'
  | 'map'
  | 'department-detail'
  | 'telemedicine'
  | 'surgeries'
  | 'pharmacy'
  | 'laboratory'
  | 'patient-portal'
  | 'virtual-consultations'
  | 'consultation-room'
  | 'genomics'
  | 'genomic-detail'
  | 'wearable-data'
  | 'clinical-trials'
  | 'financials'
  | 'public-health';

export type Department = 'Cardiology' | 'Neurology' | 'Orthopedics' | 'ICU' | 'Oncology' | 'General Medicine';

export interface TimelineEvent {
    id: string;
    date: string;
    type: 'Admission' | 'Discharge' | 'Procedure' | 'Medication' | 'Observation';
    title: string;
    description: string;
}

export interface ImagingStudy {
    id: string;
    patientName: string;
    studyType: 'X-Ray' | 'MRI' | 'CT Scan';
    bodyPart: string;
    date: string;
    thumbnailUrl: string;
    imageUrl: string;
}


export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  department: Department;
  lastVisit: string;
  status: 'Stable' | 'Critical' | 'Discharged';
  avatarUrl: string;
  vitals?: {
    heartRate: number[];
    spO2: number[];
    bloodPressure: string[];
  };
  timeline: TimelineEvent[];
  imagingStudies?: ImagingStudy[];
  hasGenomicData?: boolean;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  department: Department;
  onCall: boolean;
  avatarUrl: string;
  assignedPatients?: string[];
}

export interface Appointment {
  id: string;
  patientName: string;
  doctor: string;
  department: Department;
  date: string;
  time: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

export interface SymptomAnalysisResult {
    possibleConditions: { name: string; explanation: string }[];
    suggestedNextSteps: string[];
    disclaimer: string;
}

export interface Invoice {
    id: string;
    patientName: string;
    patientId: string;
    date: string;
    amount: number;
    status: 'Paid' | 'Pending' | 'Overdue';
}

export interface Surgery {
    id: string;
    patientName: string;
    patientId: string;
    procedure: string;
    surgeon: string;
    date: string;
    startTime: string;
    endTime: string;
    operatingRoom: 'OR 1' | 'OR 2' | 'OR 3' | 'OR 4';
    status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
}

export interface Notification {
    id: string;
    type: 'message' | 'alert' | 'surgery' | 'billing';
    message: string;
    timestamp: string;
    read: boolean;
}

export interface ChatContact {
    id: string;
    name: string;
    avatarUrl: string;
    lastMessage: string;
    unreadCount: number;
}

export interface ChatMessage {
    id: string;
    text: string;
    sender: 'user' | 'doctor';
    timestamp: string;
}

export interface Prescription {
    id: string;
    patientName: string;
    patientId: string;
    medicationName: string;
    dosage: string;
    frequency: string;
    duration: string;
    issueDate: string;
    status: 'Active' | 'Completed' | 'Cancelled';
}

export interface LabResult {
    id: string;
    patientName: string;
    patientId: string;
    testName: string;
    result: string;
    referenceRange: string;
    date: string;
    status: 'Completed' | 'Pending' | 'Abnormal';
}

export interface VirtualConsultation {
    id: string;
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    status: 'Scheduled' | 'Completed' | 'Cancelled';
}

export interface GenomicVariant {
    id: string;
    gene: string;
    variant: string;
    classification: 'Pathogenic' | 'Likely Pathogenic' | 'Uncertain Significance' | 'Benign';
    implication: string;
}

export interface ClinicalTrial {
    id: string;
    title: string;
    phase: 'Phase I' | 'Phase II' | 'Phase III' | 'Phase IV';
    status: 'Recruiting' | 'Active' | 'Completed';
    principalInvestigator: string;
}

export interface RegionalHealthData {
  regionId: string;
  regionName: string;
  population: number;
  riskIndex: number; // 0-100
  cases: {
      respiratory: number;
      gastrointestinal: number;
  };
}

export interface SyndromicTrendData {
  date: string;
  respiratory: number;
  gastrointestinal: number;
  fever: number;
}

export interface OutbreakAlert {
    id: string;
    disease: string;
    riskLevel: 'High' | 'Medium' | 'Low';
    affectedRegions: string[];
}

export interface OutbreakPredictionResult {
    prediction: string;
    confidence: 'High' | 'Medium' | 'Low';
    predictedDisease: string;
    predictedRegions: string[];
    rationale: string;
}