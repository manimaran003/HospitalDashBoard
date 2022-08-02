import { createSlice } from "@reduxjs/toolkit";
import { Constants, ApiEndpoint } from "../Constants/Constant";
import Api from '../Constants/Instance'
import { AppDispatch } from "../store";
import {PatientModel} from '../TypeFile/TypeScriptType'

export const PostPatientInfo = (data:PatientModel ) => {
    return async (dispatch: AppDispatch) => {
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
}
export const GetPatientInfo = () => async (dispatch: AppDispatch) => {
    try {
        const GetPatientResponse = await Api({
            method: 'GET',
            url: Constants.BaseUrl + ApiEndpoint.GetPatientInfo,
        }).then((res) => {
            return res?.data?.patient
        })
        if (GetPatientResponse) {
            dispatch(getPatientResponse(GetPatientResponse))
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const UpdatePatientInfo = (data: any) => async (dispatch: AppDispatch) => {
    try {
        const UpdatePatientResponse = await Api({
            method: 'PATCH',
            url: Constants.BaseUrl + ApiEndpoint.UpdatePatientInfo,
            data
        }).then((res) => {
            return res?.data
        })
        if (UpdatePatientResponse) {
            dispatch(updatePatientResponse(UpdatePatientResponse))
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const DeletePatientInfo = (data: any) => async (dispatch: AppDispatch) => {
    try {
        const DeletePatientResponse = await Api({
            method: 'DELETE',
            url: Constants.BaseUrl + ApiEndpoint.DeletePatientInfo + `/:${data}`,
        }).then((res) => {
            return res?.data
        })
        if (DeletePatientResponse) {
            dispatch(DeletePatientReducer(DeletePatientResponse))
        }
    }
    catch (err) {
        console.log(err)
    }
}
const initialState = {
    PatientInfoResponse: {
        data: {}
    },
    GetPatientResponse: {
        data: []
    },
    updatePatientResponse: {
        data: ""
    },
    DeletePatientResponse: {
        data: ""
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
        },

        updatePatientResponse: (state, action) => {
            state.updatePatientResponse = {
                data: action.payload
            }
        },
        DeletePatientReducer: (state, action) => {
            state.DeletePatientResponse = {
                data: action.payload
            }
        }
    }
})
const { setPatientInfo, getPatientResponse, updatePatientResponse, DeletePatientReducer } = PatientSlice.actions
export default PatientSlice.reducer