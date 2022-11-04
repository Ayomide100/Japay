import React, {useState, useRef, useEffect} from 'react';
import {useHistory, useLocation, Link} from "react-router-dom";
import Header from '../Homepage/pages/Header'
// import {useDispatch} from "react-redux";
import { login } from '../../utils/postData';
import { Alert, Spinner } from 'react-bootstrap';

export default function Login() {
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
        localStorage.clear('Secx')
    }, [])

    const toggleModal=()=>{
        setModal(!modal)
    }
    
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
            history.push('dashboard');
            // window.location.reload()                             
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
    <section className='vh-100'>
        <Header/>
        {/* <div class="cs-height_90 cs-height_lg_80"></div> */}
            <section class="cs-page_head cs-bg" data-src="images/img/page_head_bg.svg">
                <div class="container">
                <div class="text-center">
                    <h1 class="cs-page_title">Login</h1>
                    <ol class="breadcrumb" style={{background: 'none'}}>
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active">Login</li>
                    </ol>
                </div>
                </div>
            </section>
            <div class="cs-height_100 cs-height_lg_70"></div>
            <div class="container">
                <div class="row">
                <div class="col-md-8 mx-auto">
                    <form class="cs-form_card cs-style1 cs-box_shadow cs-white_bg"
                    onSubmit={(val)=> handleLogin(val)}>
                    <div class="cs-form_card_in">
                        <h2 class="cs-form_title text-center">Sign In</h2>
                        <div class="cs-form_btns">
                        <a href="#" class="cs-btn cs-style2 cs-btn_lg">
                            <span><i class="fab fa-google"></i>Google</span>
                        </a>
                        <a href="#" class="cs-btn cs-style2 cs-btn_lg">
                            <span><i class="fab fa-facebook-f"></i>Facebook</span>
                        </a>
                        <a href="#" class="cs-btn cs-style2 cs-btn_lg">
                            <span><i class="fab fa-linkedin-in"></i>Linkedin</span>
                        </a>
                        </div>
                        <div class="cs-height_30 cs-height_lg_30"></div>
                        <div class="cs-form_field_wrap">
                        <input type="email" class="cs-form_field" name='email'
                        onChange={handleChange} placeholder="Your Email" />
                        </div>
                        <div class="cs-height_20 cs-height_lg_20"></div>
                        <div class="cs-form_field_wrap">
                        <input type="password" class="cs-form_field" name='password'
                        onChange={handleChange} 
                        placeholder="Your password" />
                        </div>
                        <div class="cs-height_20 cs-height_lg_20"></div>
                        {/* <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="notify" />
                            <label class="form-check-label" for="notify">Remember Me</label>
                        </div> */}
                        <div class="cs-height_15 cs-height_lg_15"></div>
                        <button class="cs-btn cs-style1 cs-btn_lg w-100">
                            {isLoading ? <Spinner variant='light' animation="border" role="status"/>: <>Sign in</>}
                        </button>
                        <div class="cs-height_30 cs-height_lg_30"></div>
                        <div class="cs-form_footer text-center">No Account?  <Link to='user_type'>Register Now</Link></div>
                        <div className='mt-2'>
                        {loginError && <Alert  variant={'danger'} className='pb-3 text-center'>
                                                {loginError}
                                            </Alert>}
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            <div class="cs-height_100 cs-height_lg_70"></div>
    </section>
  )
}
