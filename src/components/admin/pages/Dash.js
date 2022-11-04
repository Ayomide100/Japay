import React, { useState, useEffect } from 'react';
//import {getAll} from '../../../utils/postData';
import axios from "axios";

import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .card-footer{
        height: 23px;
        padding-top: 0px;
    }
    .card{
        height: 140px
    }
    .card h3{
        font-size: 50px
    }
    .card p{
        font-size: 20px
    }
    a{
        text-decoration:none;
    }
    h3{
        font-weight: bold;
        font-size: 30px
    }
    p{
        font-family: Manrope;
    }
    `

export default function Dash() {
    // Job
    const [data, setData]= useState([]);
    const [allJob, setAllJob]= useState([]);
    const [app, setApp]= useState([]);
    const [subscribe, setSubscribe] = useState([])
    const [bank, setBank] = useState([])
    // const [ref, setRef]= useState([]);
    // const [wallet, setWallet]= useState([]);
    // const [history, setHistory]= useState([]);
    // const [reject, setReject]= useState([]);
    
    const History = useHistory()
    // User
    const [allUser, setAllUser]= useState([]);
    useEffect(() => {
        // axios.get('/admin/job')
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const first = await axios.get(`${base_url}/api/admin/all_user`)
                setAllUser(first.data.data);
                const third = await axios.get(`${base_url}/api/admin/account_details`)
                setBank(third.data.data)
                const fourth = await axios.get(`${base_url}/api/admin/all_subscription`)
                setSubscribe(fourth.data.data)
                const second = await axios.get(`${base_url}/api/admin/app`)
                setApp(second.data.data)
                // const fifth = await axios.get(`${base_url}/api/admin/wallet`)
                // setWallet(fifth.data.data)
                // const six = await axios.get(`${base_url}/api/admin/pay_history`)
                // setHistory(six.data.data)
            } catch (error) {
                switch (error.response.status){
                    case 403:
                        History.push('/admin/login')
                }
            }
        }
        myAPI()
        
        
    }, [])
    const newApp = app.filter((ne)=> ne.status==="pending")
    return (
        <div className='wrapper'>
            <Styles>
            <div className="container">
                        <h5>Dashboard</h5><hr/>
                        <div className="row">
                            <div className="col-md-6 col-12 mt-3">
                                <div className="card bg-primary">
                                    <div className="card-body pt-0 pb-0">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='text-white'>{allUser.length}</h3>
                                                <p className='down text-white'>All User</p>
                                            </div>
                                            <div className='col-6'></div>
                                        </div>
                                    </div>
                                    <Link to='/admin/user/all'>
                                        <div className="card-footer text-center">
                                            <small className='text-white'>
                                                More Info
                                            </small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mt-3">
                                <div className="card bg-info">
                                    <div className="card-body pt-0 pb-0">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='text-white'>{subscribe.length}</h3>
                                                <p className='down text-white'>All subscription</p>
                                            </div>
                                            <div className='col-6'></div>
                                        </div>
                                    </div>
                                    <Link to='/admin/subscription/all'>
                                        <div className="card-footer text-center">
                                            <small className='text-white'>
                                                More Info
                                            </small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12 mt-3">
                                <div className="card bg-success">
                                    <div className="card-body pt-0 pb-0">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='text-white'>{newApp.length}</h3>
                                                <p className='down text-white'>New App <span className='small'>Category</span></p>
                                            </div>
                                            <div className='col-6'></div>
                                        </div>
                                    </div>
                                    <Link to='/admin/appcategory/new'>
                                        <div className="card-footer text-center">
                                            <small className='text-white'>
                                                More Info
                                            </small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mt-3">
                                <div className="card bg-danger">
                                    <div className="card-body pt-0 pb-0">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='text-white'>{bank.length}</h3>
                                                <p className='down text-white'>Account Details</p>
                                            </div>
                                            <div className='col-6'></div>
                                        </div>
                                    </div>
                                    <Link to='/admin/bank_details'>
                                        <div className="card-footer text-center">
                                            <small className='text-white'>
                                                More Info
                                            </small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12 mt-3">
                                <div className="card bg-warning">
                                    <div className="card-body pt-0 pb-0">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='text-white'>{app.length}</h3>
                                                <p className='down text-white'>All App Category</p>
                                            </div>
                                            <div className='col-6'></div>
                                        </div>
                                    </div>
                                    <Link to='/admin/appcategory/all'>
                                        <div className="card-footer text-center">
                                            <small className='text-white'>
                                                More Info
                                            </small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
            </Styles>
        </div>
    )
}
