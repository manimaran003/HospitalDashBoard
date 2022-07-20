import {combineReducers} from '@reduxjs/toolkit'
import userSlices from './AuthenticationSlice'

const rootReducer = combineReducers({
    users:userSlices
})

// export type RootState = ReturnType

export default rootReducer