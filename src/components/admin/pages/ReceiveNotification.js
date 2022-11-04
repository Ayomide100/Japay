import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function ReceiveNotification(props) {
    const [data, setData]= useState([]);
    useEffect(() => {
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const res = await axios.get(`${base_url}/api/admin/notification`)
                setData(res.data.data)
            } catch (error) {
                switch (error.response.status){
                    case 403:
                        History.push('/403')
                    break;
                    default:
                    console.log(error)
                }
            }
        }
        myAPI()
    }, []);

    const display = data.map(d=>{
        return(
            <div className='col-12 col-md-8 mx-auto' key={d._id}>
                <div className='card mb-2'>
                    <div className='card-header'>
                        <p className='card-text'>user: {d.user}</p>
                    </div>
                    <div className='card-body'>
                        <h6>Name: {d.name}</h6>
                        <p>{d.notification}</p>
                    </div>
                    <div className='card-footer text-right'>
                        <small>Sent: {d.createdAt}</small>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='container'>
            <div className='breadcrumb'>
                <small className='breadcrumb-item'> <Link to='/admin/dashboard'>Dashboard</Link> </small>
                <small className='breadcrumb-item'>Notification</small>
            </div>
            <div className='row'>
                {data.length < 1 ? (
                    <h4> No notification available </h4>
                ):
                    <>{display}</>
                }
            </div>
        </div>
    );
}

export default ReceiveNotification;