import React from 'react'
import { Container } from 'react-bootstrap'

function Checkoutcomplete() {
  return (
    <>
            <div>
            {/*start page wrapper */}
            <div className="page-wrapper">
                <div className="page-content">
                {/*start breadcrumb*/}
                <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
                <Container fluid className="pe-lg-5 ps-lg-5">
                    <div className="page-breadcrumb d-flex align-items-center">
                        <h3 className="breadcrumb-title pe-3">Checkout</h3>
                        <div className="ms-auto">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /> Home</a>
                            </li>
                            <li className="breadcrumb-item"><a href="javascript:;">Shop</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Order Complete</li>
                            </ol>
                        </nav>
                        </div>
                    </div>
                   </Container>
                </section>
                {/*end breadcrumb*/}
                {/*start shop cart*/}
                <section className="py-4">
                    <div className="container">
                    <div className="card py-3 mt-sm-3">
                        <div className="card-body text-center">
                        <h2 className="h4 pb-3">Thank you for your order!</h2>
                        <p className="fs-sm mb-2">Your order has been placed and will be processed as soon as possible.</p>
                        <p className="fs-sm mb-2">Make sure you make note of your order number, which is <span className="fw-medium">34VB5540K83.</span>
                        </p>
                        <p className="fs-sm">You will be receiving an email shortly with confirmation of your order. <u>You can now:</u>
                        </p><a className="btn btn-light rounded-0 mt-3 me-3" href="index.html">Go back shopping</a><a className="btn btn-white rounded-0 mt-3" href="order-tracking.html"><i className="bx bx-map" />Track order</a>
                        </div>
                    </div>
                    </div>
                </section>
                {/*end shop cart*/}
                </div>
            </div>
            {/*end page wrapper */}
    </div>

    </>
  )
}

export default Checkoutcomplete