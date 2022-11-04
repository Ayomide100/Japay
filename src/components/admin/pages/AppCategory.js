import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Alert} from 'react-bootstrap'
import { appChangeStatus } from '../../../utils/postData';
import { Link } from 'react-router-dom';

function AppCategory(props) {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        // axios.get('/admin/job')
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const second = await axios.get(`${base_url}/api/admin/app`)
                setData(second.data.data);
            } catch (error) {
                switch (error.response.status){
                    case 403:
                        History.push('/403')
                    default:
                        console.log(error)
                }
            }
        }
        myAPI()
        
        
    }, [])

    const handleAccept = (id)=>{
        alert('Are you sure you want to perform this operation')
        let formData = {id, status:'accepted'}
        appChangeStatus(formData).then(res=> {
            setMessage(res.data.message)
            window.location.reload()
        }).catch(err=> {throw new Error(err)})
    }
    const handleReject = (id)=>{
        alert('Are you sure you want to perform this operation')
        let formData = {id, status:'rejected'}
        appChangeStatus(formData).then(res=> {
            setMessage(res.data.message)
            window.location.reload()
        }).catch(err=> {throw new Error(err)})
        
    }


    const display = data.filter((ne)=> ne.status==="pending").map(m=>{
        return(
            <div className='col-md-3 col-12 mb-3' key={m._id}>
                <div className="card">
                    <img className="card-img-top" src={m.avatar} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">
                            {m.project_name} <span><small>({m.category})</small></span>
                        </h4>
                        <p className="card-text">{m.description} </p>
                        <p className="card-text">Pament duration: {m.duration} </p>
                        <a href={m.demo_link} target='_blank'>demo link</a>
                        <a href="#" 
                        className="ml-2 btn btn-primary"
                        onClick={() => handleAccept(m._id)}>Accept</a>
                        <span className='ml-2'><a href="#" 
                        className="btn btn-danger"
                        onClick={() => handleReject(m._id)}>Reject</a></span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className='container-fluid'>
            <div className='breadcrumb'>
                <small className='breadcrumb-item'> <Link to='/admin/dashboard'>Dashboard</Link> </small>
                <small className='breadcrumb-item'>new App_category</small>
            </div>
            {message && <Alert variant='success'>{message}</Alert>}
            <div className='row mt-3'>
                {display}
            </div>
        </div>
    );
}

export default AppCategory;