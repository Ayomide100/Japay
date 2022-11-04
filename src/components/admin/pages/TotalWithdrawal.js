// /api/admin/pay_history
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function TotalWithdrawal() {
    const [history, setHistory]= useState([]);
    const [message]= useState('');
    useEffect(() => {
        // axios.get('/admin/job')
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const third = await axios.get(`${base_url}/api/admin/pay_history`)
                setHistory(third.data.data)
            } catch (error) {
                console.log(error.response)
            }
        }
        myAPI()
        
        
    }, [])
    const tBody=  history.map((req)=>{
        return(
            <tr key={req._id}>
                <td>{req.user}</td>
                <td>{req.usdt_address}</td>
                <td>{req.amount}</td>
                <td>{req.createdAt}</td>
                <td>{req.updatedAt}</td>
            </tr>
        )
    })
    return (
        <div className='container'>
            <div className='breadcrumb'>
                <small className='breadcrumb-item'> <Link to='/admin/dashboard'>Dashboard</Link> </small>
                <small className='breadcrumb-item'>Payment History</small>
            </div>
            <div className='row'>
            {history.length ? (
                    <>
                        <h6 className='text-center'>{message}</h6>
                            <div className='col-12 mx-auto'>
                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Usdt Address</th>
                                            <th>Amount</th>
                                            <th>createdAt</th>
                                            <th>paidAt</th>
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
