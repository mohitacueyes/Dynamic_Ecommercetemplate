import React from 'react'

const PaymentDetail = () => {
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
                    <div className="list-group list-group-flush">	<a href="account-dashboard.html" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Dashboard <i className="bx bx-tachometer fs-5" /></a>
                      <a href="account-orders.html" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i className="bx bx-cart-alt fs-5" /></a>
                      <a href="account-downloads.html" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Downloads <i className="bx bx-download fs-5" /></a>
                      <a href="account-addresses.html" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Addresses <i className="bx bx-home-smile fs-5" /></a>
                      <a href="account-payment-methods.html" className="list-group-item active d-flex justify-content-between align-items-center">Payment Methods <i className="bx bx-credit-card fs-5" /></a>
                      <a href="account-user-details.html" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Account Details <i className="bx bx-user-circle fs-5" /></a>
                      <a href="#" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Logout <i className="bx bx-log-out fs-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card shadow-none mb-0">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="table-light">
                          <tr>
                            <th>Method</th>
                            <th>Expires</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Visa ending in 1111</td>
                            <td>11/12</td>
                            <td>
                              <div className="d-flex gap-2">	<a href="javascript:;" className="btn btn-dark btn-sm rounded-0">Delete</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Visa ending in 4242</td>
                            <td>11/12</td>
                            <td>
                              <div className="d-flex gap-2"> <a href="javascript:;" className="btn btn-dark btn-sm rounded-0">Delete</a>
                                <a href="javascript:;" className="btn btn-dark btn-sm rounded-0">Make Default</a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div> <a href="javascript:;" className="btn btn-dark rounded-0">Add Payment Method</a>
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

export default PaymentDetail