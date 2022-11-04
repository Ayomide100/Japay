import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Styles = styled.div`
        .card{
            box-shadow: 0px 20px 50px rgba(18, 17, 39, 0.08);
        }
        .pricing{
            margin-top: 100px;
        }
        p{
            color: #9CABB5;
            font-family: 'DM Sans';
            font-size: 18px;
            line-height: 180% !important;
        }
        h3{
            color: #232F3E;
            font-size: 44px;
        }
        h4{
            font-family: 'IBM Plex Sans';
            color: #232F3E;
            font-size: 28px;
        }
        .card{
            border-radius: 12px;
            background: linear-gradient(116.85deg, rgba(252, 70, 107, 0.5) 0%, rgba(63, 94, 251, 0.5) 100%);
        }
        h6{
            color: #9CABB5;
            font-family: 'DM Sans';
            font-size: 16px;
        }
        li{
            font-size: 14px;
            color: #232F3E
        }
        .card-isclicked {
            background-color: #2B871B;
        }
        .card-isclicked h4 h6 li{
            color: white
        }
        a{
            text-decoration: none
        }
        .btn-disable{
            background-color: #D0DCE4;
            height: 48px;
        }
        button{
            width: 122px;
            height: 48px;
            border-radius: 8px;
        }
        .hr{
            background-color: white
        }
        .check{
            color:  #10B981
        }
        @media (max-width: 768px) {
            .hidden-ss{
                display: none !important;
            }
            h3{
                font-size: 24px;
            }
            h4{
                font-size: 24px;
            }
            p{  
                margin-top: 25px;
                font-size: 18px;
                width: 97%;
                line-height: 180%;
            }
            .d-sm-none{
                display: none !important
            }
            .card-two{
                padding-top: 20px ;
                padding-bottom: 24px ;
                padding-left: 15px !important;
                padding-right: 23px !important
            }
            .top{
                margin-bottom: 0px 
            }
        }
        `
function Category(props) {
    const [clicked, setClicked] = useState(false)
    const [clickedTwo, setClickedTwo] = useState(false)
    const [vendor, setVendor] = useState('')
    const handleClick =(id)=>{
        if(id === 1){
            setClickedTwo(false)
            setClicked(true)
            setVendor('Owner')
        }
        else{
            setClicked(false)
            setClickedTwo(true)
            setVendor('Driver')
        }
    }
    return (
        <Styles>
            <div className='container pricing'>
                <div className='row top mb-5'>
                    <div className='col-md-8 mx-auto'>
                        <div className='text-center'>
                            <h3>
                                <b>Select a user category</b>
                            </h3>
                            <p>
                                The Best Beneficial Place to Buy and Sell Software Marketplace <br/>
                                with a buy now pay later service
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-9 mx-auto col-12'>
                        <div className='row'>
                            <div className='col-12 col-md-6 pr-4'>
                                <Link to='#' onClick={()=> handleClick(1)}>
                                    <div className={clicked? 'card bg-primary p-5': 'card first-card  p-5'}>
                                        <h4 
                                        className={clicked ? 'text-center pt-4 text-white mb-3' : 'text-center mb-3 pt-4'}>
                                            <b>Driver</b>
                                        </h4>
                                        <h6 className={clicked ? 'text-center text-white mb-3' : 'mb-3 text-center'}>
                                            Register as a driver
                                        </h6>
                                        <hr className={clicked ? 'hr' : ''}/>
                                        <ul className='list-unstyled'>
                                            <li className={clicked ? 'mt-3 text-white' : 'mt-3'}>
                                                <span className='mr-2'>
                                                    <i class={clicked? "fas fa-check text-white" : "fas fa-check check"}></i>
                                                </span> Complete your profile
                                            </li>
                                            <li className={clicked ? 'mt-3 text-white' : 'mt-3'}>
                                                <span className='mr-2'>
                                                    <i class={clicked? "fas fa-check text-white" : "fas fa-check check"}></i>
                                                </span> Get booked by business owners
                                            </li>
                                            <li className={clicked ? 'mt-3 text-white' : 'mt-3'}>
                                                <span className='mr-2'>
                                                    <i class={clicked? "fas fa-check text-white" : "fas fa-check check"}></i>
                                                </span> Choose to accept or reject the booking
                                            </li>
                                            <li className={clicked ? 'mt-3 text-white' : 'mt-3'}>
                                                <span className='mr-2'>
                                                    <i class={clicked? "fas fa-check text-white" : "fas fa-check check"}></i>
                                                </span> Meetup with owners to deliver their goods and collect payments
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-12  col-md-6 pl-4 card-two '>
                                <Link to='#' onClick={()=> handleClick(2)}>
                                    <div className={clickedTwo? 'card  bg-primary p-5': 'card first-card p-5'}>
                                        <h4 
                                        className={clickedTwo ? 'text-center pt-4 mb-3 text-white' : 'text-center mb-3 pt-4'}>
                                            <b>Owner</b>
                                        </h4>
                                        <h6 className={clickedTwo ? 'text-center text-white mb-3' : 'mb-3 text-center'}>
                                            Register as a business owner
                                        </h6>
                                        <hr className={clickedTwo ? 'hr' : ''}/>
                                        <ul className='list-unstyled'>
                                            <li className={clickedTwo ? 'mt-3 text-white' : 'mt-3'}>
                                                <span className='mr-2'>
                                                    <i class={clickedTwo? "fas fa-check text-white" : "fas fa-check check"}></i>
                                                </span> Complete you profile
                                            </li>
                                            <li className={clickedTwo ? 'mt-3 text-white' : 'mt-3'}>
                                                <span className='mr-2'>
                                                    <i class={clickedTwo? "fas fa-check text-white" : "fas fa-check check"}></i>
                                                </span> Book a logistic driver to deliver your goods
                                            </li>
                                            <li className={clickedTwo ? 'mt-3 text-white' : 'mt-3'}>
                                                <span className='mr-2'>
                                                    <i class={clickedTwo? "fas fa-check text-white" : "fas fa-check check"}></i>
                                                </span> Get a notification from the booked driver on the logistic status
                                            </li>
                                            <li className={clickedTwo ? 'mt-3 text-white' : 'mt-3'}>
                                                <span className='mr-2'>
                                                    <i class={clickedTwo? "fas fa-check text-white" : "fas fa-check check"}></i>
                                                </span> Get your goods delivered
                                            </li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='text-center mr-3  mt-5 mb-5'>
                            <Link to={clicked || clickedTwo ? {pathname:'/signup', state:{vendor}}: '#'}>
                                <button 
                                className=
                                {clicked || clickedTwo ? 'btn btn-md btn-primary': 'btn text-white btn-md btn-disable'}
                                disabled={clicked || clickedTwo ? false : true}
                                role='link'> 
                                Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    );
}

export default Category;