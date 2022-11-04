// import { Offcanvas } from 'bootstrap';
import React, {useState, useEffect} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import axios from 'axios';
import * as aiIcon from 'react-icons/ai'
import { Link, NavLink, useHistory } from 'react-router-dom';
import styled from "styled-components";


const LinkWrapper = styled.div`
.nav{
    font-family: Poppins;
    background-color: #E3AB56 !important
  }
  ul li{
    display: inline
  }
  .nav-link:hover{
    border-left: 2px solid #664D27 
  }
  .cs-upload_btn{
    cursor: pointer
  }
  .card{
    border-radius: 0px;
    color: black !important
  }
`
function NavbarAdmin(props) {
    const [data, setData] = useState([]);
    const history = useHistory()
    useEffect(() => {
        if(!localStorage.getItem('africanStack')){
            return history.push('/admin/login') 
        }
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const res = await axios.get(`${base_url}/api/admin/notification`)
                setData(res.data.data)
            } catch (error) {
                switch (error.response.status){
                    case 403:
                        history.push('/admin/login')
                    break;
                    default:
                    console.log(error)
                }
            }
        }
        myAPI()
    }, []);
    return (
    <LinkWrapper>
        <Navbar bg="light" className='nav w-100' expand='sm'>
            <div className='container-fluid'>
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i className='fa fa-bars'></i>
                </button>
                <Navbar.Brand href="#">Welcome Admin </Navbar.Brand>
            </div>
                <div className="offcanvas offcanvas-start" style={{width: '300px', backgroundColor:'#A37B3E'}} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-NavbarAdmin">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body ">
                        <div className=''>
                            <div className='row '>
                                <div className='col-3 text-left'>
                                    <img src='https://res.cloudinary.com/gainworker/image/upload/v1662750563/s6honb9r3phsihr6g6lg.png' 
                                        className='rounded-circle' 
                                        alt='Avatar'/>
                                </div>
                                <div className='col-9 pl-5  align-self-center'>
                                    <h5><b>{JSON.parse(localStorage.getItem('africanStack')).name}</b></h5>
                                    <small>Online</small>
                                </div>
                            </div>
                            
                        </div>
                        <div className='row mt-2 mb-2'>
                            <div className='card text-center pt-2'>
                                <h5>Main Navigation</h5>
                            </div>
                        </div>
                        <Nav>
                            <ul className='list-unstyled'>
                                <NavItem>
                                    <NavLink className="nav-link ml-2 mb-3 active" to='/admin/dashboard'> 
                                        <aiIcon.AiFillHome/><span className="ml-2">Dashboard </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-2 mb-3" to='#'>
                                        <span>
                                        <i class="fas fa-map-marker-alt mr-4"></i>
                                            Notification
                                            <small className='ml-1'>
                                                <span class="badge badge-danger"
                                                style={{borderRadius: '50%', 
                                                padding: '5px', 
                                                display: 'inline-block',
                                                boxShadow: '0 0 2px #888'}}>
                                                    {data.length}
                                                </span>           
                                            </small>
                                        </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-2 mb-3"  to='#'> Send General Message</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-2 mb-3"  to='/admin/create_admin'> Make Admin</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-2 mb-3"  to='#'>Delete Account</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-2 mb-3"  to='#'>
                                        Account Settings
                                        {/* <label for="files" className="cs-upload_btn">Update profile picture</label>
                                        <input type='file' 
                                            accept="image/*" 
                                            id="files"
                                            style={{display: 'none'}}  
                                            required/>  */}
                                        
                                    </NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink className="nav-link ml-2 mb-3"  to='#'>How it works</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-2 mb-3"  to='#'>Frequently asked questions</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-2 mb-3"  to='#'>Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-2 mb-3"  to='#'>Terms and Policy</NavLink>
                                </NavItem> */}
                            </ul>
                        </Nav>
                    </div>
                </div>
        </Navbar>
    </LinkWrapper>
    );
}

export default NavbarAdmin;