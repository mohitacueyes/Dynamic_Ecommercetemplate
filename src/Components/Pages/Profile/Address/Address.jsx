import React from 'react'

const Address = () => {
  function handleLogout() {
    // Clear user session data from local storage
    localStorage.removeItem('user');
    // Redirect the user to the login page or any other page you prefer
    window.location.href = '/login'; // Replace '/login' with the URL of your login page
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
                    <a href="/profile" className="list-group-item  d-flex justify-content-between align-items-center bg-transparent">Dashboard <i className="bx bx-tachometer fs-5" /></a>
                      <a href="/order" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i className="bx bx-cart-alt fs-5" /></a>
                      <a href="/downloadprofile" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Downloads <i className="bx bx-download fs-5" /></a>
                      <a href="/address" className="list-group-item active d-flex justify-content-between align-items-center ">Addresses <i className="bx bx-home-smile fs-5" /></a>
                      <a href="/paymentdetail" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Payment Methods <i className="bx bx-credit-card fs-5" /></a>
                      <a href="/accountdetails" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Account Details <i className="bx bx-user-circle fs-5" /></a>
                      <a href="#" className="list-group-item d-flex justify-content-between align-items-center bg-transparent" onClick={handleLogout}>Logout <i className="bx bx-log-out fs-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card shadow-none mb-0">
                  <div className="card-body">
                    <h6 className="mb-4">The following addresses will be used on the checkuot page by default.</h6>
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <h5 className="mb-3">Billing Addresses</h5>
                        <address>
                          Madison Riiz<br />
                          123 Happy Street<br />
                          Cape Town<br />
                          Western Cape<br />
                          8001<br />
                          South Africa
                        </address>
                      </div>
                      <div className="col-12 col-lg-6">
                        <h5 className="mb-3">Shipping Addresses</h5>
                        <address>
                          Madison Riiz<br />
                          123 Happy Street<br />
                          Cape Town<br />
                          Western Cape<br />
                          8001<br />
                          South Africa
                        </address>
                      </div>
                    </div>
                    {/*end row*/}
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

export default Address
