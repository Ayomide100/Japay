import React, {useState} from 'react';
import Sidebar from './Sidebar';
import {Alert, Spinner} from 'react-bootstrap'
import axios from 'axios'
import { avatarUpdate, rave } from '../../../utils/postData';
import Header from './Header';

function Settings(props) {
    const [password, setPassword] = useState(false);
    const [account, setAccount] = useState(false);
    const [dp, setDp] = useState(false);
    const [picture, setPicture] = useState({
        avatar: null,
        previewImage: null
    })
    const [isLoadingPassword, setIsLoadingPassword] = useState(false);
    const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [state, setState] = useState({
        account_name:'',
        account_number: '',
        bank_name: ''
    })

    const handleClick=(param)=>{
        if(param === 1){
            setAccount(true);
            setPassword(false);
            setDp(false)
        }
        if(param === 2){
            setPassword(true);
            setAccount(false);
            setDp(false)
        }
        if(param === 3){
            setDp(true)
            setPassword(false);
            setAccount(false);
        }
    }

    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    
    const onFileChange = (e)=>{
        setPicture({
            avatar: e.target.files[0],
            previewImage: URL.createObjectURL(e.target.files[0])
        })
    }
    const removeImage = (e)=>{
        setPicture({
            avatar: null,
            previewImage: null
        })
    }

    const handleBankSubmit = async(e) =>{
        e.preventDefault();
        setIsLoading(true);
        try{
            const result = await rave(state);
            setState({
                account_name: '',
                account_number: '',
                bank_name: ''
            })
            setSuccess(result.data.message)
            setError('')
            setIsLoading(false)
        }
        catch(err){
            setError('Something went wrong')
            setSuccess('')
            setIsLoading(false)
        }
    }
    const handleAvatarSubmit = async(e) =>{
        e.preventDefault();
        setIsLoadingAvatar(true);
        let formData = new FormData();
        formData.append('avatar', picture.avatar);
        try{
            const result = await avatarUpdate(formData);
            setSuccess(result.data.message)
            setError('')
            setIsLoadingAvatar(false);
            window.location.reload()
        }
        catch(err){
            setError('Something went wrong')
            setSuccess('')
            setIsLoadingAvatar(false)
        }
    }
    const handlePasswordSubmit = (e) =>{
        e.preventDefault();
        setIsLoadingPassword(true)
    }
    return (
        <>
            <Header/>
        <div className='container-fluid settings vh-100'>
            <div className='row'>
                <Sidebar/>
                <div className='col-md-9 mx-auto col-12'>
                    <div className="cs-profile_right">
                        <div className="cs-height_30 cs-height_lg_30"></div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                {error && <Alert  variant={'danger'} className='mb-4 ml-2 text-center'>
                                                    {error}
                                                </Alert>}
                                {success && <Alert  variant={'success'} className='mb-4 ml-2 text-center'>
                                                    {success}
                                                </Alert>}
                            </div>
                        </div>
                        <h2 className="cs-section_heading cs-style1 ml-2">Account Settings</h2>
                        <div className="cs-height_25 cs-height_lg_25"></div>
                        
                        <div className='row mb-4'>
                            <div className='container-fluid'>

                                    <div className='col-md-6 col-12'>
                                        <div className='row ml-2'>
                                            <div className='card ' onClick={()=> handleClick(1)}>
                                                <div className='card-header'>
                                                    <h5 className='card-text'>
                                                    <i class="fas fa-users"></i> Bank details
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className='card mt-2 ' onClick={() => handleClick (2)}>
                                                <div className='card-header'>
                                                    <h5 className='card-text'>
                                                    <i class="fad fa-envelope-open-dollar"></i> Change password 
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className='card mt-2' onClick={() => handleClick (3)}>
                                                <div className='card-header'>
                                                    <h5 className='card-text'>
                                                    <i class="fad fa-envelope-open-dollar"></i> Change profile picture 
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {password && (
                            <div className='container-fluid'>

                            <form className="row" onSubmit={(val) => handlePasswordSubmit(val)}>
                                <div className="col-lg-6">
                                    <div className="cs-form_field_wrap">
                                    <input type="password" className="cs-form_field cs-white_bg" placeholder="Old password" />
                                    </div>
                                    <div className="cs-height_25 cs-height_lg_25"></div>
                                    <div className="cs-form_field_wrap">
                                    <input type="password" className="cs-form_field cs-white_bg" placeholder="New password" />
                                    </div>
                                    <div className="cs-height_25 cs-height_lg_25"></div>
                                    <div className="cs-form_field_wrap">
                                    <input type="password" className="cs-form_field cs-white_bg" placeholder="Confirm new password" />
                                    </div>
                                    <div className="cs-height_25 cs-height_lg_25"></div>
                                    <button className="cs-btn cs-style1 cs-btn_lg">
                                        {isLoadingPassword ? <Spinner variant='light' animation="border" role="status"/>: <>Change Password</>}
                                    </button>
                                </div>
                                </form>
                            </div>
                            )}

                            

                            {account &&
                            <div className='container-fluid'>
                                
                                <form className="row" onSubmit={(val) => handleBankSubmit(val)}>
                                <div className="col-lg-6">
                                    <div className="cs-form_field_wrap">
                                    <input type="text" className="cs-form_field cs-white_bg" 
                                    placeholder="Account Number" value ={state.account_number}
                                    onChange={handleChange} required 
                                    name='account_number' />
                                    </div>
                                    <div className="cs-height_25 cs-height_lg_25"></div>
                                    <div className="cs-form_field_wrap">
                                    <input type="text" className="cs-form_field cs-white_bg" 
                                    placeholder="Account Name" 
                                    value={state.account_name}
                                    onChange={handleChange} 
                                    required 
                                    name='account_name'/>
                                    </div>
                                    <div className="cs-height_25 cs-height_lg_25"></div>
                                    <div className="cs-form_field_wrap">
                                    <input type="text" className="cs-form_field cs-white_bg" 
                                    placeholder="Bank Name" value={state.bank_name}
                                    name='bank_name' onChange={handleChange} required />
                                    </div>
                                    <div className="cs-height_25 cs-height_lg_25"></div>
                                    <button className="cs-btn cs-style1 cs-btn_lg">
                                    {isLoading ? <Spinner variant='light' animation="border" role="status"/>: <span>Submit</span>}
                                    </button>
                                </div>
                                </form>
                            </div>
                            
                            }

                        {dp && 
                        <div className='container-fluid'>

                                <form className="row" onSubmit={(val) => handleAvatarSubmit(val)}>
                                <div className="cs-edit_profile">
                                    <div className="cs-edit_profile_img">
                                            {picture.avatar?
                                                <img className="preview" 
                                                src={picture.previewImage} 
                                                alt="preview" height='300'
                                                width='150' />
                                                : <img src="images/avatar/avatar_29.png" alt=""/>

                                            }
                                    </div>
                                    <div className="cs-edit_profile_right">
                                        <div className="cs-edit_profile_btns mb-0">
                                            <label for="files" className="cs-upload_btn">Upload</label>
                                            {picture.previewImage ? <span className="cs-delete_btn" onClick={removeImage}><i className="far fa-trash-alt"></i> Delete</span>
                                            : <></>}
                                                    <input type='file' 
                                                    accept="image/*" 
                                                    id="files"
                                                    style={{display:'none'}}  
                                                    onChange={onFileChange} required/> 
                                            
                                            {picture.previewImage && <button className="cs-upload_btn">
                                            {isLoadingAvatar ? <Spinner variant='light' animation="border" role="status"/>: <>Submit</>}
                                            </button> }
                                        </div>
                                        <p className='pt-0'>Images must be .png or .jpg format. Max size 3mb (avatar)</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    }
                    </div>
                    </div>
                </div>
                <div className="cs-height_100 cs-height_lg_70"></div>
                </div>
        </>
    );
}

export default Settings;