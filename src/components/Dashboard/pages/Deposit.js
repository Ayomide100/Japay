import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import CardPayment from './CardPayment';

function Deposit({data}) {
    return (
        <div className='col-12 mt-4 col-md-9'>
            <marquee>
                You get an extra 5% bonus when you make a deposit of 100,000 above
            </marquee>
            <div className='row '>
                <h3 className='mb-3'>Pay with card</h3>
                <hr/>
                <div className='card'>
                    <div className='card-body'>
                        <CardPayment name={data.name} email={data.email}/>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <h3 className='mb-3'>Pay with USDT</h3>
                <hr/>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Unavailable</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deposit;