import LoginPage from "./Component/LoginComponent/SignupPage"
import Appointment from "./Component/Views/Appointment/Appointment"
import MainDashboard from "./Component/Views/MainDashboard/MainDashboard"
import Patients from "./Component/Views/Patients/Patients"
import Taskboard from "./Component/Views/Taskboard/Taskboard"
import {GoHome} from 'react-icons/go'
import {AiOutlineUserAdd} from 'react-icons/ai'
import AddDoctor from "./Component/Views/Doctors/AddDoctor"
import {BsCalendar3,BsListTask} from 'react-icons/bs'
import EditDoctor from "./Component/Views/Doctors/EditDoctor"
import DeleteDoctors from "./Component/Views/Doctors/DeleteDoctors"
export const RouterData=[
    {
        path:"/",
        component:<LoginPage/>,
        layout:"/"
    },
    {
        name:"Dashbaord",
        path:"/maindashboard",
        component:<MainDashboard/>,
        submenu:false,
        layout:"/dashboard",
        key:"sub1",
        icon:<GoHome/>
    },
    {
        name:"Appointment",
        path:"/appointment",
        component:<Appointment/>,
        submenu:false,
        layout:"/dashboard",
        key:"sub2",
        icon:<BsCalendar3/>
    },
    {
        name:"Taskboard",
        path:"/taskboard",
        component:<Taskboard/>,
        submenu:false,
        layout:"/dashboard",
        key:"sub3",
        icon:<BsListTask/>
    },
    {
        name:"Doctors",
        path:"",
        layout:"/dashboard",
        submenu:true,
        key:"sub4",
        icon:<AiOutlineUserAdd/>,
        menuItems:[      
                {
                  path: "/AddDoctor",
                  name: "Add Doctor",
                  layout: "/dashboard",
                  icon: <AiOutlineUserAdd/>,
                  key: "sub-add1",
                  component: <AddDoctor/>,
                },
                {
                    path: "/EditDoctor",
                    name: "Edit Doctor",
                    layout: "/dashboard",
                    icon: <AiOutlineUserAdd/>,
                    key: "sub-add2",
                    component: <EditDoctor/>,
                  },
                  {
                    path: "/DeleteDoctor",
                    name: "Delete Doctor",
                    layout: "/dashboard",
                    icon: <AiOutlineUserAdd/>,
                    key: "sub-add3",
                    component: <DeleteDoctors/>,
                  },
            ]
    },
    {
        name:"Patients",
        path:"/patients",
        component:<Patients/>,
        layout:"/dashboard",
        key:"sub5",
        icon:<AiOutlineUserAdd/>
    },
]
