import React, {useState, useEffect} from 'react';
import { signUp } from '../../../utils/postData';
import {Alert, Spinner} from 'react-bootstrap'
import {Link, useHistory, useLocation} from "react-router-dom";
import jwtDecode from 'jwt-decode'
// import Header from '../Header'; 

export default function AdminSignup(props) {
    const location = useLocation()
    const history = useHistory();
    useEffect(()=>{
        // if(location.state){
        // setState({...state,
        //     account_type: location.state.vendor})
        // }
        // else{
        // history.push('/')
        // }
        
    }, [location.state])
    const [showPassword, setShowPassword] = useState(false);
    const [state, setState]= useState({
        password:'',
        account_type: 'Admin',
        name: '',
        email: '',
        repeat_password:''
    })
    
    const handleClick = () =>{
        window.google.accounts.id.initialize({
            client_id: '448779916170-7htguqmkbmeutget3lbmn4sl0gssht75',
            callback: handleCallback
        });
        window.google.accounts.id.prompt(notification =>{
            if(notification.isNotDisplayed()){
                throw new Error('Clear your cookies')
            }
        })
        window.google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme: "outline", size: "large"}
        )
    }
    const handleCallback = (res)=>{
        const token = res.credential
        const decodeToken = jwtDecode(token)
        console.log(decodeToken)
    }
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
                localStorage.setItem("africanStack", JSON.stringify(result.data))
                history.push('admin/dashboard')  
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
        <section className=''>
                <section className="cs-page_head cs-bg" data-src="assets/img/page_head_bg.svg">
                    <div className="container">
                    <div className="text-center">
                        <h1 className="cs-page_title">Sign Up</h1>
                        <ol class="breadcrumb" style={{background: 'none'}}>
                            <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li class="breadcrumb-item active">Register</li>
                        </ol>
                    </div>
                    </div>
                </section>
                
                <div className="cs-height_100 cs-height_lg_70"></div>
                <div className="container-fluid">
                    <div className="row mb-5">
                    <div className="col-md-8 mx-auto ">
                        <form className="cs-form_card cs-style1 cs-box_shadow cs-white_bg"
                        onSubmit={(val) => handleSubmit(val)}>
                        <div className="cs-form_card_in">
                            <h2 className="cs-form_title text-center">Create Account</h2>
                            <div className="cs-form_btns">
                            <a href="#" className="cs-btn cs-style2 cs-btn_lg">
                                <span><i className="fab fa-google"></i>Google</span>
                            </a>
                            <a href="#" className="cs-btn cs-style2 cs-btn_lg">
                                <span><i className="fab fa-facebook-f"></i>Facebook</span>
                            </a>
                            <a href="#" className="cs-btn cs-style2 cs-btn_lg">
                                <span><i className="fab fa-linkedin-in"></i>Linkedin</span>
                            </a>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                            <div className="cs-form_field_wrap">
                            <input type="text" className="cs-form_field" name='name'
                            onChange={handleChange} 
                            placeholder="Full name"/>
                            </div>
                            <div className="cs-height_20 cs-height_lg_20"></div>
                            <div className="cs-form_field_wrap">
                            <input type="email" className="cs-form_field" name='email'
                             onChange={handleChange} placeholder="Your Email"/>
                            </div>
                            <div className="cs-height_20 cs-height_lg_20"></div>
                            <div className="cs-form_field_wrap">
                                <input type="password" className="cs-form_field" onChange={handleChange} 
                                name='password'
                                placeholder="Set your password"/>
                            </div>
                            <div className="cs-height_20 cs-height_lg_20"></div>
                            <div className="cs-form_field_wrap">
                                <input type="password" className="cs-form_field" onChange={handleChange}
                                name='repeat_password'
                                 placeholder="Confirm password"/>
                            </div>
                            {/* <div className="cs-height_20 cs-height_lg_20"></div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="notify" />
                            <label className="form-check-label" for="notify">I'm attracted in receiving marketing emails for updates on upcoming promotions, events and new features</label>
                            </div>
                            <div className="cs-height_10 cs-height_lg_10"></div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="terms">
                            <label className="form-check-label" for="terms">I'm attracted in receiving marketing emails for updates on upcoming promotions, events and new features</label>
                            </div> */}
                            <div className="cs-height_20 cs-height_lg_20"></div>
                            <button className="cs-btn cs-style1 cs-btn_lg w-100">
                                {isLoading ? <Spinner variant='light' animation="border" role="status"/>: <>Register now</>}
                            </button>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                            <div className="cs-form_footer text-center">Have an account? <Link to='/login'>Login</Link></div>
                            <div className='mt-2'>
                            {signUpError && <Alert  variant={'danger'} className='pb-3 text-center'>
                                                    {signUpError}
                                                </Alert>}
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div class="cs-height_100 cs-height_lg_70"></div>
                </div>
           </section>
    )
}

