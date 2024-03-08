import React , { useState, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Menubar = () => {
    const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/home`) 
      .then(response => response.json())
      .then(data => {
        setMenuList(data.ResponseData.menuList);
      })
      .catch(error => console.error('Error fetching menu:', error));
  }, []);
  // console.log(menuList);
  return (
  <>
  <div className="primary-menu">
  <Container fluid className="ps-5 pe-5">
  <nav className="navbar navbar-expand-xl w-100 navbar-dark  mb-0 p-0">
    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar">
      <div className="offcanvas-header">
        <div className="offcanvas-logo"><img src="assets/images/logo-icon.png" width={100} alt />
        </div>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body primary-menu">
        <ul className="navbar-nav justify-content-start flex-grow-1 gap-1">
        {menuList.map(item => (
          <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle-nocaret" href="tv-shows.html" data-bs-toggle="dropdown">
          {item.category_name}
          </a>
          <div className="dropdown-menu dropdown-large-menu">
            <div className="row">
              <div className="col-12 col-xl-4">
                <ul className="list-unstyled">
                {item.subcategorydata && item.subcategorydata.map(subcategory => (
                <li>
                  <a><Link to={`/productlistsideBar/${subcategory.id}`}>{subcategory.subcategory_name}</Link></a>
                </li>
                   ))} 
                </ul>
              </div>
            </div>
          </div>
        </li>
           ))}
          
        </ul>
      </div>
    </div>	
  </nav>
</Container>
</div>
  </>
  )
}
