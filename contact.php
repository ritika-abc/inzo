
   <?php
include "nav.php";
  ?>
   
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114766.08402385234!2d87.43023048772845!3d25.986396113100483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e56103f70db10b%3A0x34ca380cfc6cec0d!2sParha%2C%20Bihar%20854325!5e0!3m2!1sen!2sin!4v1791450322951!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    <section id="products">
      <div class="container">
       
        <div class="row g-4 mt-3 scene">
          <div class="col-sm-6 col-lg-4 rv">
            <article class="p-card tilt">
            
              <div class="p-body text-center">
                <h3>Call Now</h3>
                <h6>+91 9661899367</h6>
                <h6>+91 9163543343</h6>
              </div>
            </article>
          </div>
          <div class="col-sm-6 col-lg-4 rv">
            <article class="p-card tilt">
            
              <div class="p-body text-center">
                <h3>Email</h3>
                <h6>tanzirakhtar@gmail.com</h6>
                <h6>enquiry@inzoimpex.com</h6>
              </div>
            </article>
          </div>
          <div class="col-sm-6 col-lg-4 rv">
            <article class="p-card tilt">
            
              <div class="p-body text-center">
                <h3>Address</h3>
                <h6>
Madrsa Chowk, Ward no – 10, Garhbanaili, Kasba, Ghordaur, Post Office: Garhbanaili, District: Purnia, Bihar – 854325</h6>
               
              </div>
            </article>
          </div>
         
        </div>
      </div>
    </section>

    <section id="contact" class="alt">
      <div class="container">
        <div class="text-center rv">
          <h2 class="sec-title">Contact Us</h2>
          <div class="bar"></div>
          <p class="sec-sub mx-auto">Tell us what you need and we will reply with specifications and pricing.</p>
        </div>
        <div class="row g-4 mt-3">
          <div class="col-lg-5 rv l">
            <div class="c-info">
              <h3 class="h4 mb-4">INZO Impex</h3>
              <ul class="p-0">
                <li><i class="fa-solid fa-phone"></i><a href="tel:+91 9661899367">+91 9661899367</a></li>
                <li><i class="fa-solid fa-envelope"></i><a
                    href="mailto:tanzirakhtar@gmail.com">tanzirakhtar@gmail.com</a></li>
                <li><i class="fa-solid fa-envelope"></i><a
                    href="mailto:enquiry@inzoimpex.com">enquiry@inzoimpex.com</a></li>
                <li><i class="fa-solid fa-location-dot"></i>
                  <address class="mb-0">Madrsa Chowk, Ward no – 10, Garhbanaili, Kasba, Ghordaur, Post Office:
                    Garhbanaili, District: Purnia, Bihar – 854325</address>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 rv r">
            <form id="cf" novalidate class="row g-3">
              <div class="col-md-6"><label class="form-label" for="nm">Name</label><input id="nm" class="form-control"
                  required minlength="2" autocomplete="name">
                <div class="invalid-feedback">Enter your name.</div>
              </div>
              <div class="col-md-6"><label class="form-label" for="em">Email</label><input id="em" type="email"
                  class="form-control" required autocomplete="email">
                <div class="invalid-feedback">Enter a valid email address.</div>
              </div>
              <div class="col-md-6"><label class="form-label" for="ph">Phone</label><input id="ph" type="tel"
                  class="form-control" pattern="[0-9+\s\-]{8,15}" required autocomplete="tel">
                <div class="invalid-feedback">Enter a valid phone number.</div>
              </div>
              <div class="col-md-6"><label class="form-label" for="pr">Product</label><select id="pr"
                  class="form-select" required>
                  <option value="">Choose a product</option>
                  <option>Maize</option>
                 
                  <option>Fox Nut (Makhana)</option>
                  <option>Spices</option>
                  <option>Jaggery</option>
                </select>
                <div class="invalid-feedback">Select a product.</div>
              </div>
              <div class="col-12"><label class="form-label" for="ms">Message</label><textarea id="ms" rows="4"
                  class="form-control" required minlength="10"></textarea>
                <div class="invalid-feedback">Tell us a little more (10+ characters).</div>
              </div>
              <div class="col-12"><button class="btn btn-gold" type="submit">Send Enquiry</button>
                <div id="ok" class="text-success fw-bold mt-3" role="status" hidden>Thank you! Your enquiry is ready to
                  send in your email app.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>


  <?php
include "footer.php";
  ?>