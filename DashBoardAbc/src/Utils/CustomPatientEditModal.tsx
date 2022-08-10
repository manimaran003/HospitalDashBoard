import React, { useEffect, useState } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import FormikControl from '../CustomComponent/FormikControl';
import { UpdatePatientInfo } from '../Redux/PatientSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { UserContextType } from '../TypeFile/TypeScriptType';
import { userContext } from '../Context/userContext';
import { IoIosClose } from 'react-icons/io';
import { PatientModel } from '../TypeFile/TypeScriptType';
import { GetPatientById } from '../Redux/PatientSlice';
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

const signinSchema = Yup.object().shape({
  email: Yup.string().email().required('Enter valid email-id'),
  patientName: Yup.string().required('name is required'),
  address: Yup.string().required('address is required'),
  phoneNumber: Yup.string().required('phone number is required'),
  country: Yup.string().required('country is required'),
  patientImage: Yup.string().required('image is required'),
  dob: Yup.string().required('Dob is required'),
  ageField: Yup.number().required('number is required'),
  admitDate: Yup.string().required('admitDate is required')
});

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

const CustomPatientEditModal: React.FC<{ id: string }> = ({ id }) => {
  const { EditedData } = React.useContext(userContext) as UserContextType;
  const [checkError, setCheckError] = useState<boolean>(false);
  const [image, setImg] = useState(EditedData?.patientImage);
  const GetPateintData = useSelector((state: RootState) => state?.patient.GetOneResponse);
  const reportsData = GetPateintData?.data;
  console.log('reports', reportsData);
  const dispatch = useDispatch<AppDispatch>();
  const UpdatePatientResponse = useSelector(
    (state: RootState) => state?.patient.updatePatientResponse
  );
  const handleSubmit = (data: PatientModel) => {
    console.log(data);
    const formdata = new FormData();
    formdata.append('patientImage', data?.patientImage);
    formdata.append('dob', data?.dob);
    formdata.append('country', data?.country);
    formdata.append('address', data?.address);
    formdata.append('admitDate', data?.admitDate);
    formdata.append('phoneNumber', data?.phoneNumber);
    formdata.append('email', data?.email);
    formdata.append('ageField', data?.ageField);
    formdata.append('patientName', data?.patientName);
    setCheckError(!checkError);
    dispatch(UpdatePatientInfo(formData));
  };

  const initial = {
    patientName: EditedData?.patientName,
    email: EditedData?.email,
    address: EditedData?.address,
    phoneNumber: EditedData?.phoneNumber,
    country: EditedData?.country,
    patientImage: EditedData?.patientImage,
    dob: EditedData?.dob,
    ageField: EditedData?.ageField,
    admitDate: EditedData?.admitDate
  };
  console.log(initial);

  useEffect(() => {
    dispatch(GetPatientById(EditedData?._id));
  }, [dispatch]);

  return (
    <div
      className="modal fade"
      id={id}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false">
      <div className="modal-dialog modal-md modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Patient
            </h5>
            <IoIosClose data-bs-dismiss="modal" aria-label="Close" className="icons" />
          </div>
          <div className="modal-body p-3">
            <Formik
              initialValues={initial}
              onSubmit={(data) => handleSubmit(data)}
              validationSchema={signinSchema}>
              {(props: FormikProps<PatientModel>) => {
                const {
                  values,
                  touched,
                  errors,
                  handleBlur,
                  handleChange,
                  isSubmitting,
                  setFieldValue
                } = props;
                return (
                  <Form>
                    <div>
                      <Grid container>
                        <Grid item xs={12}>
                          <FormikControl
                            control="upload"
                            name="patientImage"
                            type="file"
                            onChange={(event: any) => {
                              console.log(event.target.files);
                              let reader: any;
                              reader = new FileReader();
                              reader.onload = () => {
                                setImg(reader.result ? reader.result : EditedData?.patientImage);
                              };
                              reader.readAsDataURL(event.target.files[0]);
                              setFieldValue('patientImage', event.target.files[0]);
                            }}
                            imgData={image}
                            error={errors.patientImage}
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
                            value={values.patientName}
                            name="patientName"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.patientName && Boolean(errors.patientName)}
                            helperText={touched.patientName && errors.patientName}
                            test="err1"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikControl
                            control="input"
                            type="email"
                            label="Email"
                            name="email"
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            test="err2"
                            value={values.email}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikControl
                            control="input"
                            type="text"
                            label="Address"
                            name="address"
                            onChange={handleChange}
                            error={touched.address && Boolean(errors.address)}
                            helperText={touched.address && errors.address}
                            test="err3"
                            value={values.address}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikControl
                            control="input"
                            type="text"
                            label="PhoneNumber"
                            name="phoneNumber"
                            onChange={handleChange}
                            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                            helperText={touched.phoneNumber && errors.phoneNumber}
                            test="err4"
                            value={values.phoneNumber}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikControl
                            control="select"
                            label="Country"
                            name="country"
                            options={CountryOptions}
                            onChange={handleChange}
                            error={touched.country && Boolean(errors.country)}
                            helperText={touched.country && errors.country}
                            test="err5"
                            value={values.country}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikControl
                            control="input"
                            label="Dob"
                            name="dob"
                            type="date"
                            onChange={handleChange}
                            error={touched.dob && Boolean(errors.dob)}
                            helperText={touched.dob && errors.dob}
                            test="err6"
                            value={values.dob}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikControl
                            control="input"
                            label="Age"
                            name="ageField"
                            type="number"
                            onChange={handleChange}
                            error={touched.ageField && Boolean(errors.ageField)}
                            helperText={touched.ageField && errors.ageField}
                            test="err7"
                            value={values.ageField}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikControl
                            control="input"
                            label="AdmitDate"
                            name="admitDate"
                            type="date"
                            onChange={handleChange}
                            error={touched.admitDate && Boolean(errors.admitDate)}
                            helperText={touched.admitDate && errors.admitDate}
                            test="err8"
                            value={values.admitDate}
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
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomPatientEditModal;
