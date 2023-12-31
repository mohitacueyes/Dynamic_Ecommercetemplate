import React, { useState, useEffect } from 'react'
const AccountDetails = ({ userId }) => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    window.location.href = '/login';
  }


  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <div className="container">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3">Account Details</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item"><a href="/"><i className="bx bx-home-alt" /> Home</a>
                      </li>
                      <li className="breadcrumb-item"><a href="javascript:;">Account</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">Account Details</li>
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
                            <a href="/profile" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Dashboard <i className="bx bx-tachometer fs-5" /></a>
                            <a href="/order" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i className="bx bx-cart-alt fs-5" /></a>
                            {/* <a href="/downloadprofile" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Downloads <i className="bx bx-download fs-5" /></a> */}
                            <a href="/address" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Addresses <i className="bx bx-home-smile fs-5" /></a>
                            {/* <a href="/addaddress" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Add-Addresses <i className="bx bx-home-smile fs-5" /></a> */}
                            {/* <a href="/paymentdetail" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Payment Methods <i className="bx bx-credit-card fs-5" /></a> */}
                            <a href="/accountdetails" className="list-group-item active d-flex justify-content-between align-items-center">Account Details <i className="bx bx-user-circle fs-5" /></a>
                            <a href="#" className="list-group-item d-flex justify-content-between align-items-center bg-transparent" onClick={handleLogout}>Logout <i className="bx bx-log-out fs-5" /></a>
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
                                name="full_name"
                                value={userData.full_name}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="col-12">
                              <label className="form-label">Gender</label>
                              <select className="form-select" name="gender" value={userData.gender} onChange={handleInputChange} >
                                <option>Select Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Others</option>
                              </select>
                            </div>
                            <div className="col-12">
                              <label className="form-label">Birth Date</label>
                              <input type="date" name='bod' value={userData.bod} className="form-control" onChange={handleInputChange} />
                            </div>
                            <div className="col-12">
                              <label className="form-label">Email</label>
                              <input type="email" name='email' value={userData.email} className="form-control" onChange={handleInputChange} />
                            </div>
                            <div className="col-12">
                              <label className="form-label">Phone Number</label>
                              <input type="number" name='phone' value={userData.phone} className="form-control" onChange={handleInputChange} />
                            </div>
                            <div className="col-12">
                              <button type="button" className="btn btn-dark btn-ecomm" >Save Changes</button>
                            </div>
                          </form>
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
  )
}

export default AccountDetails




















