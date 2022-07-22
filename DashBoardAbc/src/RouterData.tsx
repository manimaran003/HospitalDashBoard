import LoginPage from "./Component/LoginComponent/SignupPage"
import Appointment from "./Component/Views/Appointment/Appointment"
import MainDashboard from "./Component/Views/MainDashboard/MainDashboard"
import Taskboard from "./Component/Views/Taskboard/Taskboard"
import { GoHome } from 'react-icons/go'
import { AiOutlineUserAdd } from 'react-icons/ai'
import AddDoctor from "./Component/Views/Doctors/AddDoctor"
import { BsCalendar3, BsListTask } from 'react-icons/bs'
import EditDoctor from "./Component/Views/Doctors/EditDoctor"
import DeleteDoctors from "./Component/Views/Doctors/DeleteDoctors"
import AllPatientsView from "./Component/Views/Patients/AllPatientsView"
import ViewPatients from './Component/Views/Patients/ViewPatients'
export const RouterData = [
    {
        path: "/",
        component: <LoginPage />,
        layout: "/"
    },
    {
        name: "Dashbaord",
        path: "/maindashboard",
        component: <MainDashboard />,
        submenu: false,
        layout: "/dashboard",
        key: "sub1",
        visibleInMenu:true,
        icon: <GoHome />,
        
    },
    {
        name: "Appointment",
        path: "/appointment",
        component: <Appointment />,
        submenu: false,
        layout: "/dashboard",
        key: "sub2",
        visibleInMenu:true,
        icon: <BsCalendar3 />
    },
    {
        name: "Taskboard",
        path: "/taskboard",
        component: <Taskboard />,
        submenu: false,
        layout: "/dashboard",
        key: "sub3",
        visibleInMenu:true,
        icon: <BsListTask />
    },
    {
        path: "/viewPatients",
        name: "All Patients",
        layout: "/dashboard",
        icon: <AiOutlineUserAdd />,
        key: "sub-patient1",
        component: <ViewPatients/>,
        visibleInMenu:false,
    },
   
    {
        name: "Doctors",
        path: "",
        layout: "/dashboard",
        submenu: true,
        key: "sub4",
        icon: <AiOutlineUserAdd />,
        menuItems: [
            {
                path: "/AllDoctor",
                name: "All Doctor",
                layout: "/dashboard",
                icon: <AiOutlineUserAdd />,
                key: "sub-add1",
                component: <AddDoctor />,
                visibleInMenu:true,
            },
            {
                path: "/EditDoctor",
                name: "Edit Doctor",
                layout: "/dashboard",
                icon: <AiOutlineUserAdd />,
                key: "sub-add2",
                component: <EditDoctor />,
                visibleInMenu:true,
            },
            {
                path: "/DeleteDoctor",
                name: "Delete Doctor",
                layout: "/dashboard",
                icon: <AiOutlineUserAdd />,
                key: "sub-add3",
                component: <DeleteDoctors />,
                visibleInMenu:true,
            },
        ]
    },
    {
        name: "Patients",
        path: "",
        // component: <Patients />,
        layout: "/dashboard",
        key: "sub5",
        submenu:true,
        icon: <AiOutlineUserAdd />,
        menuItems:[
            {
                path: "/AllPatients",
                name: "All Patients",
                layout: "/dashboard",
                icon: <AiOutlineUserAdd />,
                key: "sub-patient1",
                component: <AllPatientsView />,
                visibleInMenu:true,
            },
        ]
    },
]
