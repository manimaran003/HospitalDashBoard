import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material'
import FormikControl from '../CustomComponent/FormikControl';
import { UpdatePatientInfo } from '../Redux/PatientSlice'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store'
import { UserContextType } from '../TypeFile/TypeScriptType'
import { userContext } from '../Context/userContext'
import { IoIosClose } from 'react-icons/io'
import './CustomPatientDelete.scss'
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
    // patientImage: string
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
    age: Yup.number()
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



const CustomPatientEditModal: React.FC<{ id: string; }> = ({ id }) => {
    const { EditedData } = React.useContext(userContext) as UserContextType
    const [checkError, setCheckError] = useState<boolean>(false)
    const [image, setImg] = useState("")
    const dispatch = useDispatch<AppDispatch>()
    const UpdatePatientResponse = useSelector((state: RootState) => state?.patient.updatePatientResponse)
    const handleSubmit = (data: DoctorInfo) => {
        setCheckError(!checkError)
        console.log(data, "formikSubmit")
        dispatch(UpdatePatientInfo(data))
    }
    const [medium, setMedium] = useState({
        patientName: "",
        email: "",
        address: "",
        phoneNumber: "",
        country: "",
        dob: "",
        age: 0,
        admitDate: "",
        patientImage: ""
    })
    useEffect(() => {
        if (EditedData) {
            setMedium({
                patientName: "mani",
                email: "",
                address: "",
                phoneNumber: "",
                country: "",
                dob: "",
                age: 0,
                admitDate: "",
                patientImage: ""
            })
        }
    }, [EditedData])

    return (
        <div className="modal fade" id={id} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-md modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Patient</h5>
                        <IoIosClose data-bs-dismiss="modal" aria-label="Close" className="icons" />
                    </div>
                    <div className="modal-body p-3">
                        <Formik
                            initialValues={medium}
                            onSubmit={(data, { resetForm }) => {
                                setCheckError(!checkError)
                                console.log(data, "formikSubmit")
                                dispatch(UpdatePatientInfo(data))
                                resetForm()
                            }}
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
                                                    value={formik.values.patientName}
                                                    name="patientName"
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.patientName && Boolean(formik.errors.patientName)}
                                                    helperText={formik.touched.patientName && formik.errors.patientName}
                                                    imgData={image}
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
export default CustomPatientEditModal