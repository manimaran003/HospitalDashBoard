import './App.css';
import { getStorageDetail } from './Layout/StorageDetail';
import PrivateRoute from './Layout/PrivateRoute';
import PublicRoute from './Layout/PublicRoute';

function App() {
  let data = getStorageDetail();
  return (
    <div className="App">
     {
      data ? <PrivateRoute/> : <PublicRoute/>
     }
    </div>
  );
}
export default App;
