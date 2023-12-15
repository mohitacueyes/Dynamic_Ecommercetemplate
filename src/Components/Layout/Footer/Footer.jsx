
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BottommNavigation from './BottommNavigation';
import { Container } from 'react-bootstrap';



const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 1000,
    margin: 0, // Ensure the navigation stays above other elements if needed
  },
};

export const Footer = ({ currentPage }) => {
  const [contactInfoVisible, setContactInfoVisible] = useState(false);
  const [usefulLinksVisible, setUsefulLinksVisible] = useState(false);
  const [policiesVisible, setPoliciesVisible] = useState(false);
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <section className="py-5 border-top bgColor">
          <Container fluid className="pe-5 ps-5">
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
                    <li className="mb-1 "><a href="/terms-conditions" className='text-decoration-none text-dark '><i className="bx bx-chevron-right" /> Shopping Policy </a>
                    </li>
                    <li className="mb-1"><a href="/privacy-policy" className='text-decoration-none text-dark '><i className="bx bx-chevron-right" /> Exchange Policy </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-section2">
                  <h5 className="mb-4 text-uppercase fw-bold">Quick Links</h5>
                  <ul className="list-unstyled ">
                    <li className="mb-1 "><a href="order_track" className='text-decoration-none text-dark   '><i className="bx bx-chevron-right" />Track Order</a>
                    </li>
                    <li className="mb-1"><a href="/about" className='text-decoration-none text-dark'><i className="bx bx-chevron-right" /> About</a>
                    </li>
                    <li className="mb-1"><a href="blog" className='text-decoration-none text-dark'><i className="bx bx-chevron-right" /> Blog</a>
                    </li>
                    <li className="mb-1"><a href="/contact" className='text-decoration-none text-dark'><i className="bx bx-chevron-right" /> Contact</a>
                    </li>
                    <li className="mb-1"><a href="support" className='text-decoration-none text-dark'><i className="bx bx-chevron-right" /> Help &amp; FAQs</a>
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
          </Container>
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
      <footer className="footer-section-mobile pe-3 ps-3 pb-2">
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
        <div className="address mb-3 d-flex align-items-center justify-content-between">
          <h6 className="mb-0 text-uppercase fw-bold" onClick={toggleUsefulLinks}>
            Quick Links
          </h6>
          <span className="plus-sign" onClick={toggleUsefulLinks}>
            {usefulLinksVisible ? '-' : '+'}
          </span>
        </div>
        {usefulLinksVisible && (
          <div className="footer-section2">
            <ul className="list-unstyled">
              <li className="mb-1">
                <a href="order_track" className='text-decoration-none text-dark'>
                  <i className="bx bx-chevron-right" />Track Order
                </a>
              </li>
              <li className="mb-1">
                <a href="/about" className='text-decoration-none text-dark'>
                  <i className="bx bx-chevron-right" /> About
                </a>
              </li>
              <li className="mb-1">
                <a href="blog" className='text-decoration-none text-dark'>
                  <i className="bx bx-chevron-right" /> Blog
                </a>
              </li>
              <li className="mb-1">
                <a href="/contact" className='text-decoration-none text-dark'>
                  <i className="bx bx-chevron-right" /> Contact
                </a>
              </li>
              <li className="mb-1">
                <a href="support" className='text-decoration-none text-dark'>
                  <i className="bx bx-chevron-right" /> Help &amp; FAQs
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="address  d-flex align-items-center justify-content-between">
          <h6 className="mb-0 text-uppercase fw-bold " onClick={togglePolicies}>
            Policies
          </h6>
          <span className="plus-sign" onClick={togglePolicies}>
            {policiesVisible ? '-' : '+'}
          </span>
        </div>
        {policiesVisible && (
          <ul className="list-unstyled mb-3">
            <li className="mb-1">
              <a href="/terms-conditions" className='text-decoration-none text-dark fw-bold'>
                <i className="bx bx-chevron-right" /> Shopping Policy   
              </a>
            </li>
            <li className="mb-5">
              <a href="/privacy-policy" className='text-decoration-none text-dark fw-bold'>
                <i className="bx bx-chevron-right" /> Exchange Policy 
              </a>
            </li>
            
          </ul>
        )}
      </footer>
     <BottommNavigation />
     {/* </div> */}
      {/*end footer section*/}

    </>
  )
}
