import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect } from 'react';
import './AllPatientsView.scss'
import 'antd/dist/antd.css';
import { GrView, GrFormAdd } from 'react-icons/gr'
import { BiEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import CustomAddModal from '../../Utils/CustomAddModal';
import CustomPatientAddModal from '../../Utils/CustomPatientAddModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { GetPatientInfo } from '../../Redux/PatientSlice';


interface DataType {
    key: React.Key;
    patientId: string
    name: string;
    age: number;
    address: string;
    status: string;
    lastVisit: string;
    number: number
}


const AllPatientsView: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const GetResponseData = useSelector((state: RootState) => state?.Doctors.DoctorInfoResponse)
    console.log(GetResponseData)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(GetPatientInfo())
    }, [dispatch])

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
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
            title: 'lastVisit',
            dataIndex: 'lastVisit',
            width: 150,
        },
        {
            title: 'number',
            dataIndex: 'number',
            width: 140
        },
        {
            title: 'patientId',
            dataIndex: 'patientId',
            width: 100
        },
        {
            title: 'Action',
            dataIndex: '',
            width: 100,
            key: 'x',
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
                            <BiEdit data-bs-toggle="modal" data-bs-target="#exampleModal" />
                        </div>
                        <CustomAddModal id={"exampleModal"} />
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

    const data: DataType[] = [
        {
            key: '1',
            name: "max",
            age: 23,
            address: "no2",
            status: "colom",
            lastVisit: "33",
            patientId: "234",
            number: 23232323
        },
        {
            key: '2',
            name: "max",
            age: 23,
            address: "no2",
            status: "colom",
            lastVisit: "33",
            patientId: "234",
            number: 23232323
        },
        {
            key: '3',
            name: "max",
            age: 23,
            address: "no2",
            status: "colom",
            lastVisit: "33",
            patientId: "234",
            number: 23232323
        },
        {
            key: '4',
            name: "max",
            age: 23,
            address: "no2",
            status: "colom",
            lastVisit: "33",
            patientId: "234",
            number: 23232323
        },
        {
            key: '4',
            name: "max",
            age: 23,
            address: "no2",
            status: "colom",
            lastVisit: "33",
            patientId: "234",
            number: 23232323
        },
        {
            key: '4',
            name: "max",
            age: 23,
            address: "no2",
            status: "colom",
            lastVisit: "33",
            patientId: "234",
            number: 23232323
        }
    ]
    return (
        <div className=''>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        </div>
    );
}
export default AllPatientsView;
