import React from 'react'

const ResetPassword = () => {
  return (
 <>
<div className="page-wrapper">
  <div className="page-content">
    <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
      <div className="container">
        <div className="page-breadcrumb d-flex align-items-center">
          <h3 className="breadcrumb-title pe-3">Reset Password</h3>
          <div className="ms-auto">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /> Home</a>
                </li>
                <li className="breadcrumb-item"><a href="javascript:;">Authentication</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Reset Password</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className>
      <div className="container">
        <div className="authentication-reset-password d-flex align-items-center justify-content-center my-5">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="card">
                <div className="row g-0">
                  <div className="col-lg-5 border-end">
                    <div className="card-body">
                      <div className="p-5">
                        <h4 className="font-weight-bold">Genrate New Password</h4>
                        <p className>We received your reset password request. Please enter your new password!</p>
                        <div className="mb-3 mt-5">
                          <label className="form-label">New Password</label>
                          <input type="text" className="form-control" placeholder="Enter new password" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Confirm Password</label>
                          <input type="text" className="form-control" placeholder="Confirm password" />
                        </div>
                        <div className="d-grid gap-2">
                          <button type="button" className="btn btn-dark">Change Password</button> <a href="/login" className="btn btn-light"><i className="bx bx-arrow-back mr-1" />Back to Login</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <img src="assets/images/login-images/forgot-password-frent-img.jpg" className="card-img login-img h-100" alt="..." />
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

export default ResetPassword
