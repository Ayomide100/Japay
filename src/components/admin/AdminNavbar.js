import React, {useState}from "react";
import {Container, Row, Col, Accordion, Card, Form, Button , Dropdown} from "react-bootstrap";
import styled from 'styled-components';
// import './admin.css'
import { Link } from "react-router-dom";
import * as faIcon from 'react-icons/fa';
import * as aiIcon from 'react-icons/ai'
import * as ioIcon from 'react-icons/io'



const AdminNavbar= props => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar =()=>setSidebar(!sidebar)


    const Styles = styled.div`
        .navbar{
            background-color: white;
            height: 80px
        }
        .menu-bars{
            margin-left: 2rem;
            font-size :2rem;
            background: none !important
        }
        .nav-menu{
            position: fixed;
            top:0;
            height: 100vh;
            background: black;
            width: 250px;
            justify-content: center;
            left: 100%;
            transition: 0.4s;
            z-index: 1000000;
            color:black;
            text-align:center;
            font-size:25px;
            font-weight: 300;
            color:white;
        }
        .nav-menu.active{
            left: 0
        }
        .nav-menu.active + .overlay{
            display: block;
            z-index: 1029
        }
        
        // .nav-menu-items{
        //     width: 100%
        // }
        
        
        .nav-text{
            display: flex;
            justify-content: start;
            align-items: center;
            height: 60px;
            padding:8px 0px 8px 16px;
            font-weight: bold;
        }
        .nav-text a{
            color: grey !important;
            font-size: 18px;
            width:100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0px 16px,
            //border-radius: 4px
        }
        .nav-text a:hover{
            background-color: blue;
            text-decoration : none
        }
        .navbar-toggle{
            width: 100%;
            display: flex;
            font-size: 30px;
            align-items: center;
        }
        .card{
            display: flex;
            background: none;
            border: none;
            outline: none;
            justify-content: start;
            background-color: black;
            color: grey;
            font-weight: bold;
            font-size: 18px;
            cursor: pointer
        }
        .card a:hover{
            background-color: white;
            text-decoration: none
        }
        .card a{
            color: grey;
        }
        span{
            marging-right: 16px
        }
        .overlay{
            position: fixed;
            display:none;
            top:0;
            bottom: 0;
            left: 0;
            right:0;
            margin: auto;
            background-color: rgba(0,0,0,0.5);
        }
        #dropdown-basic{
            width: 200px;
        }
    `
    return (
        <Styles>
            <div className="navbar navbar-expand-lg">
                <div className="navbar-brand">
                    <Link to="#">
                        <faIcon.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className='ml-auto align-self-center' navbar>
                    <ul className="navbar-nav ml-auto ">         
                        <li className="nav-item">
                            <Link className="nav-link " to='#'> Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to='#'> Profile</Link>
                        </li>                       
                    </ul>
                </nav>
            </div>
            <nav className={sidebar? "nav-menu active" : "nav-menu"} >
                    <Link className="ml-3" onClick={showSidebar}><aiIcon.AiOutlineClose/></Link> 
                    <ul className="list-unstyled mt-5" >
                        <li className=" nav-text">
                            <Link to='/admin/dashboard'>
                                < aiIcon.AiFillHome/><span className="ml-2">Dashboard </span>
                            </Link>
                        </li>
                        <li className="">
                        <Accordion className="bg-dark">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                   <span><ioIcon.IoIosPaper/></span> Admin Panel
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <ul className="list-unstyled">
                                        <li><Link to="/admin/new" >Make Admin</Link></li>
                                        <li><Link to="#" >Delete User</Link></li>
                                        <li><Link to="/user/all" >All User</Link></li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                   <span><ioIcon.IoIosPaper/></span> Job Posted
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul className="list-unstyled">
                                        <li><Link to="/admin/job/new" >New</Link></li>
                                        <li><Link to="#" >Rejected</Link></li>
                                        <li><Link to="/accepted" >Accepted</Link></li>
                                        <li><Link to="/admin/job/total" >Total</Link></li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                   <span><ioIcon.IoIosPaper/></span> Payment
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <ul className="list-unstyled">
                                        <li><Link to="/admin/pendingfund" >New</Link></li>
                                        <li><Link to="/total_fund" >Total</Link></li>
                                        
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        
                        
                        </li>
                        {/* <li className=" nav-text">
                            <Link to='/dashboard'>
                            < aiIcon.AiFillHome/><span className="ml-2">Dashboard </span>
                            </Link>
                        </li> */}
                    </ul>
                        
            </nav>
            <div className="overlay"></div>
        </Styles>
        );
  };
  
  export default AdminNavbar