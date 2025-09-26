
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  admissionDate: string;
  department: 'Cardiology' | 'Neurology' | 'Oncology' | 'Pediatrics' | 'ICU';
  bedNumber: string;
  status: 'Stable' | 'Critical' | 'Discharged';
  bloodType: string;
  vitals?: {
    heartRate: number[];
    spO2: number[];
  };
  timeline?: TimelineEvent[];
  imagingStudies?: ImagingStudy[];
}

export interface Invoice {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface Staff {
  id: string;
  name: string;
  role: 'Doctor' | 'Nurse' | 'Surgeon' | 'Admin' | 'Therapist';
  department: 'Cardiology' | 'Neurology' | 'Oncology' | 'Pediatrics' | 'ICU' | 'Administration';
  onCall: boolean;
  phone: string;
  email: string;
}

export interface Notification {
  id: string;
  type: 'message' | 'alert' | 'billing' | 'surgery';
  message: string;
  timestamp: string;
  read: boolean;
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

export interface Medication {
    id: string;
    name: string;
    dosage: string;
    frequency: string;
    stock: number;
}

export interface LabResult {
    id: string;
    patientName: string;
    patientId: string;
    testName: string;
    result: string;
    referenceRange: string;
    date: string;
    status: 'Completed' | 'Pending';
}

export interface ImagingStudy {
    id: string;
    patientName: string;
    patientId: string;
    studyType: string; // e.g., 'X-Ray', 'MRI', 'CT Scan'
    bodyPart: string;
    date: string;
    imageUrl: string;
}

export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    description: string;
    type: 'Admission' | 'Medication' | 'Observation' | 'Procedure' | 'Discharge';
}

export interface Appointment {
    id: string;
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    type: 'Consultation' | 'Follow-up' | 'Check-up';
    status: 'Scheduled' | 'Completed' | 'Cancelled';
}

export interface GenomicVariant {
    id: string;
    gene: string;
    variant: string;
    implication: string;
    classification: 'Pathogenic' | 'Likely Pathogenic' | 'Uncertain' | 'Likely Benign' | 'Benign';
}

export interface Resource {
    id: string;
    name: string;
    type: 'MRI Machine' | 'Ventilator' | 'X-Ray Room';
    isAvailable: boolean;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  details: string;
}

export interface Bed {
  id: string;
  ward: string;
  bedNumber: string;
  patientId: string | null;
  patientName: string | null;
  status: 'Occupied' | 'Available' | 'Cleaning';
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'Medical Supplies' | 'Office Supplies' | 'Equipment';
  quantity: number;
  location: string;
}

export interface PayrollEntry {
  id: string;
  employeeId: string;
  employeeName: string;
  period: string;
  grossPay: number;
  netPay: number;
  status: 'Paid' | 'Pending';
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  type: 'Vacation' | 'Sick Leave';
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  department: string;
  purchaseDate: string;
  status: 'Operational' | 'Under Maintenance' | 'Decommissioned';
}

export interface MaintenanceJob {
  id: string;
  assetId: string;
  assetName: string;
  issue: string;
  scheduledDate: string;
  status: 'Scheduled' | 'In Progress' | 'Completed';
}
