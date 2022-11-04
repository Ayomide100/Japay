import React from 'react';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "grey" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "grey" }}
        onClick={onClick}
      />
    );
  }

function SectionThree({activate}) {
    const content = [
        {
            package: 'Bronze',
            Amount: '1500',
            roi: '50% in 6 days',
            color: 'bg-primary'
        },
        {
            package: 'Silver',
            Amount: '3000',
            roi: '50% in 6 days',
            color: 'bg-danger'
        },
        {
            package: 'Gold',
            Amount: '5000',
            roi: '100% in 12 days',
            color: 'bg-success'
        },
        {
            package: 'Ruby',
            Amount: '10000',
            roi: '100% in 12 days',
            color: 'bg-info'
        },
        {
            package: 'Platinum',
            Amount: '20000',
            roi: '120% in 26 days',
            color: 'bg-secondary'
        },
        {
            package: 'Francium',
            Amount: '50000',
            roi: '150% in 26 days',
            color: 'bg-warning'
        },
      ]
    const settingSmall = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
    
    return (
        <div className='row mb-3'>
            <div className='col-12'>
                <h3>Plans</h3>
                <div style={{width:'560px'}}>
                    
                </div>
                <Slider {...settings}>
                    {content.map((x, i) => {
                        return <div key="{i} " className={`${x.color} big card text-center m-3 p-2`}
                        onClick = {()=> activate(x.package)}>
                            <div className='card-body text-white'>
                                <h4 className='text-left'><b>{x.package}</b></h4>
                                <hr/>
                                <div className='row mb-4'>
                                    <div className='col-6 text-left'>
                                        Amount <br/> {x.Amount} SECx
                                    </div>
                                    <div className='col-6 text-right'>
                                        return <br/> {x.roi} SECx
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </Slider>
                <Slider {...settingSmall}>
                    {content.map((x, i) => {
                        return <div key="{i} " 
                        className={`${x.color} small card text-center`}
                        onClick = {()=> activate(x.package)}>
                            <div className='card-body text-white'>
                                <h4 className='text-left'><b>{x.package}</b></h4>
                                <hr/>
                                <div className='row mb-4'>
                                    <div className='col-6 text-left'>
                                        Amount <br/> {x.Amount} SECx
                                    </div>
                                    <div className='col-6 text-right'>
                                        return <br/> {x.roi} SECx
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </Slider>
            </div>
            <div className='mt-2'>
                <hr/>
            </div>
        </div>
    );
}

export default SectionThree;