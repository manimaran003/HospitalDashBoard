import React,{useEffect,useState} from 'react'
import './MainDashboard.scss'
import { Paper, Divider } from '@mui/material'
import { AiOutlineMore } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa';
import { BsWallet2 } from 'react-icons/bs';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';
import { GrView, GrFormAdd } from 'react-icons/gr'
import { BiEdit } from 'react-icons/bi'
import IncomeChart from './IncomeChart'
import CustomTable from './CustomTable'
import VisitorStatistics from './VisitorStatistics';
import HospitalActivity from './HospitalActivity';
import { useDispatch, useSelector } from 'react-redux';
import {GetPatientInfo} from '../../Redux/PatientSlice'
import { AppDispatch, RootState } from '../../store';

interface DataType {
    patientName: string;
    age: number;
    address: string;
    admitDate: string;
    country: string;
    phoneNumber: string;
    dob: string;
    email: string;
    _id: string
}
const getFullDate = (date: string): string => {
    const dateAndTime = date.split('T');

    return dateAndTime[0].split('-').reverse().join('-');
};
const columns: ColumnsType<DataType> = [
    {
        title: 'patientName',
        dataIndex: 'patientName',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 100,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        width: 150,
    },
    {
        title: 'admitDate',
        dataIndex: 'admitDate',
        width: 150,
        render: ((date: string) => getFullDate(date))
    },
    {
        title: 'phoneNumber',
        dataIndex: 'phoneNumber',
        width: 140
    }
];


const MainDashboard = () => {
    const dispatch = useDispatch<AppDispatch>()
  const GetResponseData = useSelector((state: RootState) => state?.patient.GetPatientResponse)
  console.log(GetResponseData)
  useEffect(() => {
    dispatch(GetPatientInfo())
  }, [dispatch])
    let reportsData = GetResponseData?.data
    return (
        <div className="p-3">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <Paper elevation={0} className="dash--card p-3 mt-0">
                        <div className="d-flex p-3 align-items-center gap-3">
                            <div className="d-flex justify-content-center brandData">
                                <FaUserAlt className="braPndData-icon" />
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <span className="brandData-head">Total Patient</span>
                                <span className="brandData-no">215</span>
                            </div>
                        </div>
                        <Divider className="brandData-muiDivider" />
                        <div className="d-flex p-3 align-items-center gap-3">
                            <div className="d-flex justify-content-center brandData">
                                <FaUserAlt className="brandData-icon" />
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <span className="brandData-head">Operations</span>
                                <span className="brandData-no">215</span>
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={0} className="dash--card p-3 mt-5">
                        <div className="d-flex p-3 align-items-center gap-3">
                            <div className="d-flex justify-content-center brandData">
                                <FaUserAlt className="brandData-icon" />
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <span className="brandData-head">Total Patient</span>
                                <span className="brandData-no">215</span>
                            </div>
                        </div>
                        <Divider className="brandData-muiDivider" />
                        <div className="d-flex p-3 align-items-center gap-3">
                            <div className="d-flex justify-content-center brandData">
                                <FaUserAlt className="brandData-icon" />
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <span className="brandData-head">Operations</span>
                                <span className="brandData-no">215</span>
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={0} className="dash--card p-3 mt-5">
                        <div className="d-flex p-3 align-items-center gap-3">
                            <div className="d-flex justify-content-center brandData">
                                <FaUserAlt className="brandData-icon" />
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <span className="brandData-head">Total Patient</span>
                                <span className="brandData-no">215</span>
                            </div>
                        </div>
                        <Divider className="brandData-muiDivider" />
                        <div className="d-flex p-3 align-items-center gap-3">
                            <div className="d-flex justify-content-center brandData">
                                <FaUserAlt className="brandData-icon" />
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <span className="brandData-head">Operations</span>
                                <span className="brandData-no">215</span>
                            </div>
                        </div>
                    </Paper>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                    <Paper className="revenueDash p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <div className="revenueDash-font">Total Revenue</div>
                            </div>
                            <div className="d-flex gap-3 align-items-center">
                                <div className='revenueDash-show d-flex align-items-center justify-content-center'>w</div>
                                <div className='revenueDash-show  d-flex align-items-center justify-content-center'>m</div>
                                <div className='revenueDash-show  d-flex align-items-center justify-content-center'>y</div>
                                <div><AiOutlineMore className='revenueDash-icon' /></div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                                <Paper className="revenueMenu-operation">
                                    <div className="d-flex justify-content-start align-items-start flex-column p-3">
                                        <div className='revenueMenu-font d-flex align-items-center gap-2'>
                                            <BsWallet2 /><span>7,12,326$</span>
                                        </div>
                                        <div className="revenueMenu-income">
                                            <p>Operation Income</p>
                                        </div>
                                    </div>
                                </Paper>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <Paper className="revenueMenu-pharm">
                                    <div className="d-flex justify-content-start align-items-start flex-column p-3">
                                        <div className='revenueMenu-font d-flex align-items-center gap-2'>
                                            <div>
                                                <BsWallet2 />
                                            </div>
                                            <div>
                                                <span>7,12,326$</span>
                                            </div>
                                        </div>
                                        <div className="revenueMenu-income">
                                            <p>Operation Income</p>
                                        </div>
                                    </div>
                                </Paper>
                            </div>
                            <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                                <Paper className="revenueMenu-hosp">
                                    <div className="d-flex justify-content-start align-items-start flex-column p-3">
                                        <div className='revenueMenu-font  d-flex align-items-center gap-2 '>
                                            <div>
                                                <BsWallet2 />
                                            </div>
                                            <div>
                                                <span>7,12,326$</span>
                                            </div>
                                        </div>
                                        <div className="revenueMenu-income">
                                            <p>Operation Income</p>
                                        </div>
                                    </div>
                                </Paper>
                            </div>
                        </div>
                        <div className="chartBar-container">
                            <IncomeChart />
                        </div>
                    </Paper>
                </div>
                <div className='row mt-4'>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <Paper className="revenueDash p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="revenueDash-font">Total Revenue</div>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <div className='revenueDash-show d-flex align-items-center justify-content-center'>w</div>
                                    <div className='revenueDash-show  d-flex align-items-center justify-content-center'>m</div>
                                    <div className='revenueDash-show  d-flex align-items-center justify-content-center'>y</div>
                                    <div><AiOutlineMore className='revenueDash-icon' /></div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <VisitorStatistics />
                            </div>
                        </Paper>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <Paper>
                            <div className="p-3">
                                <div className="d-flex p-3">
                                    <div className="revenueDash-font">Hospital Activities</div>
                                </div>
                                <div className=''>
                                    <HospitalActivity activities='HospitalActivity' reportsData={[]} />
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
                <div>
                    <Paper className="patient-table mt-3">
                        <div className="d-flex justify-content-between align-items-center mt-3 p-3">
                            <div>
                                <div className="revenueDash-font">Patient Status</div>
                            </div>
                            <div className="d-flex gap-3 align-items-center">
                                <div><AiOutlineMore className='revenueDash-icon' /></div>
                            </div>
                        </div>
                        <Table columns={columns} dataSource={reportsData} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
                        {/* <CustomTable /> */}
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default MainDashboard