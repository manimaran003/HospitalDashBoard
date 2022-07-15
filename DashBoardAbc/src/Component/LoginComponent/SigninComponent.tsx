import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
interface Signin {
    SigninPassword: string,
    SigninEmail: string
}
interface Signup {
    username: string,
    password: string,
    email: string
}
const signinSchema = Yup.object().shape({
    SigninEmail: Yup.string()
        .email()
        .required('Enter valid email-id'),
    SigninPassword: Yup.string()
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
            let filterData = dataStorage.find((val: Signup) => val.email === values.SigninEmail)
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
                    SigninPassword: '',
                    SigninEmail: '',
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
                                <input placeholder='email' id="SigninEmail" name="SigninEmail" onChange={formik.handleChange} />
                                <p className="error-text">{formik.errors.SigninEmail}</p>
                                <input placeholder='password' name="SigninPassword" onChange={formik.handleChange} />
                                <p className="error-text">{formik.errors.SigninPassword}</p>
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