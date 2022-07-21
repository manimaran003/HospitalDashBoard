import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { RouterData } from '../RouterData'
import { getStorageDetail } from './StorageDetail'
import React, { useState } from "react";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Box, Drawer, AppBar, Toolbar, CssBaseline, Breadcrumbs, Link, Typography } from '@mui/material'
import '../Component/HeaderComponent/Header.scss'
import { BiCalendar } from 'react-icons/bi'
import { BsChat } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoIosLogOut } from 'react-icons/io';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { GiSettingsKnobs } from 'react-icons/gi'
import { TiMessages } from 'react-icons/ti';
import { BiLeftArrowAlt } from 'react-icons/bi';
import './MainLayout.scss'
import 'antd/dist/antd.css';

const drawerWidth = 240;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,

    } as MenuItem;
}
const sidebarRoute = RouterData?.map((item: any) => {
    if (item.layout === "/dashboard") {
        if (!item.submenu || item.visibleInMenu === false) {
            return getItem(item.name, item.key, item.icon)
        }
        else {
            let submenu: any = []
            item.menuItems.map((e: any) => {
                submenu.push(getItem(e.name, e.key, e.icon))
            })
            return getItem(item.name, item.key, item.icon, submenu)

            // return getItem(item.name, item.key, item.icon,[
            //    getItem("AddDoctors", "sub-add1", item.icon),
            //    getItem("EditDoctor", "sub-add2", item.icon),
            //    getItem("DeleteDoctor", "sub-add3", item.icon),
            // ])
        }
    }
    else {
        return null;
    }
})
const items: MenuProps['items'] = sidebarRoute
const Header = () => {
    return (
        <div>
            <div className='container-fluid mainHeader d-flex '>
                <div className='d-flex align-items-center'>
                    <div className="menu--icon">
                        <AiOutlineMenu data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" />
                    </div>
                    <div className='header--logo'>
                        <img src="https://i.pinimg.com/736x/b9/c5/34/b9c5344544ba5f44997f4190dfdf273d.jpg" alt="logo" />
                    </div>
                </div>
                <div className='d-flex flex-grow-1 justify-content-between align-items-center'>
                    <div className='header--search d-flex'>
                        <input placeholder='search...' className='form-control' />
                    </div>
                    <div className='mobile--show header--icon'>
                        <div>
                            <AiOutlineSearch />
                        </div>

                    </div>
                    <div className='d-flex gap-2 gap-sm-2 gap-md-2 gap-lg-4 header--icon'>
                        <div>
                            <BiCalendar />
                        </div>
                        <div>
                            <BsChat />
                        </div>
                        <div>
                            <TiMessages />
                        </div>
                        <div>
                            <IoIosNotificationsOutline />
                        </div>
                        <div>
                            <GiSettingsKnobs />
                        </div>
                        <div>
                            <IoIosLogOut />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

const MainLayout = () => {
    console.log("private route")
    const [hideSidebar, setSidebar] = useState<Boolean>(true)
    const navigate = useNavigate()
    const location = useLocation();
    const breadCrumbsPath = () => {
        switch (location.pathname) {
            case "/dashboard/maindashboard": {
                return {
                    path: "Dashboard",
                    route: ["dashboard",],
                };
            }
            case "/dashboard/appointment": {
                return {
                    path: "Book Appointment",
                    route: ["appointment"],
                };
            }
            case "/dashboard/taskboard": {
                return {
                    path: "Taskboard",
                    route: ["taskboard"],
                };
            }
            case "/dashboard/AddDoctor": {
                return {
                    path: "Add Doctor",
                    route: ["Add Doctor", "Doctors"],
                };
            }
            case "/dashboard/AllPatients": {
                return {
                    path: "All Patients",
                    route: ["All Patients", "Patients"],
                };
            }
            case "/dashboard/viewPatients": {
                return {
                    path: "View Patients",
                    route: ["View Patients", "Patients"],
                };
            }
            default:
                return {
                    path: "",
                    route: ["", ""]
                }
        }
    }
    const BreamCrumbComponent = () => {
        let bread = breadCrumbsPath()
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="d-flex align-items-center gap-2">
                            <div className="breadcrumb-icon">
                                <BiLeftArrowAlt onClick={() => setSidebar(!hideSidebar)} />
                            </div>
                            <div className='breadcrumb-name'>
                                {bread.path}
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div>
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link
                                        href="#"
                                    >
                                        <AiOutlineHome className="bread-icon" />
                                    </Link>
                                    {
                                        bread?.route?.map((val: any) => {
                                            return (
                                                <>
                                                    <Typography
                                                        className="bread-name"
                                                    >
                                                        {val}
                                                    </Typography>
                                                </>
                                            )
                                        })
                                    }
                                </Breadcrumbs>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 hidden--mobile">
                        <div className="d-flex justify-content-end gap-4">
                            <div>
                                <span className="chartBar">VISITORS</span>
                                <div className="d-flex align-items-center gap-1">
                                    <span><AiOutlineUser className="chartBar-bar-icon" /></span>
                                    <span className="chartBar-bar-text">1,784</span>
                                </div>
                            </div>
                            <div>
                                <span className="chartBar">VISITS</span>
                                <div className="d-flex align-items-center gap-1">
                                    <span><AiOutlineUser className="chartBar-bar-icon" /></span>
                                    <span className="chartBar-bar-text">1,784</span>
                                </div>
                            </div>
                            <div>
                                <span className="chartBar">CHATS</span>
                                <div className="d-flex align-items-center gap-1">
                                    <span><AiOutlineUser className="chartBar-bar-icon" /></span>
                                    <span className="chartBar-bar-text">1,784</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const onClick: MenuProps['onClick'] = e => {
        RouterData?.map((item) => {
            if (item.layout === "/dashboard") {
                if (!item.submenu) {
                    if (item.key === e.key) {
                        return navigate(item.layout + item.path)
                    }
                }
                else {
                    item.menuItems?.map((val) => {

                        if (val.key === e.key) {

                            return navigate(val.layout + val.path)
                        }
                    })
                }
            }
            else {
                return null;
            }
        })
    };
    const getRoutes = () => {
        let data = getStorageDetail()
        return RouterData?.map((item) => {
            if (item.layout === '/dashboard') {
                if (!item.submenu) {
                    console.log(item)
                    return <Route path={item.layout + item.path} element={item.component} />
                }
                if (item.submenu) {
                    return item.menuItems?.map((e: any) => {
                        return <Route path={e.layout + e.path} element={e.component} />
                    })
                }
            }
            else {
                return null;
            }
        })
    }
    const SideBarActiveMenu = () => {
        switch (location.pathname) {
            case "/dashboard/maindashboard": {
                return {
                    defaultOpenKeys: ["sub1"],
                    defaultSelectedKeys: ["Dashboard"],
                };
            }
            case "/dashboard/appointment": {
                return {
                    defaultOpenKeys: ["sub2"],
                    defaultSelectedKeys: ["Appointment"],
                };
            }
            case "/dashboard/taskboard": {
                return {
                    defaultOpenKeys: ["sub3"],
                    defaultSelectedKeys: ["Taskboard"],
                };
            }
            case "/dashboard/doctors": {
                return {
                    defaultOpenKeys: ["sub4"],
                    defaultSelectedKeys: ["Doctors"],
                };
            }
            case "/dashboard/AllPatients": {
                return {
                    defaultOpenKeys: ["sub-patient1"],
                    defaultSelectedKeys: ["All Patients"],
                };
            }
            case "/dashboard/AllDoctor": {
                return {
                    defaultOpenKeys: ["sub4", "sub-add1"],
                    defaultSelectedKeys: ["All Doctor", "Doctors"],
                };
            }

            default: {
                return {
                    defaultOpenKeys: [],
                    defaultSelectedKeys: [],
                }
            }
        }
    }
    let activeMenu = SideBarActiveMenu()
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none !important" }}>
                    <Header />
                </AppBar>
                {
                    hideSidebar && (
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: "none", md: "none", lg: "flex", xl: "flex" },
                                width: drawerWidth,
                                flexShrink: 0,
                                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: "#f4f7f6 !important", borderRight: "0px", marginTop: "57px" },
                            }}
                        >
                            <Menu
                                onClick={onClick}
                                style={{ width: "100%", background: "#f4f7f6" }}
                                defaultSelectedKeys={activeMenu.defaultOpenKeys}
                                defaultOpenKeys={activeMenu.defaultSelectedKeys}
                                mode="inline"
                                items={items}
                            />
                        </Drawer>
                    )
                }

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-body" data-bs-dismiss="offcanvas" aria-label="Close" >
                        <Menu
                            onClick={onClick}
                            style={{ width: "100%", background: "#f4f7f6" }}
                            defaultSelectedKeys={activeMenu.defaultOpenKeys}
                            defaultOpenKeys={activeMenu.defaultSelectedKeys}
                            mode="inline"
                            items={items}
                        />
                    </div>
                </div>
                <Box className="main--body">
                    <Toolbar />
                    <div className="d-flex">
                        <BreamCrumbComponent />
                    </div>
                    <Routes>
                        {getRoutes()}
                    </Routes>
                </Box>
            </Box>
        </div>
    )
}

export default MainLayout;