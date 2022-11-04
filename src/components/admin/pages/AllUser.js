import React ,{useState, useEffect} from 'react';
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
export default function AllUser() {
    const [allUser, setAllUser]= useState([]);
    const[q, setQ] = useState('');
    const History = useHistory()
    useEffect(() => {
        // axios.get('/admin/job')
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const first = await axios.get(`${base_url}/api/admin/all_user`)
                setAllUser(first.data.data);
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
    
    const tBody=  allUser.filter(d=> {
        return Object.keys(d).some(key=>d['user'].toString().toLowerCase().indexOf(q.toString().toLowerCase())> -1)
    }).map((req)=>{
        return(
            <tr key={req._id}>
                <td>{req.user}</td>
                <td>{req.name}</td>
                <td>{req.email}</td>
                <td>{req.account_type}</td>
                <td>{req.mobile}</td>
                <td>{req.address}</td>
                <td>{req.account_number}</td>
                {/* <td>{req.gender} </td> */}
                {/* <td>{req.country}</td>
                <td>{req.state}</td>
                <td>{req.telephone}</td>
                <td>{req.birth_date}</td> */}
            </tr>
        )
    })
    return (
        <div className='container-fluid'>
            <div className='breadcrumb'>
                <small className='breadcrumb-item'> <Link to='/admin/dashboard'>Dashboard</Link> </small>
                <small className='breadcrumb-item'>All user</small>
            </div>
            <div className='row text-right mt-2'>
                <div className=' offset-md-10 col-md-2 col-12 form-group'>
                    <input type='text' className='form-control search-box' value={q}
                    onChange={e=> setQ(e.target.value)} placeholder="Search by userId"/>
                </div>
            </div>
            <div className='row '>
                <div className='col-12'>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Account_type</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Account Number</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {tBody}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
