import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
import axios from 'axios'
import Clock from './Clock';
import Header from './Header';

function MyPurchase(props) {
        const [data, setData] = useState([]);
       
        const History = useHistory()
        // /api/myitem
        useEffect(() => {
            const base_url = process.env.REACT_APP_SERVER;
            async function myAPI(){
                try {
                    const second = await axios.get(`${base_url}/api/getplan`)
                    setData(second.data.payload);
                } catch (error) {
                    console.log(error)   
                }
            }
            myAPI()
        }, []);  
    
        const card = data.map(d=>{
            return(
                <div class="col-6 col-xl-3 col-lg-4 " key ={d._id}>
                <div class="cs-card cs-style4 cs-box_shadow cs-white_bg">
                  {/* <span class="cs-card_like cs-primary_color">
                    <i class="fas fa-heart fa-fw"></i>
                    2.1K
                  </span> */}
                  <div  class="cs-card_thumb cs-zoom_effect">
                    <img src={d.project_avatar} alt="image" class="cs-zoom_item"/>
                  </div>
                  <div class="cs-card_info">
                    <a href="#" class="cs-avatar cs-white_bg">
                      {d.creator_pic ? <img src={d.creator_pic} alt="Avatar"/> :<img src="images/avatar/avatar_12.png" alt="Avatar"/>}
                      <span>{d.creator.split(" ")[0]}</span>
                    </a>
                    <Clock deadline={d.duration}/>
                    <h3 class="cs-card_title mt-3">{d.project_name}</h3>
                    <div class="cs-card_price">Price: <b class="cs-primary_color">&#8358;{d.amount}</b></div>
                    <hr/>
                    <div class="cs-card_footer">
                      <span class="cs-card_btn_1" data-modal="#history_1">
                        <a href={d.demo_link} target='_blank'>demo link</a>
                      </span>
                      <span class="cs-card_btn_2" data-modal="#bid_1" aria-disabled><span>Place Bid</span></span>
                    </div>
                  </div>
                </div>
                <div class="cs-height_30 cs-height_lg_30"></div>
              </div>
            )
        })
    return (
        <>
          <Header/>
          <div className='container-fluid vh-100'>
              <div className='row'>
                  <Sidebar/>
                      <div class="cs-profile_right">
                          <div class="cs-height_30 cs-height_lg_30"></div>
                              <h2 class="cs-section_heading cs-style1">My Purchase</h2>
                          <div class="cs-height_25 cs-height_lg_25"></div>
                          <div class="row">
                              {data.length < 1 ? <h4>No active subscription</h4> :card}
                          </div>
                      </div>
              </div>            
          </div>
        </>
    );
}

export default MyPurchase;