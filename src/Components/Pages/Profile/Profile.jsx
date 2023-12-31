import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    id: null,
    full_name: '',
  });
  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      setIsLoggedIn(true);

      const apiUrl = `${process.env.REACT_APP_API}/api/userdetails`;

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
          });
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      const timeoutId = setTimeout(() => {
        window.location.href = '/login';
      },);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  if (isLoading) {

    return <h4>Loading...</h4>;
  }

  if (!isLoggedIn) {
    window.location.href = '/login';
    return null;
  }

  function handleLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return (
    <>
      <div class="wrapper">
        <div className="page-wrapper">
          <div className="page-content">
            <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
              <Container fluid className="pe-lg-5 ps-lg-5">
                <div className="page-breadcrumb d-flex align-items-center">
                  <h3 className="breadcrumb-title pe-3">Profile</h3>
                  <div className="ms-auto">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0 p-0">
                        <li className="breadcrumb-item"><a href="/"><i className="bx bx-home-alt" /> Home</a>
                        </li>
                        <li className="breadcrumb-item"><a href="javascript:;">Account</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </Container>
            </section>
            <section className="py-4">
              <div className="container">
                <h3 className="d-none">Account</h3>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="card shadow-none mb-3 mb-lg-0 border rounded-0">
                          <div className="card-body">
                            <div className="list-group list-group-flush">
                              <a href="/profile" className="list-group-item active d-flex justify-content-between align-items-center">Dashboard <i className="bx bx-tachometer fs-5" /></a>
                              <a href="/order" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i className="bx bx-cart-alt fs-5" /></a>
                              <a href="/address" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Addresses <i className="bx bx-home-smile fs-5" /></a>
                              <a href="/accountdetails" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Account Details <i className="bx bx-user-circle fs-5" /></a>
                              <a href="#" className="list-group-item d-flex justify-content-between align-items-center bg-transparent" onClick={handleLogout}>Logout <i className="bx bx-log-out fs-5" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="card shadow-none mb-0">
                          <div className="card-body">
                            <p>Hello <strong>{userData.full_name}</strong> (not <strong>{userData.full_name}?</strong>  <span onClick={handleLogout} style={{ cursor: 'pointer', color: 'blue' }}>Logout</span>)</p>
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
  )
}

export default Profile
