import React, { useEffect, useCallback } from 'react';
import './AllDoctor.scss';
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { GetDoctorInfo } from '../../Redux/DoctorSlice';
import { DoctorProfile, UserContextType, DoctorEditType } from '../../TypeFile/TypeScriptType';
import CustomAddModal from '../../Utils/CustomAddModal';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CustomDoctorEdit from '../../Utils/CustomDoctorEdit';
import CustomDoctorDelete from '../../Utils/CustomDoctorDelete';
import { userContext } from '../../Context/userContext';
const AllDoctor = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = React.useState(false);
  const [edit, setEditId] = React.useState('');
  const { editDoctorModal } = React.useContext(userContext) as UserContextType;
  const handleClose = () => {
    setOpen(false);
  };
  const handleEditProfile = (record: DoctorEditType) => {
    editDoctorModal(record);
  };
  const handleDeleteProfile = (record: DoctorEditType) => {
    setEditId(record._id);
    setOpen(true);
  };
  const GetDoctorData = useSelector((state: RootState) => state?.Doctors.GetDoctorResponse);
  const reportsData = GetDoctorData?.data;
  console.log(reportsData);
  const getAllDoctorProfiles = useCallback(async () => {
    try {
      dispatch(GetDoctorInfo());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    getAllDoctorProfiles();
  }, [getAllDoctorProfiles]);

  return (
    <div className="w-100 mt-3 cursor-pointer">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
              <div className="w-100 h-100">
                <div className="w-48 h-100 rounded overflow-hidden shadow-lg d-flex justify-content-center align-items-center">
                  <div className="d-flex justify-content-center p-3 flex-column align-items-center">
                    <div>
                      <p className="add--icon-content">Add new Doctor</p>
                    </div>
                    <div className="add--icon">
                      <AddIcon data-bs-toggle="modal" data-bs-target="#exampleModal" />
                    </div>
                  </div>
                </div>
              </div>
              <CustomAddModal id={'exampleModal'} />
            </Grid>
            {reportsData?.length > 0 &&
              reportsData?.map((item: DoctorProfile) => {
                return (
                  <>
                    <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                      <div className="w-100" key={item.empId}>
                        <div className="w-48 rounded overflow-hidden shadow-lg">
                          <Link to={`/dashboard/ViewDoctor`} state={item}>
                            <div>
                              <div className="d-flex justify-content-center p-3">
                                <div className="rounded--image">
                                  <img className="" src={item?.doctorImage} alt="doc" />
                                </div>
                              </div>
                              <div className="px-6 py-4 card--content">
                                <div className="font-bold text-xl card--content-name">
                                  {item?.doctorName}
                                </div>
                                <span className="card--content-role">{item?.specialist}</span>
                                <div>
                                  <p className="card--content-address mt-2">{item.address}</p>
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div>
                            <Tooltip title="Edit" placement="top">
                              <IconButton>
                                <BiEdit
                                  className="icon--edit"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalEdit"
                                  onClick={() => handleEditProfile(item)}
                                />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete" placement="top">
                              <IconButton>
                                <AiOutlineDelete
                                  className="icon--delete"
                                  onClick={() => handleDeleteProfile(item)}
                                />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
      <CustomDoctorEdit id={'exampleModalEdit'} />
      <CustomDoctorDelete open={open} close={handleClose} edit={edit} />
    </div>
  );
};

export default AllDoctor;
