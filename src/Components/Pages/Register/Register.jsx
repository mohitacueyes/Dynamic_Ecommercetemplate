import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [full_name, setFullName] = useState('');
  const [deviceToken, setDeviceToken] = useState('olkjkfdf');
  const [deviceType, setDeviceType] = useState('Android');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ecom.iconixitsolution.com/api/sign-up', {
        method: 'POST',
        headers: {
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          
          email: email,
          full_name: full_name,
          phone : phone,
          password: password,
          device_token: deviceToken,
          device_type: deviceType,
          login_type: 'phone',
        }),
      });

      const data = await response.json();

      if ( data.ResponseData) {
        // Login successful, store the token in local storage
        // setAuthToken(data.ResponseData.token);
        // Handle further actions like redirecting the user to another page
        console.log('Registrtion successful');
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


  return (
    
   <>
 {/*start page wrapper */}
<div className="page-wrapper">
  <div className="page-content">
    {/*start breadcrumb*/}
    <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
      <div className="container">
        <div className="page-breadcrumb d-flex align-items-center">
          <h3 className="breadcrumb-title pe-3">Sign Up</h3>
          <div className="ms-auto">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /> Home</a>
                </li>
                <li className="breadcrumb-item"><a href="javascript:;">Authentication</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Sign Up</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    {/*end breadcrumb*/}
    {/*start shop cart*/}
    <section className="py-0 py-lg-5">
      <div className="container">
        <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5">
          <div className="row row-cols-1 row-cols-lg-1 row-cols-xl-2">
            <div className="col mx-auto">
              <div className="card mb-0">
                <div className="card-body">
                  <div className="border p-4 rounded">
                    <div className="text-center">
                      <h3 className>Sign Up</h3>
                      <p>Already have an account? <a href="/login">Sign in here</a>
                      </p>
                    </div>
                    <div className="d-grid">
                      <a className="btn my-4 shadow-sm btn-white" href="javascript:;"> <span className="d-flex justify-content-center align-items-center">
                          <img className="me-2" src="assets/images/icons/search.svg" width={16} alt="Image Description" />
                          <span>Sign Up with Google</span>
                        </span>
                      </a> <a href="javascript:;" className="btn btn-white"><i className="bx bxl-facebook" />Sign Up with Facebook</a>
                    </div>
                    <div className="login-separater text-center mb-4"> <span>OR SIGN UP WITH EMAIL</span>
                      <hr />
                    </div>
                    <div className="form-body">
                      <form className="row g-3" onSubmit={handleRegister}>
                        <div className="col-12">
                          <label htmlFor="inputFirstName" className="form-label">Full Name</label>
                          <input type="text" className="form-control" id="inputFirstName" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} required />
                        </div>
                        <div className="col-12">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required className="form-control" placeholder="" />
                              </div>
                        <div className="col-12">
                          <label htmlFor="inputEmailAddress" className="form-label">Email Address</label>
                          <input type="email" className="form-control" id="inputEmailAddress" placeholder="example@user.com" onChange={(e) => setEmail(e.target.value)} required  />
                        </div>
                        <div className="col-12">
                          <label htmlFor="inputChoosePassword" className="form-label">Password</label>
                          <div className="input-group" id="show_hide_password">
                            <input type="password" className="form-control border-end-0" id="inputChoosePassword" onChange={(e) => setPassword(e.target.value)} required placeholder="Enter Password" /> <a href="javascript:;" className="input-group-text bg-transparent"><i className="bx bx-hide" /></a>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="inputSelectCountry" className="form-label">Country</label>
                          <select className="form-select" id="inputSelectCountry" aria-label="Default select example">
                            <option selected>India</option>
                            <option value={1}>United Kingdom</option>
                            <option value={2}>America</option>
                            <option value={3}>Dubai</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">I read and agree to Terms &amp; Conditions</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button type="submit" className="btn btn-dark"><i className="bx bx-user" />Sign up</button>
                          </div>
                        </div>
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

export default Register
