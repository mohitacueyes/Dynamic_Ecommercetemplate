import React from 'react'

const Support = () => {
  return (
   <>
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
          <div className="col">
            <div className="text-center border p-3 bg-white">
              <div className="font-50 text-dark"><i className="bx bx-cart-add" />
              </div>
              <h5 className="fs-5 text-uppercase mb-0 fw-bold">Free delivery</h5>
              <p className="text-capitalize">Free delivery over $199</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
            </div>
          </div>
          <div className="col">
            <div className="text-center border p-3 bg-white">
              <div className="font-50 text-dark"><i className="bx bx-credit-card" />
              </div>
              <h5 className="fs-5 text-uppercase mb-0 fw-bold">Secure payment</h5>
              <p className="text-capitalize">We possess SSL / Secure сertificate</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
            </div>
          </div>
          <div className="col">
            <div className="text-center border p-3 bg-white">
              <div className="font-50 text-dark">	<i className="bx bx-dollar-circle" />
              </div>
              <h5 className="fs-5 text-uppercase mb-0 fw-bold">Free returns</h5>
              <p className="text-capitalize">We return money within 30 days</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
            </div>
          </div>
          <div className="col">
            <div className="text-center border p-3 bg-white">
              <div className="font-50 text-dark">	<i className="bx bx-support" />
              </div>
              <h5 className="fs-5 text-uppercase mb-0 fw-bold">Customer Support</h5>
              <p className="text-capitalize">Friendly 24/7 customer support</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Support
