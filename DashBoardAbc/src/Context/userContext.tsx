import React, { useState } from 'react';
import { UserContextType, EditType, DoctorEditType } from '../TypeFile/TypeScriptType';

export const userContext = React.createContext<UserContextType | null>(null);

interface Props {
  children: React.ReactNode;
}
const UserProvider: React.FC<Props> = ({ children }) => {
  const [EditedData, setEdited] = useState<EditType>({
    patientName: '',
    ageField: 0,
    admitDate: '',
    dob: '',
    country: '',
    email: '',
    address: '',
    phoneNumber: '',
    patientImage: '',
    _id: ''
  });
  const [EditedDoctor, setEditedDoctor] = useState<DoctorEditType>({
    email: '',
    doctorName: '',
    address: '',
    phoneNumber: '',
    dob: '',
    specialist: '',
    country: '',
    doctorImage: '',
    _id: ''
  });
  const [show, setShow] = useState<boolean>(true);
  const [hideSidebar, sethideBar] = useState<boolean>(true);
  const editModal = (data: EditType) => {
    console.log('data', data);
    setEdited(data);
  };
  const editDoctorModal = (data: DoctorEditType) => {
    console.log('data', data);
    setEditedDoctor(data);
  };
  const AuthTool = (state: boolean): void => {
    setShow(state);
  };
  const MobileDrawer = (): void => {
    sethideBar(!hideSidebar);
  };
  return (
    <userContext.Provider
      value={{
        show,
        EditedData,
        editModal,
        EditedDoctor,
        editDoctorModal,
        AuthTool,
        hideSidebar,
        MobileDrawer
      }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
