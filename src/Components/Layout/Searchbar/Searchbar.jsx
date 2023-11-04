import React, { useState, useEffect } from 'react'

export const Searchbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      const userId = localStorage.getItem('userId');
      try {
        if (userId) {
          const response = await fetch('https://ecom.iconixitsolution.com/api/cart-listuseridwise', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
          });

          if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data.ResponseData)) {
              setCartItems(data.ResponseData);
            } else {
              setCartItems([]); // Set cartItems state to an empty array when the response is empty
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
      <div className="header-content bg-warning">
        <div className="container">
          <div className="row align-items-center gx-4">
            <div className="col-auto">
              <div className="d-flex align-items-center gap-3">
                <div className="mobile-toggle-menu d-inline d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                  <i className="bx bx-menu" />
                </div>
                <div className="logo">
                  <a href="/">
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
                    <li className="nav-item"><a href="/profile" className="nav-link cart-link"><i className="bx bx-user" /></a>
                    </li>
                    <li className="nav-item"><a href="/wishlist" className="nav-link cart-link"><i className="bx bx-heart" /></a>
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
                          {cartItems.map((item) => (
                            <a className="dropdown-item" href="javascript:;">

                              <div className="d-flex align-items-center" key={item.id}>
                                <div className="flex-grow-1">
                                  <h6 className="cart-product-title"> {item.name}</h6>
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
                          ))}
                        </div>
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
