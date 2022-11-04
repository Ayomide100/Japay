import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Alert, Spinner} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";
import { updateProfile } from '../../../utils/postData';

function Form({data}) {
    const history = useHistory()
    
    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [state, setState]= useState({
        mobile:'',
        address: '',
        linkedin:'',
        twitter:'',
        skillset:'',
        avatar: null,
        previewImage: null,
        isUpdated: false
    })
   
    
   
    const [uploadError, setUploadError]= useState('');
    const [uploadSuccess, setUploadSuccess]= useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [preload, setPreload] = useState(false);
    
    

    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit= async e=>{
        e.preventDefault()
        setIsLoading(true)
        try {
            // dispatch({type: 'AUTH', data: {result}})
            const result = await updateProfile(state)
            if(result.data){
                setUploadSuccess(result.data.message);
                setUploadError('');
                setState({
                    isUpdated: true
                })
                setIsLoading(false)
                window.location.reload()
            }

            } catch (error) {
                if(error.response){
                    setUploadError(error.response.data.message)
                    setUploadSuccess('');
                    setIsLoading(false)
                }
                else{
                    console.log(error)
                } 
            }
    }

    
    return (
        <div className='pt-4 col-md-9 mx-auto col-12'>
            <div className="cs-profile_right">
                <div className="cs-height_30 cs-height_lg_30"></div>
                {uploadError && <Alert  variant={'danger'} className=' text-center'>
                                                {uploadError}
                                            </Alert>}
                {uploadSuccess && <Alert  variant={'success'} className=' text-center'>
                                                {uploadSuccess}
                                            </Alert>}
                <h2 className="cs-section_heading cs-style1">Profile Info</h2>
                <div className="cs-height_25 cs-height_lg_25"></div>
                <form className="row" onSubmit={(val) => handleSubmit(val)}>
                <div className="col-lg-6 ">
                    <div className="cs-form_field_wrap">
                    <input type="text" className="cs-form_field cs-white_bg" 
                    value={data.name} readOnly
                    placeholder='Name'/>
                    </div>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    <div className="cs-form_field_wrap">
                    <input type="text" className="cs-form_field cs-white_bg"
                    value={data.email} readOnly 
                    placeholder='Email' />
                    </div>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    {JSON.parse(localStorage.getItem("africanStack")).account_type === 'Developer' &&
                        <div className="cs-form_field_wrap hide-skill">
                            <textarea cols="30" rows="5" 
                            placeholder="Your skillset" 
                            name= 'skillset'
                            value={data.skillset || state.skillset}
                            className="cs-form_field cs-white_bg"
                            onChange = {handleChange} required 
                            >
                                
                            </textarea>
                        </div>
                    }
                    {/* <div className="cs-height_20 cs-height_lg_20"></div> */}
                    
                </div>
                <div className="col-lg-6 ">
                    {/* <div className="cs-height_0 cs-height_lg_25"></div> */}
                    <div className="cs-form_field_wrap">
                    <input type="text" className="cs-form_field cs-white_bg" 
                    onChange = {handleChange} value={data.mobile || state.mobile}
                    required name='mobile' placeholder="Mobile Number" />
                    </div>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    <div className="cs-form_field_wrap">
                    <input type="text" className="cs-form_field cs-white_bg" 
                    onChange = {handleChange} value={data.address || state.address}
                    required name='address' 
                    placeholder="Address"/>
                    </div>
                    {JSON.parse(localStorage.getItem("africanStack")).account_type === 'Developer' &&
                    <>
                    
                        <div className="cs-height_25 cs-height_lg_25"></div>
                        <span className="cs-btn cs-style2 cs-btn_lg w-100">
                        <span className="text-left">
                            <i className="fab fa-twitter"></i>
                            <span>Twitter</span> 
                            <input type="text" 
                            name='twitter' 
                            value={data.twitter || state.twitter}
                            onChange={handleChange} 
                            placeholder='Twitter Username' required/>
                        </span>
                        </span>
                        <div className="cs-height_25 cs-height_lg_25"></div>
                        <span className="cs-btn cs-style2 cs-btn_lg w-100">
                        <span className="text-left">
                            <i className="fab fa-linkedin-in"></i>
                            <span>Linkedin</span> 
                            <input type="text" name='linkedin' 
                            value={data.linkedin || state.linkedin}
                            onChange={handleChange} required
                            placeholder='LinkedIn Profile Link' />
                        </span>
                    </span>
                    </>
                    }
                    <div className="cs-height_25 cs-height_lg_25"></div>
                </div>
                <div className="col-lg-12 mb-4">
                    <div className="cs-height_40 cs-height_lg_5"></div>
                    <button className="cs-btn cs-style1 cs-btn_lg"
                    disabled= {data.mobile && true}>{isLoading ? 
                    <Spinner variant="light" animation='grow'/>
                    : <>Update Profile</>}</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Form;