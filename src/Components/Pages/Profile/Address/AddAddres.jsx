import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddAddres() {
  const user_id = localStorage.getItem("userId");
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
  const [CountryData, setCountryData] = useState([]);
  const [StateData, setStateData] = useState([]);
  const [CityData, setCityData] = useState([]);
  const [formData, setFormData] = useState({
    user_id: user_id,
    type_id: "",
    full_name: "",
    country_id: "",
    landmark: "",
    city_id: " ",
    state_id: " ",
    pincode: "",
    mobile: "",
    alternate_mobile: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/country-list`)
      .then((response) => {
        setCountryData(response.data.ResponseData);
      })
      .catch((error) => {

        console.error("Error fetching category data:", error);
      });

  

    axios
      .get(`${process.env.REACT_APP_API}/api/state-list`)
      .then((response) => {
        setStateData(response.data.ResponseData);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);

        console.error('Error fetching country data:', error);

      });
  }, []);

  useEffect(() => {
    if (formData.country_id) {
      axios
        .get(`${process.env.REACT_APP_API}/api/state-list-countrywise/${formData.country_id}`)
        .then((response) => {
          setStateData(response.data.ResponseData);
        })
        .catch((error) => {
          console.error('Error fetching state data:', error);
        });
    }
  }, [formData.country_id]);
  function handleChange(event) {
    const { name, value } = event.target;
  
    if (name === "state_id") {
      const stateId = StateData.find((state) => state.statename === value)?.stateid;
  
      if (stateId) {
        axios
          .post(`${process.env.REACT_APP_API}/api/city-list-statewise`, {
            state_id: stateId,
          })
          .then((response) => {
            setCityData(response.data.ResponseData);
          })
          .catch((error) => {
            console.error("Error fetching city data:", error);
          });
      }
    }
  
    if (name === "state_id") {
      const stateId = StateData.find((state) => state.statename === value)?.stateid;
  
      if (stateId) {
        // Set state ID instead of state name in the formData state
        setFormData({
          ...formData,
          state_id: stateId,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }
  
  function handleSaveAddress() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    fetch(`${process.env.REACT_APP_API}/api/add-address`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
      
        console.log(data);
        navigate("/address");
       
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <div className="container">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3">My Address</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item">
                        <a href="/">
                          <i className="bx bx-home-alt" /> Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript:;">Account</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        My Address
                      </li>
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
                            <a
                              href="/profile"
                              className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
                            >
                              Dashboard <i className="bx bx-tachometer fs-5" />
                            </a>
                            <a
                              href="/order"
                              className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
                            >
                              Orders <i className="bx bx-cart-alt fs-5" />
                            </a>
                            <a
                              href="/address"
                              className="list-group-item active d-flex justify-content-between align-items-center "
                            >
                              Addresses <i className="bx bx-home-smile fs-5" />
                            </a>
                            <a
                              href="/paymentdetail"
                              className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
                            >
                              Payment Methods{" "}
                              <i className="bx bx-credit-card fs-5" />
                            </a>
                            <a
                              href="/accountdetails"
                              className="list-group-item  d-flex justify-content-between align-items-center bg-transparent"
                            >
                              Account Details{" "}
                              <i className="bx bx-user-circle fs-5" />
                            </a>
                            <a
                              href="#"
                              className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
                              onClick={handleLogout}
                            >
                              Logout <i className="bx bx-log-out fs-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="card shadow-none mb-0 border">
                        <div className="card-body ">
                          <form className="row g-3">
                            <div className="col-12">
                              <label className="form-label mt-1">Full Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="full_name"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <label className="form-label ">Phone Number</label>
                                  <input
                                    type="tel"
                                    maxlength="10"
                                    className="form-control"
                                    name="mobile"
                                    style={{ width: "95%" }}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="col-6">
                                  <label className="form-label">
                                    Alternate Number
                                  </label>
                                  <input
                                    type="tel"
                                    maxlength="10"
                                    className="form-control"
                                    style={{ width: "95%" }}
                                    name="alternate_mobile"
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <label className="form-label">
                                Street Address
                              </label>
                              <textarea
                                type="text"
                                className="form-control"
                                name="address"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-12">
                              <label className="form-label">Land Mark</label>
                              <input
                                type="text"
                                className="form-control"
                                name="landmark"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="d-flex justify-content-between w-100 align-items-center gap-3">
                              <div className="col-6">
                                <label className="form-label">Country</label>
                                <select
                                  name="country_id"
                                  id="templateId"
                                  class="form-control "
                                  style={{ width: "95%" }}
                                  onChange={(e) => handleChange(e)}
                                >
                                  <option value={formData.country_id ? "" : ""}>
                                    --select --
                                  </option>
                                  {CountryData &&
                                    CountryData.map((v, index) => {
                                      return (
                                        <option value={v.id} key={index.id}>
                                          {v.countryname}
                                        </option>
                                      );
                                    })}
                                </select>
                              </div>
                              <div className="col-6">
                                <label className="form-label">State</label>
                                <select
                                  name="state_id"
                                  id="templateId"
                                  className="form-control"
                                  style={{ width: "95%" }}
                                  onChange={(e) => handleChange(e)}
                                >
                                  <option value={formData.state_id ? "" : ""}>
                                    --select --
                                  </option>
                                  {StateData &&
                                    StateData.map((v, index) => {
                                      return (
                                        <option value={v.state_id} key={v.state_id}>
                                          {v.statename}
                                        </option>
                                      );
                                    })}
                                </select>
                              </div>

                            </div>
                            <div className="d-flex justify-content-between w-100 align-items-center gap-3">
                              <div className="col-6">
                                <label className="form-label">City</label>
                                <select
                                  name="city_id"
                                  id="templateId"
                                  class="form-control"
                                  style={{ width: "95%" }}
                                  onChange={(e) => handleChange(e)}
                                >
                                  <option value={formData.city_id ? "" : ""}>
                                    --select --
                                  </option>
                                  {CityData &&
                                    CityData.map((v, index) => {
                                      return (
                                        <option value={v.id} key={index.id}>
                                          {v.cityname}
                                        </option>
                                      );
                                    })}
                                </select>
                              </div>
                              <div className="col-6">
                                <label className="form-label">Pincode</label>
                                <input
                                  type="number"
                                  className="form-control"
                                  style={{ width: "95%" }}
                                  name="pincode"
                                  onChange={handleChange}
                                />
                              </div>

                            </div>
                            <div className="col-12">

                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="type_id" id="inlineRadio1" value="1" onChange={handleChange} />
                                <label class="form-check-label" for="inlineRadio1">Home Address</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="type_id" id="inlineRadio2" value="2" onChange={handleChange} />
                                <label class="form-check-label" for="inlineRadio2">Office Address</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="type_id" id="inlineRadio3" value="3" onChange={handleChange} />
                                <label class="form-check-label" for="inlineRadio3">Other Address</label>
                              </div>

                            </div>
                            <div className="col-12">
                              <button
                                type="button"
                                className="btn btn-dark btn-ecomm"
                                onClick={handleSaveAddress}
                              >
                                Save Address
                              </button>
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
  );
}

export default AddAddres;
