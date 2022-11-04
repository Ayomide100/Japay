import axios from 'axios';
import React, {useState, useEffect} from 'react';

const SectionFour = () => {
    const [bronze, setBronze] = useState({})
    const [silver, setSilver] = useState({})
    const [gold, setGold] = useState({})
    const [ruby, setRuby] = useState({})
    const [platinum, setPlatinum] = useState({})
    const [francium, setFrancium] = useState({})
    useEffect(()=>{
        const base_url = process.env.REACT_APP_SERVER
        axios.get(`${base_url}/api/getplan`).then(res=>{
          setBronze(res.data.message.bronze)
          setSilver(res.data.message.silver)
          setGold(res.data.message.gold)
          setRuby(res.data.message.ruby)
          setPlatinum(res.data.message.platinum)
          setFrancium(res.data.message.francium)
        })
      })

    const renderActive = ()=>{
        if(!bronze){
            return(
                <p>No active running plan</p>
            )
        }
        if(bronze.is_active === 'Active'){
            return(
                <div className='card'>
                    <div className='card-body'>
                        <p>Bronze is active it will mature on {bronze.to_complete}</p>
                    </div>
                </div>
            )
        }
        if(silver.is_active === 'Active'){
            return(
                <div className='card'>
                    <div className='card-body'>
                        <p>Silver is active it will mature on {silver.to_complete}</p>
                    </div>
                </div>
            )
        }
        if(gold.is_active === 'Active'){
            return(
                <div className='card'>
                    <div className='card-body'>
                        <p>Gold is active it will mature on {gold.to_complete}</p>
                    </div>
                </div>
            )
        }
        if(ruby.is_active === 'Active'){
            return(
                <div className='card'>
                    <div className='card-body'>
                        <p>Ruby is active it will mature on {ruby.to_complete}</p>
                    </div>
                </div>
            )
        }
        if(platinum.is_active === 'Active'){
            return(
                <div className='card'>
                    <div className='card-body'>
                        <p>platinum is active it will mature on {platinum.to_complete}</p>
                    </div>
                </div>
            )
        }
        if(francium.is_active === 'Active'){
            return(
                <div className='card'>
                    <div className='card-body'>
                        <p>francium is active it will mature on {francium.to_complete}</p>
                    </div>
                </div>
            )
        }
        if(francium.is_active === 'Inactive' && bronze.is_active === 'Inactive' &&
        silver.is_active === 'Inactive' && gold.is_active === 'Inactive' &&
        platinum.is_active === 'Inactive'){
            return(
                <p>No active running plan</p>
            )
        }
    }
    return (
        <div className='row' id = 'active'>
            <div className='col-12'>
                <h3>Active Plan</h3>
                { renderActive()}
            </div>
        </div>
    );
}

export default SectionFour;