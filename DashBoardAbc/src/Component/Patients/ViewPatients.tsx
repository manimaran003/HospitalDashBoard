
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
                    date: "01 Jun 2018",
                    reportHeading: "Blood Report",
                    bloodReport: true,
                    admitReport: false,
                    checkupReport: false,
                    surgeryReport: false,
                    images: [],
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
                },
                {
                    date: "01 Jun 2018",
                    reportHeading: "Blood checkup test",
                    bloodReport: false,
                    admitReport: false,
                    checkupReport: true,
                    surgeryReport: false,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    reportTable: [],
                    images: [],
                },
                {
                    date: "01 Jun 2018",
                    reportHeading: "Spinal Osteomyelitis Surgery",
                    bloodReport: false,
                    admitReport: false,
                    checkupReport: false,
                    surgeryReport: true,
                    images: ['https://media.istockphoto.com/photos/offering-patientcentred-care-that-proves-effective-and-efficient-picture-id1301555107?k=20&m=1301555107&s=612x612&w=0&h=Cnj-PabtvN4J6xBVonpez02ub100LmbKDlNPLjy_w9Y=', 'https://media.istockphoto.com/photos/diagnostic-tools-get-a-digital-upgrade-picture-id1300505874?k=20&m=1300505874&s=612x612&w=0&h=Ev_S8Ag5Pf8LiHL-dW-N8PxgftQ4D8KK-5snYu-Bhn0='],
                    description: "web by far While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card",
                    reportTable: []
                },
            ]
        }
    ]
    console.log("jam", PatientActivity)
    let location: any = useLocation()
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
                                            <p className='text--para'>{location?.state?.patientName}</p>
                                        </div>
                                        <div className='p-1 card--header'>
                                            <h6>Email Id</h6>
                                            <p className='text--para'>{location?.state?.email}</p>
                                        </div>
                                        <Divider />
                                        <div className='p-2 card--header'>
                                            <h6>Address</h6>
                                            <p className='text--para'>{location?.state?.address}</p>
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