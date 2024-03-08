import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';


function Checkoutdetails({ user_id }) {
  const [response, setResponse] = useState(null);

  const [userData, setUserData] = useState({
    id: null,
    full_name: '',
    email: '',
    phone: '',
    bod: '',
    gender: null,
  });
  useEffect(() => {

    const userId = localStorage.getItem('userId');
    const apiUrl = `${process.env.REACT_APP_API}/api/userdetails`;;
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData({
          id: data.ResponseData.id,
          full_name: data.ResponseData.full_name || '',
          email: data.ResponseData.email || '',
          phone: data.ResponseData.phone || '',
          bod: data.ResponseData.bod || '',
          gender: data.ResponseData.gender || null,
        });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const user_id = localStorage.getItem("userId");
    const fetchAddressList = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API}/api/user-addresslist/${user_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      const data = await response.json();

      if (data.ResponseCode === 1) {
        setAddresses(data.ResponseData);
      } else {
        console.error("Error fetching address list:", data.ResponseText);
      }
    };

    fetchAddressList();
  }, [user_id]);
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
  const handleDeleteClick = async (id) => {
    const apiUrl = `${process.env.REACT_APP_API}/api/addressdelete`; // Replace with your actual API endpoint

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (data.ResponseCode === 1) {
        setResponse(data.ResponseText);
        setAddresses(prevAddresses => prevAddresses.filter(address => address.id !== id));
      } else {
        setResponse('Error deleting address');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error deleting address');
    }
  };
  const typeMapping = {
    1: 'Home',
    2: 'Office',
    3: 'Other',
  };
  const [selectedType, setSelectedType] = useState('');
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedType) {
      window.location.href = '/shoppingcart';
    } else {
      toast('Please select an address ');
    }
  };
  return (
    <>
      <div>
        <div className="page-wrapper">
          <div className="page-content">
            <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
              <Container fluid className="pe-lg-5 ps-lg-5">
                <div className="page-breadcrumb d-flex align-items-center">
                  <h3 className="breadcrumb-title pe-3">Checkout</h3>
                  <div className="ms-auto">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0 p-0">
                        <li className="breadcrumb-item"><a href="/"><i className="bx bx-home-alt" /> Home</a>
                        </li>
                        <li className="breadcrumb-item"><a href="/">Shop</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </Container>
            </section>
            <section className="py-4">
              <Container fluid className="pe-lg-5 ps-lg-5">
                <div className="shop-cart">
                  <div className="row">
                    <div className="col-12 col-xl-8">
                      <div className="checkout-details">
                        <div className="card bg-transparent rounded-0 shadow-none">
                          <div className="card-body">
                            <div className="steps steps-light">
                              <a className="step-item active" href="/shopcart">
                                <div className="step-progress"><span className="step-count">1</span>
                                </div>
                                <div className="step-label"><i className="bx bx-cart" />Cart</div>
                              </a>
                              <a className="step-item active current" href="/details">
                                <div className="step-progress"><span className="step-count">2</span>
                                </div>
                                <div className="step-label"><i class="bx bx-map" />Address</div>
                              </a>
                              <a className="step-item" href="/shoppingcart">
                                <div className="step-progress"><span className="step-count">3</span>
                                </div>
                                <div className="step-label"><i className="bx bx-cube" />Shipping</div>
                              </a>
                              <a className="step-item" href="/payment">
                                <div className="step-progress"><span className="step-count">4</span>
                                </div>
                                <div className="step-label"><i className="bx bx-credit-card" />Payment</div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card rounded-0">
                          <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                            </div>
                            <div className="border p-3 d-flex justify-content-end align-items-center">
                              <button
                                type="button"
                                className="justify-content-end btn btn-dark btn-ecomm"
                                style={{ marginLeft: "80%" }}
                                onClick={() => {
                                  window.location.href = "/addaddress";
                                }}
                              >
                                ADD-Address
                              </button>
                              <div className="my-3 border-bottom" />
                            </div>
                            <div className="col-lg-12">
                              <form onSubmit={handleSubmit}>
                                <div className="card shadow-none mb-0">
                                  <div className="card-body">
                                    <h5 className="mb-4">Addresses</h5>
                                    <div className="row">
                                      <div className="col-12 ">
                                        {addresses.length > 0 ? (
                                          addresses.map((address) => (
                                            <div key={address.id} className="d-flex justify-content-between align-items-start">
                                              <div className="mb-3  ">
                                                <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" name="type_id" id="inlineRadio1" value={address.type_id} checked={selectedType === address.type_id}
                                                    onChange={handleTypeChange} />
                                                  <label class="form-check-label" for="inlineRadio1">{typeMapping[address.type_id]}</label>
                                                </div>
                                                <br />
                                                <span className="h6">Name:-</span>{address.full_name}
                                                <br />
                                                <div className="limited-address">
                                                  <span className="h6">Address:-</span>
                                                  {address.address.length > 10 ? (
                                                    <>
                                                      <span>{`${address.address.substring(0, 15)}...`}</span>
                                                      <br />
                                                      <span>{address.address.substring(20)}</span>
                                                    </>
                                                  ) : (
                                                    <span>{address.address}</span>
                                                  )}
                                                </div>
                                                <span className="h6">Landmark:-</span>{address.landmark}
                                                <br />
                                                <span className="h6">City:-</span>{address.cityname} <br /><span className="h6">State:-</span>{address.statename}
                                                <br />
                                                <span className="h6">Pincode:-</span>{address.pincode}
                                                <br />
                                                <span className="h6">Country:-</span>{address.countryname}
                                                <br />
                                                <span className="h6">Address Type:- </span>{typeMapping[address.type_id]}
                                                <br />
                                              </div>
                                              <div className="d-flex flex-row gap-4 ">
                                                <button
                                                  type="button"
                                                  className="btn btn-dark btn-ecomm mt-3 "
                                                  style={{ fontSize: "14px" }}
                                                  onClick={() => {
                                                    window.location.href = `/editaddress/${address.id}`;
                                                  }}
                                                >
                                                  Edit
                                                </button>
                                                <button
                                                  type="button"
                                                  style={{ fontSize: "14px" }}
                                                  className="btn btn-danger btn-ecomm mt-3"
                                                  onClick={() => handleDeleteClick(address.id)}
                                                >
                                                  Delete
                                                </button>
                                              </div>
                                            </div>
                                          ))
                                        ) : (
                                          <p>No addresses found.</p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card rounded-0 shadow-none border">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="d-grid">
                                          <a
                                            href="/shopcart"
                                            className="btn btn-light btn-ecomm"
                                          >
                                            <i className="bx bx-chevron-left" />
                                            Back to Cart
                                          </a>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-grid">
                                          <div className="d-grid">
                                            <button type="submit" className="btn btn-outline-dark btn-ecomm">
                                              Continue to Shipping <i className="bx bx-chevron-right" />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
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
                            <div className="card rounded-0 border bg-transparent shadow-none overflow-auto " style={{ maxHeight: '539px' }}>
                              <div className="card-body ">
                                <p className="fs-5 ">Order summary</p>
                                {cartItems.map((item) => (
                                  <div>
                                    <div className="my-2 border-top" />
                                    <div className="d-flex align-items-center">
                                      <a className="d-block flex-shrink-0" href="javascript:;">
                                        <img src={item.imageLink} width={75} alt="Product" />
                                      </a>
                                      <div className="ps-2">
                                        <h6 className="mb-1"><a href="javascript:;" className="text-dark">{item.name.slice(0, 18)}</a></h6>
                                        <div className="widget-product-meta"><span className="me-2">₹{item.discounted_price}.<small>00</small></span><span className>x {item.qty}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="card rounded-0 border bg-transparent mb-0 shadow-none">
                              <div className="card-body">
                                <p className="mb-2">Subtotal: <span className="float-end">₹ {cartItems.reduce(
                                  (acc, item) => acc + item.qty * item.discounted_price,
                                  0
                                )}</span>
                                </p>
                                <p className="mb-2">Shipping: <span className="float-end">--</span>
                                </p>
                                <p className="mb-2">Taxes: <span className="float-end">--</span>
                                </p>
                                <p className="mb-0">Discount: <span className="float-end">--</span>
                                </p>
                                <div className="my-3 border-top" />
                                <h5 className="mb-0">Order Total: <span className="float-end">₹ {cartItems.reduce(
                                  (acc, item) => acc + item.qty * item.discounted_price,
                                  0
                                )}</span></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Checkoutdetails