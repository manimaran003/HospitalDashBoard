
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid, Box, Paper } from '@mui/material'
import FormikControl from '../../CustomComponent/FormikControl';

const UpdateDoctorComponent = () => {
    const signinSchema = Yup.object().shape({
        email: Yup.string()
            .email()
            .required('Enter valid email-id'),
        doctorName: Yup.string()
            .required("name is required"),
        address: Yup.string()
            .required("address is required"),
        phoneNumber: Yup.string()
            .required("phone number is required"),
        country: Yup.string()
            .required("country is required"),
        specialist: Yup.string()
            .required("speciality is required"),
        doctorImage: Yup.string()
            .required("image is required"),
        dob: Yup.string()
            .required("Dob is required")
    })
    return (
        <div>
            <Paper className="mt-3">
                <Box>
                <Formik
                            initialValues={{
                                doctorName: "",
                                email: '',
                                address: "",
                                phoneNumber: "",
                                specialist: "",
                                country: "",
                                doctorImage: "",
                                dob: ""

                            }}
                            onSubmit={(data) => {
                                console.log(data)
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
                                                    name="doctorImage"
                                                    type="file"
                                                    onChange={(event: any) => {
                                                        console.log(event.target.files)
                                                        formik.setFieldValue("doctorImage", event.target.files[0].name);
                                                    }}
                                                    error={formik.errors.doctorImage}

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
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.country && Boolean(formik.errors.country)}
                                                    helperText={formik.touched.country && formik.errors.country}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormikControl
                                                    control="select"
                                                    label="Speciality"
                                                    name="specialist"
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.specialist && Boolean(formik.errors.specialist)}
                                                    helperText={formik.touched.specialist && formik.errors.specialist}
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
                                        </Grid>
                                        <div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center gap-3 mt-4'>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button className="btn btn-secondary">
                                            save
                                        </button>
                                    </div>


                                </Form>
                            )}

                        </Formik>
                </Box>
            </Paper>
        </div>
    )
}

export default UpdateDoctorComponent