import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const user=localStorage.getItem('accessToken')
  if(user){
    return true
  } else {
    return false
  }
}

const  PublicRoute=(props:any) =>{

  const auth=useAuth()

  return auth?<Navigate to="/dashboard"/>: <Outlet/>
}

export default PublicRoute;