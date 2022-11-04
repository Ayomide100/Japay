import React from 'react';

function Header(props) {
  return (
    <header className="section page-header page-header-1">
        <div className="layout-4">
          <div className="layout-4-item-right">
            <div className="box-custom-2 bg-accent">
              <div className="box-custom-2-bg">
                <div className="box-custom-2-bg-inner">
                  {/* Background Image goes here */}
                  <div className="box-custom-2-bg-image" ></div>
                </div>
              </div>
              <div className="box-custom-2-inner">
                <h2 className="wow fadeIn">Get a Logistic Driver</h2>
                <div className="contacts-default">
                  <div className="unit align-items-center">
                    <div className="unit-left">
                      <div className="contacts-default-icon mdi mdi-phone-incoming"></div>
                    </div>
                    <div className="unit-body"><a className="contacts-default-link" href="#">1-800-123-1234</a></div>
                  </div>
                </div>
                <p className="" >Get your goods delivered safely<br/>within Nigeria with our trusted drivers</p>
                <form className="rd-form rd-mailform form-style-1">
                  <div className="form-wrap">
                    <select className="form-input select button-shadow" name="find-job-location" data-minimum-results-for-search="Infinity" data-constraints="@Required" data-placeholder="Car Type">
                      <option label="placeholder"></option>
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                    </select>
                  </div>
                  <div className="form-wrap">
                    <input className="form-input" id="form-location" type="text" name="pickup-address" data-constraints="@Required"/>
                    <label className="form-label" for="form-location">Pickup Address</label><span className="form-icon mdi mdi-map-marker"></span>
                  </div>
                  <div className="form-wrap">
                    <input className="form-input" id="form-location-2" type="text" name="destination-address" data-constraints="@Required"/>
                    <label className="form-label" for="form-location-2">Destination Address</label><span className="form-icon mdi mdi-map-marker"></span>
                  </div>
                  <div className="form-wrap-2">
                    <div className="form-wrap">
                      <input className="form-input" id="form-phone" type="text" name="phone" data-constraints="@Required @PhoneNumber"/>
                      <label className="form-label" for="form-phone">Your Phone Number</label><span className="form-icon mdi mdi-cellphone"></span>
                    </div>
                    <div className="form-button">
                      <button className="button button-block button-secondary button-winona" type="submit">Order now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="layout-4-item-left"><img src="images/idnex-1-747x597.png" alt="" width="747" height="597"/>
          </div>
        </div>
      </header>

  );
}

export default Header;