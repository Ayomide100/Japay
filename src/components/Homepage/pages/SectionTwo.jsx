import React from 'react';

function SectionTwo(props) {
  return (
    <div>
      <section class="section section-lg bg-gray-100 text-center">
        <div class="container">
          <h3>Testimonials</h3>
          <div class="isotope-outer isotope-wrap">
            <div class="row row-30 row-xl-40 isotope" data-isotope-layout="masonry">
              <div class="col-md-6 col-lg-4 isotope-item wow fadeInUpSmall">
                <blockquote class="quote-modern">
                  <div class="quote-modern-header">
                    <div class="quote-modern-info"><img class="quote-modern-avatar" src="images/testimonials-1-74x74.jpg" alt="" width="74" height="74"/>
                      <div class="quote-modern-info-main">
                        <cite class="quote-modern-cite">Jane Williams</cite>
                        <p class="quote-modern-position">Regular Client</p>
                      </div>
                    </div>
                  </div>
                  <div class="quote-modern-main">
                    <div class="quote-modern-text">
                      <p>I found your service to be a 5-star experience. The driver was waiting at the arrivals hall for us. All the people we communicated with were pleasant and cheerful.</p>
                    </div>
                    <div class="quote-modern-meta"><a class="quote-modern-link icon mdi mdi-facebook" href="#"></a>
                      <time class="quote-modern-time" datetime="2020">Mar 24, 2020</time>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div class="col-md-6 col-lg-4 isotope-item wow fadeInUpSmall" data-wow-delay=".1s">
                <blockquote class="quote-modern">
                  <div class="quote-modern-header">
                    <div class="quote-modern-info"><img class="quote-modern-avatar" src="images/testimonials-2-74x74.jpg" alt="" width="74" height="74"/>
                      <div class="quote-modern-info-main">
                        <cite class="quote-modern-cite">John Doe</cite>
                        <p class="quote-modern-position">Regular Client</p>
                      </div>
                    </div>
                  </div>
                  <div class="quote-modern-main">
                    <div class="quote-modern-text">
                      <p>Everything went perfectly! Incredibly punctual, friendly drivers, and the best service!</p>
                    </div>
                    <div class="quote-modern-meta"><a class="quote-modern-link icon mdi mdi-facebook" href="#"></a>
                      <time class="quote-modern-time" datetime="2020">Mar 24, 2020</time>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div class="col-md-6 col-lg-4 isotope-item wow fadeInUpSmall" data-wow-delay=".3s">
                <blockquote class="quote-modern">
                  <div class="quote-modern-header">
                    <div class="quote-modern-info"><img class="quote-modern-avatar" src="images/testimonials-3-74x74.jpg" alt="" width="74" height="74"/>
                      <div class="quote-modern-info-main">
                        <cite class="quote-modern-cite">Kate Peterson</cite>
                        <p class="quote-modern-position">Regular Client</p>
                      </div>
                    </div>
                  </div>
                  <div class="quote-modern-main">
                    <div class="quote-modern-text">
                      <p>The service was excellent, thank you. My driver was waiting at Arrivals for me with a clear sign. He introduced himself, was very polite and friendly.</p>
                    </div>
                    <div class="quote-modern-meta"><a class="quote-modern-link icon mdi mdi-facebook" href="#"></a>
                      <time class="quote-modern-time" datetime="2020">Mar 24, 2020</time>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default SectionTwo;