import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './pages/Header';
import MainContent from './pages/MainContent';
import Sidebar from './pages/Sidebar';
import styled from "styled-components";
import Profile from '../profile';



function Dashboard(props) {
    const [step, setStep] = useState(0)
    const [data, setData] = useState({})
    const [active, setActive] = useState('')
    useEffect(()=>{
      const base_url = process.env.REACT_APP_SERVER
      axios.get(`${base_url}/api/user/profile`).then(res=>{
        setData(res.data.data)
      })
    },[])
    const handleCardClick = (state)=>{
        setStep(state)
    }



    return (
        <>
            <Header/>
            <div className='container-fluid vh-100'>
                <div className='row'>
                    <Sidebar/>
                    <Profile data={data}/>
                </div>
            </div>
        </>
    );
}

export default Dashboard;