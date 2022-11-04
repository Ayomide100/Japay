import React from 'react';
import Typical from 'react-typical'

function About(props) {
    return (
        <div className='col-12 col-md-7 mb-3'>
            <div className='mt-3'>
                <h5>About Smart EarnerX</h5>
            </div>
            <p>
                Smart EarnerX is an investment platform that provide a lot of goodies to
                our investors with sweet ROI by investing their money into the financial market
                and real estate management
            </p>
            <h5>Our plans</h5>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Plan</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Referral Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bronze</td>
                        <td>1500</td>
                        <td>Invest into Bronze and get a 50% ROI in 6 days!</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>Silver</td>
                        <td>3000</td>
                        <td>Invest into Silver and get a 50% ROI in 6 days!</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Gold</td>
                        <td>5000</td>
                        <td>Invest into Gold and get a 100% ROI in 12 days!</td>
                        <td>1500</td>
                    </tr>
                    <tr>
                        <td>Ruby</td>
                        <td>10000</td>
                        <td>Invest into Ruby and get a 100% ROI in 12 days!</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>Platinum</td>
                        <td>20000</td>
                        <td>Invest into Platinum and get a 120% ROI in 26 days!</td>
                        <td>3000</td>
                    </tr>
                    <tr>
                        <td>Francium</td>
                        <td>50000</td>
                        <td>Invest into Francium and get a 120% ROI in 26 days!</td>
                        <td>5000</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
}

export default About;