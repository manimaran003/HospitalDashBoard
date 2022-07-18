// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';
// import { Constants, ApiEndpoint } from "../Constant";

// export interface Signup {
//     username: string,
//     password: string,
//     email: string
// }

// interface Signin {
//     email: string,
//     password: string
// }

// export const SignupAction = createAsyncThunk(
//     'users/fetchById',
//     async (data: Signup) => {
//         try {
//             const loginResponse = await axios({
//                 method: 'POST',
//                 url: Constants.BaseUrl + ApiEndpoint.SignupAuthentication,
//                 data
//             }).then((res) => {
//                 return res.data
//             });
//             if (loginResponse) {
//                 return loginResponse
//             }
//         }
//         catch (err) {

//         }
//     }
// )

// export const LoginAction = createAsyncThunk(
//     'users/signin',
//     async (data: Signin) => {
//         console.log("data")
//         try {
//             const loginResponse = await axios({
//                 method: 'POST',
//                 url: Constants.BaseUrl + ApiEndpoint.LoginAuthentication,
//                 data
//             }).then((res) => {
//                 console.log(res)
//                 return res.data
//             });
//             if (loginResponse) {
//                 return loginResponse
//             }
//         }
//         catch (err) {

//         }
//     }
// )

// const initialState = {
//     SignupResponse: {
//         data: {}
//     },
//     LoginResponse: {
//         data: {}
//     }
// }

// const usersSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//         LoginAction(state, action) {
//             console.log("staes",state, action)
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(SignupAction.fulfilled, (state, action) => {
//             state.SignupResponse =
//             {
//                 data: action.payload
//             }
//         })
//         builder.addCase(LoginAction.fulfilled, (state, action) => {
//             state.LoginResponse =
//             {
//                 data: action.payload
//             }
//         })
//     },
// })

// export default usersSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from 'axios';
import { Constants, ApiEndpoint } from "../Constants/Constant";
import TokenService from '../Constants/token.service'

export const SignupAction = (data: any) => async (dispatch: (arg0: any) => void) => {
    try {
        const SignupResponse = await axios({
            method: 'POST',
            url: Constants.BaseUrl + ApiEndpoint.SignupAuthentication,
            data
        }).then((res) => {
            console.log(res,"response")
            return res.data
        });
        if (SignupResponse) {
            TokenService.setSignupUser(SignupResponse?.token)
            dispatch(setSignUpSuccess(SignupResponse))
        }
    }
    catch (err) {
        console.log(err)
        const error = err as any
        let { message } = error?.response?.data
        console.log(message)
        dispatch(setSignupError(message))
    }
}

export const LoginAction = (data: any,navigate:any) => async (dispatch: (arg0: any) => void) => {
    console.log(data)
    try {
        const LoginResponse = await axios({
            method: 'POST',
            url: Constants.BaseUrl + ApiEndpoint.LoginAuthentication,
            data,

        }).then((res) => {
            console.log(res)
            return res.data
        });
        if (LoginResponse) {
            if (LoginResponse.token && LoginResponse.refreshToken) {
                TokenService.setAccessToken(LoginResponse?.token)
                TokenService.setRefreshToken(LoginResponse?.refreshToken)
                navigate('/dashboard')
            }
            dispatch(setLoginSuccess(LoginResponse))
        }
    }
    catch (err) {
        console.log(err)
        const error = err as any
        let { message } = error?.response?.data
        console.log(message)
        dispatch(setSignupError(message))
    }
}


const initialState = {
    SignupResponse: {
        data: {}
    },
    LoginResponse: {
        data: {}
    },
    signupError: ""
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setSignUpSuccess: (state, action) => {
            console.log(state, action)
            state.SignupResponse = {
                data: action.payload
            }
        },
        setLoginSuccess: (state, action) => {
            console.log(state, action)
            state.LoginResponse = {
                data: action.payload
            }
        },
        setSignupError: (state, action) => {
            console.log(state, action)
            state.signupError = action.payload
        },
        tweetStoreReseted: (state) => {
            console.log("reset", state)
            state.signupError = ""
        },
    },
})

export const { setSignUpSuccess, setLoginSuccess, setSignupError, tweetStoreReseted } = usersSlice.actions

export default usersSlice.reducer

