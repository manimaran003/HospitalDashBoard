export interface Signup {
  username: string;
  password: string;
  email: string;
  role: string;
}
export interface Signin {
  email: string;
  password: string;
}

export interface DoctorProfile {
  _id: string;
  doctorName: string;
  doctorImage: string;
  address: string;
  specialist: string;
  dob: string;
  empId: string;
  country: string;
  email: string;
  phoneNumber: string;
  __v: number;
}

export interface DataType {
  patientName: string;
  ageField: number;
  address: string;
  admitDate: string;
  country: string;
  phoneNumber: string;
  dob: string;
  email: string;
  _id: string;
  patientImage: string;
}
export interface EditType {
  patientImage: string;
  patientName: string;
  ageField: number;
  address: string;
  admitDate: string;
  country: string;
  phoneNumber: string;
  dob: string;
  email: string;
  _id: string;
}

export interface DoctorEditType {
  email: string;
  doctorName: string;
  address: string;
  phoneNumber: string;
  dob: string;
  specialist: string;
  country: string;
  doctorImage: string;
  _id: string;
}

export interface PatientModel {
  patientImage: string;
  patientName: string;
  ageField: number;
  address: string;
  admitDate: string;
  country: string;
  phoneNumber: string;
  dob: string;
  email: string;
}

export type UserContextType = {
  editModal: (data: EditType) => void;
  EditedData: EditType;
  show: boolean;
  AuthTool: (state: boolean) => void;
  hideSidebar: boolean;
  editDoctorModal: (state: DoctorEditType) => void;
  EditedDoctor: DoctorEditType;
  MobileDrawer: (state: boolean) => void;
};

interface numericValue {
  name: string;
  amount: string;
}

interface tableSetup {
  tableHeader: string;
  data: numericValue[];
}
interface timelineSetup {
  date: string;
  reportHeading: string;
  bloodReport: boolean;
  admitReport: boolean;
  checkupReport: boolean;
  surgeryReport: boolean;
  images: Array<string>;
  description: string;
  reportTable: tableSetup[];
}
export interface setup {
  id: string;
  username: string;
  TimeLine: timelineSetup[];
}
