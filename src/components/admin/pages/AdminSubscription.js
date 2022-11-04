import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom'
import moment from 'moment';


export default function AdminSubscription() {
    const [subscribe, setSubscribe]= useState([]);
    const [message, setMessage]= useState('');
    useEffect(() => {
        // axios.get('/admin/job')
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const third = await axios.get(`${base_url}/api/admin/all_subscription`)
                setSubscribe(third.data.data)
            } catch (error) {
                console.log(error.response)
            }
        }
        myAPI()
        
        
    }, [])
    
    const tBody=  subscribe.map((req)=>{
        return(
            <tr key={req._id}>
                <td>{req.user}</td>
                <td>{req.project_id}</td>
                <td>{req.creator}</td>
                <td>{req.project_name}</td>
                <td>{req.category}</td>
                <td>{moment(req.duration).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
                {req.status ==='active' && 
                <td>
                    <button className='btn btn-sm btn-success'>{req.status}</button> 
                </td>}
                {req.status ==='completed' && 
                <td>
                    <button className='btn btn-sm btn-danger'>{req.status}</button> 
                </td>}
            </tr>
            
        )
    })
    return (
        <div className='container-fluid'>
            <div className='breadcrumb'>
                <small className='breadcrumb-item'> <Link to='/admin/dashboard'>Dashboard</Link> </small>
                <small className='breadcrumb-item'>Subscription</small>
            </div>
            <div className='row mt-5'>
                {subscribe.length ? (
                    <>
                        <h6 className='text-center'>{message}</h6>
                        <div className='col-12 mx-auto'>
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Project_id</th>
                                        <th>Creator</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Deadline</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tBody}
                                </tbody>
                            </table>
                        </div>
                    </>
                ): 
                    <h4>There are no record available</h4>
                }
            </div>
        </div>
    )
}
