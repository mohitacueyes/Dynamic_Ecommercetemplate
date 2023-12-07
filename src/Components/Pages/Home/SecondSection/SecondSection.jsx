import React , { useState, useEffect } from 'react'

const SecondSection = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/homeaddbanner-list`)
      .then(response => response.json())
      .then(data => setBannerData(data.ResponseData))
      .catch(error => console.error('Error:', error));
  }, []);
  return (
   <>
 <div className='service24'>
 <div className="page-wrapper">
  <div className="page-content">
    <section className="py-4 ">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 g-4">
          <div className="col ">
            <div className="d-flex align-items-center justify-content-center p-3 border">
              <div className="fs-1 text-content"><i className="bx bx-taxi" />
              </div>
              <div className="info-box-content ps-3">
                <h6 className="mb-0 fw-bold">FREE SHIPPING &amp; RETURN</h6>
                <p className="mb-0">Free shipping on all orders over $49</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center justify-content-center p-3 border">
              <div className="fs-1 text-content"><i className="bx bx-dollar-circle" />
              </div>
              <div className="info-box-content ps-3">
                <h6 className="mb-0 fw-bold">MONEY BACK GUARANTEE</h6>
                <p className="mb-0">100% money back guarantee</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex align-items-center justify-content-center p-3 border">
              <div className="fs-1 text-content"><i className="bx bx-support" />
              </div>
              <div className="info-box-content ps-3">
                <h6 className="mb-0 fw-bold">ONLINE SUPPORT 24/7</h6>
                <p className="mb-0">Awesome Support for 24/7 Days</p>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </section>
    {/*end information*/}
    {/*start pramotion*/}
    <section className="py-4">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4">
        { bannerData .filter(banner => banner.is_active !== 2).map(banner => (
          <div className="col">
            <div className="card rounded-0 shadow-none bg-info bg-opacity-25" >
              <div className="row g-0 align-items-center">
                <div className="col mt-4 mb-4 ms-4"  key={banner.id}>
                  <img src={banner.image} className="img-fluid" />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title text-uppercase fw-bold">{banner.name}</h5>
                    <p className="card-text text-uppercase">Starting at $9</p>
                    <a href="javascript:;" className="btn btn-outline-dark btn-ecomm">SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
        {/*end row*/}
      </div>
    </section>
    {/*end pramotion*/}
  </div>
</div>
 </div>

   </>
  )
}

export default SecondSection
