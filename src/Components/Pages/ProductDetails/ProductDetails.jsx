import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Gallery from "react-image-gallery";
import "react-medium-image-zoom/dist/styles.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/product-detail/${id}`)
      .then((response) => response.json())
      .then((data) => setProductData(data.ResponseData[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const [selectedImage, setSelectedImage] = useState(null);

  if (!productData) {
    return <div>Loading...</div>; // Placeholder for when data is loading
  }

  // -------ADD TO CART --------//
  const addToCart = async (productId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/api/add-cart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userId,
            user_id: userId,
            product_id: productId,
            qty: "1",
            price: "1",
            save_for_later: "0",
          }),
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // -------ADD TO LIKES --------//
  const addToLikes = async (productId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/api/add-favorites`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userId,
            user_id: userId,
            product_id: productId,
            favorites: "1",
          }),
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error adding to likes:", error);
    }
  };
  const imageWidth = 500; // Set your desired width
  const imageHeight = 600;
  return (
    <>
      {/*start page wrapper */}
      <div className="page-wrapper">
        <div className="page-content">
          {/*start breadcrumb*/}
          <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <div className="container">
              <div className="page-breadcrumb d-flex align-items-center">
                <h3 className="breadcrumb-title pe-3">{productData.name}</h3>
                <div className="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 p-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:;">
                          <i className="bx bx-home-alt" /> Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript:;">Shop</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Product Details
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          {/*end breadcrumb*/}
          {/*start product detail*/}
          <section className="py-4">
            <div className="container">
              <div className="product-detail-card">
                <div className="product-detail-body">
                  <div className="row g-0">
                  <div className="col-12 col-lg-5">
        <div className="image-zoom-section">
          <div  >
          <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Product Image',
                  isFluidWidth: false, // Set to false to use fixed width
                  src: selectedImage || productData.product_image[0].image,
                  width: imageWidth,
                  height: imageHeight,
                },
                largeImage: {
                  src: selectedImage || productData.product_image[0].image,
                  width: imageWidth * 2, // Double the width for the large image (adjust as needed)
                  height: imageHeight * 2, // Double the height for the large image (adjust as needed)
                },
                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                enlargedImageContainerStyle: { background: 'rgba(0,0,0,.6)' },
              }}
            />
          </div>
          <div className="thumbnail-grid mt-3 d-flex align-items-center justify-content-between me-5 ">
            {productData.product_image.map((image, index) => (
              <img
              key={index}
              src={image.image}
              alt={`Thumbnail ${index}`}
              className={selectedImage === image.image ? "selected" : ""}
              onClick={() => setSelectedImage(image.image)}
              style={{ maxWidth: '145px', maxHeight: '145px' }} // Adjust these dimensions as needed
            />
            ))}
          </div>
        </div>
      </div>
                    <div className="col-12 col-lg-7">
                      <div className="product-info-section p-3">
                        <h3 className="mt-3 mt-lg-0 mb-0">
                          {productData.name}
                        </h3>
                        <div className="product-rating d-flex align-items-center mt-2">
                          <div className="rates cursor-pointer font-13">
                            {" "}
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-light-4" />
                          </div>
                          <div className="ms-1">
                            <p className="mb-0">(24 Ratings)</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mt-3 gap-2">
                          <h5 className="mb-0 text-decoration-line-through text-light-3 text-secondary">
                            ${productData.price}
                          </h5>
                          <h4 className="mb-0">
                            ${productData.discounted_price}
                          </h4>
                        </div>
                        <div className="mt-3">
                          <h6>Discription :</h6>
                          <p className="mb-0">{productData.shotdescription}</p>
                        </div>
                        <dl className="row mt-3">
                          {" "}
                          <dt className="col-sm-3">Product id</dt>
                          <dd className="col-sm-9">#{productData.sku}</dd>
                        </dl>
                        
                        <div className="d-flex gap-2 mt-3">
                          <a
                            href="javascript:;"
                            onClick={() => addToCart(productData.id)}
                            className="btn btn-dark btn-ecomm"
                          >
                            <i className="bx bxs-cart-add" />
                            Add to Cart
                          </a>
                          <a
                            href="javascript:;"
                            onClick={() => addToCart(productData.id)}
                            className="btn btn-dark btn-ecomm"
                          >
                            Buy now
                          </a>
                          <a
                            onClick={() => addToLikes(productData.id)}
                            className="btn-facebook btn-ecomm"
                          >
                            <i className="bx bx-heart" />
                          </a>
                        </div>
                        <hr />
                        <div className="product-sharing">
                          <div className="d-flex align-items-center gap-2 flex-wrap">
                            {/* <div className>
                        <button type="button" className="btn-social bg-twitter"><i className="bx bxl-twitter" /></button>
                      </div> */}
                            <div className>
                              <button
                                type="button"
                                className="btn-social bg-facebook"
                              >
                                <i className="bx bxl-facebook" />
                              </button>
                            </div>
                            <div className>
                              <button
                                type="button"
                                className="btn-social bg-linkedin"
                              >
                                <i className="bx bxl-linkedin" />
                              </button>
                            </div>
                            <div className>
                              <button
                                type="button"
                                className="btn-social bg-youtube"
                              >
                                <i className="bx bxl-youtube" />
                              </button>
                            </div>
                            <div className>
                              <button
                                type="button"
                                className="btn-social bg-pinterest"
                              >
                                <i className="bx bxl-pinterest" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end row*/}
                </div>
              </div>
            </div>
          </section>

          {/*end product detail*/}
          {/*start product more info*/}
          <section className="py-4">
            <div className="container">
              <div className="product-more-info">
                <ul className="nav nav-tabs mb-0" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#discription"
                    >
                      <div className="d-flex align-items-center">
                        <div className="tab-title text-uppercase fw-500">
                          Description
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#reviews"
                    >
                      <div className="d-flex align-items-center">
                        <div className="tab-title text-uppercase fw-500">
                          (3) Reviews
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="tab-content pt-3">
                  <div className="tab-pane fade" id="discription">
                    <p>{productData.shotdescription}</p>
                    <ul>
                      <li>Not just for commute</li>
                      <li>Branded tongue and cuff</li>
                      <li>Super fast and amazing</li>
                      <li>Lorem sed do eiusmod tempor</li>
                    </ul>
                    <p className="mb-1">
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid. Aliquip placeat salvia cillum iphone.
                    </p>
                    <p className="mb-1">
                      Seitan aliquip quis cardigan american apparel, butcher
                      voluptate nisi.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="more-info">
                    <p>
                      Food truck fixie locavore, accusamus mcsweeney's marfa
                      nulla single-origin coffee squid. Exercitation +1 labore
                      velit, blog sartorial PBR leggings next level wes anderson
                      artisan four loko farm-to-table craft beer twee. Qui photo
                      booth letterpress, commodo enim craft beer mlkshk aliquip
                      jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
                      organic, assumenda labore aesthetic magna delectus mollit.
                      Keytar helvetica VHS salvia yr, vero magna velit sapiente
                      labore stumptown. Vegan fanny pack odio cillum wes
                      anderson 8-bit, sustainable jean shorts beard ut DIY
                      ethical culpa terry richardson biodiesel. Art party
                      scenester stumptown, tumblr butcher vero sint qui sapiente
                      accusamus tattooed echo park.
                    </p>
                  </div>
                  
                  <div className="tab-pane fade show active" id="reviews">
                    <div className="row">
                      <div className="col col-lg-8">
                        <div className="product-review">
                          <h5 className="mb-4">3 Reviews For The Product</h5>
                          <div className="review-list">
                            <div className="d-flex align-items-start">
                              <div className="review-user">
                                <img
                                  src="../assets/images/avatars/avatar-1.png"
                                  width={65}
                                  height={65}
                                  className="rounded-circle"
                                  alt
                                />
                              </div>
                              <div className="review-content ms-3">
                                <div className="rates cursor-pointer fs-6">
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                  <h6 className="mb-0">James Caviness</h6>
                                  <p className="mb-0 ms-auto">
                                    February 16, 2021
                                  </p>
                                </div>
                                <p>
                                  Nesciunt tofu stumptown aliqua, retro synth
                                  master cleanse. Mustache cliche tempor,
                                  williamsburg carles vegan helvetica.
                                  Reprehenderit butcher retro keffiyeh
                                  dreamcatcher synth. Cosby sweater eu banh mi,
                                  qui irure terry richardson ex squid. Aliquip
                                  placeat salvia cillum iphone. Seitan aliquip
                                  quis cardigan
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div className="d-flex align-items-start">
                              <div className="review-user">
                                <img
                                  src="../assets/images/avatars/avatar-2.png"
                                  width={65}
                                  height={65}
                                  className="rounded-circle"
                                  alt
                                />
                              </div>
                              <div className="review-content ms-3">
                                <div className="rates cursor-pointer fs-6">
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                  <h6 className="mb-0">David Buckley</h6>
                                  <p className="mb-0 ms-auto">
                                    February 22, 2021
                                  </p>
                                </div>
                                <p>
                                  Nesciunt tofu stumptown aliqua, retro synth
                                  master cleanse. Mustache cliche tempor,
                                  williamsburg carles vegan helvetica.
                                  Reprehenderit butcher retro keffiyeh
                                  dreamcatcher synth. Cosby sweater eu banh mi,
                                  qui irure terry richardson ex squid. Aliquip
                                  placeat salvia cillum iphone. Seitan aliquip
                                  quis cardigan
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div className="d-flex align-items-start">
                              <div className="review-user">
                                <img
                                  src="../assets/images/avatars/avatar-3.png"
                                  width={65}
                                  height={65}
                                  className="rounded-circle"
                                  alt
                                />
                              </div>
                              <div className="review-content ms-3">
                                <div className="rates cursor-pointer fs-6">
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                  <i className="bx bxs-star text-warning" />
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                  <h6 className="mb-0">Peter Costanzo</h6>
                                  <p className="mb-0 ms-auto">
                                    February 26, 2021
                                  </p>
                                </div>
                                <p>
                                  Nesciunt tofu stumptown aliqua, retro synth
                                  master cleanse. Mustache cliche tempor,
                                  williamsburg carles vegan helvetica.
                                  Reprehenderit butcher retro keffiyeh
                                  dreamcatcher synth. Cosby sweater eu banh mi,
                                  qui irure terry richardson ex squid. Aliquip
                                  placeat salvia cillum iphone. Seitan aliquip
                                  quis cardigan
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-lg-4">
                        <div className="add-review border">
                          <div className="form-body p-3">
                            <h4 className="mb-4">Write a Review</h4>
                            <div className="mb-3">
                              <label className="form-label">Your Name</label>
                              <input
                                type="text"
                                className="form-control rounded-0"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Your Email</label>
                              <input
                                type="text"
                                className="form-control rounded-0"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Rating</label>
                              <select className="form-select rounded-0">
                                <option selected>Choose Rating</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={3}>4</option>
                                <option value={3}>5</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label className="form-label">
                                Example textarea
                              </label>
                              <textarea
                                className="form-control rounded-0"
                                rows={3}
                                defaultValue={""}
                              />
                            </div>
                            <div className="d-grid">
                              <button
                                type="button"
                                className="btn btn-dark btn-ecomm"
                              >
                                Submit a Review
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*end product more info*/}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
