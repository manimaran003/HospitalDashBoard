import React from 'react'
import { useLocation } from 'react-router-dom'
import { Paper, Card, CardMedia, CardContent, Divider } from '@mui/material'
import { Tabs } from 'antd';
import './ViewPatients.scss'
import HospitalActivity from '../MainDashboard/HospitalActivity'
export interface surgeryDetails {
    id: string,
    date: string,
    doctorName: string,
    operatinolCheck: boolean,
    surgeryHeading: string,
    surgeryDescription: string,
    surgeryImages: [string, string],
}
export interface patientAdmit {
    id: string,
    date: string,
    warno: string,
    images: [string, string],
    Heading: string,
    AdmitCheck: boolean
}
export interface bloodReport {
    id: string,
    date: string,
    heading: string,
    bloodReportCheck: boolean,
    surgeryDescription: string,
    reportData: reportTable[],
}
export interface reportTable {
    id: string,
    tablename: string,
    data: reportCheck[]
}
export interface reportCheck {
    detailName: string,
    detailAmount: string
}

const ViewPatients = () => {
    const { TabPane } = Tabs;

    const onChange = (key: string) => {
        console.log(key);
    };
    const activity = "patientActivities"
    const PatientActivity: any = [
        {
            id: "21321321",
            username: "jahnwi",
            TimeLine: [
                {
                    admitDetails: {
                        Date: "23232",
                        admitHeading: "heading adminti",
                        doctorName: "jamessdd",
                        images: ['sjfskjfdjf'],
                        admitCheck: true
                    }
                },
                {
                    surgeryDetails: {
                        date: "sdsdsd",
                        surgeryHeading: "slfkds;lkf;lf",
                        doctorName: "sfs;lfd",
                        surgeryDescription: "dsgdsfg",
                        surgeryImages: ['dsfds', 'dsfdsf'],
                        surgeryCheck: true
                    }
                },
                {
                    bloodReportDetails: {
                        date: "343243",
                        bloodHeader: "dsfdsfes",
                        bloodDescription: "dslfkdslkfdslkf",
                        bloodReportCheck: true,
                        reportTable: [
                            {
                                tableHeader: "analysis",
                                data: [
                                    { name: "sdsd", amount: "3223" },
                                    { name: "sdsd", amount: "3223" },
                                    { name: "sdsd", amount: "3223" },
                                    { name: "sdsd", amount: "3223" },
                                ]
                            },
                            {
                                tableHeader: "species",
                                data: [
                                    { name: "sdsd", amount: "3223" },
                                    { name: "sdsd", amount: "3223" },
                                    { name: "sdsd", amount: "3223" },
                                    { name: "sdsd", amount: "3223" },
                                ]
                            }
                        ]
                    }
                },
            ]
        }
    ]
    console.log("jam", PatientActivity)
    let location = useLocation()
    return (
        <div className="p-3">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <Paper className="view--paper" elevation={1}>
                        <div className='profile--card d-flex flex-grow-1 h-100 w-100'>
                            <Card className="w-100">
                                <CardMedia
                                    component="img"
                                    height="50%"

                                    image="https://images.unsplash.com/photo-1550791871-0bcd47c97881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aWVudCUyMGluJTIwaG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80"
                                    alt="green iguana"
                                />
                                <CardContent className='d-flex flex-grow-1 flex-column p-2'>
                                    <div>
                                        <div className='p-1 card--header'>
                                            <h6>Patient Name</h6>
                                            <p className='text--para'>Janwi Kapoor</p>
                                        </div>
                                        <div className='p-1 card--header'>
                                            <h6>Email Id</h6>
                                            <p className='text--para'>cmamran!234@gmail.com</p>
                                        </div>
                                        <Divider />
                                        <div className='p-2 card--header'>
                                            <h6>Address</h6>
                                            <p className='text--para'>no:2 gandhinagar,Trichy</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </Paper>
                    <div>

                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8'>
                    <Paper>
                        <div className="p-3">
                            <div className=''>
                                <Tabs defaultActiveKey="1" onChange={onChange}>
                                    <TabPane tab="Activity" key="1">
                                        <HospitalActivity activities={activity} reportsData={PatientActivity} />
                                    </TabPane>
                                    <TabPane tab="Billing" key="2">
                                        Content of Tab Pane 2
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default ViewPatients