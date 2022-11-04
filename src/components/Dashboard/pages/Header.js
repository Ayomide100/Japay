// import { Offcanvas } from 'bootstrap';
import axios from 'axios';
import React, {useState, useEffect, useRef } from 'react';
import {Nav, Navbar, NavDropdown, NavItem, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import { Link, NavLink, useHistory } from 'react-router-dom';
import styled from "styled-components";


const LinkWrapper = styled.div`
  .nav{
    font-family: Poppins;
    background-color: #04001c !important;
  }
  .fa-bars{
    color: white;
    font-size: 22px
  }
  
  ul li{
    display: inline
  }`


    function Header({}) {
        const [name, setName] = useState('');
        const [notify, setNotify] = useState([])
        const [show, setShow] = useState(false);
        const [state, setState] = useState({avatar: null});
        const target = useRef(null);
        useEffect(()=>{
            const base_url = process.env.REACT_APP_SERVER;
            setName(JSON.parse(localStorage.getItem("africanStack")).name);
            axios.get(`${base_url}/api/notification`).then(res=>{
            setNotify(res.data.payload)
            }).catch(err=>{
                console.log(err)
            })
            axios.get(`${base_url}/api/user/profile`).then(res=>{
                setState({
                  avatar: res.data.data.avatar,
                })
              })
        }, []);

        const history = useHistory();
        const handleLogout = () =>{
            localStorage.clear('africanStack')
            history.push('/')
            window.location.reload()
        }

        const reloadPage = (link) =>{
            history.push(link);
            window.location.reload()
        }

        const notify_list = notify.slice(0,7).map(n=>{
            return(
                <li key= {n._id} >
                    <div className="cs-notification_item">
                        <div className="cs-notification_right">
                            <h4>{n.content}</h4>
                        </div>
                    </div>
                </li>
            )
        })

    return (
    <LinkWrapper>
        <Navbar bg="light" className='nav w-100 small' expand='sm'>
            <div className='container-fluid'>
                <Navbar.Brand href="/"><img src={'images/smart1-01.png'} height={'60px'} alt='africanStack'/></Navbar.Brand>
                <Nav className='ml-auto d-flex'>
                <NavLink className="nav-link mt-2 ml-3 text-white" to='#'> 
                                <div className="cs-toggle_box cs-notification_box">
                                    <div className="cs-toggle_btn cs-header_icon_btn cs-center">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 6.63916C14 5.44569 13.5259 4.30109 12.682 3.45718C11.8381 2.61327 10.6935 2.13916 9.5 2.13916C8.30653 2.13916 7.16193 2.61327 6.31802 3.45718C5.47411 4.30109 5 5.44569 5 6.63916C5 11.8892 2.75 13.3892 2.75 13.3892H16.25C16.25 13.3892 14 11.8892 14 6.63916Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.7981 16.3887C10.6663 16.616 10.477 16.8047 10.2493 16.9358C10.0216 17.067 9.76341 17.136 9.50063 17.136C9.23784 17.136 8.97967 17.067 8.75196 16.9358C8.52424 16.8047 8.33498 16.616 8.20312 16.3887" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                  
                                        <span className="cs-btn_badge"> {notify.length} </span>
                                    </div>
                                        <div className="cs-toggle_body">
                                            <h3 className="cs-notification_title">Notifications {notify.length}</h3>
                                            <ul className="cs-notification_list">
                                                {notify_list}
                                            </ul>
                                            <div className="text-center">
                                                <a href="#" className="cs-btn cs-style1">
                                                    <span>
                                                    View More
                                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4366 7.01471C13.7295 6.72181 13.7295 6.24694 13.4366 5.95404L8.66361 1.18107C8.37072 0.888181 7.89584 0.888181 7.60295 1.18107C7.31006 1.47397 7.31006 1.94884 7.60295 2.24173L11.8456 6.48438L7.60295 10.727C7.31006 11.0199 7.31006 11.4948 7.60295 11.7877C7.89584 12.0806 8.37072 12.0806 8.66361 11.7877L13.4366 7.01471ZM0.90625 7.23438H12.9062V5.73438H0.90625V7.23438Z" fill="currentColor"/>
                                                    </svg> 
                                                    </span>                         
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </NavLink>
                    
                    
                </Nav>
                
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i className="far fa-bars"></i>
                </button>
                
                <div className="offcanvas offcanvas-end" style={{width: '300px', backgroundColor: '#080326'}} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title ml-2" id="offcanvasExampleLabel">
                            {
                                !state.avatar ? 
                                <img src='https://res.cloudinary.com/gainworker/image/upload/v1662750563/s6honb9r3phsihr6g6lg.png' 
                                height={'100px'} width={'60px'}
                                className='rounded-circle' alt='picture'/> 
                                :
                                <img src={state.avatar} 
                                    height={'100px'} width={'60px'}
                                    className='rounded-circle' alt='picture'/> 
                            }
                        </h5>
                        <button type="button" className="btn-close text-reset mr-2" style={{fontSize: '30px'}} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className='list-unstyled top'>
                        {/* <li className='defaultside-link'>
                            <div className={`ml-2 pl-3 pt-5 pb-5 text-white`} onClick={() => handleCardClick(0)}>
                                <span className='dash'><i className="ml-1 fas fa-home-alt mr-3"></i>Dashboard</span>
                            </div>
                        </li> */}
                        <li className='default'>
                            <Link to='/dashboard' className='side-link' onClick={()=>reloadPage('/dashboard')}>
                                <div className={`ml-2 pl-3 pt-5 pb-5 text-white`}>
                                    <span className='dash'><i className="ml-1 fas fa-user-alt mr-3"></i>Profile Info</span>
                                </div>
                            </Link>
                        </li>
                        <li className='mt-2'>
                            <Link to='/settings' className='side-link' onClick={()=>reloadPage('/settings')}>
                                <div className={`ml-2 pl-3 pt-5 pb-5 text-white`}>
                                    <span className='dash'>
                                        <i className=" ml-1 fal fa-cog mr-3"></i>
                                        Account Settings
                                    </span>    
                                </div>
                            </Link> 
                        </li>
                        <li className='mt-2'>
                            <Link to='/my_items' className='side-link' onClick={()=>reloadPage('/my_items')}>
                                <div className={`ml-2 pl-3 pt-5 pb-5 text-white`}>
                                    <span className='dash'><i className=" ml-1 fas fa-list-ul mr-3"></i>My Items</span> 
                                </div>
                            </Link>
                        </li>
                        {JSON.parse(localStorage.getItem("africanStack")).account_type === 'Developer' &&
                        <li className='mt-2'>
                            <Link to='/create' className='side-link' onClick={()=>reloadPage('/create')}>
                                <div className={`ml-2 pl-3 pt-5 pb-5 text-white`}>
                                    <span className='dash'><i className="ml-1 far fa-images mr-3"></i>Create</span> 
                                </div>
                            </Link>
                        </li>
                        }
                        <li className='mt-2 side-link'>
                            <div className={`ml-2 pl-3 pt-5 pb-5 text-white`}>
                                <Link to='/mypurchase' className='side-link' onClick={()=>reloadPage('/mypurchase')}>
                                    <span className='dash text-white'><i className="ml-1 fas fa-credit-card mr-3"></i>My Purchase</span> 
                                </Link>
                            </div>
                        </li>
                        
                        <li className='mt-2side-link'>
                            <div className={`ml-2 pl-3 pt-5 pb-5 text-white`}onClick={handleLogout} >
                                <span className='dash'><i className="ml-1 fas fa-sign-out mr-3"></i>Logout</span>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </Navbar>

        {/* Big screen */}
        <Navbar collapseOnSelect expand="lg" id='mynav'  
        className='nav big-one' variant='dark'>
                <div className="container-fluid">
                    <Navbar.Brand  href="/"><img src={'images/smart1-01.png'} height={'60px'} width={'60px'} alt='AfricanStack'/></Navbar.Brand>
                        <Nav className='align-self-center ml-auto'>
                            <NavItem>
                                <NavLink className="nav-link mt-2 ml-3 text-white" to='#'> 
                                <div className="cs-toggle_box cs-notification_box">
                                    <div className="cs-toggle_btn cs-header_icon_btn cs-center">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 6.63916C14 5.44569 13.5259 4.30109 12.682 3.45718C11.8381 2.61327 10.6935 2.13916 9.5 2.13916C8.30653 2.13916 7.16193 2.61327 6.31802 3.45718C5.47411 4.30109 5 5.44569 5 6.63916C5 11.8892 2.75 13.3892 2.75 13.3892H16.25C16.25 13.3892 14 11.8892 14 6.63916Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.7981 16.3887C10.6663 16.616 10.477 16.8047 10.2493 16.9358C10.0216 17.067 9.76341 17.136 9.50063 17.136C9.23784 17.136 8.97967 17.067 8.75196 16.9358C8.52424 16.8047 8.33498 16.616 8.20312 16.3887" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                  
                                        <span className="cs-btn_badge"> {notify.length} </span>
                                    </div>
                                        <div className="cs-toggle_body">
                                            <h3 className="cs-notification_title">Notifications {notify.length}</h3>
                                            <ul className="cs-notification_list">
                                                {notify_list}
                                            </ul>
                                            <div className="text-center">
                                                <a href="#" className="cs-btn cs-style1">
                                                    <span>
                                                    View More
                                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4366 7.01471C13.7295 6.72181 13.7295 6.24694 13.4366 5.95404L8.66361 1.18107C8.37072 0.888181 7.89584 0.888181 7.60295 1.18107C7.31006 1.47397 7.31006 1.94884 7.60295 2.24173L11.8456 6.48438L7.60295 10.727C7.31006 11.0199 7.31006 11.4948 7.60295 11.7877C7.89584 12.0806 8.37072 12.0806 8.66361 11.7877L13.4366 7.01471ZM0.90625 7.23438H12.9062V5.73438H0.90625V7.23438Z" fill="currentColor"/>
                                                    </svg> 
                                                    </span>                         
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link ml-3 mt-2"   to='#' 
                                > 
                                    <>
                                        <NavDropdown title={<span className='mr-1'>{name.split(" ")[0]}</span>} id="basic-nav-dropdown">
                                            <NavDropdown.Item>
                                                <NavLink to="/dashboard">My Profile</NavLink>
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href='#' onClick={handleLogout}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                </NavLink>
                            </NavItem>
                        </Nav>
                </div>
            </Navbar>
    </LinkWrapper>
    );
}

export default Header;