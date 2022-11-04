import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {update} from '../../../utils/postData'
import AdminNavbar from '../AdminNavbar'
import {   Modal,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';




export default function New() {
    const[id, setId] = useState("");
    const[text, setText] = useState("");
    const[reject, setReject] = useState(false)
    const[total, setTotal] = useState("")
    const[ModalOpen, setModalOpen] = useState(false);
    const [data, setData]= useState([]);
    const History = useHistory()
    useEffect(() => {
        // axios.get('/admin/job')
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const res = await axios.get(`${base_url}/admin/job`)
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
        // axios.get(`${base_url}/admin/job`).then(res=>{
        //     setData(...data, res.data.data)
        //     })
    }, []);
    const toggle = (id, b, total) => {
        if(b==='reject'){
            setModalOpen(!ModalOpen)
            setId(id)
            setTotal(total)
            setReject(true)
        }
        else{
            setModalOpen(!ModalOpen)
            setId(id)
            setTotal(total)
            setReject(false)
        }
    };
    
    const handleAccept= async(id)=>{
        const formData={status: "Accepted", id, total}
        console.log(formData)
        try {
            const result = await update(formData)
             if(result.data){
                console.log(result.data);
             }
        } catch (error) {
            if(error.response){
                console.log(error.response.data)
                
            }
            else{
                console.log(error)
            }
        }
        window.location.reload()
    }
    const handleReject= async()=>{
        const changeId =()=> setId()
        const formData = {status: "Rejected", id, total, reason:text }
        try {
            const result = await update(formData)
             if(result.data){
                console.log(result.data);
             }
             
        } catch (error) {
            if(error.response){
                console.log(error.response.data)
                
            }
            else{
                console.log(error)
            }
        }
        window.location.reload()
    }
    const accept = data.filter((ne)=> ne.status==="Pending")
    // console.log(accept)
    
    const tBody = accept.map((req)=>{
        return(
            <tr key={req._id}>
                <td>{req.user}</td>
                <td>{req.title}</td>
                <td dangerouslySetInnerHTML={{__html:req.description}}></td>
                <td>{req.workers}</td>
                <td>{req.amount}</td>
                <td>{req.total}</td>
                <td>{req.depositBalance}</td>
                <td dangerouslySetInnerHTML={{__html:req.proof}}></td>
                <td><a href={req.screenshot} target='_blank'>prove</a></td>
                <td> 
                    <span> <button className="btn btn-success btn-sm" onClick={ ()=> toggle(req._id, 'accept', req.total) }>Accept</button> </span>
                    <span><button className="btn btn-danger btn-sm" onClick={() => toggle(req._id,'reject',req.total)}>Reject</button></span>
                </td>    
            </tr>
            // <div className="col-md-4 mt-3">
            //     <div className='card'>
            //         <div className="card-body">
            //             <h4>{req.job_owner}</h4>
            //             <div dangerouslySetInnerHTML={{__html:req.description}}></div>
            //             <p>Number of workers: <small>{req.workers}</small> </p>
            //             <p>Amount: <small>${req.amount}</small> </p>
            //             <p>Amount: <small>${req.amount}</small> </p>
            //             <p>Balance: <small>${req.depositBalance}</small> </p>
            //         </div>
            //         <div className="card-footer">
            //             <span> <button className="btn btn-success" onClick={() => toggle(req._id,req.total)}>Accept</button> </span>
            //             <button className="btn btn-danger" onClick={() => toggle(req._id, 'reject',req.total)}>Reject</button>
            //         </div>
            //     </div>
            // </div>
        )
    })
    return (
        <div className="wrapper">
            <div className='container-fluid'>
                <div className='breadcrumb'>
                    <small className='breadcrumb-item'> <Link to='/admin/dashboard'>Dashboard</Link> </small>
                    <small className='breadcrumb-item'>New Job</small>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <table className="table table-responsive w-100" >
                            <thead className='grey'>
                                <tr>
                                    <th>User</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>No of Workers</th>
                                    <th>Amount</th>
                                    <th>Total</th>
                                    <th>Balance</th>
                                    <th>Proof</th>
                                    <th>Screenshot</th>
                                    <th>changeStatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tBody}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Modal isOpen= {ModalOpen} toggle={toggle} style={{height:"100vh"}}>
                        <ModalHeader  toggle={toggle}></ModalHeader>
                        <ModalBody>
                            {reject?                            
                                <form onSubmit={(values)=> handleReject(values)}>
                                    <p>Are you sure you want to perform this operation? Please provide a reason</p>
                                    <textarea rows={3} 
                                    className='form-control' 
                                    value={text}
                                    onChange={(e)=> setText(e.target.value)}
                                    required />
                                    <div className='mt-2 text-right'>
                                        <button className= 'btn btn-danger btn-md'>Yes</button>
                                    </div>
                                </form> :
                                 <div>
                                     <>
                                        <p>Are you sure you want to perform this operation</p>
                                        <span><button className= 'btn btn-success btn-md' onClick={handleAccept}>Yes</button></span>
                                     </>
                                </div>
                            }
                        </ModalBody>
                        
                    </Modal>
                </div>
            </div>
        </div>
    )
}
