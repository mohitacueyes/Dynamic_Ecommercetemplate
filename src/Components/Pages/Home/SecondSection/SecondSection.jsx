import React, { useState, useEffect } from 'react'

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
            <section className="py-4">
              <div className="container">
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                  <div className="col ">
                    <div className="d-flex align-items-center justify-content-center p-3 border">
                      <div className="fs-1 text-content"><i className="bx bx-taxi" />
                      </div>
                      <div className="info-box-content ps-3">
                        <h6 className="mb-0 fw-bold TitleSecond">FREE SHIPPING &amp; RETURN</h6>
                        <p className="mb-0 ParaSecond">Free shipping on all orders over $49</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex align-items-center justify-content-center p-3 border">
                      <div className="fs-1 text-content"><i className="bx bx-dollar-circle" />
                      </div>
                      <div className="info-box-content ps-3">
                        <h6 className="mb-0 fw-bold TitleSecond">MONEY BACK GUARANTEE</h6>
                        <p className="mb-0 ParaSecond">100% money back guarantee</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex align-items-center justify-content-center p-3 border">
                      <div className="fs-1 text-content"><i className="bx bx-support" />
                      </div>
                      <div className="info-box-content ps-3">
                        <h6 className="mb-0 fw-bold TitleSecond">ONLINE SUPPORT 24/7</h6>
                        <p className="mb-0 ParaSecond">Awesome Support for 24/7 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

    </>
  )
}

export default SecondSection
