import { GoHome } from 'react-icons/go'
import { AiOutlineUserAdd } from 'react-icons/ai'
import AllPatientsView from './Component/Patients/AllPatientsView'
import AllDoctor from './Component/Doctors/AllDoctor'
import MainDashboard from './Component/MainDashboard/MainDashboard'
import ViewDoctor from './Component/Doctors/ViewDoctor'
import ViewPatients from './Component/Patients/ViewPatients'
import SignupPage from './Component/LoginComponent/SignupPage'
export const RouterData = [
    {
        path: "/",
        component: <SignupPage />,
        layout: "/"
    },
    {
        name: "Dashbaord",
        path: "/maindashboard",
        component: <MainDashboard />,
        submenu: false,
        layout: "/dashboard",
        key: "sub1",
        visibleInMenu: true,
        icon: <GoHome />,

    },
    {
        path: "/viewPatients",
        name: "All Patients",
        layout: "/dashboard",
        icon: <AiOutlineUserAdd />,
        key: "sub-patient1",
        component: <ViewPatients />,
        visibleInMenu: false,
    },
    {
        path: "/ViewDoctor",
        name: "View Doctor",
        layout: "/dashboard",
        icon: <AiOutlineUserAdd />,
        key: "sub-doc2",
        component: <ViewDoctor />,
        visibleInMenu: false,
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
                key: "sub-doc1",
                component: <AllDoctor />,
                visibleInMenu: true,
            },
        ]
    },
    {
        name: "Patients",
        path: "",
        // component: <Patients />,
        layout: "/dashboard",
        key: "sub5",
        submenu: true,
        icon: <AiOutlineUserAdd />,
        menuItems: [
            {
                path: "/AllPatients",
                name: "All Patients",
                layout: "/dashboard",
                icon: <AiOutlineUserAdd />,
                key: "sub-patient1",
                component: <AllPatientsView />,
                visibleInMenu: true,
            },
        ]
    },
]
