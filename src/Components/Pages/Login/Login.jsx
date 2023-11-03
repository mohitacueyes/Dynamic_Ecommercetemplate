import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../Auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceToken, setDeviceToken] = useState('olkjkfdf');
  const [deviceType, setDeviceType] = useState('Android');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ecom.iconixitsolution.com/api/login', {
        method: 'POST',
        headers: {
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          
          email: email,
          phone : phone,
          password: password,
          device_token: deviceToken,
          device_type: deviceType,
          login_type: 'phone',
        }),
      });

      const data = await response.json();

      if (data.ResponseCode === 1 && data.ResponseData.token) {
        // Login successful, store the token in local storage
        setAuthToken(data.ResponseData.token);
        // Handle further actions like redirecting the user to another page
        console.log('Login successful');
        navigate('/');
        
      } else {
        // Login failed, handle error (show error message to user, etc.)
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  const setAuthToken = (token) => {
    localStorage.setItem('token', token);
  };
  return (
    <>
      {/*start page wrapper */}
      <div className="page-wrapper">
        <div className="page-content">
          {/*start breadcrumb*/}
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <div className="container">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3">Sign in</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /> Home</a>
                      </li>
                      <li className="breadcrumb-item"><a href="javascript:;">Authentication</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">Sign In</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          {/*end breadcrumb*/}
          {/*start shop cart*/}
          <section className>
            <div className="container">
              <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5">
                <div className="row row-cols-1 row-cols-xl-2">
                  <div className="col mx-auto">
                    <div className="card">
                      <div className="card-body">
                        <div className="border p-4 rounded">
                          <div className="text-center">
                            <h3 className>Sign in</h3>
                            <p>Don't have an account yet? <a href="/register">Sign up here</a>
                            </p>
                          </div>
                          <div className="d-grid">
                            <a className="btn my-4 shadow-sm btn-white" href="javascript:;"> <span className="d-flex justify-content-center align-items-center">
                              <img className="me-2" src="assets/images/icons/search.svg" width={16} alt="Image Description" />
                              <span>Sign in with Google</span>
                            </span>
                            </a> <a href="javascript:;" className="btn btn-white"><i className="bx bxl-facebook" />Sign in with Facebook</a>
                          </div>
                          <div className="login-separater text-center mb-4"> <span>OR SIGN IN WITH EMAIL</span>
                            <hr />
                          </div>
                          <div className="form-body">
                            <form className="row g-3" onSubmit={handleLogin}>
                              <div className="col-12">
                                <label htmlFor="inputEmailAddress" className="form-label">Phone Number</label>
                                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required className="form-control" id="inputEmailAddress" placeholder="Email Address" />
                              </div>
                              <div className="col-12">
                                <label htmlFor="inputChoosePassword" className="form-label">Enter Password</label>
                                <div className="input-group" id="show_hide_password">
                                  <input type="password"
                                  value={password} onChange={(e) => setPassword(e.target.value)} required
                                    className="form-control border-end-0"
                                    id="inputChoosePassword"
                                    // defaultValue={12345678}
                                    placeholder="Enter Password" />
                                  <a href="javascript:;" className="input-group-text bg-transparent"><i className="bx bx-hide" /></a>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-check form-switch">
                                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                                </div>
                              </div>
                              <div className="col-md-6 text-end">	<a href="/forgotpassword">Forgot Password ?</a>
                              </div>
                              <div className="col-12">
                                <div className="d-grid">
                                  <button type="submit" className="btn btn-dark"><i className="bx bxs-lock-open" />Sign in</button>
                                </div>
                              </div>
                              {error && <div className="error-message">{error}</div>}
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
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

export default Login