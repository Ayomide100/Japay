import React from 'react';

function SectionOne(props) {
  return (
    <div>
      <section className="section section-md bg-gray-100 text-center" id="features">
        <div className="container">
          <h3 className="wow fadeIn" data-wow-delay=".1s">Our Services</h3>
          <div className="row row-30 row-md-50 row-xl-60">
            <div className="col-sm-6 col-lg-4 wow fadeIn">
              <article className="box-modern" data-anime="circles-1">
                <div className="box-modern-media">
                  <div className="box-modern-icon mdi mdi-account-plus"></div>
                  <div className="box-modern-circle box-modern-circle-1"></div>
                  <div className="box-modern-circle box-modern-circle-2"></div>
                </div>
                <p className="box-modern-title">Private Driver</p>
                <div className="box-modern-text">
                  <p>Enjoy the best customer service from our professional drivers.</p>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay=".1s">
              <article className="box-modern box-modern_alternate" data-anime="circles-2">
                <div className="box-modern-media">
                  <div className="box-modern-icon mdi mdi-airplane"></div>
                  <div className="box-modern-circle box-modern-circle-1"></div>
                  <div className="box-modern-circle box-modern-circle-2"></div>
                </div>
                <p className="box-modern-title">Airport transfer</p>
                <div className="box-modern-text">
                  <p>Comfortable transfer services from airport to any chosen address.</p>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay=".2s">
              <article className="box-modern" data-anime="circles-1">
                <div className="box-modern-media">
                  <div className="box-modern-icon mdi mdi-briefcase-check"></div>
                  <div className="box-modern-circle box-modern-circle-1"></div>
                  <div className="box-modern-circle box-modern-circle-2"></div>
                </div>
                <p className="box-modern-title">Baggage Transfer</p>
                <div className="box-modern-text">
                  <p>If you need to collect your baggage, we are ready to help you.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-3'>
        <div className="container">
          <div className='row'>
          <div class="col-sm-6">

<div id="fields2">
  <form id="ajax-contact-form2" class="form-horizontal" action="javascript:avoid(0);">

    <div class="form-group">
      <label for="inputType">LOAD TYPE</label>
      <input type="text" class="form-control" id="inputType" name="type" value=""/>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label for="inputQuantity">QUANTITY</label>
          <input type="text" class="form-control" id="inputQuantity" name="quantity" value=""/>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="inputWeight">WEIGHT</label>
          <input type="text" class="form-control" id="inputWeight" name="weight" value=""/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-4">
        <div class="form-group">
          <label for="inputLength">LENGTH</label>
          <input type="text" class="form-control" id="inputLength" name="length" value=""/>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="inputHeight">HEIGHT</label>
          <input type="text" class="form-control" id="inputHeight" name="height" value=""/>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="inputWidth">WIDTH</label>
          <input type="text" class="form-control" id="inputWidth" name="width" value=""/>
        </div>
      </div>
    </div>

        <div class="row">
          <div class="col-sm-4 clearfix">
            <label class="label">FRAGILE</label>
                  <div>
                      <label className='ml-2'>
                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />Yes</label>
                      <label className='ml-2'>
                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>No</label>
                  </div>
                  </div>
                  <div class="col-sm-8 clearfix">
                    <label class="label">SELECT SERVICE</label>
                      <div>
                        <label className='ml-2'>
                          <input type="checkbox"/>SWIFT
                        </label>
                        <label className='ml-2'>
                          <input type="checkbox" checked />EXPRESS
                        </label>
                        <label className='ml-2'>
                          <input type="checkbox" />SPEED
                        </label>
                      </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputTotal">TOTAL (AUTO CALCULATED)</label>
                  <input type="text" class="form-control" id="inputTotal" name="total" value=""/>
                </div>




              </form>
            </div>

            </div>
            <div class="col-sm-6">
              <img src="images/small1.jpg" alt="" class="img-responsive ismall ismall1"/>
              <img src="images/big1.jpg" alt="" class="img-responsive ibig ibig1"/>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-1 text-center" id="stickers">
        <div className="container">
          <div className="row justify-content-center align-items-center bordered-1">
            <div className="col-sm-4">
              <div className="box-default">
                <p className="box-default-title">Standard</p>
                <p className="box-default-text">$2,7 /km</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box-default">
                <p className="box-default-title">Business</p>
                <p className="box-default-text">$5,7 /km</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box-default">
                <p className="box-default-title">Premium</p>
                <p className="box-default-text">$7,7 /km</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionOne;