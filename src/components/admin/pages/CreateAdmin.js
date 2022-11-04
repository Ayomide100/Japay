import React, {useState, useRef, useEffect} from 'react';
import { signUp } from '../../../utils/postData';
import {Alert, Spinner} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";
import GoogleLogin from 'react-google-login';
// import Header from '../Header'; 

export default function CreateAdmin(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [state, setState]= useState({
        password:'',
        referral: props.referral || '',
        account_type: "Admin",
        name: '',
        email: '',
        repeat_password:''
    })
    const history = useHistory();
    // useEffect(()=>{
    //     localStorage.clear('Secx')
    // }, [])
    // const dispatch = useDispatch();
    // const [user, setUser]= useState('');
    // const [message, setMessage]= useState('');
    const [signUpError, setsignUpError]= useState('');
    const [signUpSuccess, setsignUpSuccess]= useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const togglePassword =(e)=>{
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setShowPassword(!showPassword)
      }
    const responseGoogle = async(response) => {
        console.log(response);
    }
    const handleSubmit= async e=>{
        e.preventDefault()
        setIsLoading(true)
        try {
            // dispatch({type: 'AUTH', data: {result}})
            const result = await signUp(state)
            if(result.data){
                setsignUpError('');
                setState({
                    password:'',
                    name: '',
                    email: '',
                    repeat_password:''
                })
                setIsLoading(false)
                localStorage.setItem("Secx", JSON.stringify(result.data))
                history.push('dashboard')  
            }

            } catch (error) {
                if(error.response){
                    setsignUpError(error.response.data.message)
                    setsignUpSuccess('');
                    setIsLoading(false)
                }
                else{
                    console.log(error)
                } 
            }
 }
    return (
        <section className='signup-border'>
                <div className=' container'>
                    <div className='breadcrumb'>
                        <small className='breadcrumb-item'> <Link to='/admin/dashboard'>Dashboard</Link> </small>
                        <small className='breadcrumb-item'>Create Admin</small>
                    </div>
                    <div className= 'row '>
                        <div className='col-12 col-md-6 mx-auto mt-4 mb-5 pb-5 signup-border'>
                            <div className="text-center mb-4">
                                <h4  className='mb-2'><b>Sign Up</b></h4>
                                <div className='w-60'>
                                    {signUpSuccess && 
                                    <Alert  variant={'success'} className='pb-3 text-center'>
                                        {signUpSuccess}
                                    </Alert>}
                                </div>
                            </div>
                            <div>
                                <form onSubmit={(values) => handleSubmit(values)} className=" needs-validation sign">
                                        <div className='container'>
                                            <div className="form-group row mt-4">
                                                <div className="col-12 ">
                                                    <label>
                                                        <div>
                                                            Admin Name
                                                        </div>
                                                    </label>
                                                    <input type="text" id="firstname" name="name"
                                                        placeholder="Fullname"   onChange={handleChange}
                                                        value={state.name}
                                                        className="form-control" required
                                                        />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-12">
                                                    <label>Email</label> 
                                                    <input type="text"  id="email" name="email"
                                                    placeholder="Email" onChange={handleChange}
                                                    value={state.email}
                                                    className="form-control" required/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-12 margin">
                                                    <label className='sd'>Password</label>
                                                    <div className='input-group'> 
                                                        <input type = {showPassword ? "text" : "password"} 
                                                            name="password"
                                                            onChange={handleChange} style={{borderRight:'0px'}}
                                                            value={state.password}
                                                            className="form-control" required
                                                            />
                                                        <div className="input-group-btn">
                                                            <button className="btn " 
                                                            onClick={togglePassword}
                                                            style={{borderLeft:'0px', 
                                                            borderRight:'1px solid rgb(219, 216, 216)',
                                                            borderBottom:'1px solid rgb(219, 216, 216)',
                                                            background: '#e7f8f5',
                                                            borderTopLeftRadius:'0px',
                                                            borderBottomLeftRadius:'0px',
                                                            borderTop:'1px solid rgb(219, 216, 216)'}}>
                                                            { showPassword? <i class="fa fa-eye"></i> : <i class="fa fa-eye-slash"></i>}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-12 margin">
                                                    <label className='sd'>Confirm Password</label>
                                                    <input type="password"  id="re_pass" name="repeat_password"
                                                    placeholder="Confirm Password" onChange={handleChange}
                                                    value={state.repeat_password}
                                                    className="form-control" required
                                                    />
                                                </div>
                                            </div>
                                            <div className='row text-center'>
                                                <div className='mx-auto col-12'>
                                                        <input type='checkbox' required/> <small>I have read and agree to <Link to='#'>Terms of privacy</Link> </small>
                                                </div>
                                            </div>
                                                        
                                            <div className="form-group text-right  pt-2 ">
                                                <button type='submit' className='btn btn-md w-100 btn-primary'>
                                                    {isLoading ? <Spinner variant='light' animation="border" role="status"/>: <>Submit</>}
                                                </button>
                                            </div>
                                            <hr/>
                                            {signUpError && <Alert  variant={'danger'} className='pb-3 text-center'>
                                                {signUpError}
                                            </Alert>}
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {props.referral && <Footer/>} */}
           </section>
    )
}
