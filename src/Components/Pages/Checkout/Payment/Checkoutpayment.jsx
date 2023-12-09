import React , { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function Checkoutpayment() {

   //   Order Details   //
   const [cartItems, setCartItems] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   useEffect(() => {
     const fetchCartData = async () => {
       const user_id = localStorage.getItem('userId');
       try {
         if (user_id) {
           const response = await fetch(`${process.env.REACT_APP_API}/api/cart-listuseridwise`, {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({ user_id }),
           });
 
           if (response.ok) {
             const data = await response.json();
             if (Array.isArray(data.ResponseData)) {
               setCartItems(data.ResponseData);
             } else {
               setCartItems([]);
             }
           } else {
             setError('Error fetching cart data: ' + response.statusText);
           }
         }
       } catch (error) {
         setError('Error fetching cart data: ' + error.message);
       } finally {
         setIsLoading(false);
       }
     };
 
     fetchCartData();
   }, []);
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
                        <li className="breadcrumb-item">
                          <a href="javascript:;">
                            <i className="bx bx-home-alt" /> Home
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="javascript:;">Shop</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Checkout
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
             </Container>
            </section>
            {/*end breadcrumb*/}
            {/*start shop cart*/}
            <section className="py-4">
            <Container fluid className="pe-lg-5 ps-lg-5">
                <div className="shop-cart">
                  <div className="row">
                    <div className="col-12 col-xl-8">
                      <div className="checkout-payment">
                        <div className="card bg-transparent rounded-0 shadow-none">
                          <div className="card-body">
                            <div className="steps steps-light">
                              <a
                                className="step-item active"
                                href="/shopcart"
                              >
                                <div className="step-progress">
                                  <span className="step-count">1</span>
                                </div>
                                <div className="step-label">
                                  <i className="bx bx-cart" />
                                  Cart
                                </div>
                              </a>
                              <a
                                className="step-item active"
                                href="/details"
                              >
                                <div className="step-progress">
                                  <span className="step-count">2</span>
                                </div>
                                <div className="step-label">
                                  <i className="bx bx-user-circle" />
                                  Details
                                </div>
                              </a>
                              <a
                                className="step-item active"
                                href="/shoppingcart"
                              >
                                <div className="step-progress">
                                  <span className="step-count">3</span>
                                </div>
                                <div className="step-label">
                                  <i className="bx bx-cube" />
                                  Shipping
                                </div>
                              </a>
                              <a
                                className="step-item active current"
                                href="/payment"
                              >
                                <div className="step-progress">
                                  <span className="step-count">4</span>
                                </div>
                                <div className="step-label">
                                  <i className="bx bx-credit-card" />
                                  Payment
                                </div>
                              </a>
                              <a
                                className="step-item"
                                href="checkout-review.html"
                              >
                                <div className="step-progress">
                                  <span className="step-count">5</span>
                                </div>
                                <div className="step-label">
                                  <i className="bx bx-check-circle" />
                                  Review
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      
                        <div className="card rounded-0 shadow-none border">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="d-grid">
                                  <a
                                    href="/shoppingcart"
                                    className="btn btn-light btn-ecomm"
                                  >
                                    <i className="bx bx-chevron-left" />
                                    Back to Shipping
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="d-grid">
                                  <a
                                    href="/complete"
                                    className="btn btn-outline-dark btn-ecomm"
                                  >
                                    Review Your Order
                                    <i className="bx bx-chevron-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4">
                    <div className="order-summary">
                    <div className="card rounded-0">
                        <div className="card-body">
                        <div className="card rounded-0 border bg-transparent shadow-none  mb-3">
                            <div className="card-body">
                            <p className="fs-5">Apply Discount Code</p>
                            <div className="input-group">
                                <input type="text" className="form-control rounded-0" placeholder="Enter discount code" />
                                <button className="btn btn-dark btn-ecomm" type="button">Apply</button>
                            </div>
                            </div>
                        </div>
                        <div className="card rounded-0 border bg-transparent shadow-none overflow-auto " style={{ maxHeight: '300px' }}>
                            <div className="card-body ">
                            <p className="fs-5 ">Order summary</p>
                            {cartItems.map((item , index) => (
                            <div>
                            <div className="my-2 border-top" />
                            <div className="d-flex align-items-center">
                                <a className="d-block flex-shrink-0" href="javascript:;">
                                <img src={item.imageLink} width={75} alt="Product" />
                                </a>
                                <div className="ps-2">
                                <h6 className="mb-1"><a href="javascript:;" className="text-dark">{item.name.slice(0, 18)}</a></h6>
                                <div className="widget-product-meta"><span className="me-2">₹{item.discounted_price}.<small>00</small></span><span className>x 1</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            ))}
                            </div>
                        </div>
                        <div className="card rounded-0 border bg-transparent mb-0 shadow-none">
                            <div className="card-body">
                            <p className="mb-2">Subtotal: <span className="float-end">₹{cartItems.reduce((acc, item) => acc + item.discounted_price, 0)}</span>
                            </p>
                            <p className="mb-2">Shipping: <span className="float-end">--</span>
                            </p>
                            <p className="mb-2">Taxes: <span className="float-end">--</span>
                            </p>
                            <p className="mb-0">Discount: <span className="float-end">--</span>
                            </p>
                            <div className="my-3 border-top" />
                            <h5 className="mb-0">Order Total: <span className="float-end">₹{cartItems.reduce((acc, item) => acc + item.discounted_price, 0)}</span></h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                  </div>
                  {/*end row*/}
                </div>
            </Container>
            </section>
            {/*end shop cart*/}
          </div>
        </div>
        {/*end page wrapper */}
      </div>
    </>
  );
}

export default Checkoutpayment;
