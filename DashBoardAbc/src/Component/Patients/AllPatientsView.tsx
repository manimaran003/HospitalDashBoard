import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import './AllPatientsView.scss'
import 'antd/dist/antd.css';
import { GrView, GrFormAdd } from 'react-icons/gr'
import { BiEdit } from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import { Modal, Button, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CustomAddModal from '../../Utils/CustomAddModal';
import CustomPatientAddModal from '../../Utils/CustomPatientAddModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { GetPatientInfo,DeletePatientInfo } from '../../Redux/PatientSlice';
import CustomPatientEditModal from '../../Utils/CustomPatientEditModal';


interface DataType {
    patientName: string;
    age: number;
    address: string;
    admitDate: string;
    country: string;
    phoneNumber: string;
    dob: string;
    email: string;
    _id: string;
    patientImage: string;
}
interface PatientModel {
    address: string
    admitDate: string
    age: number
    country: string
    dob: string
    email: string
    patientName: string
    phoneNumber: string
    _id: string,
    patientImage: string
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const AllPatientsView: React.FC = () => {
    const [EditData, setEditData] = useState<DataType>({
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
    const dispatch = useDispatch<AppDispatch>()
    const GetResponseData = useSelector((state: RootState) => state?.patient.GetPatientResponse)
    console.log(GetResponseData, "welcome")
    let reportsData = GetResponseData?.data
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(GetPatientInfo())
    }, [dispatch])
    const getFullDate = (date: string): string => {
        const dateAndTime = date.split('T');

        return dateAndTime[0].split('-').reverse().join('-');
    };
    const handleEditProfile = (record: DataType) => {
        setEditData(record)
    }
    const handleDeleteProfile=(record:DataType)=>{
        console.log(record)
        dispatch(DeletePatientInfo(record._id))
    }
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
        },
        {
            title: 'Action',
            dataIndex: '',
            width: 100,
            render: (_, record: DataType) => {
                return (
                    <div className='d-flex gap-3'>
                        <div>
                            <GrView onClick={() => handleViewProfile(record)} />
                        </div>
                        <div>
                            <GrFormAdd data-bs-toggle="modal" data-bs-target="#exampleModals" />
                            <CustomPatientAddModal id={"exampleModals"} />
                        </div>
                        <div>
                            <BiEdit data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditProfile(record)} />
                        </div>
                        <div>
                            <AiOutlineDelete onClick={() => handleDeleteProfile(record)} />
                        </div>
                    </div>

                )
            }
        },
    ];

    const handleViewProfile = (record: DataType) => {
        navigate("/dashboard/viewPatients", {
            state: record
        })
    }

    return (
        <div className=''>
            <Table columns={columns} dataSource={reportsData} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
            <CustomPatientEditModal id={"exampleModal"} editModal={EditData} />
        </div>
    );
}
export default AllPatientsView;
