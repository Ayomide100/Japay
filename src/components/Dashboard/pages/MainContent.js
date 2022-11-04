import React from 'react';
import SectionFour from './SectionFour';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';

function MainContent({data}) {

    const handleActivate = async(plan)=>{
        // const formData = {plan}
        // try{
        //     const result = await activatePlan(formData)
        //     window.location.reload();
        // }
        // catch(err){
        //     if(err.response){
        //         console.log(err.response.data)
        //     }
        // }
    }
    
    return (
        <div className='col-md-9 col-12  content'>
            <div className='container'>
                <SectionOne data={data}/>
                <SectionTwo data={data}/>
                <SectionThree data={data} activate= {handleActivate}/>
                <SectionFour />
            </div>
        </div>
    );
}

export default MainContent;