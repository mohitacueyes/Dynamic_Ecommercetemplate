import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
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
  // console.log(cartItems);

  //-----DELETE Add to Cart-----//
 const [response, setResponse] = useState(null);

 const handleDeleteClick = async (id ,productId) => {
   const apiUrl = `${process.env.REACT_APP_API}/api/delete`; 

   try {
     const response = await fetch(apiUrl, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ 
        user_id:user_id,
        product_id:productId,
        favorites:"2"
      }),
     });

     const data = await response.json();

     if (data.ResponseCode === 1) {
       setResponse(data.ResponseText);
       // Update addresses state after successful deletion
       setCartItems(prevAddresses => prevAddresses.filter(cart => cart.id !== id));
     } else {
       setResponse('Error deleting cart items');
     }
   } catch (error) {
     console.error('Error:', error);
     setResponse('Error deleting cart items');
   }
 };
  return (
    <>
      <div className="header-content bg-background">
        <Container fluid className="ps-5 pe-5">
        <div >
          <div className="row align-items-center gx-4 pt-3 pb-2 d-xl-flex ">
            <div className="col-auto ">
              <div className="d-flex align-items-center  gap-3 logog ">
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
                      src="assets/images/logo-icon.png"
                      className="logo-icon"
                      alt
                    />
                  </a>
                </div>
              </div>
            </div>
          
            <div className="col-12 col-xl order-4 order-xl-0 d-none d-xl-flex ">
              <div className="input-group flex-nowrap pb-3 pb-xl-0">
                <input
                  type="text"
                  class="form-control w-100 border-dark border border-3 d-none d-sm-block"
                  placeholder="Search for Products"
                />
                <button
                 class="btn btn-dark btn-ecomm border-3 d-none d-sm-block"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          
            <div className="col-auto d-none d-xl-flex d-none d-xl-flex">
              <div className="d-flex align-items-center gap-3">
                <div className="fs-1 text-content">
                  <i className="bx bx-headphone" />
                </div>
                <div className>
                  <p className="mb-0 text-content">CALL US NOW</p>
                  <h5 className="mb-0">+011 5827918</h5>
                </div>
              </div>
            </div>
            <div className="col-auto ms-auto d-none d-xl-flex">
              <div className="top-cart-icons">
                <nav className="navbar navbar-expand">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="/profile" className="nav-link cart-link">
                        <i className="bx bx-user" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/wishlist" className="nav-link cart-link">
                        <i className="bx bx-heart" />
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
                        <i className="bx bx-shopping-bag" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:;">
                          <div className="cart-header">
                            <p className="cart-header-title mb-0">{cartItems.length} ITEMS</p>
                            <p className="cart-header-clear ms-auto mb-0">
                              <a href="/shopcart" className="btn btn-dark btn-ecomm">VIEW CART</a>
                            </p>
                          </div>
                        </a>
                        
                        <div className="cart-list">
                        {cartItems.map((item , index) => (
                          <a className="dropdown-item" href="javascript:;" key={index}>
                            <div className="d-flex align-items-center">
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title">
                                  {item.name.slice(0, 20)}...
                                </h6>
                                <p className="cart-product-price">1 X ₹{item.discounted_price}</p>
                              </div>
                              <div className="position-relative">
                                <div className="cart-product-cancel position-absolute" >
                                  <i className="bx bx-x" onClick={() => handleDeleteClick(item.id)} />
                                </div>
                                <div className="cart-product img-fluid ">
                                  <img
                                    src={item.imageLink}
                                    className = "img-fluid "
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
                            <h5 className="mb-0">₹{cartItems.reduce((acc, item) => acc + item.discounted_price, 0)}</h5>
                          </div>
                          <a
                            href="/checkout"
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
           </div>
           </Container>
      </div>
    </>
  );
};
