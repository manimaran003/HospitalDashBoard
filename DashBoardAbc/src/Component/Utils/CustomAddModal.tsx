import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl'
import { Grid } from '@mui/material'

interface Signin {
    email: string,
}
interface Add {
    username: string,
    password: string,
    email: string
}
interface CountryOptions {
    key: string,
    data: string
}
const signinSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Enter valid email-id'),
    name: Yup.string()
        .required("name is required"),
    address: Yup.string()
        .required("address is required"),
    phone: Yup.string()
        .required("phone number is required"),
})

const CountryOptions: CountryOptions[] = [
    { key: "option1", data: "tamilnadu" },
    { key: "option1", data: "tamilnadu" },
    { key: "option1", data: "tamilnadu" },
    { key: "option1", data: "tamilnadu" }
]


const CustomAddModal: React.FC<{ id: string }> = ({ id }) => {
    return (
        <div className="modal fade" id={id} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Dcotor</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-3">
                        <Formik
                            initialValues={{
                                name: "",
                                email: '',
                                address: "",
                                phone: ""
                            }}
                            onSubmit={(values) =>
                                console.log(values, "james")
                            }
                            validationSchema={signinSchema}
                        >

                            {(formik) => (
                                <Form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    label="Name"
                                                    name="name"
                                                    onChange={formik.handleChange}
                                                    error={
                                                        formik.errors.name
                                                    }

                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormikControl
                                                    control="input"
                                                    type="email"
                                                    label="Email"
                                                    name="email"
                                                    onChange={formik.handleChange}
                                                    error={
                                                        formik.errors.email
                                                    }

                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    label="Address"
                                                    name="address"
                                                    onChange={formik.handleChange}
                                                    error={
                                                        formik.errors.address
                                                    }
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    label="PhoneNumber"
                                                    name="phone"
                                                    onChange={formik.handleChange}
                                                    error={
                                                        formik.errors.phone
                                                    }

                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormikControl
                                                    control="select"
                                                    label="Country"
                                                    name="country"
                                                    options={CountryOptions}
                                                    onChange={formik.handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormikControl
                                                    control="select"
                                                    label="Speciality"
                                                    name="Speciality"
                                                    onChange={formik.handleChange}
                                                    options={CountryOptions}
                                                />
                                            </Grid>
                                        </Grid>

                                    </div>
                                    <div className='d-flex align-items-center justify-content-center gap-3 mt-4'>
                                        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button> */}
                                        <button className="btn btn-secondary">
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
export default CustomAddModal