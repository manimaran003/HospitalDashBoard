import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useCallback, useState } from 'react';
import './AllPatientsView.scss';
import 'antd/dist/antd.css';
import { GrView, GrFormAdd } from 'react-icons/gr';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import CustomPatientAddModal from '../../Utils/CustomPatientAddModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { GetPatientInfo } from '../../Redux/PatientSlice';
import CustomPatientEditModal from '../../Utils/CustomPatientEditModal';
import { UserContextType, DataType } from '../../TypeFile/TypeScriptType';
import { userContext } from '../../Context/userContext';
import CustomPatientDelete from '../../Utils/CustomPatientDelete';
import Pagination from '@mui/material/Pagination';
import PaginationHook from '../../Utils/PaginationHook';

const AllPatientsView: React.FC = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = React.useState(false);
  const { editModal } = React.useContext(userContext) as UserContextType;
  const dispatch = useDispatch<AppDispatch>();
  const GetResponseData = useSelector((state: RootState) => state?.patient.GetPatientResponse);
  const reportsData = GetResponseData?.data;
  const PerPage = 5;
  const count = Math.ceil(reportsData.length / PerPage);
  const datas = PaginationHook(reportsData, PerPage);
  const handleChange = (event: React.ChangeEvent<unknown>, p: number): void => {
    setPage(p);
    datas.jump(p);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const getAllPatientProfile = useCallback(async () => {
    try {
      dispatch(GetPatientInfo());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    getAllPatientProfile();
  }, [getAllPatientProfile]);
  const getFullDate = (date: string): string => {
    const dateAndTime = date.split('T');

    return dateAndTime[0].split('-').reverse().join('-');
  };
  const handleEditProfile = (record: DataType) => {
    editModal(record);
  };
  const handleDeleteProfile = (record: DataType) => {
    setOpen(true);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: 'patientName',
      dataIndex: 'patientName',
      width: 150
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 100
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: 150
    },
    {
      title: 'admitDate',
      dataIndex: 'admitDate',
      width: 150,
      render: (date: string) => getFullDate(date)
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
          <div className="d-flex gap-3">
            <div>
              <GrView onClick={() => handleViewProfile(record)} />
            </div>
            <div>
              <GrFormAdd data-bs-toggle="modal" data-bs-target="#exampleModals" />
              <CustomPatientAddModal id={'exampleModals'} />
            </div>
            <div>
              <BiEdit
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => handleEditProfile(record)}
              />
            </div>
            <div>
              <AiOutlineDelete onClick={() => handleDeleteProfile(record)} />
            </div>
          </div>
        );
      }
    }
  ];

  const handleViewProfile = (record: DataType) => {
    navigate('/dashboard/viewPatients', {
      state: record
    });
  };

  return (
    <div className="">
      <Table
        columns={columns}
        dataSource={datas?.currentData()}
        scroll={{ y: 240 }}
        pagination={false}
      />
      <Pagination
        count={count}
        page={page}
        variant="outlined"
        shape="rounded"
        className="mt-3 d-flex justify-content-end me-2"
        onChange={handleChange}
      />
      <CustomPatientEditModal id={'exampleModal'} />
      <CustomPatientDelete open={open} close={handleClose} />
    </div>
  );
};
export default AllPatientsView;
