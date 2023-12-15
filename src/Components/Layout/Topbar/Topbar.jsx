import React from 'react';
import { Container } from 'react-bootstrap';

export const Topbar = () => {
  return (
    <>
      <div class="header-wrapper">
        <div className="top-menu">
          <Container fluid className="ps-5 pe-5">
            <nav className="navbar navbar-expand">
              <div className="shiping-title">Welcome to our Shopingo store!</div>
              <ul className="navbar-nav ms-auto d-none d-lg-flex">
                <li className="nav-item"><a className="nav-link" href="order_track">Track Order</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="blog">Blog</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="support">Help &amp; FAQs</a>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      </div>
    </>
  )
}
