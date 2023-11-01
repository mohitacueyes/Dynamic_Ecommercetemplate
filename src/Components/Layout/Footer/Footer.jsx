import React from 'react'

export const Footer = () => {
  return (
 <>
      {/*start footer section*/}
<footer>
  <section className="py-5 border-top bg-light">
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
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
              <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> Jeans</a>
              </li>
              <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> T-Shirts</a>
              </li>
              <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> Sports</a>
              </li>
              <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> Shirts &amp; Tops</a>
              </li>
              <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> Clogs &amp; Mules</a>
              </li>
              <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> Sunglasses</a>
              </li>
              <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> Bags &amp; Wallets</a>
              </li>
              <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> Sneakers &amp; Athletic</a>
              </li>
              <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> Electronis</a>
              </li>
              <li className="mb-1"><a href="javascript:;"><i className="bx bx-chevron-right" /> Furniture</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="footer-section3">
            <h5 className="mb-4 text-uppercase fw-bold">Popular Tags</h5>
            <div className="tags-box d-flex flex-wrap gap-2">
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Cloths</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Electronis</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Furniture</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Sports</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Men Wear</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Women Wear</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Laptops</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Formal Shirts</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Topwear</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Headphones</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Bottom Wear</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Bags</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Sofa</a>
              <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Shoes</a>
            </div>
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
{/*end footer section*/}

 </>
  )
}
