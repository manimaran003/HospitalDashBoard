import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material'
import FormikControl from '../CustomComponent/FormikControl';
import { PostPatientInfo } from '../Redux/PatientSlice'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store'
import { Agent } from 'https';
interface CountryOption {
    id: string,
    key: string,
    data: string
}
interface specialistDoctor {
    id: string,
    key: string,
    data: string
}
interface DoctorInfo {
    email: string,
    patientName: string,
    address: string,
    phoneNumber: string,
    dob: string,
    age: number
    country: string,
    patientImage: string
}
const signinSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Enter valid email-id'),
    patientName: Yup.string()
        .required("name is required"),
    address: Yup.string()
        .required("address is required"),
    phoneNumber: Yup.string()
        .required("phone number is required"),
    country: Yup.string()
        .required("country is required"),
    patientImage: Yup.string()
        .required("image is required"),
    dob: Yup.string()
        .required("Dob is required"),
    age: Yup.string()
        .required("number is required"),
    admitDate: Yup.string()
        .required("admitDate is required"),

})

const CountryOptions: CountryOption[] = [
    { id: "1", key: "Tamilnadu", data: "Tamilnadu" },
    { id: "2", key: "Kolkata", data: "Kolkata" },
    { id: "3", key: "Kerala", data: "Kerala" },
]

const specialistData: specialistDoctor[] = [
    { id: "1", key: "Dentist", data: "Dentist" },
    { id: "2", key: "Gaselogist", data: "Gaselogist" },
    { id: "3", key: "Neuro", data: "Neuro" },
]


const CustomPatientAddModal: React.FC<{ id: string }> = ({ id }) => {
    const [img, setImg] = useState("")
    const [checkError, setCheckError] = useState<Boolean>(false)
    const dispatch = useDispatch<AppDispatch>()
    const PostResponseData = useSelector((state: RootState) => state?.Doctors.DoctorInfoResponse)
    const handleSubmit = (data: DoctorInfo) => {
        setCheckError(!checkError)
        dispatch(PostPatientInfo(data))
    }
    return (
        <div className="modal fade" id={id} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Patient</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-3">
                        <Formik
                            initialValues={{
                                patientName: "",
                                email: '',
                                address: "",
                                phoneNumber: "",
                                country: "",
                                patientImage: "",
                                dob: "",
                                age: 0,
                                admitDate: ""
                            }}
                            onSubmit={(data) => handleSubmit(data)}

                            validationSchema={signinSchema}
                        >

                            {(formik) => (
                                <Form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <FormikControl
                                                    control="upload"
                                                    name="patientImage"
                                                    type="file"
                                                    onChange={(event: any) => {
                                                        console.log(event.target.files)
                                                        let reader: any;
                                                        reader = new FileReader();
                                                        reader.onload = () => {
                                                            setImg(reader.result);
                                                        };
                                                        reader.readAsDataURL(event.target.files[0]);
                                                        console.log(reader)
                                                        formik.setFieldValue("patientImage", event.target.files[0].name);
                                                    }}
                                                    error={formik.errors.patientImage}

                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    label="Name"
                                                    name="patientName"
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.patientName && Boolean(formik.errors.patientName)}
                                                    helperText={formik.touched.patientName && formik.errors.patientName}

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
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormikControl
                                                    control="input"
                                                    label="Age"
                                                    name="age"
                                                    type="number"
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.age && Boolean(formik.errors.age)}
                                                    helperText={formik.touched.age && formik.errors.age}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormikControl
                                                    control="input"
                                                    label="AdmitDate"
                                                    name="admitDate"
                                                    type="date"
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.admitDate && Boolean(formik.errors.admitDate)}
                                                    helperText={formik.touched.admitDate && formik.errors.admitDate}
                                                />
                                            </Grid>
                                        </Grid>
                                        <div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center gap-3 mt-4'>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button className="btn btn-secondary" data-bs-dismiss={`${checkError ? "modal" : ""}`} aria-label="Close">
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
    )
}
export default CustomPatientAddModal