import axios from 'axios';
import React, {useState, useEffect} from 'react';

function TransactionHistory(props) {
    const [history, setHistory] = useState([]);
    useEffect(()=>{
        const base_url = process.env.REACT_APP_SERVER
        const myApi = async() =>{
            try{
                const result = await axios.get(`${base_url}/api/transaction/history`)
                console.log(result.data)
                setHistory(result.data.history)
            }
            catch(err){
                if(err.response) return console.log(err.response.data)
            }
        }

        myApi()
    }, [])

    const display = history.map(h =>{
        return(
            <div className='col-12 col-md-7 mb-3' key={h._id}>
                <div className='card'>
                    <div className='card-header'>
                        <p className='card-text'>
                            {h.paymentGateway === 'flutterwave' &&
                                <p>
                                    You have made  a deposit of {h.amount} naira using card payment
                                </p>
                            }
                            {
                                h.sent_to && <p>You've made a transfer of {h.amount}SECx to {h.sent_to}</p>
                            }
                            {
                                h.sent_by && <p>You've received {h.amount}SECx from {h.sent_by}</p>
                            }
                        </p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className='col-12 col-md-9 mx-auto mt-4'>
            {history.length < 1 ? <h4>No transaction record found</h4> : <>{display}</>}
        </div>
    );
}

export default TransactionHistory;