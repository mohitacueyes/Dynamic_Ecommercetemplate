import React from 'react'

const Wishlist = () => {
  return (
  <>
 {/*start page wrapper */}
<div className="page-wrapper">
  <div className="page-content">
    {/*start breadcrumb*/}
    <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
      <div className="container">
        <div className="page-breadcrumb d-flex align-items-center">
          <h3 className="breadcrumb-title pe-3">Wishlist Grid</h3>
          <div className="ms-auto">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /> Home</a>
                </li>
                <li className="breadcrumb-item"><a href="javascript:;">Wishlist</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    {/*end breadcrumb*/}
    {/*start Featured product*/}
    <section className="py-4">
      <div className="container">
        <div className="product-grid">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            <div className="col">
              <div className="card rounded-0 border">
                <a href="product-details.html">
                  <img src="assets/images/products/01.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <div className="product-info">
                    <a href="javascript:;">
                      <p className="product-catergory font-13 mb-1">Catergory Name</p>
                    </a>
                    <a href="javascript:;">
                      <h6 className="product-name mb-2">Product Short Name</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <div className="mb-1 product-price">	<span className="me-1 text-decoration-line-through">$99.00</span>
                        <span className="fs-5">$49.00</span>
                      </div>
                      <div className="cursor-pointer ms-auto">	<i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                      </div>
                    </div>
                    <div className="product-action mt-2">
                      <div className="d-grid gap-2">
                        <a href="javascript:;" className="btn btn-dark btn-ecomm">	<i className="bx bxs-cart-add" />Add to Cart</a>	
                        <a href="javascript:;" className="btn btn-light btn-ecomm"><i className="bx bx-zoom-in" />Remove From List</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-0 border">
                <a href="product-details.html">
                  <img src="assets/images/products/02.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <div className="product-info">
                    <a href="javascript:;">
                      <p className="product-catergory font-13 mb-1">Catergory Name</p>
                    </a>
                    <a href="javascript:;">
                      <h6 className="product-name mb-2">Product Short Name</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
                        <span className="fs-5">$49.00</span>
                      </div>
                      <div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-light-4" />
                        <i className="bx bxs-star text-light-4" />
                      </div>
                    </div>
                    <div className="product-action mt-2">
                      <div className="d-grid gap-2">
                        <a href="javascript:;" className="btn btn-dark btn-ecomm">	<i className="bx bxs-cart-add" />Add to Cart</a>	
                        <a href="javascript:;" className="btn btn-light btn-ecomm"><i className="bx bx-zoom-in" />Remove From List</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-0 border">
                <a href="product-details.html">
                  <img src="assets/images/products/03.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <div className="product-info">
                    <a href="javascript:;">
                      <p className="product-catergory font-13 mb-1">Catergory Name</p>
                    </a>
                    <a href="javascript:;">
                      <h6 className="product-name mb-2">Product Short Name</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
                        <span className="fs-5">$49.00</span>
                      </div>
                      <div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-light-4" />
                      </div>
                    </div>
                    <div className="product-action mt-2">
                      <div className="d-grid gap-2">
                        <a href="javascript:;" className="btn btn-dark btn-ecomm">	<i className="bx bxs-cart-add" />Add to Cart</a>	
                        <a href="javascript:;" className="btn btn-light btn-ecomm"><i className="bx bx-zoom-in" />Remove From List</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-0 border">
                <a href="product-details.html">
                  <img src="assets/images/products/04.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <div className="product-info">
                    <a href="javascript:;">
                      <p className="product-catergory font-13 mb-1">Catergory Name</p>
                    </a>
                    <a href="javascript:;">
                      <h6 className="product-name mb-2">Product Short Name</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
                        <span className="fs-5">$49.00</span>
                      </div>
                      <div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                      </div>
                    </div>
                    <div className="product-action mt-2">
                      <div className="d-grid gap-2">
                        <a href="javascript:;" className="btn btn-dark btn-ecomm">	<i className="bx bxs-cart-add" />Add to Cart</a>	
                        <a href="javascript:;" className="btn btn-light btn-ecomm"><i className="bx bx-zoom-in" />Remove From List</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-0 border">
                <a href="product-details.html">
                  <img src="assets/images/products/05.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <div className="product-info">
                    <a href="javascript:;">
                      <p className="product-catergory font-13 mb-1">Catergory Name</p>
                    </a>
                    <a href="javascript:;">
                      <h6 className="product-name mb-2">Product Short Name</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
                        <span className="fs-5">$49.00</span>
                      </div>
                      <div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-light-4" />
                        <i className="bx bxs-star text-light-4" />
                      </div>
                    </div>
                    <div className="product-action mt-2">
                      <div className="d-grid gap-2">
                        <a href="javascript:;" className="btn btn-dark btn-ecomm">	<i className="bx bxs-cart-add" />Add to Cart</a>	
                        <a href="javascript:;" className="btn btn-light btn-ecomm"><i className="bx bx-zoom-in" />Remove From List</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-0 border">
                <a href="product-details.html">
                  <img src="assets/images/products/06.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <div className="product-info">
                    <a href="javascript:;">
                      <p className="product-catergory font-13 mb-1">Catergory Name</p>
                    </a>
                    <a href="javascript:;">
                      <h6 className="product-name mb-2">Product Short Name</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
                        <span className="fs-5">$49.00</span>
                      </div>
                      <div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                      </div>
                    </div>
                    <div className="product-action mt-2">
                      <div className="d-grid gap-2">
                        <a href="javascript:;" className="btn btn-dark btn-ecomm">	<i className="bx bxs-cart-add" />Add to Cart</a>	
                        <a href="javascript:;" className="btn btn-light btn-ecomm"><i className="bx bx-zoom-in" />Remove From List</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-0 border">
                <a href="product-details.html">
                  <img src="assets/images/products/07.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <div className="product-info">
                    <a href="javascript:;">
                      <p className="product-catergory font-13 mb-1">Catergory Name</p>
                    </a>
                    <a href="javascript:;">
                      <h6 className="product-name mb-2">Product Short Name</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
                        <span className="fs-5">$49.00</span>
                      </div>
                      <div className="cursor-pointer ms-auto"> <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-light-4" />
                      </div>
                    </div>
                    <div className="product-action mt-2">
                      <div className="d-grid gap-2">
                        <a href="javascript:;" className="btn btn-dark btn-ecomm">	<i className="bx bxs-cart-add" />Add to Cart</a>	
                        <a href="javascript:;" className="btn btn-light btn-ecomm"><i className="bx bx-zoom-in" />Remove From List</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-0 border">
                <a href="product-details.html">
                  <img src="assets/images/products/08.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <div className="product-info">
                    <a href="javascript:;">
                      <p className="product-catergory font-13 mb-1">Catergory Name</p>
                    </a>
                    <a href="javascript:;">
                      <h6 className="product-name mb-2">Product Short Name</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <div className="mb-1 product-price"> <span className="me-1 text-decoration-line-through">$99.00</span>
                        <span className="text-white fs-5">$49.00</span>
                      </div>
                      <div className="cursor-pointer ms-auto">
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                      </div>
                    </div>
                    <div className="product-action mt-2">
                      <div className="d-grid gap-2">
                        <a href="javascript:;" className="btn btn-dark btn-ecomm">	<i className="bx bxs-cart-add" />Add to Cart</a>	
                        <a href="javascript:;" className="btn btn-light btn-ecomm"><i className="bx bx-zoom-in" />Remove From List</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
      </div>
    </section>
    {/*end Featured product*/}
  </div>
</div>
{/*end page wrapper */}

  </>
  )
}

export default Wishlist
