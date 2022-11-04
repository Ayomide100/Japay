import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from 'axios'


function Sidebar({}) {
    const [state, setState] = useState({
        name:'',
        email:'',
        avatar: null
    })
    const history = useHistory();
    const checkIsLoggedIn = () =>{
        if(!localStorage.getItem('africanStack')){
            history.push('login')
        }
        else{
            console.log('is logged in')
        }
    }
    useEffect(()=>{
        checkIsLoggedIn()
        const base_url = process.env.REACT_APP_SERVER
            axios.get(`${base_url}/api/user/profile`).then(res=>{
              setState({
                name: res.data.data.name,
                email: res.data.data.email,
                avatar: res.data.data.avatar,
              })
            })
      },[history.push])

    // const [name] = useState(JSON.parse(localStorage.getItem("africanStack")).name)
    const handleLogout = () =>{
        localStorage.clear('africanStack')
        history.push('/')
        window.location.reload()
    }
    const reloadPage = (link) =>{
        history.push(link);
        window.location.reload()
    }
    return (
            <div className='col-md-2 ml-3 pl-0 big'>
                <div className='mt-3 mb-3 w-100 text-center'>
                    {state.avatar ? 
                        <img src={state.avatar} 
                        height='250px' 
                        width="150px"
                        className='rounded-circle' 
                        alt='Avatar'/>
                    :
                        <img src='https://res.cloudinary.com/gainworker/image/upload/v1662750563/s6honb9r3phsihr6g6lg.png' 
                        height='200px' 
                        width="150px"
                        className='rounded-circle' 
                        alt='Avatar'/>
                    }
                    <h5 className='mt-3'>{state.name}</h5>
                    {/* <small>{state.email}</small> */}
                </div>
                <ul className='list-unstyled top'>
                    {/* <li className='default'>
                        <div className={`card ml-2 pl-3 pt-3 pb-3`} onClick={() => handleCardClick(0)}>
                            <span className='dash'><i className="ml-1 fas fa-home-alt mr-3"></i>Dashboard</span>
                        </div>
                    </li> */}
                    <li className='default'>
                        <Link to='/dashboard' className='side-link' onClick={()=>reloadPage('/dashboard')}>
                            <div className={`card ml-2 pl-3 pt-3 pb-3`}>
                                <span className='dash'><i className="ml-1 fas fa-user-alt mr-3"></i>Profile Info</span>
                            </div>
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='settings' className='side-link' onClick={()=>reloadPage('/settings')}>
                            <div className={`card ml-2 pl-3 pt-3 pb-3`}>
                                <span className='dash'>
                                    <i className=" ml-1 fal fa-cog mr-3"></i>
                                    Account Settings
                                </span>    
                            </div>
                        </Link> 
                    </li>
                    <li className='mt-2'>
                        <Link to='/my_items' className='side-link' onClick={()=>reloadPage('/my_items')}>
                            <div className={`card ml-2 pl-3 pt-3 pb-3`}>
                                <span className='dash'><i class=" ml-1 fas fa-list-ul mr-3"></i>My Items</span> 
                            </div>
                        </Link>
                    </li>
                    {JSON.parse(localStorage.getItem("africanStack")).account_type === 'Developer' &&
                    <li className='mt-2'>
                        <Link to='/create'  className='side-link' onClick={()=>reloadPage('/create')}>
                            <div className={`card ml-2 pl-3 pt-3 pb-3`}>
                                <span className='dash'><i class="ml-1 far fa-images mr-3"></i>Create</span> 
                            </div>
                        </Link>
                    </li>
                    }
                    <li className='mt-2'>
                        <div className={`card ml-2 pl-3 pt-3 pb-3`}>
                            <Link to='/mypurchase' className='side-link' onClick={()=>reloadPage('/mypurchase')} >
                                <span className='dash'><i className="ml-1 fas fa-credit-card mr-3"></i>My Purchase</span> 
                            </Link>
                        </div>
                    </li>
                    
                    <li className='mt-2'>
                        <div className={`card ml-2 pl-3 pt-3 pb-3`}onClick={handleLogout} >
                            <span className='dash'><i className="ml-1 fas fa-sign-out mr-3"></i>Logout</span>
                        </div>
                    </li>
                </ul>
                
            </div>
    );
}

export default Sidebar;