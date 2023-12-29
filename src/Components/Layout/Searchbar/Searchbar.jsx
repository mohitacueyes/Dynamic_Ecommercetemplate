import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

export const Searchbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const user_id = localStorage.getItem("userId");
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


  //-----DELETE CART ITEMS-----//
const [response, setResponse] = useState(null);

const handleDeleteClick = async (cart_id) => {
  const apiUrl = `${process.env.REACT_APP_API}/api/delete`; 
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
       cart_id: cart_id,
     }),
    });

    const data = await response.json();

    if (data.ResponseCode === 1) {
      setResponse(data.ResponseText);
      setCartItems(prevAddresses => prevAddresses.filter(favorites => favorites.cart_id !== cart_id));
      toast.success(data.ResponseText);
    } else {
      setResponse('Error deleting favorites');
    }
  } catch (error) {
    console.error('Error:', error);
    setResponse('Error deleting favorites');
  }
};
 //--------------------------//

  return (
    <>
      <div className="header-content bg-background">
        <Container fluid className="ps-lg-5 pe-lg-5">
          <div className="row  gx-5  d-flex align-items-center TopSearch">
            <div className="col-sm-8 col-md-4 col-lg-3 col-xl-2  col-xxl-2">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="mobile-toggle-menu d-inline d-xl-none"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                >
                  <i className="bx bx-menu" />
                </div>
                <div className="logo">
                  <a href="/">
                    <img
                      src="../../assets/images/logo2.svg"
                      className="logo-icon"
                      alt
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="d-sm-none col-md-5 d-md-flex d-xxl-flex  col-lg-6 col-xl-8 col-xxl-8">
              <div className="input-group flex-nowrap  pb-xl-0">
                <input
                  type="text"
                  class="form-control w-100 border-dark border border-2 d-none d-sm-block"
                  placeholder="Search for Products"
                />
                <button
                  class="btn btn-dark btn-ecomm border-2 d-none d-sm-block"
                  type="button"
                >
                  <i className="bx bx-search" />
                </button>
              </div>
            </div>
            <div className="col-auto col-xl-2 col-xxl-2 col-sm-3 cartFlex">
              <div className="top-cart-icons">
                <nav className="navbar navbar-expand">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="/profile" className="nav-link cart-link">
                        <i className="bx bx-user fs-3" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/wishlist" className="nav-link cart-link">
                        <i className="bx bx-heart  fs-3" />
                      </a>
                    </li>
                    <li className="nav-item dropdown dropdown-large">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative cart-link"
                        data-bs-toggle="dropdown"
                      >
                        {" "}
                        <span className="alert-count">{cartItems.length}</span>
                        <i className="bx bx-shopping-bag  fs-3" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="">
                          <div className="cart-header">
                            <p className="cart-header-title mb-0">{cartItems.length} ITEMS</p>
                            <p className="cart-header-clear ms-auto mb-0">
                              <a href="/shopcart" className="btn btn-dark btn-ecomm">VIEW CART</a>
                            </p>
                          </div>
                        </a>
                        <div className="cart-list">
                          {cartItems.map((item, index) => (
                            <a className="dropdown-item" href="javascript:;" key={index}>
                              <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                  <h6 className="cart-product-title">
                                    {item.name.slice(0, 20)}...
                                  </h6>
                                  <p className="cart-product-price">{item.qty} X ₹{item.discounted_price}</p>
                                </div>
                                <div className="position-relative">
                                  <div className="cart-product-cancel position-absolute" >
                                    <i className="bx bx-x" onClick={() => handleDeleteClick(item.cart_id)} />
                                  </div>
                                  <div className="cart-product img-fluid ">
                                    <img
                                      src={item.imageLink}
                                      className="img-fluid "
                                      alt="product image"
                                    />
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="d-grid p-3 border-top">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0">TOTAL</h5>
                            <h5 className="mb-0">₹{cartItems.reduce(
                                (acc, item) => acc +item.qty * item.discounted_price,
                                0
                              )}</h5>
                          </div>
                          <a
                            href="/details"
                            className="btn btn-dark btn-ecomm"
                          >
                            CHECKOUT
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <ToastContainer />
    </>
  );
};
