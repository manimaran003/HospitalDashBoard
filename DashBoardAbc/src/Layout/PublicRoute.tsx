import {Routes,Route} from 'react-router-dom'
import LoginPage from '../Component/LoginComponent/LoginPage'
import { RouterData } from '../RouterData'
const PublicRoute=()=>{
    const getRoutes=()=>{
        return RouterData.map((item)=>{
            if(item.path==="/"){
                return <Route path={item.path} element={item.component}/>
            }
            else{
                return null
            }
        })
    }
    return (
        <Routes>
            {getRoutes()}
        </Routes>
    )
}

export default PublicRoute;