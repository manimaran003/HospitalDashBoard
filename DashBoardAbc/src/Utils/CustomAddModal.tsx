import React, { useState } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import FormikControl from '../CustomComponent/FormikControl';
import { PostDoctorInfo } from '../Redux/DoctorSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { IoIosClose } from 'react-icons/io';
import './CustomPatientDelete.scss';
interface CountryOption {
  id: string;
  key: string;
  data: string;
}
interface specialistDoctor {
  id: string;
  key: string;
  data: string;
}
interface DoctorInfo {
  email: string;
  doctorName: string;
  address: string;
  phoneNumber: string;
  dob: string;
  specialist: string;
  country: string;
  doctorImage: string;
}
const signinSchema = Yup.object().shape({
  email: Yup.string().email().required('Enter valid email-id'),
  doctorName: Yup.string().required('name is required'),
  address: Yup.string().required('address is required'),
  phoneNumber: Yup.string().required('phone number is required'),
  country: Yup.string().required('country is required'),
  specialist: Yup.string().required('speciality is required'),
  doctorImage: Yup.mixed().required('File is required'),
  dob: Yup.string().required('Dob is required')
});

const initial = {
  doctorName: '',
  email: '',
  address: '',
  phoneNumber: '',
  specialist: '',
  country: '',
  doctorImage: '',
  dob: ''
};

const CountryOptions: CountryOption[] = [
  { id: '1', key: 'Tamilnadu', data: 'Tamilnadu' },
  { id: '2', key: 'Kolkata', data: 'Kolkata' },
  { id: '3', key: 'Kerala', data: 'Kerala' }
];

const specialistData: specialistDoctor[] = [
  { id: '1', key: 'Dentist', data: 'Dentist' },
  { id: '2', key: 'Gaselogist', data: 'Gaselogist' },
  { id: '3', key: 'Neuro', data: 'Neuro' }
];

const CustomAddModal: React.FC<{ id: string }> = ({ id }) => {
  const [image, setImg] = useState('');
  const [checkError, setCheckError] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const PostResponseData = useSelector((state: RootState) => state?.Doctors.DoctorInfoResponse);
  const handleSubmit = (data: DoctorInfo) => {
    console.log(data);
    const formData = new FormData();
    formData.append('doctorName', 'lksld');
    formData.append('email', data?.email);
    formData.append('phoneNumber', data?.phoneNumber);
    formData.append('address', data?.address);
    formData.append('specialist', data?.specialist);
    formData.append('country', data?.country);
    formData.append('doctorImage', data?.doctorImage);
    formData.append('dob', data?.dob);
    console.log(formData);
    setCheckError(!checkError);
    dispatch(PostDoctorInfo(data));
  };
  return (
    <div className="modal fade" id={id} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-md modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Doctor
            </h5>
            <IoIosClose data-bs-dismiss="modal" aria-label="Close" className="icons" />
          </div>
          <div className="modal-body p-3">
            <Formik
              initialValues={initial}
              onSubmit={(data) => handleSubmit(data)}
              validationSchema={signinSchema}>
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  {/* <FormikCheckerComponent checkFormik={formik} countryData={CountryOptions} specialist={specialistData} schemaInitial={initial} patientAdder={false} /> */}
                  <div>
                    <Grid container>
                      <Grid item xs={12}>
                        <FormikControl
                          control="upload"
                          name="doctorImage"
                          type="file"
                          onChange={(event: any) => {
                            console.log('event', event);
                            formik.setFieldValue('doctorImage', event.target.files);
                            let reader: any;
                            reader = new FileReader();
                            console.log(reader);
                            reader.onload = () => {
                              setImg(reader.result);
                            };
                            if (event.target.files[0]) {
                              reader.readAsDataURL(event.target.files[0]);
                            }
                          }}
                          error={formik.errors.doctorImage}
                          imgData={image}
                          test="test1"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Name"
                          name="doctorName"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          error={formik.touched.doctorName && Boolean(formik.errors.doctorName)}
                          helperText={formik.touched.doctorName && formik.errors.doctorName}
                          test="err1"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="email"
                          label="Email"
                          name="email"
                          onChange={formik.handleChange}
                          error={formik.touched.email && Boolean(formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email}
                          test="err2"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Address"
                          name="address"
                          onChange={formik.handleChange}
                          error={formik.touched.address && Boolean(formik.errors.address)}
                          helperText={formik.touched.address && formik.errors.address}
                          test="err3"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="PhoneNumber"
                          name="phoneNumber"
                          onChange={formik.handleChange}
                          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                          test="err4"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="select"
                          label="Country"
                          name="country"
                          options={CountryOptions}
                          onChange={formik.handleChange}
                          error={formik.touched.country && Boolean(formik.errors.country)}
                          helperText={formik.touched.country && formik.errors.country}
                          test="err5"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="select"
                          label="Speciality"
                          name="specialist"
                          onChange={formik.handleChange}
                          options={specialistData}
                          error={formik.touched.specialist && Boolean(formik.errors.specialist)}
                          helperText={formik.touched.specialist && formik.errors.specialist}
                          test="err6"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          label="Dob"
                          name="dob"
                          type="date"
                          onChange={formik.handleChange}
                          error={formik.touched.dob && Boolean(formik.errors.dob)}
                          helperText={formik.touched.dob && formik.errors.dob}
                          test="err7"
                        />
                      </Grid>
                    </Grid>
                    <div></div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Cancel
                    </button>
                    <button
                      className="btn btn-secondary"
                      data-bs-dismiss={`${checkError ? 'modal' : ''}`}
                      aria-label="Close">
                      save
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomAddModal;
