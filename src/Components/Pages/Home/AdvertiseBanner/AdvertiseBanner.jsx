import React from 'react'

const AdvertiseBanner = () => {
  return (
   <>
    {/*start Advertise banners*/}
    <section className="py-4 bg-dark">
      <div className="container">
        <div className="add-banner">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4">
            <div className="col d-flex">
              <div className="card rounded-0 w-100 border-0 shadow-none">
                <img src="assets/images/promo/ad-1.jpg" className="img-fluid h-100" alt="..." />
                <div className="position-absolute top-0 end-0 m-3 product-discount"><span className>-10%</span>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Sunglasses Sale</h5>
                  <p className="card-text">See all Sunglasses and get 10% off at all Sunglasses</p> <a href="javascript:;" className="btn btn-dark btn-ecomm">SHOP BY GLASSES</a>
                </div>
              </div>
            </div>
            <div className="col d-flex">
              <div className="card rounded-0 w-100 border-0 shadow-none">
                <img src="assets/images/promo/ad-2.webp" className="img-fluid h-100" alt="..." />
                <div className="position-absolute top-0 end-0 m-3 product-discount"><span className>-80%</span>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Cosmetics Sales</h5>
                  <p className="card-text">Buy Cosmetics products and get 30% off at all Cosmetics</p> <a href="javascript:;" className="btn btn-dark btn-ecomm">SHOP BY COSMETICS</a>
                </div>
              </div>
            </div>
            {/* <div className="col d-flex"> */}
              {/* <div className="card rounded-0 w-100 border-0 shadow-none">
                <img src="assets/images/promo/06.png" className="img-fluid h-100" alt="..." />
                <div className="card-img-overlay text-center top-20">
                  <div className="border border-white border-2 py-3 bg-dark-3">
                    <h5 className="card-title text-white">Fashion Summer Sale</h5>
                    <p className="card-text text-uppercase fs-1 lh-1 mt-3 mb-2 text-white">Up to 80% off</p>
                    <p className="card-text fs-5 text-white">On Top Fashion Brands</p>	<a href="javascript:;" className="btn btn-white btn-ecomm">SHOP BY FASHION</a>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
            <div className="col d-flex">
              <div className="card rounded-0 w-100 border-0 shadow-none">
                <div className="position-absolute top-0 end-0 m-3 product-discount"><span className>-50%</span>
                </div>
                <img src="assets/images/promo/ad-3.jpg" className="img-fluid h-100" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title fs-2 fw-bold text-uppercase">Super Sale</h5>
                  <p className="card-text text-uppercase fs-5 lh-1 mb-2">Up to 50% off</p>
                  <p className="card-text">On All Electronic</p> <a href="javascript:;" className="btn btn-dark btn-ecomm">HURRY UP!</a>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
      </div>
    </section>
    {/*end Advertise banners*/}
   </>
  )
}

export default AdvertiseBanner
