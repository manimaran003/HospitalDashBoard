import React, { useState } from 'react'
import './LoginPage.scss';
import doctorImage from '../../Assets/doctor-medicine.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {  useNavigate } from 'react-router-dom';
import SigninComponent from './SigninComponent';
const LoginPage = () => {
    interface Signup {
        username: string,
        password: string,
        email: string
    }
    interface Signin {
        SigninPassword: string,
        SigninEmail: string
    }


    const signupSchema = Yup.object().shape({
        email: Yup.string()
            .email()
            .required('Enter valid email-id'),
        username: Yup.string().required('Please enter user name'),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            )
            .required("Password is required"),
    })
    const navigate=useNavigate()

    const [show, setShow] = useState<Boolean>(false)
    const GotoSignUp = (state: Boolean) => {
        setShow(state)
    }
    const GotoLogin = () => {
        setShow(true)
    }
    const handleLoginSubmit = (data: Signin) => {
        console.log("signin", data)
        navigate("/dashboard")
        window.location.reload();
    }

    const handleSignUpSubmit = (values: Signup) => {
        storeLocalStorage(values)
    }
    const storeLocalStorage=(values:Signup)=>{
        const localData=localStorage.getItem("signup")
        if(localData){
            let local=JSON.parse("signup")
            local.push(values)
        }
        else{
            localStorage.setItem("signup",JSON.stringify([values]))
        }
    }
  

    return (
        <div className="login--box">
            <div className='container-fluid login--container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 login--container-active'>
                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            <img src={doctorImage} alt="medicalImage" />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 login--container-inactive d-flex justify-content-center align-items-center'>
                        <div className='p-5 account--container d-flex justify-content-center'>
                            {
                                show === false ? (
                                    <Formik
                                        initialValues={{
                                            username: "",
                                            password: "",
                                            email: "",
                                        }}
                                        onSubmit={(data) => handleSignUpSubmit(data)}
                                        validationSchema={signupSchema}
                                    >
                                        {
                                            (formikSignup) =>
                                            (

                                                <Form onSubmit={formikSignup.handleSubmit}>
                                                    <div className='container'>
                                                        <h1 className="heading mt-3 mb-4">Create Account</h1>
                                                        <div className="d-flex flex-column gap-1 main--input">
                                                            <input placeholder='email' id="email" name="email" onChange={formikSignup.handleChange} />
                                                            <p className="error-text">{formikSignup.errors.email}</p>
                                                            <input placeholder='name' name="username" onChange={formikSignup.handleChange} />
                                                            <p className="error-text">{formikSignup.errors.username}</p>
                                                            <input placeholder='password' name="password" onChange={formikSignup.handleChange} />
                                                            <p className="error-text">{formikSignup.errors.password}</p>
                                                        </div>
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <button className="btn--container">
                                                                Sign up
                                                            </button>
                                                        </div>
                                                        <p className='login--text mt-3'>Already have an account <span onClick={GotoLogin}>Login</span>?</p>
                                                    </div>
                                                </Form>
                                            )
                                        }
                                    </Formik>
                                ) : (
                                    <SigninComponent loginData={handleLoginSubmit} gotosignup={GotoSignUp} />

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage