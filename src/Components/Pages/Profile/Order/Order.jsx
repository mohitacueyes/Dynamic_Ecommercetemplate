import React, { useState, useEffect } from "react";

const Order = ({ user_id }) => {
  function handleLogout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
  const [orders, setorders] = useState([]);

  useEffect(() => {
    const user_id = localStorage.getItem("userId");
    const fetchAddressList = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API}/api/Orders-list`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
          }),
        }
      );

      const data = await response.json();

      if (data.ResponseCode === 1) {
        setorders(data.ResponseData);
      } else {
        console.error("Error fetching address list:", data.ResponseText);
      }
    };

    fetchAddressList();
  }, [user_id]);

   const formatDate = (dateString) => {
    const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <div class="wrapper">
        <div className="page-wrapper">
          <div className="page-content">
            <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
              <div className="container">
                <div className="page-breadcrumb d-flex align-items-center">
                  <h3 className="breadcrumb-title pe-3">My Orders</h3>
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
                          My Orders
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
                                className="list-group-item  d-flex justify-content-between align-items-center bg-transparent"
                              >
                                Dashboard{" "}
                                <i className="bx bx-tachometer fs-5" />
                              </a>
                              <a
                                href="/order"
                                className="list-group-item active d-flex justify-content-between align-items-center "
                              >
                                Orders{" "}
                                <i className="bx bx-cart-alt fs-5 fs-5" />
                              </a>
                              {/* <a href="/downloadprofile" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Downloads <i className="bx bx-download fs-5" /></a> */}
                              <a
                                href="/address"
                                className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
                              >
                                Addresses{" "}
                                <i className="bx bx-home-smile fs-5" />
                              </a>
                              {/* <a href="/paymentdetail" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Payment Methods <i className="bx bx-credit-card fs-5" /></a> */}
                              <a
                                href="/accountdetails"
                                className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
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
                        <div className="card shadow-none mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table">
                                <thead className="table-light">
                                  <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                {orders.length > 0 ? (
                                  orders.map((address) => (
                                    <tbody>
                                      <tr>
                                        <td>#{address.ordernumber}</td>
                                        <td>{formatDate(address.date_added)}</td>
                                        <td>
                                          <div className="badge rounded-pill bg-success w-100">
                                            {address.status}
                                          </div>
                                        </td>
                                        <td>₹{address.total}</td>
                                        <td>
                                          <div className="d-flex gap-2">
                                            {" "}
                                            <a
                                              href="javascript:;"
                                              className="btn btn-dark btn-sm rounded-0"
                                            >
                                              View
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  ))
                                ) : (
                                  <p>No orders found.</p>
                                )}
                              </table>
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
      </div>
    </>
  );
};

export default Order;
