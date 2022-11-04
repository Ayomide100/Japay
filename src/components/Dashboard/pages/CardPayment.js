import React, {useState} from 'react';
import {Alert, Spinner} from 'react-bootstrap'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import { rave } from '../../../utils/postData';



const CardPayment = ({name, email}) => {
    const [failure, setFailure]= useState('');
    const [state,setState] = useState({
        name,
        email,
        phonenumber:"",
        amount: "1500",
        currency: "NGN",
        success: ""
    })
    const config = {
        public_key: process.env.REACT_APP_RAVE_PAYMENT,
        tx_ref: Date.now(),
        amount: state.amount,
        currency: state.currency,
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: state.email,
          phonenumber: state.phonenumber,
          name: state.name,
        },
        customizations: {
          title: 'SmartEarnerX',
          description: 'Make deposit now',
          logo: 'images/logo.png',
        },
      };

      const FlutterPayment = useFlutterwave(config);

      const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }

    
    const handleSubmit=async(e)=>{
        e.preventDefault() 
    }
    

    return (
        <>
            {state.success && <Alert  variant={'success'} className='pb-3 text-center'>
                {state.success} 
            </Alert>}
            {failure && <Alert  variant={'danger'} className='pb-3 text-center'>
                {failure}
            </Alert>}
            <div className='row pay'>
                <form onSubmit={(values) => handleSubmit(values)} className="form-inline needs-validation sign">
                    <div className="form-group col-12 col-md-3">                    
                        <input type="text" className='form-control' name="phonenumber"placeholder='Mobile' 
                        onChange={handleChange} 
                        required/>
                    </div>
                    <div className="form-group col-12 ml-3  col-md-2 ">
                        <select className="form-control w-100  option-input" name="currency" onChange={handleChange}>
                            <option>NGN</option>
                        </select>
                    </div>
                    <div className="form-group col-12 col-md-3">
                            <select className="form-control w-100 option-input" name="amount" onChange={handleChange}>
                                <option>1500</option>
                                <option>3000</option>
                                <option>5000</option>
                                <option>10000</option>
                                <option>20000</option>
                                <option>50000</option>
                                <option>100000</option>
                                <option>150000</option>
                                <option>200000</option>
                            </select>
                    </div>
                    <div className="form-group col-12 col-md-3 text-right">
                            <button className='btn btn-md btn-img w-100' 
                            disabled={state.phonenumber ? false: true}  onClick={
                                    () => {
                                        FlutterPayment({
                                            callback: (response) => {
                                            const formData ={transaction_id: response.transaction_id}
                                            console.log(formData)
                                            rave(formData).then(res=>{
                                                console.log(res.data);
                                                setState({success: res.data.message, phonenumber:""})
                                            }).catch(err=>{
                                                console.log(err)
                                                setFailure({failure: 'something went wrong'})
                                            })
                                            closePaymentModal() // this will close the modal programmatically
                                            },
                                            onClose: () => {},
                                        });
                                        }
                                }>Pay now</button>
                    </div>
                </form>
                <script src="https://checkout.flutterwave.com/v3.js"></script>  
            </div>
        </>
    );
}

export default CardPayment;