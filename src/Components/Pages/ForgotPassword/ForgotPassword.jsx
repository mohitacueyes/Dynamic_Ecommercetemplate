import React from 'react'

const ForgotPassword = () => {
  return (
 <>
<div className="page-wrapper">
  <div className="page-content">
    <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
      <div className="container">
        <div className="page-breadcrumb d-flex align-items-center">
          <h3 className="breadcrumb-title pe-3">Forgot Password</h3>
          <div className="ms-auto">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /> Home</a>
                </li>
                <li className="breadcrumb-item"><a href="javascript:;">Authentication</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Forgot Password</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className>
      <div className="container">
        <div className="authentication-forgot d-flex align-items-center justify-content-center my-5">
          <div className="card forgot-box">
            <div className="card-body">
              <div className="p-4 rounded  border">
                <div className="text-center">
                  <img src="assets/images/icons/forgot-2.png" width={120} alt />
                </div>
                <h4 className="mt-5 font-weight-bold">Forgot Password?</h4>
                <p className>Enter your registered email ID to reset the password</p>
                <div className="my-4">
                  <label className="form-label">Email id</label>
                  <input type="text" className="form-control form-control-lg" placeholder="example@user.com" />
                </div>
                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-dark btn-lg">Send</button> <a href="/login" className="btn btn-light btn-lg"><i className="bx bx-arrow-back me-1" />Back to Login</a>
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

export default ForgotPassword
