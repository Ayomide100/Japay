import React from 'react';
import { useLocation } from 'react-router-dom';

function SectionTwo({data}) {
    const location = useLocation()
    const handleActive = () => {
        if(location.pathname ==='/dashboard'){
            document.getElementById("active").scrollIntoView({ behavior: "smooth" });
        }
        else{
            return null
        }
      };
    return (
            <div className='row section-two'>
                <div className='col-12 mb-3'>
                    <div className='card p-3'>
                        <h5 className='text-center mt-3'>Available Balance</h5>
                        <h5 className='text-center mt-3'><b>{data.balance === 0 ? <>0.00 SECx</> : <>{data.balance} SECx</>}</b></h5>
                        <div className='row mb-3 mt-3 mb-3'>
                            <div className='col-6'>
                                <button 
                                className='btn btn-md btn-primary w-100'
                                onClick={handleActive}>
                                    Active
                                </button>
                            </div>
                            <div className='col-6'>
                                <button className='btn btn-md btn-info  w-100'>Matured</button>
                            </div>
                        </div>
                    </div>
                </div>
            <hr/>
        </div>
    );
}

export default SectionTwo;