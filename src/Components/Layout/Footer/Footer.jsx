import React, { useState } from 'react';

export const Footer = () => {
  const [contactInfoVisible, setContactInfoVisible] = useState(false);
  const [usefulLinksVisible, setUsefulLinksVisible] = useState(false);
  const [policiesVisible, setPoliciesVisible] = useState(false);

  const toggleContactInfo = () => {
    setContactInfoVisible(!contactInfoVisible);
  };

  const toggleUsefulLinks = () => {
    setUsefulLinksVisible(!usefulLinksVisible);
  };

  const togglePolicies = () => {
    setPoliciesVisible(!policiesVisible);
  };
  return (
    <>
      {/*start footer section*/}
      <footer className="footer-section">
        <section className="py-5 border-top bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-xl-3">
              <div className="col">
                <div className="footer-section1">
                  <h5 className="mb-4 text-uppercase fw-bold">Contact Info</h5>
                  <div className="address mb-3">
                    <h6 className="mb-0 text-uppercase fw-bold">Address</h6>
                    <p className="mb-0">123 Street Name, City, Australia</p>
                  </div>
                  <div className="phone mb-3">
                    <h6 className="mb-0 text-uppercase fw-bold">Phone</h6>
                    <p className="mb-0">Toll Free (123) 472-796</p>
                    <p className="mb-0">Mobile : +91-9910XXXX</p>
                  </div>
                  <div className="email mb-3">
                    <h6 className="mb-0 text-uppercase fw-bold">Email</h6>
                    <p className="mb-0">mail@example.com</p>
                  </div>
                  <div className="working-days mb-3">
                    <h6 className="mb-0 text-uppercase fw-bold">WORKING DAYS</h6>
                    <p className="mb-0">Mon - FRI / 9:30 AM - 6:30 PM</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-section2">
                  <h5 className="mb-4 text-uppercase fw-bold">Categories</h5>
                  <ul className="list-unstyled">
                    <li className="mb-1"><a href="/terms-conditions"><i className="bx bx-chevron-right" /> Terms & Conditions</a>
                    </li>
                    <li className="mb-1"><a href="/privacy-policy"><i className="bx bx-chevron-right" /> Privacy Policy</a>
                    </li>
                    <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> Refund Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
                <div className="col">
                <div className="footer-section4">
                  <h5 className="mb-4 text-uppercase fw-bold">Stay informed</h5>
                  <div className="subscribe">
                    <input type="text" className="form-control" placeholder="Enter Your Email" />
                    <div className="mt-3 d-grid">
                      <a href="javascript:;" className="btn btn-dark btn-ecomm">Subscribe</a>
                    </div>
                    <p className="mt-3 mb-0">Subscribe to our newsletter to receive early discount offers, updates and new products info.</p>
                  </div>
                  <div className="download-app mt-3">
                    <h6 className="mb-3 text-uppercase fw-bold">Download our app</h6>
                    <div className="d-flex align-items-center gap-2">
                      <a href="javascript:;">
                        <img src="assets/images/icons/apple-store.png" className width={140} alt />
                      </a>
                      <a href="javascript:;">
                        <img src="assets/images/icons/play-store.png" className width={140} alt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </section>
        <section className="footer-strip text-center py-3 border-top positon-absolute bottom-0">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-center gap-3 justify-content-between">
              <p className="mb-0">Copyright © 2022. All right reserved.</p>
              <div className="payment-icon">
                <div className="row row-cols-auto g-2 justify-content-end">
                  <div className="col">
                    <img src="assets/images/icons/visa.png" alt />
                  </div>
                  <div className="col">
                    <img src="assets/images/icons/paypal.png" alt />
                  </div>
                  <div className="col">
                    <img src="assets/images/icons/mastercard.png" alt />
                  </div>
                  <div className="col">
                    <img src="assets/images/icons/american-express.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <footer className="footer-section-mobile p-3">
        <div className="address mb-3 d-flex align-items-center  justify-content-between">
          <h6 className="mb-0 text-uppercase fw-bold">Contact Us </h6>
          <span className="plus-sign" onClick={toggleContactInfo}> {contactInfoVisible ? '-' : '+'}</span>
        </div>
        {contactInfoVisible && (
          <div className="footer-section1">

            <div className="address mb-3">
              <h6 className="mb-0 text-uppercase fw-bold">Address</h6>
              <p className="mb-0">123 Street Name, City, Australia</p>
            </div>
            <div className="phone mb-3">
              <h6 className="mb-0 text-uppercase fw-bold">Phone</h6>
              <p className="mb-0">Toll Free (123) 472-796</p>
              <p className="mb-0">Mobile : +91-9910XXXX</p>
            </div>
            <div className="email mb-3">
              <h6 className="mb-0 text-uppercase fw-bold">Email</h6>
              <p className="mb-0">mail@example.com</p>
            </div>
            <div className="working-days mb-3">
              <h6 className="mb-0 text-uppercase fw-bold">WORKING DAYS</h6>
              <p className="mb-0">Mon - FRI / 9:30 AM - 6:30 PM</p>
            </div>
          </div>
        )}
        <div className="address mb-3 d-flex align-items-center  justify-content-between">
          <h6 className="mb-0 text-uppercase fw-bold">Useful Links</h6>
          <span className="plus-sign">+</span>
        </div>
        <div className="address mb-3 d-flex align-items-center justify-content-between">
          <h6 className="mb-0 text-uppercase fw-bold" onClick={togglePolicies}>
            Policies
          </h6>
          <span className="plus-sign" onClick={togglePolicies}>
            {policiesVisible ? '-' : '+'}
          </span>
        </div>
        {policiesVisible && (
          <ul className="list-unstyled">
            <li className="mb-1">
              <a href="/terms-conditions" className='text-decoration-none text-dark fw-bold'>
                <i className="bx bx-chevron-right" /> Terms & Conditions
              </a>
            </li>
            <li className="mb-1">
              <a href="/privacy-policy" className='text-decoration-none text-dark fw-bold'>
                <i className="bx bx-chevron-right" /> Privacy Policy
              </a>
            </li>
            <li className="mb-1">
              <a href="javascript:;">
                <i className="bx bx-chevron-right" /> Refund Policy
              </a>
            </li>
          </ul>
        )}
      </footer>
     <div className="homeFooter">
     <div className="d-flex flex-row justify-content-between align-items-center p-3 shadow ">
        <div className="d-flex flex-column align-items-center ">
          <i className="bx bx-home" />
          <span><a href="/home" className='text-decoration-none text-dark fw-bold'>Home</a></span>
        </div>
        <div className="d-flex flex-column align-items-center ">
          <i className="bx bx-search" />
          <span><a href="" className='text-decoration-none text-dark fw-bold'>Search</a></span>
        </div>
        <div className="d-flex flex-column align-items-center ">
          <i className="bx bx-cart" />
          <span><a href="" className='text-decoration-none text-dark fw-bold'> Cart </a></span>
        </div>
        <div className="d-flex flex-column align-items-center ">
          <i className="bx bx-user" />
          <span><a href="" className='text-decoration-none text-dark fw-bold'>Account</a></span>
        </div>
      
      </div>
     </div>
      {/*end footer section*/}

    </>
  )
}
