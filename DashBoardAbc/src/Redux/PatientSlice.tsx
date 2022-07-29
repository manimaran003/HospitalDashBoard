import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Constants, ApiEndpoint } from "../Constants/Constant";
import Api from '../Constants/Instance'

export const PostPatientInfo = (data: any) => async (dispatch: (arg0: any) => void) => {
    try {
        const PatientInfoResponse = await Api({
            method: 'POST',
            url: Constants.BaseUrl + ApiEndpoint.PostPatientInfo,
            data
        }).then((res) => {
            return res.data
        })
        if (PatientInfoResponse) {
            dispatch(setPatientInfo(PatientInfoResponse))
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const GetPatientInfo = () => async (dispatch: (arg0: any) => void) => {
    try {
        const GetPatientResponse = await Api({
            method: 'GET',
        url: Constants.BaseUrl + ApiEndpoint.GetPatientInfo,
        }).then((res) => {
            return res.data
        })
        if (GetPatientResponse) {
            dispatch(getPatientResponse(GetPatientResponse))
        }
    }
    catch (err) {

    }
}
const initialState = {
    PatientInfoResponse: {
        data: {}
    },
    GetPatientResponse: {
        data: []
    }
}
const PatientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {
        setPatientInfo: (state, action) => {
            state.PatientInfoResponse = {
                data: action.payload
            }
        },
        getPatientResponse: (state, action) => {
            state.GetPatientResponse = {
                data: action.payload
            }
        }
    }
})
const { setPatientInfo, getPatientResponse } = PatientSlice.actions
export default PatientSlice.reducer