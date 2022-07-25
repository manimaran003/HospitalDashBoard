import { Navigate, Outlet } from 'react-router-dom'
import TokenService from '../Constants/token.service'
const useAuth = () => {
   const user=sessionStorage.getItem('accessToken')
   console.log(user)
  if (user) {
    return true
  } else {
    return false
  }
}

const ProtectedRoute = (props: any) => {

  const auth = useAuth()

  return auth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;