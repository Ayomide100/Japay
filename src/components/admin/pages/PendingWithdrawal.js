import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom'
import { updatePaymentRequest, updateWithdraw } from '../../../utils/postData';


export default function PendingWithdrawal() {
    const [pendingFund, setPendingFund]= useState([]);
    const [message, setMessage]= useState('');
    useEffect(() => {
        // axios.get('/admin/job')
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const third = await axios.get(`${base_url}/api/admin/pay_request`)
                setPendingFund(third.data.data)
            } catch (error) {
                console.log(error.response)
            }
        }
        myAPI()
        
        
    }, [])

    const handleClick = (id, amount)=>{
        let formData = {id, amount}
        updateWithdraw(formData).then(res=> {
            setMessage(res.data.message)
            window.location.reload()
        }).catch(err=> {throw new Error(err)})
        
    }
    
    const tBody=  pendingFund.map((req)=>{
        return(
                <tr key={req._id}> 
                    <td>{req.user}</td>
                    <td>{req.usdt_address}</td>
                    <td>{req.amount}</td>
                    <td>{req.createdAt}</td>
                    <td>
                        <button className="btn btn-sm btn-info" onClick={()=> handleClick(req._id, req.amount)} >paid</button> 
                    </td>
                </tr>
            
        )
    })
    return (
        <div className='container-fluid'>
            <div className='breadcrumb'>
                <small className='breadcrumb-item'> <Link to='/admin/dashboard'>Dashboard</Link> </small>
                <small className='breadcrumb-item'>Pending Request</small>
            </div>
            <div className='row mt-5'>
                {pendingFund.length ? (
                    <>
                        <h6 className='text-center'>{message}</h6>
                        <div className='col-12 col-md-9 mx-auto'>
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Usdt Address</th>
                                        <th>Amount</th>
                                        <th>createdAt</th>
                                        <th>change Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tBody}
                                </tbody>
                            </table>
                        </div>
                    </>
                ): 
                    <h4>No data available</h4>
                }
            </div>
        </div>
    )
}
