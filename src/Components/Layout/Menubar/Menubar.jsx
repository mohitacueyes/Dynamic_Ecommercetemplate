import React , { useState, useEffect} from 'react'

export const Menubar = () => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetch('https://ecom.iconixitsolution.com/api/home') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setMenuList(data.ResponseData.menuList))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);
  return (
  <>
  
  <div className="primary-menu">
  <nav className="navbar navbar-expand-xl w-100 navbar-dark container mb-0 p-0">
    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar">
      <div className="offcanvas-header">
        <div className="offcanvas-logo"><img src="assets/images/logo-icon.png" width={100} alt />
        </div>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body primary-menu">
        <ul className="navbar-nav justify-content-start flex-grow-1 gap-1">
        {menuList.map(item => (
          <li className="nav-item" key={item.id}>
            <a className="nav-link" href="/">{item.name}</a>
          </li>
           ))}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="tv-shows.html" data-bs-toggle="dropdown">
              Categories
            </a>
            <div className="dropdown-menu dropdown-large-menu">
              <div className="row">
                <div className="col-12 col-xl-4">
                  <h6 className="large-menu-title">Fashion</h6>
                  <ul className="list-unstyled">
                    <li><a href="javascript:;">Casual T-Shirts</a>
                    </li>
                    <li><a href="javascript:;">Formal Shirts</a>
                    </li>
                    <li><a href="javascript:;">Jackets</a>
                    </li>
                    <li><a href="javascript:;">Jeans</a>
                    </li>
                    <li><a href="javascript:;">Dresses</a>
                    </li>
                    <li><a href="javascript:;">Sneakers</a>
                    </li>
                    <li><a href="javascript:;">Belts</a>
                    </li>
                    <li><a href="javascript:;">Sports Shoes</a>
                    </li>
                  </ul>
                </div>
                {/* end col-3 */}
                <div className="col-12 col-xl-4">
                  <h6 className="large-menu-title">Electronics</h6>
                  <ul className="list-unstyled">
                    <li><a href="javascript:;">Mobiles</a>
                    </li>
                    <li><a href="javascript:;">Laptops</a>
                    </li>
                    <li><a href="javascript:;">Macbook</a>
                    </li>
                    <li><a href="javascript:;">Televisions</a>
                    </li>
                    <li><a href="javascript:;">Lighting</a>
                    </li>
                    <li><a href="javascript:;">Smart Watch</a>
                    </li>
                    <li><a href="javascript:;">Galaxy Phones</a>
                    </li>
                    <li><a href="javascript:;">PC Monitors</a>
                    </li>
                  </ul>
                </div>
                {/* end col-3 */}
                <div className="col-12 col-xl-4 d-none d-xl-block">
                  <div className="pramotion-banner1">
                    <img src="assets/images/gallery/menu-img.jpg" className="img-fluid" alt />
                  </div>
                </div>
                {/* end col-3 */}
              </div>
              {/* end row */}
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
              Account
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="account-dashboard.html">Dashboard</a>
              </li>
              <li><a className="dropdown-item" href="account-downloads.html">Downloads</a>
              </li>
              <li><a className="dropdown-item" href="account-orders.html">My Orders</a>
              </li>
              <li><a className="dropdown-item" href="account-user-details.html">User Details</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/login">Login</a></li>
              <li><a className="dropdown-item" href="/register">Register</a></li>
              <li><a className="dropdown-item" href="/resetpassword">Password</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>	
  </nav>
</div>

  </>
  )
}
