import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Alert, Spinner } from 'react-bootstrap';
import Header from '../Homepage/pages/Header';
import { acccountGen, activatePlan, generateAcc } from '../../utils/postData';

function Explorer({data}) {
    const [modal, setModal]= useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [account, setAccount] = useState('');
    useEffect(()=>{
        const base_url = process.env.REACT_APP_SERVER;
        async function myAPI(){
            try {
                const res = await axios.get(`${base_url}/api/payment/account_number`)
                setAccount(res.data.payload);
            } catch (error) {
              console.log(error)
            }
        }
        if(location.state){
            setFilter(location.state.type)
            }
            else{
                
            }
        myAPI()
      }, []);  
    const [state, setState] = useState({
        name: '',
        amount:'',
        duration: '',
      });
    const location = useLocation()
    const [filter, setFilter] = useState('all')
      
      const history = useHistory()
      const toggleModal=(name, duration, amount)=>{
          if(amount){
            setState({
              amount,
              name,
              duration
            })
            setModal(!modal)
          }
          else{
            setModal(!modal)
          }
        }
        const handleSubscribe = async e =>{
            e.preventDefault();
            setIsLoading(true);
            var data  = {duration: state.duration, id: state.id}
            try{
              await activatePlan(data);
              setMessage("Subscription successful")
              setIsLoading(false);
              window.location.reload()
            }
            catch(err){
              if(err.response){
                console.log(err.response)
              }
              else{
                console.log(err)
              }
            }
          }
          
          const handleSubmit =async e =>{
            e.preventDefault();
            setIsLoading(true);
            if(JSON.parse(localStorage.getItem("africanStack")).name){
              var data = {account_name: JSON.parse(localStorage.getItem("africanStack")).name}
              try{
                const res = await acccountGen(data);
                const formData = {account_number: res.data.account_number}
                await generateAcc(formData)
                setMessage("Account Generated")
                setIsLoading(false);
                window.location.reload()
              }
              catch(err){
                if(err.response){
                  console.log(err.response)
                }
                else{
                  console.log(err)
                }
              }
            }
            else{
              history.push('/login')
            }
          }

    const handleChange =(e)=>{
        setFilter(e.target.value)
    }

    const all = data.filter(d => {
        if(filter === 'Mobile application' ){
            return d.category === 'Mobile application'
        }
        else if(filter === 'Web application' ){
            return d.category === 'Web application'
        }
        else if(filter === 'Desktop application' ){
            return d.category === 'Web application'
        }
        else if(filter === 'Hosting server' ){
            return d.category === 'Hosting server'
        }
        else {
            return d
        }
    }
        ).map(d=>{
        return(
            <div className="col-md-3 col-sm-6" key ={d._id}>
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
              <div  className="cs-card_thumb cs-zoom_effect">
                <img src={d.avatar} alt="Image" className="cs-zoom_item"/>
              </div>
              <div className="cs-card_info">
                <a href="#" className="cs-avatar cs-white_bg">
                  {d.user_pic ? <img src={d.user_pic} alt="Avatar"/> :<img src="images/avatar/avatar_12.png" alt="Avatar"/>}
                  <span>{d.name.split(" ")[0]}</span>
                </a>
                <h3 className="cs-card_title">{d.project_name}</h3>
                <div className="cs-card_price">Price: <b className="cs-primary_color">&#8358;{d.amount}</b></div>
                <small>Payment duration: <br/>{d.duration}</small>
                <hr/>
                <div className="cs-card_footer">
                  <span className="cs-card_btn_1" data-modal="#history_1">
                    <a href={d.demo_link} target='_blank'>demo link</a>
                  </span>
                  <span className="cs-card_btn_2" data-modal="#bid_1" aria-disabled onClick={() =>toggleModal(d.project_name, d.duration, d.amount)}><span>Place Bid</span></span>
                </div>
              </div>
            </div>
            <div className="cs-height_30 cs-height_lg_30"></div>
          </div>
        )
    })
    return (
        <>
            <Header/>
            <div className='container-fluid'>
                <div className="cs-height_90 cs-height_lg_80"></div>
                    <section className="cs-page_head cs-bg" data-src="images/page_head_bg.svg">
                        <div className="container">
                        <div className="text-center">
                            <h1 className="cs-page_title">Explore</h1>
                            <ol className="breadcrumb" style={{background:'none'}}>
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active">Explore</li>
                            </ol>
                        </div>
                        </div>
                    </section>
                    <div className="cs-height_100 cs-height_lg_70"></div>
                    <div className="container">
                        <div className="cs-sidebar_frame cs-style1">
                        <div className="cs-sidebar_frame_left">
                            <div className="cs-filter_sidebar">
                            <div className="cs-search_widget">
                                <form action="#" className="cs-search">
                                <input type="text" className="cs-search_input" placeholder="Search"/>
                                <button className="cs-search_btn">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 18L13.875 14.375" stroke="currentColor" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                  
                                </button>
                                </form>
                            </div>
                            <div className="cs-filter_widget">
                                <h2 className="cs-filter_toggle_btn">
                                Catagory
                                <span className="cs-arrow_icon">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                  
                                </span>
                                </h2>
                                <div className="cs-filter_toggle_body">
                                <ul>
                                    <li>
                                    <div className="form-check">
                                        <input className="form-check-input" 
                                        onChange={handleChange}
                                        value='all'
                                        type="radio"
                                         name="category" id="Art"/>
                                        <label className="form-check-label" for="Art">All</label>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="form-check">
                                        <input className="form-check-input" 
                                        type="radio" 
                                        value='Mobile application'
                                        name="category" 
                                        checked={filter == 'Mobile application'? true : false}
                                        onChange={handleChange}
                                        id="Fashion"/>
                                        <label className="form-check-label" for="Fashion">
                                        Mobile App
                                        </label>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="form-check">
                                        <input className="form-check-input" 
                                        type="radio" 
                                        value='Web application'
                                        checked={filter == 'Web application'? true : false}
                                        onChange={handleChange}
                                        name="category" 
                                        id="Music"/>
                                        <label className="form-check-label" for="Music">
                                        Web App
                                        </label>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="form-check">
                                        <input className="form-check-input" 
                                        type="radio" name="category" 
                                        value='Desktop application'
                                        checked={filter == 'Desktop application'? true : false}
                                        id="Video"
                                        onChange={handleChange}/>
                                        <label className="form-check-label" for="Video">
                                        Desktop App
                                        </label>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="form-check">
                                        <input className="form-check-input" 
                                        type="radio" 
                                        onChange={handleChange}
                                        value='Hosting server'
                                        checked={filter == 'Hosting server'? true : false}
                                        name="category" id="Games"/>
                                        <label className="form-check-label" for="Games">
                                        Hosting Server
                                        </label>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                            </div> 
                            
                            <div className="cs-filter_widget">
                                <h2 className="cs-filter_toggle_btn">
                                Price
                                <span className="cs-arrow_icon">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                  
                                </span>
                                </h2>
                                <div className="cs-filter_toggle_body">
                                <div className="cs-price_form">
                                    <form className="row row-15">
                                    <div className="col-lg-12">
                                        <div className="cs-form_field_wrap cs-select_arrow">
                                        <select className="cs-form_field cs-field_sm">
                                            <option value="BTC">BTC</option>
                                            <option value="BTC">BTC</option>
                                            <option value="ETH">ETH</option>
                                            <option value="ADA">ADA</option>
                                        </select>
                                        </div>
                                        <div className="cs-height_15 cs-height_lg_15"></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="cs-form_field_wrap">
                                        <input type="text" className="cs-form_field cs-field_sm" placeholder="Min"/>
                                        </div>
                                        <div className="cs-height_15 cs-height_lg_15"></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="cs-form_field_wrap">
                                        <input type="text" className="cs-form_field cs-field_sm" placeholder="Max"/>
                                        </div>
                                        <div className="cs-height_10 cs-height_lg_10"></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="reset" className="cs-btn cs-style1 cs-color1 cs-btn_sm" value="Clear"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <button className="cs-btn cs-style1 cs-btn_sm"><span>Apply</span></button>
                                    </div>
                                    </form>
                                </div>
                                </div>
                            </div> 
                            {/* <div className="cs-filter_widget">
                                <h2 className="cs-filter_toggle_btn">
                                Collection
                                <span className="cs-arrow_icon">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                  
                                </span>
                                </h2>
                                <div className="cs-filter_toggle_body">
                                <ul>
                                    <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="collection" id="Audioglyphs" checked/>
                                        <label className="form-check-label" for="Audioglyphs">Audioglyphs</label>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="collection" id="Autoglyphs"/>
                                        <label className="form-check-label" for="Autoglyphs">
                                        Autoglyphs
                                        </label>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="collection" id="CryptoCrystal"/>
                                        <label className="form-check-label" for="CryptoCrystal">
                                        CryptoCrystal
                                        </label>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="collection" id="CryptoArte"/>
                                        <label className="form-check-label" for="CryptoArte">
                                        CryptoArte
                                        </label>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="collection" id="CyberKongz"/>
                                        <label className="form-check-label" for="CyberKongz">
                                        CyberKongz
                                        </label>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                            </div>  */}
                            <div className="cs-filter_widget">
                                <h2 className="cs-filter_toggle_btn">
                                Filter By Color
                                <span className="cs-arrow_icon">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                  
                                </span>
                                </h2>
                                <div className="cs-filter_toggle_body">
                                <div className="cs-filter_by_color">
                                    <div className="cs-color_item cs-color1"></div>
                                    <div className="cs-color_item cs-color2"></div>
                                    <div className="cs-color_item cs-color3"></div>
                                    <div className="cs-color_item cs-color4"></div>
                                    <div className="cs-color_item cs-color5"></div>
                                    <div className="cs-color_item cs-color6"></div>
                                    <div className="cs-color_item cs-color7"></div>
                                    <div className="cs-color_item cs-color8"></div>
                                </div>
                                </div>
                            </div> 
                            </div>
                        </div>
                        <div className="cs-sidebar_frame_right">
                            <div className="cs-filter_head">
                            <div className="cs-filter_head_left">
                                <span className="cs-search_result cs-medium cs-ternary_color">{data.length} Results</span>
                                <div className="cs-form_field_wrap">
                                <input type="text" className="cs-form_field cs-field_sm" placeholder="In Auction"/>
                                </div>
                                <a href="#" className="cs-clear_btn">Clear All</a>
                            </div>
                            <div className="cs-filter_head_right">
                                <div className="cs-form_field_wrap cs-select_arrow">
                                <select className="cs-form_field cs-field_sm">
                                    <option value="11">Sort By</option>
                                    <option value="22">Last 7 days</option>
                                    <option value="33">Last 30 days</option>
                                    <option value="44">All time</option>
                                </select>
                                </div>
                                <div className="cs-form_field_wrap cs-select_arrow">
                                <select className="cs-form_field cs-field_sm">
                                    <option value="1">Likes</option>
                                    <option value="2">Most popular</option>
                                    <option value="3">By price</option>
                                    <option value="4">By published</option>
                                </select>
                                </div>
                            </div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                            <div className="row">  
                                {all}                   
                            </div>
                            <div className="cs-height_10 cs-height_lg_10"></div>
                            <div className="text-center">
                            <a href="#" className="cs-btn cs-style1 cs-btn_lg"><span>Load More</span></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Modal isOpen= {modal} toggle={toggleModal}>
                            <ModalHeader  toggle={() => toggleModal()}>
                                <h4>Subscribe</h4>
                            </ModalHeader>
                                <ModalBody>
                                    <form   className="mt-4 " >
                                        <div className='container'>
                                            <div className='mt-2'>
                                            {message && <Alert  variant={'success'} className='pb-3 text-center'>
                                                                    {message}
                                                                </Alert>}
                                            </div>
                                            <div className='row mb-2'>
                                                <div className='col-6'>
                                                Project Name
                                                </div>
                                                <div className='col-6 text-right'>
                                                {state.name}
                                                </div>
                                            </div>
                                            <div className='row mb-2'>
                                                <div className='col-6'>
                                                Current Price
                                                </div>
                                                <div className='col-6 text-right'>
                                                &#8358;{state.amount}
                                                </div>
                                            </div>
                                            <div className='row mb-5'>
                                                <div className='col-6 '>
                                                Payment Duration
                                                </div>
                                                <div className='col-6 text-right'>
                                                {state.duration}
                                                </div>
                                            </div>
                                            <div className='row mb-1'>
                                                <div className='col-12'>
                                                <p>Choose to make an installmental payment and pay up within {state.duration}</p>
                                                </div>
                                            </div>
                                            {account ?
                                            <>
                                                <div className='row'>
                                                    <div className='col-6 '>
                                                    Account Number
                                                    </div>
                                                    <div className='col-6 text-right'>
                                                    {account}
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col-6 '>
                                                    Bank
                                                    </div>
                                                    <div className='col-6 text-right'>
                                                    Providus
                                                    </div>
                                                </div>
                                                <div className='row mt-3'>
                                                    <button className='btn btn-lg 
                                                    mt-2 btn-primary w-100'
                                                    onClick={handleSubscribe}>
                                                    {isLoading ? <Spinner variant='light' 
                                                    animation="border" 
                                                    role="status"/>: <>Subscribe</>}
                                                    </button>
                                                </div>
                                            </> 
                                            : 
                                                <div className='row'>
                                                    <button className='btn btn-lg btn-primary w-100'
                                                    type='submit' onClick={handleSubmit}>
                                                    {isLoading ? <Spinner variant='light' animation="border" role="status"/>: <>Generate Payment Account</>}
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                        </form>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Explorer;