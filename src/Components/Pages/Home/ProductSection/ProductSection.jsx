import React from 'react'

const ProductSection = () => {
  return (
    <>
     <section className="py-4 border-top">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
          <div className="col">
            <div className="bestseller-list mb-3">
              <h6 className="mb-3 text-uppercase fw-bold">Best Selling Products</h6>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/01.png" width={80} alt />
                  </a>
                </div>
                <div className>
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Men Casual Shirts</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/02.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Formal Coat Pant</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/03.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Women Blue Jeans</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/04.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Yellow Track Suit</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="featured-list mb-3">
              <h6 className="mb-3 text-uppercase fw-bold">Featured Products</h6>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/05.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Men Sports Shoes</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/06.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Black Sofa Set</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/07.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Sports Watch</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/08.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Women Blue Heels</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="new-arrivals-list mb-3">
              <h6 className="mb-3 text-uppercase fw-bold">New arrivals</h6>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="jproduct-details.html">
                    <img src="assets/images/products/09.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Men Black Cap</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/10.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Orange Headphone</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/11.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Samsung Mobile</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/12.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Apple Notebook</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="top-rated-products-list mb-3">
              <h6 className="mb-3 text-uppercase fw-bold">Top rated Products</h6>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/13.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Ronaldo Football</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/14.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Red Fancy Sofa</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/15.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Sports Cycle</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <div className="bottom-product-img">
                  <a href="product-details.html">
                    <img src="assets/images/products/16.png" width={80} alt />
                  </a>
                </div>
                <div className="ms-0">
                  <h6 className="mb-0 fw-light mb-1 fw-bold">Circular Table</h6>
                  <div className="rating"> <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <p className="mb-0 pro-price"><strong>$59.00</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProductSection
