import React, { useState, useEffect } from 'react'
const AccountDetails = () => {
  const [userData, setUserData] = useState({
    id: '',
    full_name:'',
    email: '',
    phone: '',
    bod: '',
    gender: '',
  });
  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Retrieve user ID from localStorage
    if (userId) {
      const fetchUserData = async () => {
        try {
          const response = await fetch('https://ecom.iconixitsolution.com/api/userdetails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: userId,
            }),
          });
          const data = await response.json();
          if (data.ResponseCode === 1) {
            setUserData(data.ResponseData || {}); // Set an empty object if ResponseData is null or undefined
          } else {
            console.error('Error fetching user data:', data.ResponseText);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchUserData();
    }
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to save the changes to the server if needed
    // For example, you can make another API call to update user details on the server
  };
  if (!userData) {
    // Handle the case where userData is null or undefined
    return null; // or display a loading spinner, error message, etc.
  }




  return (
    <>
      {/*start page wrapper */}
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
                      <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /> Home</a>
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
                          <div className="list-group list-group-flush"> <a href="account-dashboard.html" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Dashboard <i className="bx bx-tachometer fs-5" /></a>
                            <a href="account-orders.html" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i className="bx bx-cart-alt fs-5" /></a>
                            <a href="account-downloads.html" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Downloads <i className="bx bx-download fs-5" /></a>
                            <a href="account-addresses.html" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Addresses <i className="bx bx-home-smile fs-5" /></a>
                            <a href="account-payment-methods.html" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Payment Methods <i className="bx bx-credit-card fs-5" /></a>
                            <a href="account-user-details.html" className="list-group-item active d-flex justify-content-between align-items-center">Account Details <i className="bx bx-user-circle fs-5" /></a>
                            <a href="#" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Logout <i className="bx bx-log-out fs-5" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="card shadow-none mb-0 border">
                        <div className="card-body">
                          <form className="row g-3">
                            <div className="col-md-12">
                              <label className="form-label">Full Name</label>
                              <input type="text"
                                className="form-control"
                                value={userData.full_name || ''}
                                onChange={handleInputChange}
                                name="full_name"
                              />
                            </div>
                            <div className="col-12">
                              <label className="form-label">Gender</label>
                              <select className="form-select" name="gender" value={userData.gender} onChange={handleInputChange}>
                                <option>Select Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Others</option>
                              </select>
                            </div>
                            <div className="col-12">
                              <label className="form-label">Birth Date</label>
                              <input type="date" name='bod' value={userData.bod} className="form-control" />
                            </div>
                            <div className="col-12">
                              <label className="form-label">Email</label>
                              <input type="email" name='email' value={userData.email} className="form-control" />
                            </div>
                            <div className="col-12">
                              <label className="form-label">Phone Number</label>
                              <input type="number" name='phone' value={userData.phone} className="form-control" />
                            </div>
                            {/* <div className="col-12">
                        <label className="form-label"> Password</label>
                        <input type="password"  className="form-control" />
                      </div> */}
                            <div className="col-12">
                              <button type="button" className="btn btn-dark btn-ecomm" onClick={handleSubmit}>Save Changes</button>
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
      {/*end page wrapper */}
    </>
  )
}
export default AccountDetails







