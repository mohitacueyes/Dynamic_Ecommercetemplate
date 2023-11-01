import React from 'react'

export const Searchbar = () => {
  return (
   <>
  <div className="header-content bg-warning">
  <div className="container">
    <div className="row align-items-center gx-4">
      <div className="col-auto">
        <div className="d-flex align-items-center gap-3">
          <div className="mobile-toggle-menu d-inline d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <i className="bx bx-menu" />
          </div>
          <div className="logo">
            <a href="index.html">
              <img src="assets/images/logo-icon.png" className="logo-icon" alt />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl order-4 order-xl-0">
        <div className="input-group flex-nowrap pb-3 pb-xl-0">
          <input type="text" className="form-control w-100 border-dark border border-3" placeholder="Search for Products" />
          <button className="btn btn-dark btn-ecomm border-3" type="button">Search</button>
        </div>
      </div>
      <div className="col-auto d-none d-xl-flex">
        <div className="d-flex align-items-center gap-3">
          <div className="fs-1 text-content"><i className="bx bx-headphone" /></div>
          <div className>
            <p className="mb-0 text-content">CALL US NOW</p>
            <h5 className="mb-0">+011 5827918</h5>
          </div>
        </div>
      </div>
      <div className="col-auto ms-auto">
        <div className="top-cart-icons">
          <nav className="navbar navbar-expand">
            <ul className="navbar-nav">
              <li className="nav-item"><a href="account-dashboard.html" className="nav-link cart-link"><i className="bx bx-user" /></a>
              </li>
              <li className="nav-item"><a href="wishlist.html" className="nav-link cart-link"><i className="bx bx-heart" /></a>
              </li>
              <li className="nav-item dropdown dropdown-large">
                <a href="#" className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative cart-link" data-bs-toggle="dropdown">	<span className="alert-count">8</span>
                  <i className="bx bx-shopping-bag" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="javascript:;">
                    <div className="cart-header">
                      <p className="cart-header-title mb-0">8 ITEMS</p>
                      <p className="cart-header-clear ms-auto mb-0">VIEW CART</p>
                    </div>
                  </a>
                  <div className="cart-list">
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h6 className="cart-product-title">Men White T-Shirt</h6>
                          <p className="cart-product-price">1 X $29.00</p>
                        </div>
                        <div className="position-relative">
                          <div className="cart-product-cancel position-absolute"><i className="bx bx-x" />
                          </div>
                          <div className="cart-product">
                            <img src="assets/images/products/01.png" className alt="product image" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h6 className="cart-product-title">Puma Sports Shoes</h6>
                          <p className="cart-product-price">1 X $29.00</p>
                        </div>
                        <div className="position-relative">
                          <div className="cart-product-cancel position-absolute"><i className="bx bx-x" />
                          </div>
                          <div className="cart-product">
                            <img src="assets/images/products/05.png" className alt="product image" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h6 className="cart-product-title">Women Red Sneakers</h6>
                          <p className="cart-product-price">1 X $29.00</p>
                        </div>
                        <div className="position-relative">
                          <div className="cart-product-cancel position-absolute"><i className="bx bx-x" />
                          </div>
                          <div className="cart-product">
                            <img src="assets/images/products/17.png" className alt="product image" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h6 className="cart-product-title">Black Headphone</h6>
                          <p className="cart-product-price">1 X $29.00</p>
                        </div>
                        <div className="position-relative">
                          <div className="cart-product-cancel position-absolute"><i className="bx bx-x" />
                          </div>
                          <div className="cart-product">
                            <img src="assets/images/products/10.png" className alt="product image" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h6 className="cart-product-title">Blue Girl Shoes</h6>
                          <p className="cart-product-price">1 X $29.00</p>
                        </div>
                        <div className="position-relative">
                          <div className="cart-product-cancel position-absolute"><i className="bx bx-x" />
                          </div>
                          <div className="cart-product">
                            <img src="assets/images/products/08.png" className alt="product image" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h6 className="cart-product-title">Men Leather Belt</h6>
                          <p className="cart-product-price">1 X $29.00</p>
                        </div>
                        <div className="position-relative">
                          <div className="cart-product-cancel position-absolute"><i className="bx bx-x" />
                          </div>
                          <div className="cart-product">
                            <img src="assets/images/products/18.png" className alt="product image" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h6 className="cart-product-title">Men Yellow T-Shirt</h6>
                          <p className="cart-product-price">1 X $29.00</p>
                        </div>
                        <div className="position-relative">
                          <div className="cart-product-cancel position-absolute"><i className="bx bx-x" />
                          </div>
                          <div className="cart-product">
                            <img src="assets/images/products/04.png" className alt="product image" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h6 className="cart-product-title">Pool Charir</h6>
                          <p className="cart-product-price">1 X $29.00</p>
                        </div>
                        <div className="position-relative">
                          <div className="cart-product-cancel position-absolute"><i className="bx bx-x" />
                          </div>
                          <div className="cart-product">
                            <img src="assets/images/products/16.png" className alt="product image" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a href="javascript:;">
                    <div className="text-center cart-footer d-flex align-items-center">
                      <h5 className="mb-0">TOTAL</h5>
                      <h5 className="mb-0 ms-auto">$189.00</h5>
                    </div>
                  </a>
                  <div className="d-grid p-3 border-top">	<a href="javascript:;" className="btn btn-dark btn-ecomm">CHECKOUT</a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    {/*end row*/}
  </div>
</div>

   </>
  )
}
