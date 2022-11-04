import React, {useState} from 'react';
import styled from "styled-components";


const LinkWrapper = styled.div`
  ul li{
    display: inline
  }
  
`;
function SectionOne({data}) { 
    return (
        <div className='row'>
            <div className='col-12'>
                <LinkWrapper>
                    <div className='mt-2'>
                        <marquee>
                            <ul className='list-unstyled'>
                                <li className='mr-3'>Total Members: {'14,777'}</li>
                                <li className='mr-3'>Total Investors: {'13,497'}</li>
                                <li className='mr-3'>Total Payouts: {'13,130'}</li>
                                <li className='mr-3'>Recent Payouts: {'12,327,340'}</li>
                                <li className='mr-3'>Current Exchange rate is: <span>&#8358;</span>{'600/1USDT'}</li>
                            </ul> 
                        </marquee>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-12'>
                           <div className='card card-one'>
                                <div className='card-body'>
                                    <h2>Hello {data.name}</h2>
                                    <p>Invest and Earn with Us</p>
                                </div>
                           </div>
                        </div>
                    </div>
                </LinkWrapper>
            </div>
        </div>
    );
}

export default SectionOne;