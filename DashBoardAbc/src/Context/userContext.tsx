import React, { useState } from 'react'
import { UserContextType, EditType, Signin } from '../TypeFile/TypeScriptType'

export const userContext = React.createContext<UserContextType | null>(null)

interface Props {
    children: React.ReactNode;
}
const UserProvider: React.FC<Props> = ({ children }) => {
    const [EditedData, setEdited] = useState<EditType>({
        patientName: "",
        age: 0,
        admitDate: "",
        dob: "",
        country: "",
        email: "",
        address: "",
        phoneNumber: "",
        patientImage: "",
        _id: ""
    })
    const [show, setShow] = useState<boolean>(false)
    const [hideSidebar, sethideBar] = useState<boolean>(true)
    const editModal = (data: EditType) => {
        console.log("data", data)
        setEdited(data)
    }
    const AuthTool = (state: boolean): void => {
        setShow(state)
    }
    const MobileDrawer = (): void => {
        sethideBar(!hideSidebar)
    }
    return <userContext.Provider value={{ show, EditedData, editModal, AuthTool, hideSidebar, MobileDrawer }}>{children}</userContext.Provider>
}

export default UserProvider