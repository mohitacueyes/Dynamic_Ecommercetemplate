import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
           <Container fluid className="pe-5 ps-5">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3">About Us</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:;">
                          <i className="bx bx-home-alt" /> Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript:;">Pages</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About Us
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              </Container>
          </section>
          <section className="py-0 py-lg-4">
          <Container fluid className="pe-5 ps-5">
            <h2 className="fw-bold mb-3 mt-4 aboutHead">About Us</h2>
              <h4 className="AboutStory">Our Story</h4>
              <p >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
          </Container>
          </section>
          <section className="py-4">
            <div className="container">
              <h4>Why Choose Us</h4>
              <hr />
              <div className="row row-cols-1 row-cols-lg-3">
                <div className="col d-flex">
                  <div className="card rounded-0 shadow-none w-100">
                    <div className="card-body">
                      <img
                        src="assets/images/icons/delivery.png"
                        width={60}
                        alt
                      />
                      <h5 className="my-3">FREE SHIPPING</h5>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industr
                        in some form.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="card rounded-0 shadow-none w-100">
                    <div className="card-body">
                      <img
                        src="assets/images/icons/money-bag.png"
                        width={60}
                        alt
                      />
                      <h5 className="my-3">100% MONEY BACK GUARANTEE</h5>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industr
                        in some form.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="card rounded-0 shadow-none w-100">
                    <div className="card-body">
                      <img
                        src="assets/images/icons/support.png"
                        width={60}
                        alt
                      />
                      <h5 className="my-3">ONLINE SUPPORT 24/7</h5>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industr
                        in some form.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-4">
          <Container fluid className="pe-5 ps-5">   
                       <h4>Our Top Brands</h4>
              <hr />
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-xl-5 g-4">
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/01.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/02.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/03.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/04.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/05.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/06.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/07.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/08.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/09.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/10.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/11.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/12.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/13.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/14.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border shadow-none">
                    <div className="card-body">
                      <a href="javscript:;">
                        <img
                          src="assets/images/brands/15.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
