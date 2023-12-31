import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from 'react-facebook-login';
import { Container } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [deviceToken, setDeviceToken] = useState("olkjkfdf");
  const [deviceType, setDeviceType] = useState("Android");
  const [error, setError] = useState("");

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

//--------------facebook---------------//
const responseFacebook = (response) => {
  console.log("Facebook Sign-In response:", response);
  if (response && response.accessToken) {
    console.log("Facebook Sign-In successful!");
    console.log("User details:", response);
  } else {
    console.error("Facebook Sign-In failed or insufficient data received.");
  }
};




  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          email: email,
          phone: phone,
          password: password,
          device_token: deviceToken,
          device_type: deviceType,
          login_type: "phone",
        }),
      });

      const data = await response.json();

      if (data.ResponseCode === 1 && data.ResponseData.token) {
        const userId = data.ResponseData.user.id;
        setAuthToken(data.ResponseData.token);
        localStorage.setItem("userId", userId);
        console.log("Login successful");
        window.location.href = "/";
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  const setAuthToken = (token) => {
    localStorage.setItem("token", token);
  };

  const responseGoogle = (response) => {
    console.log("Google Sign-In response:", response);

    if (response && response.profileObj) {
      console.log("Google Sign-In successful!");
      console.log("User details:", response.profileObj);

    } else {
      console.error("Google Sign-In failed or insufficient data received.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
          <Container fluid className="pe-lg-5 ps-lg-5">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3">Sign in</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item">
                        <a href="/">
                          <i className="bx bx-home-alt" /> Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript:;">Authentication</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Sign In
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </Container>
          </section>
          <section className>
            <div className="container">
              <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                  <div className="col mx-auto">
                    <div className="card">
                      <div className="card-body">
                        <div className="border p-4 rounded">
                          <div className="text-center">
                            <h3 className>Sign in</h3>
                            <p>
                              Don't have an account yet?{" "}
                              <a href="/register">Sign up here</a>
                            </p>
                          </div>
                          {/* <div className="d-grid">
                            <button
                              onClick={() => login()}
                              className="btn btn-transparent"
                            >
                              <i className="bx bxl-google" />
                                 Login with Google{" "}
                            </button>

                            <span className="d-flex justify-content-center align-items-center"></span>
                            <a href="javascript:;" className="btn btn-white">
                              <i className="bx bxl-facebook" />
                              Sign in with Facebook
                            </a>
                          </div> */}
                          <div className="login-separater text-center mb-4">
                            {" "}
                            <span>OR SIGN IN WITH EMAIL</span>
                            <hr />
                          </div>
                          <div className="form-body">
                            <form className="row g-3" onSubmit={handleLogin}>
                              <div className="col-12">
                                <label
                                  htmlFor="phone"
                                  className="form-label"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="number"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  required
                                  className="form-control"
                                  id="phone"
                                  placeholder="Enter Phone Number"
                                />
                              </div>
                              <div className="col-12">
                                <label
                                  htmlFor="inputChoosePassword"
                                  className="form-label"
                                >
                                  Enter Password
                                </label>
                                <div
                                  className="input-group"
                                  id="show_hide_password"
                                >
                                  <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                    required
                                    className="form-control border-end-0"
                                    id="inputChoosePassword"
                                    placeholder="Enter Password"
                                  />
                                  <a
                                    className="input-group-text bg-transparent"
                                    onClick={togglePasswordVisibility}
                                  >
                                    <i className={showPassword ? 'bx bx-show' : 'bx bx-hide'}  />
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckChecked"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexSwitchCheckChecked"
                                  >
                                    Remember Me
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 text-end">
                                {" "}
                                <a href="/forgotpassword">Forgot Password ?</a>
                              </div>
                              <div className="col-12">
                                <div className="d-grid">
                                  <button
                                    type="submit"
                                    className="btn btn-dark"
                                  >
                                    <i className="bx bxs-lock-open" />
                                    Sign in
                                  </button>
                                </div>
                              </div>
                              {error && (
                                <div className="error-message">{error}</div>
                              )}
                            </form>
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

export default Login;
