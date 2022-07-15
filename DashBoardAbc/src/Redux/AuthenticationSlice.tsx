import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Constants, ApiEndpoint } from "../Constant";

export interface Signup {
    username: string,
    password: string,
    email: string
}

interface Signin {
    email: string,
    password: string
}

export const SignupAction = createAsyncThunk(
    'users/fetchById',
    async (data: Signup) => {
        try {
            const loginResponse = await axios({
                method: 'POST',
                url: Constants.BaseUrl + ApiEndpoint.SignupAuthentication,
                data
            }).then((res) => {
                return res.data
            });
            if (loginResponse) {
                return loginResponse
            }
        }
        catch (err) {

        }
    }
)

export const LoginAction = createAsyncThunk(
    'users/signin',
    async (data: Signin) => {
        console.log("data")
        try {
            const loginResponse = await axios({
                method: 'POST',
                url: Constants.BaseUrl + ApiEndpoint.LoginAuthentication,
                data
            }).then((res) => {
                console.log(res)
                return res.data
            });
            if (loginResponse) {
                return loginResponse
            }
        }
        catch (err) {

        }
    }
)

const initialState = {
    SignupResponse: {
        data: {}
    },
    LoginResponse: {
        data: {}
    }
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        LoginAction(state, action) {
            console.log("staes",state, action)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(SignupAction.fulfilled, (state, action) => {
            state.SignupResponse =
            {
                data: action.payload
            }
        })
        builder.addCase(LoginAction.fulfilled, (state, action) => {
            state.LoginResponse =
            {
                data: action.payload
            }
        })
    },
})

export default usersSlice.reducer