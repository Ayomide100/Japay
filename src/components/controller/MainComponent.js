import React, {useState, useEffect, FC} from 'react';
import {Switch, Route, Redirect, Link, useHistory} from 'react-router-dom';
import FourZeroThree from '../../utils/FourZeroThree';
import NavbarAdmin from '../admin/Navbar';
import AdminSubscription from '../admin/pages/AdminSubscription';
import AllUser from '../admin/pages/AllUser';
import Dash from '../admin/pages/Dash';
import PendingWithdrawal from '../admin/pages/PendingWithdrawal';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Dashboard from '../Dashboard';
import Home from '../Homepage';
import Profile from '../profile';
import TotalWithdrawal from '../admin/pages/TotalWithdrawal';
import CreateAdmin from '../admin/pages/CreateAdmin';
import ReceiveNotification from '../admin/pages/ReceiveNotification';
import Category from '../Auth/Category';
import Header from '../Dashboard/pages/Header';
import Settings from '../Dashboard/pages/Settings';
import MyItems from '../Dashboard/pages/MyItems';
import Create from '../Dashboard/pages/Create';
import AdminSignup from '../admin/auth/AdminSignup';
import AppCategory from '../admin/pages/AppCategory';
import AdminAccountDetails from '../admin/pages/AdminAccountDetails';
import AllAppCategory from '../admin/pages/AllAppCategory';
import AdminLogin from '../admin/auth/AdminLogin';
import axios from 'axios';
import Explorer from '../Explorer';
import MyPurchase from '../Dashboard/pages/MyPurchase';



export default function MainComponent() {
    const [allItem, setAllItem] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory()
    
   
    return (
        <div>
            <Switch>
                <Route exact path='/'> 
                    <Home/>
                </Route>
                <Route exact path='/user_type'> 
                    <Category/>
                </Route>
                <Route exact path='/signup'> 
                    <Signup/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        </div>
    )
}