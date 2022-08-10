export interface Signup {
  username: string;
  password: string;
  email: string;
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
  length: number;
  patientName: string;
  age: number;
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
  MobileDrawer: (state: boolean) => void;
};
