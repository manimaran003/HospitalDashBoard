import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import './AllPatientsView.scss'
import 'antd/dist/antd.css';
import { GrView } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: 150,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            width: 150,
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'lastVisit',
            dataIndex: 'lastVisit',
        },
        {
            title: 'number',
            dataIndex: 'number',
        },
        {
            title: 'patientId',
            dataIndex: 'patientId',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (_, record: DataType) => {
                return (
                    <div>
                        <GrView onClick={() => handleViewProfile(record)} />
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