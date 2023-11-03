import React , { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch(`https://ecom.iconixitsolution.com/api/product-detail/${id}`) // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setProductData(data.ResponseData[0]))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!productData) {
    return null; // Render nothing if data hasn't loaded yet
  }
  return (
   <>
 {/*start page wrapper */}
<div className="page-wrapper">
  <div className="page-content">
    {/*start breadcrumb*/}
    <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
      <div className="container">
        <div className="page-breadcrumb d-flex align-items-center">
          <h3 className="breadcrumb-title pe-3">Allen Solly Men's Polo T-Shirt</h3>
          <div className="ms-auto">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /> Home</a>
                </li>
                <li className="breadcrumb-item"><a href="javascript:;">Shop</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Product Details</li>
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
                  <div className="product-gallery owl-carousel owl-theme border mb-3 p-3" data-slider-id={1}>
                    <div className="item">
                      <img src="../assets/images/product-gallery/01.png" className="img-fluid" alt />
                    </div>
                    <div className="item">
                      <img src="assets/images/product-gallery/02.png" className="img-fluid" alt />
                    </div>
                    <div className="item">
                      <img src="assets/images/product-gallery/03.png" className="img-fluid" alt />
                    </div>
                    <div className="item">
                      <img src="assets/images/product-gallery/04.png" className="img-fluid" alt />
                    </div>
                  </div>
                  <div className="owl-thumbs d-flex justify-content-center" data-slider-id={1}>
                    <button className="owl-thumb-item">
                      <img src="assets/images/product-gallery/01.png" className alt />
                    </button>
                    <button className="owl-thumb-item">
                      <img src="assets/images/product-gallery/02.png" className alt />
                    </button>
                    <button className="owl-thumb-item">
                      <img src="assets/images/product-gallery/03.png" className alt />
                    </button>
                    <button className="owl-thumb-item">
                      <img src="assets/images/product-gallery/04.png" className alt />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="product-info-section p-3">
                  <h3 className="mt-3 mt-lg-0 mb-0">{productData.name}</h3>
                  <div className="product-rating d-flex align-items-center mt-2">
                    <div className="rates cursor-pointer font-13">	<i className="bx bxs-star text-warning" />
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
                    <h5 className="mb-0 text-decoration-line-through text-light-3">${ productData.price}</h5>
                    <h4 className="mb-0">${ productData.discounted_price}</h4>
                  </div>
                  <div className="mt-3">
                    <h6>Discription :</h6>
                    <p className="mb-0">Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>
                  </div>
                  <dl className="row mt-3">	<dt className="col-sm-3">Product id</dt>
                    <dd className="col-sm-9">#BHU5879</dd>	<dt className="col-sm-3">Delivery</dt>
                    <dd className="col-sm-9">Russia, USA, and Europe</dd>
                  </dl>
                  <div className="row row-cols-auto align-items-center mt-3">
                    <div className="col">
                      <label className="form-label">Quantity</label>
                      <select className="form-select form-select-sm">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col">
                      <label className="form-label">Size</label>
                      <select className="form-select form-select-sm">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XS</option>
                        <option>XL</option>
                      </select>
                    </div>
                    <div className="col">
                      <label className="form-label">Colors</label>
                      <div className="color-indigators d-flex align-items-center gap-2">
                        <div className="color-indigator-item bg-primary" />
                        <div className="color-indigator-item bg-danger" />
                        <div className="color-indigator-item bg-success" />
                        <div className="color-indigator-item bg-warning" />
                      </div>
                    </div>
                  </div>
                  {/*end row*/}
                  <div className="d-flex gap-2 mt-3">
                    <a href="javascript:;" className="btn btn-dark btn-ecomm"><i className="bx bxs-cart-add" />Add to Cart</a> 
                    <a href="javascript:;" className="btn btn-light btn-ecomm"><i className="bx bx-heart" />Add to Wishlist</a>
                  </div>
                  <hr />
                  <div className="product-sharing">
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <div className>
                        <button type="button" className="btn-social bg-twitter"><i className="bx bxl-twitter" /></button>
                      </div>
                      <div className>
                        <button type="button" className="btn-social bg-facebook"><i className="bx bxl-facebook" /></button>
                      </div>
                      <div className>
                        <button type="button" className="btn-social bg-linkedin"><i className="bx bxl-linkedin" /></button>
                      </div>
                      <div className>
                        <button type="button" className="btn-social bg-youtube"><i className="bx bxl-youtube" /></button>
                      </div>
                      <div className>
                        <button type="button" className="btn-social bg-pinterest"><i className="bx bxl-pinterest" /></button>
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
              <a className="nav-link" data-bs-toggle="tab" href="#discription">
                <div className="d-flex align-items-center">
                  <div className="tab-title text-uppercase fw-500">Description</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#more-info">
                <div className="d-flex align-items-center">
                  <div className="tab-title text-uppercase fw-500">More Info</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tags">
                <div className="d-flex align-items-center">
                  <div className="tab-title text-uppercase fw-500">Tags</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#reviews">
                <div className="d-flex align-items-center">
                  <div className="tab-title text-uppercase fw-500">(3) Reviews</div>
                </div>
              </a>
            </li>
          </ul>
          <div className="tab-content pt-3">
            <div className="tab-pane fade" id="discription">
              <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi.</p>
              <ul>
                <li>Not just for commute</li>
                <li>Branded tongue and cuff</li>
                <li>Super fast and amazing</li>
                <li>Lorem sed do eiusmod tempor</li>
              </ul>
              <p className="mb-1">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.</p>
              <p className="mb-1">Seitan aliquip quis cardigan american apparel, butcher voluptate nisi.</p>
            </div>
            <div className="tab-pane fade" id="more-info">
              <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
            </div>
            <div className="tab-pane fade" id="tags">
              <div className="tags-box d-flex flex-wrap gap-2">
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Cloths</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Electronis</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Furniture</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Sports</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Men Wear</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Women Wear</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Laptops</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Formal Shirts</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Topwear</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Headphones</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Bottom Wear</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Bags</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Sofa</a>
                <a href="javascript:;" className="btn btn-ecomm btn-outline-dark">Shoes</a>
              </div>
            </div>
            <div className="tab-pane fade show active" id="reviews">
              <div className="row">
                <div className="col col-lg-8">
                  <div className="product-review">
                    <h5 className="mb-4">3 Reviews For The Product</h5>
                    <div className="review-list">
                      <div className="d-flex align-items-start">
                        <div className="review-user">
                          <img src="assets/images/avatars/avatar-1.png" width={65} height={65} className="rounded-circle" alt />
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
                            <p className="mb-0 ms-auto">February 16, 2021</p>
                          </div>
                          <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan</p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex align-items-start">
                        <div className="review-user">
                          <img src="assets/images/avatars/avatar-2.png" width={65} height={65} className="rounded-circle" alt />
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
                            <p className="mb-0 ms-auto">February 22, 2021</p>
                          </div>
                          <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan</p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex align-items-start">
                        <div className="review-user">
                          <img src="assets/images/avatars/avatar-3.png" width={65} height={65} className="rounded-circle" alt />
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
                            <p className="mb-0 ms-auto">February 26, 2021</p>
                          </div>
                          <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan</p>
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
                        <input type="text" className="form-control rounded-0" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Your Email</label>
                        <input type="text" className="form-control rounded-0" />
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
                        <label className="form-label">Example textarea</label>
                        <textarea className="form-control rounded-0" rows={3} defaultValue={""} />
                      </div>
                      <div className="d-grid">
                        <button type="button" className="btn btn-dark btn-ecomm">Submit a Review</button>
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
    {/*start similar products*/}
     <section className="py-4">
      <div className="container">
        <div className="separator pb-4">
          <div className="line" />
          <h5 className="mb-0 fw-bold separator-title">Similar Products</h5>
          <div className="line" />
        </div>
        <div className="product-grid">
          <div className="similar-products owl-carousel owl-theme position-relative">
            <div className="item">
              <div className="card">
                <div className="position-relative overflow-hidden">
                  <div className="add-cart position-absolute top-0 end-0 mt-3 me-3">
                    <a href="javascript:;"><i className="bx bx-cart-add" /></a>
                  </div>
                  <div className="quick-view position-absolute start-0 bottom-0 end-0">
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">Quick View</a>
                  </div>
                  <a href="javascript:;">
                    <img src="assets/images/similar-products/01.png" className="img-fluid" alt="..." />
                  </a>
                </div>
                <div className="card-body px-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className>
                      <p className="mb-1 product-short-name">Topwear</p>
                      <h6 className="mb-0 fw-bold product-short-title">White Polo Shirt</h6>
                    </div>
                    <div className="icon-wishlist">
                      <a href="javascript:;"><i className="bx bx-heart" /></a>
                    </div>
                  </div>
                  <div className="cursor-pointer rating mt-2">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <div className="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                    <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">$59.00</div>
                    <div className="h6 fw-bold">$48.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="position-relative overflow-hidden">
                  <div className="add-cart position-absolute top-0 end-0 mt-3 me-3">
                    <a href="javascript:;"><i className="bx bx-cart-add" /></a>
                  </div>
                  <div className="quick-view position-absolute start-0 bottom-0 end-0">
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">Quick View</a>
                  </div>
                  <a href="javascript:;">
                    <img src="assets/images/similar-products/02.png" className="img-fluid" alt="..." />
                  </a>
                </div>
                <div className="card-body px-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className>
                      <p className="mb-1 product-short-name">Topwear</p>
                      <h6 className="mb-0 fw-bold product-short-title">White Polo Shirt</h6>
                    </div>
                    <div className="icon-wishlist">
                      <a href="javascript:;"><i className="bx bx-heart" /></a>
                    </div>
                  </div>
                  <div className="cursor-pointer rating mt-2">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <div className="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                    <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">$59.00</div>
                    <div className="h6 fw-bold">$48.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="position-relative overflow-hidden">
                  <div className="add-cart position-absolute top-0 end-0 mt-3 me-3">
                    <a href="javascript:;"><i className="bx bx-cart-add" /></a>
                  </div>
                  <div className="quick-view position-absolute start-0 bottom-0 end-0">
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">Quick View</a>
                  </div>
                  <a href="javascript:;">
                    <img src="assets/images/similar-products/03.png" className="img-fluid" alt="..." />
                  </a>
                </div>
                <div className="card-body px-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className>
                      <p className="mb-1 product-short-name">Topwear</p>
                      <h6 className="mb-0 fw-bold product-short-title">White Polo Shirt</h6>
                    </div>
                    <div className="icon-wishlist">
                      <a href="javascript:;"><i className="bx bx-heart" /></a>
                    </div>
                  </div>
                  <div className="cursor-pointer rating mt-2">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <div className="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                    <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">$59.00</div>
                    <div className="h6 fw-bold">$48.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="position-relative overflow-hidden">
                  <div className="add-cart position-absolute top-0 end-0 mt-3 me-3">
                    <a href="javascript:;"><i className="bx bx-cart-add" /></a>
                  </div>
                  <div className="quick-view position-absolute start-0 bottom-0 end-0">
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">Quick View</a>
                  </div>
                  <a href="javascript:;">
                    <img src="assets/images/similar-products/04.png" className="img-fluid" alt="..." />
                  </a>
                </div>
                <div className="card-body px-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className>
                      <p className="mb-1 product-short-name">Topwear</p>
                      <h6 className="mb-0 fw-bold product-short-title">White Polo Shirt</h6>
                    </div>
                    <div className="icon-wishlist">
                      <a href="javascript:;"><i className="bx bx-heart" /></a>
                    </div>
                  </div>
                  <div className="cursor-pointer rating mt-2">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <div className="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                    <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">$59.00</div>
                    <div className="h6 fw-bold">$48.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="position-relative overflow-hidden">
                  <div className="add-cart position-absolute top-0 end-0 mt-3 me-3">
                    <a href="javascript:;"><i className="bx bx-cart-add" /></a>
                  </div>
                  <div className="quick-view position-absolute start-0 bottom-0 end-0">
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">Quick View</a>
                  </div>
                  <a href="javascript:;">
                    <img src="assets/images/similar-products/05.png" className="img-fluid" alt="..." />
                  </a>
                </div>
                <div className="card-body px-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className>
                      <p className="mb-1 product-short-name">Topwear</p>
                      <h6 className="mb-0 fw-bold product-short-title">White Polo Shirt</h6>
                    </div>
                    <div className="icon-wishlist">
                      <a href="javascript:;"><i className="bx bx-heart" /></a>
                    </div>
                  </div>
                  <div className="cursor-pointer rating mt-2">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <div className="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                    <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">$59.00</div>
                    <div className="h6 fw-bold">$48.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="position-relative overflow-hidden">
                  <div className="add-cart position-absolute top-0 end-0 mt-3 me-3">
                    <a href="javascript:;"><i className="bx bx-cart-add" /></a>
                  </div>
                  <div className="quick-view position-absolute start-0 bottom-0 end-0">
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">Quick View</a>
                  </div>
                  <a href="javascript:;">
                    <img src="assets/images/similar-products/06.png" className="img-fluid" alt="..." />
                  </a>
                </div>
                <div className="card-body px-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className>
                      <p className="mb-1 product-short-name">Topwear</p>
                      <h6 className="mb-0 fw-bold product-short-title">White Polo Shirt</h6>
                    </div>
                    <div className="icon-wishlist">
                      <a href="javascript:;"><i className="bx bx-heart" /></a>
                    </div>
                  </div>
                  <div className="cursor-pointer rating mt-2">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <div className="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                    <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">$59.00</div>
                    <div className="h6 fw-bold">$48.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="position-relative overflow-hidden">
                  <div className="add-cart position-absolute top-0 end-0 mt-3 me-3">
                    <a href="javascript:;"><i className="bx bx-cart-add" /></a>
                  </div>
                  <div className="quick-view position-absolute start-0 bottom-0 end-0">
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">Quick View</a>
                  </div>
                  <a href="javascript:;">
                    <img src="assets/images/similar-products/07.png" className="img-fluid" alt="..." />
                  </a>
                </div>
                <div className="card-body px-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className>
                      <p className="mb-1 product-short-name">Topwear</p>
                      <h6 className="mb-0 fw-bold product-short-title">White Polo Shirt</h6>
                    </div>
                    <div className="icon-wishlist">
                      <a href="javascript:;"><i className="bx bx-heart" /></a>
                    </div>
                  </div>
                  <div className="cursor-pointer rating mt-2">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                  </div>
                  <div className="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                    <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">$59.00</div>
                    <div className="h6 fw-bold">$48.00</div>
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
  )
}

export default ProductDetails
