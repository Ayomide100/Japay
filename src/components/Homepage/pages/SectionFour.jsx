import React from 'react';

function SectionFour(props) {
  return (
    <div id="contacts">
      <div class="container">

        <div class="title4">GET IN TOUCH</div>

        <div class="title2 text-center">Lorem ipsum dolor amet in concateur in voluptate cillum luptate dolor in reprehendercil<br/>
    dolore eu  pariatur. Excepteur sint luptate cil Proto.</div>

    <br/><br/>

        <div class="row">
          <div class="col-sm-6">
            <div id="note"></div>
            <div id="fields">
              <form id="ajax-contact-form" class="form-horizontal" action="javascript:alert('success!');">

                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                        <label for="inputName">Your Name</label>
                        <input type="text" class="form-control" id="inputName" name="name" value="Full Name" onBlur="if(this.value=='') this.value='Full Name'" onFocus="if(this.value =='Full Name' ) this.value=''" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" name="email" value="E-mail address" onBlur="if(this.value=='') this.value='E-mail address'" onFocus="if(this.value =='E-mail address' ) this.value=''" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                        <label for="inputMessage">Your Message</label>
                        <textarea class="form-control" rows="7" id="inputMessage" name="content" onBlur="if(this.value=='') this.value='Message'"
                                    onFocus="if(this.value =='Message' ) this.value=''" >Message</textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn-default btn-cf-submit">send message</button>
              </form>
            </div>
          </div>
          <div class="col-sm-6">

            <img src="images/small3.jpg" alt="" class="img-responsive ismall ismall3"/>
            <img src="images/big3.jpg" alt="" class="img-responsive ibig ibig3"/>

          </div>
        </div>
      </div>
    </div>

  );
}

export default SectionFour;