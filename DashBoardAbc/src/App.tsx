import './App.css';
import { getStorageDetail } from './Layout/StorageDetail';
import PrivateRoute from './Layout/PrivateRoute';
import PublicRoute from './Layout/PublicRoute';
function App() {
  console.log(process.env.REACT_APP_API_URL)
  let data = getStorageDetail();
  return (
    <div className="App">
      {
        data===true ? <PrivateRoute /> : <PublicRoute />
      }
    </div>
  )
}
export default App;
