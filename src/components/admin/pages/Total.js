import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
export default function Total() {
    const[q, setQ] = useState('');
    const [allJob, setAllJob]= useState([]);
    const History = useHistory();
    useEffect(() => {
        // axios.get('/admin/job')
        const base_url = process.env.REACT_APP_SERVER;
        
        async function myAPI(){
            try {
                const res = await axios.get(`${base_url}/admin/job`)
                setAllJob(res.data.data)
            } catch (error) {
                switch (error.response.status){
                    case 403:
                        History.push('/403')
                }
            }
        }
        myAPI()
    }, [])
    const tBody=  allJob.filter(d=> {
        return Object.keys(d).some(key=>d['_id'].toString().toLowerCase().indexOf(q.toString().toLowerCase())> -1)
    }).map((req)=>{
        return(
            <tr key={req._id}>
                <td>{req.user}</td>
                <td>{req.title}</td>
                <td>{req.category}</td>
                <td>{req.subCategory}</td>
                <td dangerouslySetInnerHTML={{__html:req.description}}></td>
                <td>{req.workers}</td>
                <td>{req.amount}</td>
                <td>{req.total}</td>
                <td>{req.depositBalance}</td>
                <td dangerouslySetInnerHTML={{__html:req.proof}}></td>
                <td>{req.status} </td>
                
            </tr>
        )
    })
    return (
        <div className='container-fluid'>
            <div className='breadcrumb'>
                <small className='breadcrumb-item'> <Link to='/dashboard'>Dashboard</Link> </small>
                <small className='breadcrumb-item'>All Job</small>
            </div>
            <div className='row text-right mt-2'>
                <div className=' offset-10 col-2 form-group'>
                <input type='text' className='form-control search-box' value={q}
                    onChange={e=> setQ(e.target.value)} placeholder="Search..."/>
                </div>
            </div>
            <div className='row '>
                <div className='col-12'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Title</th>
                                <th>category</th>
                                <th>Subcategory</th>
                                <th>Description</th>
                                <th>No of Workers</th>
                                <th>Amount</th>
                                <th>Total</th>
                                <th>Balance</th>
                                <th>Proof</th>
                                <th>Status</th>
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
