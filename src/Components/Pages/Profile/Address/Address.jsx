import React, { useState, useEffect } from "react";

const Address = ({ user_id }) => {
  function handleLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');


    // Redirect the user to the login page or any other page you prefer
    window.location.href = '/login'; // Replace '/login' with the URL of your login page

    window.location.href = '/login';

  }
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
  const typeMapping = {
    1: 'Home',
    2: 'Office',
    3: 'Other',
  };

  //-----DELETE ADDRESS-----//
  const [response, setResponse] = useState(null);

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

        // Update addresses state after successful deletion


        setAddresses(prevAddresses => prevAddresses.filter(address => address.id !== id));
      } else {
        setResponse('Error deleting address');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error deleting address');
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <div className="container">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3">Address</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item">
                        <a href="/">
                          <i className="bx bx-home-alt" /> Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript:;">Account</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Address
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="py-4">
            <div className="container">
              <h3 className="d-none">Account</h3>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card shadow-none mb-3 mb-lg-0 border">
                        <div className="card-body">
                          <div className="list-group list-group-flush">
                            <a
                              href="/profile"
                              className="list-group-item  d-flex justify-content-between align-items-center bg-transparent"
                            >
                              Dashboard <i className="bx bx-tachometer fs-5" />
                            </a>
                            <a
                              href="/order"
                              className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
                            >
                              Orders <i className="bx bx-cart-alt fs-5" />
                            </a>
                            <a
                              href="/address"
                              className="list-group-item active d-flex justify-content-between align-items-center "
                            >
                              Addresses <i className="bx bx-home-smile fs-5" />
                            </a>


                         

                            <a
                              href="/accountdetails"
                              className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
                            >
                              Account Details{" "}
                              <i className="bx bx-user-circle fs-5" />
                            </a>
                            <a
                              href="#"
                              className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
                              onClick={handleLogout}
                            >
                              Logout <i className="bx bx-log-out fs-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="card shadow-none mb-0">
                        <div className="card-body">
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
                          <h5 className="mb-4">Addresses</h5>
                          <div className="row">
                            <div className="col-12 ">
                              {addresses.length > 0 ? (
                                addresses.map((address) => (
                                  <div key={address.id} className="d-flex justify-content-between align-items-start">
                                    <div className="mb-3  ">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Address;
