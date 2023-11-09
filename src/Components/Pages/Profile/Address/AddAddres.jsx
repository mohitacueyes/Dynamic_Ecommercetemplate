import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function AddAddres(  ) {
  const user_id = localStorage.getItem("userId");
  const navigate = useNavigate();
    function handleLogout() {
        // Clear user session data from local storage
        localStorage.removeItem('user');
        // Redirect the user to the login page or any other page you prefer
        window.location.href = '/login'; // Replace '/login' with the URL of your login page
      }

      const [formData, setFormData] = useState({
        user_id: user_id,
        type_id: '1 ', 
        full_name: '',
        country_id: '1',
        landmark: '',
        city_id: '1',
        state_id: '1',
        pincode: '',
        mobile: '',
        alternate_mobile: '',
        address: '',
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    
      function handleSaveAddress() {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        };
    
        fetch(`${process.env.REACT_APP_API}/api/add-address`, requestOptions)
          .then(response => response.json())
          .then(data => {
            // Handle the API response data here
            console.log(data);
            navigate("/address")
            // You can update the UI or perform other actions based on the response data
            // For example, if you want to display a success message, you can set a state variable
            // and conditionally render the message in your JSX.
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
  return (
  <>
    <div className="page-wrapper">
        <div className="page-content">
          {/*start breadcrumb*/}
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <div className="container">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3">My Orders</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item"><a href="/"><i className="bx bx-home-alt" /> Home</a>
                      </li>
                      <li className="breadcrumb-item"><a href="javascript:;">Account</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">My Orders</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          {/*end breadcrumb*/}
          {/*start shop cart*/}
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
                            <a href="/profile" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Dashboard <i className="bx bx-tachometer fs-5" /></a>
                            <a href="/order" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i className="bx bx-cart-alt fs-5" /></a>
                            <a href="/downloadprofile" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Downloads <i className="bx bx-download fs-5" /></a>
                            <a href="/address" className="list-group-item active d-flex justify-content-between align-items-center ">Addresses <i className="bx bx-home-smile fs-5" /></a>
                            <a href="/paymentdetail" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Payment Methods <i className="bx bx-credit-card fs-5" /></a>
                            <a href="/accountdetails" className="list-group-item  d-flex justify-content-between align-items-center bg-transparent">Account Details <i className="bx bx-user-circle fs-5" /></a>
                            <a href="#" className="list-group-item d-flex justify-content-between align-items-center bg-transparent" onClick={handleLogout}>Logout <i className="bx bx-log-out fs-5" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="card shadow-none mb-0 border">
                        <div className="card-body ">
                        {/* <div className="col-12 ">
                              <button type="button" className="justify-content-end btn btn-dark btn-ecomm" style={{marginLeft:"80%"}} >ADD-Address</button>
                            </div> */}
                          <form className="row g-3">
                            <div className="col-md-12">
                              <label className="form-label">Full Name</label>
                              <input type="text"
                                className="form-control"
                               name="full_name"
                               onChange={handleChange}
                              />
                            </div>
                            {/* <div className="col-md-12">
                              <label className="form-label">Country</label>
                              <input type="text"
                                className="form-control"
                               name="country_id"
                               onChange={handleChange}
                              />
                            </div> */}
                            <div className="col-md-12">
                              <label className="form-label">Land Mark</label>
                              <input type="text"
                                className="form-control"
                                name="landmark"
                                onChange={handleChange}
                              />
                            </div>
                            {/* <div className="col-md-12">
                              <label className="form-label">City</label>
                              <input type="text"
                                className="form-control"
                                name="city_id"
                                onChange={handleChange}
                              />
                            </div> */}
                            {/* <div className="col-md-12">
                              <label className="form-label">State</label>
                              <input type="text"
                                className="form-control"
                                name="state_id"
                                onChange={handleChange}
                              />
                            </div> */}
                            <div className="col-md-12">
                              <label className="form-label">Pincode</label>
                              <input type="number"
                                className="form-control"
                                name="pincode"
                               onChange={handleChange}
                              />
                            </div>
                            <div className="col-md-12">
                              <label className="form-label">Phone Number</label>
                              <input type="tel"
                              maxlength="10"
                                className="form-control"
                                name="mobile"
                               onChange={handleChange}
                              />
                            </div>
                            <div className="col-md-12">
                              <label className="form-label">Alternate Number</label>
                              <input type="tel"
                               maxlength="10"
                                className="form-control"
                                name="alternate_mobile"
                               onChange={handleChange}
                              />
                            </div>
                            <div className="col-md-12">
                              <label className="form-label">Street Address</label>
                              <textarea type="text"
                                className="form-control"
                                name="address"
                               onChange={handleChange}
                              />
                            </div>
                            <div className="col-12">
                              <button type="button" className="btn btn-dark btn-ecomm" onClick={handleSaveAddress}>Save Address</button>
                            </div>
                            
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end row*/}
                </div>
              </div>
            </div>
          </section>
          {/*end shop cart*/}
        </div>
      </div>
  </>
  )
}

export default AddAddres