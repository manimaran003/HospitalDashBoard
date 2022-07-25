import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

interface Signin {
    email: string,
    password: string
}
interface Signup {
    username: string,
    password: string,
    email: string
}
const signinSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Enter valid email-id'),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Password is required"),
})
const SigninComponent: React.FC<{ loginData: (state: Signin) => void, gotosignup: (state: Boolean) => void }> = (props) => {
    const handleLoginSubmit = (values: Signin) => {
        getLocalStorage(values)
        props.loginData(values)
    }
    const getLocalStorage = (values: Signin) => {
        let data: any = localStorage.getItem("signup")
        let dataStorage = JSON.parse(data)
        if (dataStorage) {
            let filterData = dataStorage.find((val: Signup) => val.email === values.email)
            console.log(filterData)
        }
    }
    const GotoSignUp = () => {
        props.gotosignup(false)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    password: '',
                    email: ''
                }}
                onSubmit={(values) =>
                    handleLoginSubmit(values)
                }
                validationSchema={signinSchema}
            >

                {(formik) => (

                    <Form onSubmit={formik.handleSubmit}>
                        <div className='container'>
                            <h1 className="heading mt-3 mb-4">Signin Account</h1>
                            <div className="d-flex flex-column gap-3 main--input">
                                <input placeholder='email' id="SigninEmail" name="email" onChange={formik.handleChange} />
                                <p className="error-text">{formik.errors.email}</p>
                                <input placeholder='password' name="password" onChange={formik.handleChange} />
                                <p className="error-text">{formik.errors.password}</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn--container">
                                    Sign in
                                </button>
                            </div>
                            <p className='login--text mt-3'>Dont't have an account <span onClick={GotoSignUp}>Signup</span>?</p>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default SigninComponent