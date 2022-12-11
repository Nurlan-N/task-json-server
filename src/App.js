import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AddUser } from './pages/AddUser';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useState, useEffect} from 'react';
import DotLoader from 'react-spinners/DotLoader'

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"

};


function App() {
  const [users,setUsers] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const respons = await axios.get('http://localhost:3003/users')
      setUsers(respons.data)
      console.log(respons.data);
      setLoading(false)
    }
    getUsers();
  },[])


  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
         {
          loading ? <DotLoader
          color='#CA1016'
          loading={loading}
          cssOverride={override}
          size={100}
         
        /> :  
        <Routes>
          <Route path='/' element={<HomePage userList={users}/>}/>
          <Route path='/add' element={<AddUser/>}/>
        </Routes>
         }
      </BrowserRouter>
    </div>
  );
}

export default App;
