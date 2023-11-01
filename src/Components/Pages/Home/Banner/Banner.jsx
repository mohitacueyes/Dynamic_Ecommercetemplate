import React from 'react'

const Banner = () => {
  return (
   <>
<section className="slider-section mb-4">
  <div className="first-slider p-0">
    <div className="banner-slider owl-carousel owl-theme">
      <div className="item">
        <div className="position-relative">
          <div className="position-absolute top-50 slider-content translate-middle">
            <h3 className="h3 fw-bold d-none d-md-block">New Trending</h3>
            <h1 className="h1 fw-bold">Women Fashion</h1>
            <p className="fw-bold text-dark d-none d-md-block"><i>Last call for upto 15%</i></p>
            <div className><a className="btn btn-dark btn-ecomm px-4" href="shop-grid.html">Shop Now</a>
            </div>
          </div>
          <a href="javascript:;">
            <img src="../assets/images/banners/01.png" className="img-fluid" alt="..." />
          </a>
        </div>
      </div>
      <div className="item">
        <div className="position-relative">
          <div className="position-absolute top-50 slider-content translate-middle">
            <h3 className="h3 fw-bold d-none d-md-block">New Trending</h3>
            <h1 className="h1 fw-bold">Men Fashion</h1>
            <p className="fw-bold text-dark d-none d-md-block"><i>Last call for upto 15%</i></p>
            <div className><a className="btn btn-dark btn-ecomm px-4" href="shop-grid.html">Shop Now</a>
            </div>
          </div>
          <a href="javascript:;">
            <img src="assets/images/banners/02.png" className="img-fluid" alt="..." />
          </a>
        </div>
      </div>
      <div className="item">
        <div className="position-relative">
          <div className="position-absolute top-50 slider-content translate-middle">
            <h3 className="h3 fw-bold d-none d-md-block">New Trending</h3>
            <h1 className="h1 fw-bold">Kids Fashion</h1>
            <p className="fw-bold text-dark d-none d-md-block"><i>Last call for upto 15%</i></p>
            <div className><a className="btn btn-dark btn-ecomm px-4" href="shop-grid.html">Shop Now</a>
            </div>
          </div>
          <a href="javascript:;">
            <img src="assets/images/banners/04.png" className="img-fluid" alt="..." />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default Banner
