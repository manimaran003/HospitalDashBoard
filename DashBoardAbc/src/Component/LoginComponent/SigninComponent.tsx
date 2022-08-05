import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { LoginAction } from '../../Redux/AuthenticationSlice';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { userContext } from '../../Context/userContext';

import { Signin, UserContextType } from '../../TypeFile/TypeScriptType';
import { useNavigate } from 'react-router-dom';
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
const SigninComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { AuthTool } = React.useContext(userContext) as UserContextType
    const LoginResponseData = useSelector((state: RootState) => state?.users.LoginResponse?.data)
    const handleLoginSubmit = (values: Signin) => {
        dispatch(LoginAction(values, navigate))
    }
    const goToSignUp = () => {
        AuthTool(false)
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
                                <input placeholder='email' id="SigninEmail" name="email" onChange={formik.handleChange} data-testid="email" />
                                <p className="error-text" data-testid="error-test1">{formik.errors.email}</p>
                                <input placeholder='password' name="password" onChange={formik.handleChange} data-testid="password" />
                                <p className="error-text" data-testid="error-test2">{formik.errors.password}</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn--container" type="submit">
                                    Sign in
                                </button>
                            </div>
                            <p className='login--text mt-3'>Dont't have an account <span onClick={goToSignUp}>Signup</span>?</p>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default SigninComponent