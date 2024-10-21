import './App.css'
import React from 'react'
import Layout from './components/Layout/Layout'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { login } from './components/store/authSlice'

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true




function App() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.auth.status) ;
  useEffect(() => {
    if(!isLoggedin){
      axios.get('/api/user').then((res) => {
      dispatch(login(res.data));
      console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
    
  }, []);

  return (
    <div >
      <Layout />
    </div>
  )
}

export default App
