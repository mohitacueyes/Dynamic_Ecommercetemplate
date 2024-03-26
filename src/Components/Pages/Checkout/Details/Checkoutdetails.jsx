import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Checkoutdetails({ user_id }) {
  const [response, setResponse] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [pincode, setPincode] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [alternateNumber, setAlternateNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();
  const [CountryData, setCountryData] = useState([]);
  const [StateData, setStateData] = useState([]);
  const [CityData, setCityData] = useState([]);
  const [formData, setFormData] = useState({
    user_id: user_id,
    type_id: "",
    full_name: "",
    country_id: "",
    landmark: "",
    city_id: " ",
    state_id: " ",
    pincode: "",
    mobile: "",
    alternate_mobile: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/country-list`)
      .then((response) => {
        setCountryData(response.data.ResponseData);
      })
      .catch((error) => {

        console.error("Error fetching category data:", error);
      });

    axios
      .get(`${process.env.REACT_APP_API}/api/state-list`)
      .then((response) => {
        setStateData(response.data.ResponseData);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);

        console.error('Error fetching country data:', error);

      });
  }, []);
  useEffect(() => {
    if (formData.country_id) {
      axios
        .get(`${process.env.REACT_APP_API}/api/state-list-countrywise/${formData.country_id}`)
        .then((response) => {
          setStateData(response.data.ResponseData);
        })
        .catch((error) => {
          console.error('Error fetching state data:', error);
        });
    }
  }, [formData.country_id]);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "state_id") {
      const stateId = StateData.find((state) => state.statename === value)?.stateid;

      if (stateId) {
        axios
          .post(`${process.env.REACT_APP_API}/api/city-list-statewise`, {
            state_id: stateId,
          })
          .then((response) => {
            setCityData(response.data.ResponseData);
          })
          .catch((error) => {
            console.error("Error fetching city data:", error);
          });
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSaveAddress() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    fetch(`${process.env.REACT_APP_API}/api/add-address`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        console.log(data);
        navigate("/address");
        // You can update the UI or perform other actions based on the response data
        // For example, if you want to display a success message, you can set a state variable
        // and conditionally render the message in your JSX.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


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

                              <a className="step-item" href="/payment">
                                <div className="step-progress"><span className="step-count">3</span>
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
                                data-bs-toggle="modal"
                                data-bs-target="#addAddressModal"
                              >
                                ADD-Address
                              </button>
                              <div className="modal fade" id="addAddressModal" tabIndex="-1" aria-labelledby="addAddressModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title" id="addAddressModalLabel">Add Address</h5>
                                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                      <form >
                                        <div className="mb-3">
                                          <label htmlFor="fullName" className="form-label">Full Name</label>
                                          <input type="text" name='full_name'
                                            className="form-control"
                                            onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                          <input type="tel" className="form-control"
                                            id="phoneNumber"
                                            onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                          <label htmlFor="alternateNumber" className="form-label">Alternate Number</label>
                                          <input type="tel" className="form-control"
                                            id="alternateNumber"
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="mb-3">
                                          <label htmlFor="streetAddress" className="form-label">Street Address</label>
                                          <input type="text" className="form-control"
                                            id="streetAddress"
                                            onChange={handleChange}
                                            required />
                                        </div>
                                        <div className="mb-3">
                                          <label htmlFor="landmark" className="form-label">Landmark</label>
                                          <input type="text" className="form-control"
                                            id="landmark"
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="d-flex justify-content-between w-100 align-items-center gap-3">
                                          <div className="col-6">
                                            <label className="form-label">Country</label>
                                            <select
                                              name="country_id"
                                              id="templateId"
                                              class="form-control "
                                              style={{ width: "95%" }}
                                              onChange={(e) => handleChange(e)}
                                            >
                                              <option value={formData.country_id ? "" : ""}>
                                                --select --
                                              </option>
                                              {CountryData &&
                                                CountryData.map((v, index) => {
                                                  return (
                                                    <option value={v.id} key={index.id}>
                                                      {v.countryname}
                                                    </option>
                                                  );
                                                })}
                                            </select>
                                          </div>
                                          <div className="col-6">
                                            <label className="form-label">State</label>
                                            <select
                                              name="state_id"
                                              id="templateId"
                                              class="form-control"
                                              style={{ width: "95%" }}
                                              onChange={(e) => handleChange(e)}
                                            >
                                              <option value={formData.state_id ? "" : ""}>
                                                --select --
                                              </option>
                                              {StateData &&
                                                StateData.map((v, index) => {
                                                  return (
                                                    <option value={v.state_id} key={index.id}>
                                                      {v.statename}
                                                    </option>
                                                  );
                                                })}
                                            </select>
                                          </div>

                                        </div>
                                        <div className="d-flex justify-content-between w-100 align-items-center gap-3">
                                          <div className="col-6">
                                            <label className="form-label">City</label>
                                            <select
                                              name="city_id"
                                              id="templateId"
                                              class="form-control"
                                              style={{ width: "95%" }}
                                              onChange={(e) => handleChange(e)}
                                            >
                                              <option value={formData.city_id ? "" : ""}>
                                                --select --
                                              </option>
                                              {CityData &&
                                                CityData.map((v, index) => {
                                                  return (
                                                    <option value={v.id} key={index.id}>
                                                      {v.cityname}
                                                    </option>
                                                  );
                                                })}
                                            </select>
                                          </div>
                                          <div className="col-6">
                                            <label className="form-label">Pincode</label>
                                            <input
                                              type="number"
                                              className="form-control"
                                              style={{ width: "95%" }}
                                              name="pincode"
                                              onChange={handleChange}
                                            />
                                          </div>

                                        </div>

                                        <div className="modal-footer">
                                          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSaveAddress}>Save changes</button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                                            <button type="submit" className="btn btn-outline-dark btn-ecomm" >
                                              Continue to Payment <i className="bx bx-chevron-right" />
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