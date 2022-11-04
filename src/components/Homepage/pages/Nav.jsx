import React, {useState, useEffect}  from 'react';
import { Nav, Navbar, NavItem, NavDropdow} from 'react-bootstrap';
import {NavLink, useHistory, Link, useLocation} from "react-router-dom";

function Head(props) {
  const history = useHistory()
	const [user, setUser] = useState(false)
  const [open, setOpen] = useState(false);
  const closeNav =()=>{
    // var myNav = document.getElementById('responsive-navbar-nav');
    document.getElementById("responsive-navbar-nav").style.height = "0%"
    setOpen(false)
  }
  const openNav =()=>{
      document.getElementById("responsive-navbar-nav").style.height = "100%"
      setOpen(!open)
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" id='mynav'  className=' nav overlay fixed-top  head' variant='dark'>
        <div className="container">
            <Navbar.Brand  href="/">
              <h4 style={{fontWeight:'bold'}}>Jiggy<span className='text-primary'>move</span></h4>
            </Navbar.Brand>
                {/* <button arial-controls='responsive-navbar-nav'
                  onClick={openNav}>
                    &#9776;
                </button> */}
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} 
                className='toggle'
                onClick={openNav}>
                &#9776;
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" in={open}>
                <img src='images/logo.png' alt='logo' className='drop-logo'/>
                <Link to='#' className="closebtn" onClick={closeNav}>&times;</Link>
                <Nav className="mx-auto">
                    <NavItem>
                        <NavLink id='home' className="nav-link  ml-3 first" exact to='/'> Home</NavLink>
                    </NavItem>
                    
                </Nav>
                <Nav className='align-self-center text-right'>
                    <NavItem>
                        <NavLink className="nav-link mt-2 ml-3" to='/signup' > Services </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link mt-2 ml-3" to='/about'> Testimonial</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link mt-2 ml-3" to='/guide'> Patners</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link mt-2 ml-3 hide-login" to='/login'>Log In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link ml-3 "  to='/user_type' > 
                            <button className='btn btn-md btn-head mt-1'>Sign Up</button>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
    </div>
  );
}

export default Head;