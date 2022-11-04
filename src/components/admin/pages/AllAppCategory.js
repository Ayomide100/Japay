import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment'

function AllAppCategory(props) {
    const [data, setData] = useState([]);
    const[q, setQ] = useState('');
    const History = useHistory()
    useEffect(() => {
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const second = await axios.get(`${base_url}/api/admin/app`)
                console.log(second.data.data)
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

    const tBody=  data.filter(d=> {
        return Object.keys(d).some(key=>d['user'].toString().toLowerCase().indexOf(q.toString().toLowerCase())> -1)
    }).map((req)=>{
        return(
            <tr key={req._id}>
                <td>{req.user}</td>
                <td>{req.project_name}</td>
                <td>{req.description}</td>
                <td>{req.category}</td>
                <td><a href={req.demo_link} target='_blank'>{req.demo_link}</a></td>
                {req.status ==='accepted' && 
                <td>
                    <button className='btn btn-sm btn-success'>{req.status}</button> 
                </td>}
                {req.status ==='rejected' && 
                <td>
                    <button className='btn btn-sm btn-danger'>{req.status}</button> 
                </td>}
                {req.status ==='pending' && 
                <td>
                    <button className='btn btn-sm btn-primary'>{req.status}</button> 
                </td>}
                <td>{moment(req.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
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
                <small className='breadcrumb-item'>All App_category</small>
            </div>
            <div className='row text-right mt-2'>
                <div className=' offset-md-10 col-md-2 col-12 form-group'>
                    <input type='text' className='form-control search-box' value={q}
                    onChange={e=> setQ(e.target.value)} placeholder="Search by userId"/>
                </div>
            </div>
            <div className='row '>
                <div className='col-12 col-md-11 mx-auto'>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Demo</th>
                                <th>Status</th>
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

export default AllAppCategory;