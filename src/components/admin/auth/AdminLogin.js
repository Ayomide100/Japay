import React, {useState, useRef, useEffect} from 'react';
import {useHistory, useLocation, Link} from "react-router-dom";
import {Alert, Spinner} from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
// import {useDispatch} from "react-redux";
import { login } from '../../../utils/postData';

export default function AdminLogin() {
    // const { state: { from = "/" } = {} } = useLocation();
    const [state, setState]= useState({
        email: '',
        password:''
    })
    const [user, setUser]= useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal]= useState(false);
    const [loginError, setLoginError]= useState('');
    const history = useHistory();

    useEffect(()=>{
        localStorage.clear('africanStack')
    }, [])

    
    
    const handleChange = (e)=>{
          setState({
              ...state,
              [e.target.name]: e.target.value
          })
      }
    const responseGoogle = (response) => {
        console.log(response);
    }

      const handleLogin= async e =>{
        e.preventDefault()
        setIsLoading(true)
        try {
         const result = await login(state)
          if(result.data){
            setIsLoading(false)
            localStorage.setItem("africanStack", JSON.stringify(result.data))
            history.push('/admin/dashboard')                              
          }      
          } catch (error) {
            if(error.response){
                setLoginError(error.response.data.message)
                setIsLoading(false)
                // this.setState({loginError: error.response.data.message})
            }
            else{
                console.log(error)
            } 
        }
 }


  return (
    <section className='signup-border'>
        <div className='container'>
            <div className="row">
                <div className="col-12 mx-auto col-md-6">
                    <div className='mb-1 text-center mt-5'>
                        <h4>Admin Login</h4>
                    </div>
                    <form onSubmit={(val)=> handleLogin(val)} className="mb-4 mt-5 login needs-validation">
                            <div className="form-group row pt-1 pb-2 mt-0">
                            </div>
                            <div className="form-group ">
                                <label className='ml-3'>Email</label>
                                <div className="col-12">                          
                                    <input type="text" name="email"  
                                    className="form-control" onChange={handleChange}
                                    placeholder="Email" required/> 
                                </div>
                            </div>
                            <div className="form-group ">
                                <label className='ml-3'>Password <span> <small><Link> Forgot?</Link></small> </span></label>
                                <div className="col-12 ">                          
                                    <input type="password" name="password" 
                                    className="form-control" onChange={handleChange}
                                    placeholder="password" required /> 
                                </div>
                            </div>
                            <div className="col-12 pb-4 pt-3 text-right">
                                <button className="btn btn-md btn-primary w-100" >
                                {isLoading ? <Spinner variant='light' animation="border" role="status"/>: <>Login</>}
                                </button>
                            </div>
                            <div className='text-center mb-3'>
                                <small>Not a member? <Link to='signup'>Sign up now</Link></small>
                            </div>
                            {loginError && <Alert  variant={'danger'} className='pb-3 text-center'>
                                {loginError}
                            </Alert>}
                    </form>     
                </div>
            </div>
        </div>
    </section>
  )
}
