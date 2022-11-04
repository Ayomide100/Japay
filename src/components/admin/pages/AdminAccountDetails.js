import React, {useState, useEffect} from 'react';
import axios from 'axios'
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';

function AdminAccountDetails(props) {
    const [bank, setBank]= useState([]);
    const[q, setQ] = useState('');
    const History = useHistory();
    useEffect(() => {
        // axios.get('/admin/job')
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const third = await axios.get(`${base_url}/api/admin/account_details`)
                setBank(third.data.data)
            } catch (error) {
                switch (error.response.status){
                    case 403:
                        History.push('/403')
                }
                console.log(error)
            }
        }
        myAPI()
        // axios.get(`${base_url}/admin/user/all`).then(res=>{
        //     setAllUser(...allUser, res.data.data)
        //     })
    }, [])
    
    const tBody=  bank.filter(d=> {
        console.log(Object.keys(d))
        return Object.keys(d).some(key=>d['user'].toString().toLowerCase().indexOf(q.toString().toLowerCase())> -1)
    }).map((req)=>{
        return(
            <tr key={req._id}>
                <td>{req.user}</td>
                <td>{req.account_name}</td>
                <td>{req.account_number}</td>
                <td>{req.bank_name}</td>
                <td>{moment(req.updatedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
            </tr>
        )
    })
    return (
        <div className='container-fluid'>
            <div className='breadcrumb'>
                <small className='breadcrumb-item'> <Link to='/admin/dashboard'>Dashboard</Link> </small>
                <small className='breadcrumb-item'>Bank details</small>
            </div>
            <div className='row text-right mt-2'>
                <div className=' offset-md-10 col-md-2 col-12 form-group'>
                    <input type='text' className='form-control search-box' value={q}
                    onChange={e=> setQ(e.target.value)} placeholder="Search by userId"/>
                </div>
            </div>
            <div className='row '>
                <div className='col-12 col-md-9 mx-auto'>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Name</th>
                                <th>Account Number</th>
                                <th>Bank</th>
                                <th>Created_At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tBody}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminAccountDetails;