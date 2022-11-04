import React from 'react'

export default function Reject({data}) {
    const reject = data.filter((ne)=> ne.status=="Rejected")

        const tBody=  reject.map((req)=>{
            return(
                <tr key={req._id}>
                    <td>{req.user}</td>
                    <td>{req.email}</td>
                    <td>{req.Title}</td>
                    <td>{req.category}</td>
                    <td>{req.subCategory}</td>
                    <td>{req.description}</td>
                    <td>{req.workers}</td>
                    <td>{req.amount}</td>
                    <td>{req.proof}</td>
                    
                </tr>
            )
        })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>category</th>
                        <th>Subcategory</th>
                        <th>Description</th>
                        <th>No of Workers</th>
                        <th>Amount</th>
                        <th>Proof</th>
                    </tr>
                </thead>
                <tbody>
                    {tBody}
                </tbody>
            </table>
        </div>
    )
}
