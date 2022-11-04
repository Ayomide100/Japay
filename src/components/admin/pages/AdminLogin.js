import React, {useState, useRef, useEffect} from 'react';
import {NavLink, useHistory, Link} from "react-router-dom";
// import { login } from '../../';

export default function AdminLogin() {
    const [state, setState]= useState({
        username: '',
        password:''
    })
    const [user, setUser]= useState('');
    const [message, setMessage]= useState('');
    const [modal, setModal]= useState(false);
    const [loginError, setLoginError]= useState('');
    const history = useHistory();
    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
const handleLogin= async e =>{
       e.preventDefault()
    //    try {
    //     const result = await login(state)
    //      if(result.data){
    //         console.log(result.data);
    //         localStorage.setItem("profile", JSON.stringify(result.data))
    //         setModal(!modal)
    //         history.push("/profile")                                   
    //      }

         
    // } catch (error) {
    //     if(error.response){
    //         console.log(error.response.data.error)
    //         console.log({loginError: error.response.data.message})
    //         setLoginError(error.response.data.message)
    //         // this.setState({loginError: error.response.data.message})
    //     }
    //     else{
    //         console.log(error)
    //     } 
    // }
}
    return (
        <div className='container after'>
            <div className="row">
                <div className="col-12">
                            <div className="text-center">
                                <h4>Welcome back!</h4>
                                <p>Log in to your Gainworkers account</p>
                                <h6 className="bg-danger">{message}</h6>
                            </div>
                                <form   className="mb-4 login">
                                    <div  className='container'>
                                        <div className="form-group row pt-2 pb-3 ">
                                            <div className="col-12 col-md-6">
                                                <button className='ml-3'>Facebook</button> 
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <button>Google</button>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <div className='text-center'>
                                                <small className='bg-danger text-white'>{loginError}</small> <br/>
                                            </div>
                                            <label className='ml-3'>Username</label>
                                            <div className="col-12 ">                          
                                                <input type="text" name="username"  
                                                className="form-control" onChange={handleChange}
                                                placeholder="username"/> 
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label className='ml-3'>Password <span> <small><Link> Forgot?</Link></small> </span></label>
                                            <div className="col-12 ">                          
                                                <input type="text" name="password" 
                                                className="form-control" onChange={handleChange}
                                                placeholder="password "/> 
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="col-12 pb-4 text-right">
                                            <button className="btn btn-md btn-login w-100" onClick={handleLogin}>Login</button>
                                        </div>
                                    </div>
                                        <div className='text-center'>
                                            <small>Not a member? <Link to='signup' >Sign up now</Link></small>
                                        </div>
                                </form>
                </div>
            </div>
        </div>
    )
}
