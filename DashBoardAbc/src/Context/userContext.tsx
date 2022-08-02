import React, { useState } from 'react'
import { UserContextType, EditType } from '../TypeFile/TypeScriptType'

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
    const editModal = (data: EditType) => {
        console.log("data", data)
        setEdited(data)
    }
    return <userContext.Provider value={{ EditedData, editModal }}>{children}</userContext.Provider>
}

export default UserProvider