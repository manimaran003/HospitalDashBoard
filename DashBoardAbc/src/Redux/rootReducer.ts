import {combineReducers} from '@reduxjs/toolkit'
import userSlices from './AuthenticationSlice'
import DoctorSlice from './DoctorSlice'

const rootReducer = combineReducers({
    users:userSlices,
    Doctors:DoctorSlice
})

// export type RootState = ReturnType

export default rootReducer