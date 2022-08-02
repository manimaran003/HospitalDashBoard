import { createSlice } from "@reduxjs/toolkit";
import { Constants, ApiEndpoint } from "../Constants/Constant";
import Api from '../Constants/Instance'
import { AppDispatch } from "../store";

export const PostDoctorInfo = (data: any) =>{
   return async(dispatch:AppDispatch)=>{
    try {
        const PostDoctorResponse = await Api({
            method: 'POST',
            url: Constants.BaseUrl + ApiEndpoint.PostDoctorInfo,
            data
        }).then((res) => {
            return res.data;
        })
        if (PostDoctorResponse) {
            dispatch(setPostInfo(PostDoctorResponse))
            dispatch(GetDoctorInfo())
        }
    }
    catch (err) {
        console.log(err)
    }
   }
}
export const GetDoctorInfo = () => async (dispatch:AppDispatch) => {
    try {
        const GetDoctorResponse = await Api({
            method: 'GET',
            url: Constants.BaseUrl + ApiEndpoint.GetDoctorInfo,
        }).then((res) => {
            return res?.data?.doctorUser;
        })
        if (GetDoctorResponse) {
            console.log(GetDoctorResponse)
            dispatch(setDoctorInfo(GetDoctorResponse))
        }
    }
    catch (err) {
        console.log(err)
    }
}
const initialState = {
    DoctorInfoResponse: {
        data: {}
    },
    GetDoctorResponse: {
        data: []
    }

}
const DoctorSlice = createSlice({
    name: "Doctors",
    initialState,
    reducers: {
        setPostInfo: (state, action) => {
            state.DoctorInfoResponse = {
                data: action.payload
            }
        },
        setDoctorInfo: (state, action) => {
            state.GetDoctorResponse = {
                data: action.payload
            }
        }
    }
})
const { setDoctorInfo, setPostInfo } = DoctorSlice.actions
export default DoctorSlice.reducer