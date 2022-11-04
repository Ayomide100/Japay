import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import AdminNavbar from '../admin/AdminNavbar';
import AllUser from '../admin/pages/AllUser';
import Dash from '../admin/pages/Dash';
import Total from '../admin/pages/Total';
import New from '../admin/pages/New';
import CreateAdmin from '../admin/pages/CreateAdmin';
import FourZeroThree from '../../utils/FourZeroThree';
import PendingWithdrawal from '../admin/pages/PendingWithdrawal';


export default function Admin() {
    
    // const [allUser, setAllUser]= useState([]);
    // console.log(allUser)
    // useEffect(() => {
    //     // axios.get('/admin/job')
    //     const base_url = process.env.REACT_APP_SERVER;
    //     axios.get(`${base_url}/admin/user/all`).then(res=>{
    //         setAllUser(allUser, res.data.data);
    //         })
    // }, [])
    return (
        <Switch>
            <Route path='/admin/dashboard'>
                <AdminNavbar/>
                <Dash/>
            </Route>
            <Route path='/admin/user/all'>
                <AllUser/>
            </Route>
            <Route path='/admin/job/total'>
                <Total/>
            </Route>
            <Route path='/admin/job/new'>
                <New/>
            </Route>
            <Route path='/admin/new'>
                <CreateAdmin />
            </Route>
            <Route path='/admin/pendingfund'>
                <PendingWithdrawal />
            </Route>
            <Route path='/403'>
                <FourZeroThree/>
            </Route>
        </Switch>
    )
}
